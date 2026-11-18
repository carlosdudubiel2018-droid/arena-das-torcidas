// Geometria em pixels, compartilhada pelos enquadramentos do mapa.
(function(){
  function focusOffset(width,height,area,markerOffset=[0,0]){
    return [(area.left+area.right)/2-width/2-markerOffset[0],(area.top+area.bottom)/2-height/2-markerOffset[1]];
  }
  // Maximum reserved future plot: 900 × 700 m, plus 300 m between plots.
  // Keep this contract when adding Mega Arena items; increase it before adding larger items.
  const MAX_STADIUM_PLOT={width:900,height:700,gap:300};
  function cityOffsets(count,spacing=320){
    if(count===1)return [[0,0]];
    if(count===2)return [[-spacing/2,0],[spacing/2,0]];
    const radius=spacing/(2*Math.sin(Math.PI/count));
    return Array.from({length:count},(_,i)=>{const a=i*2*Math.PI/count-Math.PI/2;return [radius*Math.cos(a),radius*Math.sin(a)];});
  }
  function cityPlots(anchor,count){
    return cityOffsets(count,MAX_STADIUM_PLOT.width+MAX_STADIUM_PLOT.gap).map(([x,y])=>[
      anchor[0]+x/(111320*Math.cos(anchor[1]*Math.PI/180)),anchor[1]+y/111320
    ]);
  }
  function preferLight(device){return !!(device.saveData||(device.memory&&device.memory<=2)||(device.cores&&device.cores<=4));}
  function zoomCamera(center,zoom,step,minZoom,maxZoom){return {center:[...center],zoom:Math.max(minZoom,Math.min(maxZoom,zoom+step)),padding:{top:0,bottom:0,left:0,right:0}};}
  function clusterPoints(points,distance=78){
    const groups=[];
    // Limite de extensão evita uma corrente de cidades juntar Sul e Sudeste inteiros.
    for(const p of points){
      let best=null,nearest=distance;
      for(const g of groups){
        const center={x:g.reduce((n,q)=>n+q.x,0)/g.length,y:g.reduce((n,q)=>n+q.y,0)/g.length};
        const d=Math.hypot(p.x-center.x,p.y-center.y);
        if(d<nearest&&g.every(q=>Math.hypot(p.x-q.x,p.y-q.y)<distance*1.3)){best=g;nearest=d;}
      }
      if(best)best.push(p);else groups.push([p]);
    }
    return groups;
  }
  function clusterSize(count){return Math.min(78,50+Math.round(Math.log2(Math.max(1,count))*5));}
  function spreadClusters(items,area){
    const out=items.map(p=>({...p,dx:0,dy:0}));
    const clamp=p=>{if(area){const half=p.size/2;p.dx=Math.max(area.left+half-p.x,Math.min(area.right-half-p.x,p.dx));p.dy=Math.max(area.top+half-p.y,Math.min(area.bottom-half-p.y,p.dy));}};
    out.forEach(clamp);
    for(let pass=0;pass<24;pass++)for(let i=0;i<out.length;i++)for(let j=0;j<i;j++){
      const a=out[i],b=out[j],x=a.x+a.dx-b.x-b.dx,y=a.y+a.dy-b.y-b.dy;
      const d=Math.hypot(x,y),minimum=(a.size+b.size)/2+7;
      if(d<minimum){const move=(minimum-d)/2,ux=d?x/d:1,uy=d?y/d:0;a.dx+=ux*move;a.dy+=uy*move;b.dx-=ux*move;b.dy-=uy*move;clamp(a);clamp(b);}
    }
    return out;
  }
  // A group represents the most advanced real club, never an invented stadium.
  function spreadGroupCards(items,area){
    const out=items.map(p=>({...p,dx:0,dy:0,width:p.width||p.size+14,height:p.height||p.size*.94+30}));
    const clamp=p=>{if(!area)return;p.dx=Math.max(area.left+p.width/2-p.x,Math.min(area.right-p.width/2-p.x,p.dx));p.dy=Math.max(area.top+p.height/2-p.y,Math.min(area.bottom-p.height/2-p.y,p.dy));};
    out.forEach(clamp);
    for(let pass=0;pass<80;pass++)for(let i=0;i<out.length;i++)for(let j=0;j<i;j++){
      const a=out[i],b=out[j],x=a.x+a.dx-b.x-b.dx,y=a.y+a.dy-b.y-b.dy;
      const ox=(a.width+b.width)/2+8-Math.abs(x),oy=(a.height+b.height)/2+8-Math.abs(y);
      if(ox<=0||oy<=0)continue;
      if(ox<oy){const m=(ox+.1)/2*(x<0?-1:1);a.dx+=m;b.dx-=m;}else{const m=(oy+.1)/2*(y<0?-1:1);a.dy+=m;b.dy-=m;}
      clamp(a);clamp(b);
    }
    return out;
  }
  const groupLevel=teams=>Math.max(0,...teams.map(t=>Math.max(0,Math.min(4,Number(t.level)||0))));
  function landIndex(features){return features.flatMap(f=>(f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.type==='MultiPolygon'?f.geometry.coordinates:[]).map(rings=>{const xs=rings[0].map(p=>p[0]),ys=rings[0].map(p=>p[1]);return {rings,bounds:[Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys)]};}));}
  function inRing([x,y],ring){let inside=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const a=ring[i],b=ring[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;}
  function onLand(p,land){return land.some(({rings,bounds:b})=>p[0]>=b[0]&&p[0]<=b[2]&&p[1]>=b[1]&&p[1]<=b[3]&&inRing(p,rings[0])&&!rings.slice(1).some(r=>inRing(p,r)));}
  function inlandAnchor(points,land,margin=[0,0]){
    const mean=[points.reduce((s,p)=>s+p[0],0)/points.length,points.reduce((s,p)=>s+p[1],0)/points.length];
    if(!land.length)return mean;
    const safe=p=>[-1,0,1].every(x=>[-1,0,1].every(y=>onLand([p[0]+x*margin[0],p[1]+y*margin[1]],land)));
    if(safe(mean))return mean;
    for(let r=.2;r<=12;r+=.2)for(let i=0;i<32;i++){const a=i*Math.PI/16,p=[mean[0]+Math.cos(a)*r,mean[1]+Math.sin(a)*r];if(safe(p))return p;}
    // Narrow islands may not contain the whole marker. Keep its anchor on land.
    return points.filter(p=>onLand(p,land)).sort((a,b)=>Math.hypot(a[0]-mean[0],a[1]-mean[1])-Math.hypot(b[0]-mean[0],b[1]-mean[1]))[0]||mean;
  }
  const chairsFirst=(a,b)=>b.cadeiras-a.cadeiras||(a.name||a.id||'').localeCompare(b.name||b.id||'','pt-BR');
  window.MAP_LAYOUT={zoomCamera,focusOffset,cityOffsets,cityPlots,MAX_STADIUM_PLOT,preferLight,clusterPoints,clusterSize,spreadClusters,spreadGroupCards,groupLevel,landIndex,onLand,inlandAnchor,chairsFirst};
})();
