// Local cartography: no remote tile, sprite, font or street requests.
(function(){
 const style={version:8,sources:{world:{type:'geojson',data:'assets/world-110m.json',tolerance:.35}},layers:[
  {id:'sea',type:'background',paint:{'background-color':'#78bfdc'}},
  {id:'land',type:'fill',source:'world',paint:{'fill-color':['case',['==',['get','iso'],'BR'],'#a7cf84','#c0dca3'],'fill-opacity':1}},
  {id:'country-sides',type:'fill-extrusion',source:'world',maxzoom:7,paint:{'fill-extrusion-color':'#719a52','fill-extrusion-height':0,'fill-extrusion-opacity':.9}},
  {id:'country-border',type:'line',source:'world',paint:{'line-color':'#538653','line-width':['interpolate',['linear'],['zoom'],1,.55,7,1.2],'line-opacity':.65}},
  {id:'coast-highlight',type:'line',source:'world',paint:{'line-color':'#edf1cc','line-width':1,'line-opacity':.35}}
 ]};
 const color=c=>/^#[a-f\d]{6}$/i.test(c)?c:'#28755d';
 // At marker size the roof/stands silhouette matters more than tiny seats.
 function stadium(level,c1,c2,group=false){
  level=Math.max(0,Math.min(4,Number(level)||0));c1=color(c1);c2=color(c2);
  const pitch='<path d="M34 43 68 32 94 45 60 58Z" fill="#73a94c" stroke="#eff3ce" stroke-width="1.2"/><path d="m51 38 26 13m-26-8 8-3 9 4-8 3Z" fill="none" stroke="#f4f5da" stroke-width=".8"/>';
  let structure='';
  if(level===0)structure='<path d="M16 48 67 30 111 49 60 69Z" fill="#c8b989"/><path d="M21 50v8m85-9v8" stroke="#9b8057" stroke-width="2"/>';
  if(level>=2)structure='<path d="M16 40Q19 17 65 15q47 2 49 27v17q-8 25-54 25Q19 79 16 59Z" fill="'+c1+'" stroke="#284f42" stroke-width="1.5"/><ellipse cx="65" cy="40" rx="47" ry="23" fill="'+c2+'"/><ellipse cx="65" cy="40" rx="38" ry="17" fill="'+c1+'"/><path d="M20 54q43 29 90-1" fill="none" stroke="'+c2+'" stroke-width="4"/>';
  const lamps=level>=2?'<path d="M20 35V12m89 23V12" stroke="#526660" stroke-width="2"/><path d="M14 12h12m77 0h12" stroke="#fff9cd" stroke-width="4"/>':'';
  const roof=level>=3?'<ellipse cx="65" cy="35" rx="50" ry="24" fill="none" stroke="'+(level===4?'#e8bd59':c2)+'" stroke-width="'+(level===4?9:5)+'"/><path d="M17 35q48-30 96 0" fill="none" stroke="#fff7d6" stroke-width="2"/>':'';
  const mega=level===4?'<path d="m23 18 7-12 8 12M88 18 96 6l8 12" fill="#f0ca67" stroke="#85692e" stroke-width="1"/><path d="M11 49q54 40 108 0" fill="none" stroke="#e8bd59" stroke-width="3"/>':'';
  if(level===1)return '<svg class="map-stadium level-1" viewBox="0 0 130 100" aria-hidden="true"><ellipse cx="65" cy="83" rx="57" ry="11" fill="#244b32" opacity=".16"/><path d="m5 53 57-24 60 24-59 27Z" fill="#bda97a" stroke="#8e9e66"/><g class="single-grandstand"><path d="m63 33 53 22 11-14-53-23Z" fill="'+c1+'" stroke="#365744" stroke-width="1.2"/><path d="m68 30 52 22m-49-27 52 22m-48-28 51 22" fill="none" stroke="'+c2+'" stroke-width="2.2"/><path d="M68 25v14m51 5v15" stroke="#536950" stroke-width="1.8"/><path class="stand-roof" d="m63 12 14-6 53 22-14 7Z" fill="'+c1+'" stroke="#365744" stroke-width="1.4"/><path d="m64 12 52 22 13-6" fill="none" stroke="'+c2+'" stroke-width="2.5"/></g><path d="m12 53 50-21 52 22-51 23Z" fill="#5d9d49" stroke="#eff4d3" stroke-width="1.4"/><path d="m37 43 52 22m-48-10 22-9 23 10-23 10Z" fill="none" stroke="#f3f6da" stroke-width="1"/><path d="m16 50 13-5v9l-13 5Zm84-4 11 5v9l-11-5Z" fill="#ffffff25" stroke="#fffbe6" stroke-width="1.7"/><path d="m19 75 21 8 7-4-22-9Z" fill="'+c1+'" stroke="#536950"/><path d="M8 48V27m117 3V9" stroke="#65785c" stroke-width="1.3"/><path d="m9 27 13 4-13 5Zm115-18-12 4 12 5Z" fill="'+c1+'" stroke="'+c2+'" stroke-width=".6"/></svg>';
  if(level===0)return '<svg class="map-stadium level-0" viewBox="0 0 130 100" aria-hidden="true"><ellipse cx="67" cy="81" rx="56" ry="11" fill="#244b32" opacity=".16"/><path d="m8 45 60-23 56 23-60 30Z" fill="#c1ae78" stroke="#8e9e66"/><path d="m20 45 48-18 45 18-49 19Z" fill="#5c9b48" stroke="#f4f6d6" stroke-width="1.4"/><path d="m44 36 44 18m-46-9 22-8 23 8-23 9Z" fill="none" stroke="#edf4d6" stroke-width="1"/><path d="m23 43 14-5v11l-14 5Zm76-5 14 5v11l-14-5Z" fill="#ffffff35" stroke="#fffef0" stroke-width="1.9"/><path d="m26 42 9 5m-6-6 1 10m73-11 8 9m-4-8v10" fill="none" stroke="#fffef0" stroke-width=".6"/><path d="M9 44V33l59-23 56 23v11M9 33l55 25 60-25M64 58v14M30 25v17m19-24v16m39-15v16m19-10v16" fill="none" stroke="#6e8168" stroke-width="1.1"/><path d="m13 28 54-20 53 20M13 36l54-20 53 20" fill="none" stroke="#7e9475" stroke-width=".6" opacity=".65"/><path d="m22 68 23 9 7-5-23-9Z" fill="'+c1+'" stroke="#435a42"/><path d="m24 64 22 9m-19-7v8m16-2v9" stroke="#f6f3dd" stroke-width="1.5"/><path d="M16 28V11m98 19V13" stroke="#617459" stroke-width="1.4"/><path d="m17 11 11 4-11 4Z" fill="'+c1+'"/><path d="m115 13 10 4-10 4Z" fill="'+c2+'"/></svg>';
  return '<svg class="map-stadium level-'+level+'" viewBox="0 0 130 100" aria-hidden="true"><ellipse cx="65" cy="80" rx="51" ry="12" fill="#233c3a" opacity=".14"/>'+lamps+structure+pitch+roof+mega+(group?'<path d="m12 74 7-3 7 3-7 3Zm91 4 8-3 7 3-7 3Z" fill="#8eac78"/>':'')+'</svg>';
 }
 const markerSize=level=>[78,98,146,164,184][Math.max(0,Math.min(4,Number(level)||0))];
 const groupSize=(base,level)=>Number(level)===1?Math.round(base*1.25):base+[0,0,38,54,72][Math.max(0,Math.min(4,Number(level)||0))];
 window.ARENA_MAP={style,stadium,markerSize,groupSize};
})();

;
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

;
/* Lightweight geometry for the selected real club; generated only on approach. */
(function(){
const feature=(coords,props)=>({type:'Feature',properties:props,geometry:{type:'Polygon',coordinates:[coords]}});
const LEVEL_STARTS=[0,25,200,1000,5000];
const STAGES=[
 [0,0,'Campo de várzea'],[10,0,'Cerca e banco da torcida'],
 [25,1,'Primeira arquibancada coberta'],[50,1,'Novo módulo da arquibancada'],[100,1,'Arquibancada ampliada'],[150,1,'Arquibancada completa e acesso'],
 [200,2,'Estádio de quatro lados'],[400,2,'Setores ampliados'],[700,2,'Estrutura preparada para Arena'],
 [1000,3,'Arena de dois níveis'],[2000,3,'Fachada ampliada'],[3500,3,'Cobertura ampliada'],
 [5000,4,'Mega Arena de três níveis']
].map(([min,level,name])=>({min,level,name,id:'obra-'+min}));
function construction(t){
 const level=Math.max(0,Math.min(4,Number(t.level)||0)),chairs=Number.isFinite(Number(t.cadeiras))?Math.max(LEVEL_STARTS[level],Number(t.cadeiras)):LEVEL_STARTS[level];
 const stages=STAGES.filter(s=>s.level===level),stage=[...stages].reverse().find(s=>chairs>=s.min)||stages[0],next=STAGES.find(s=>s.min>chairs);
 return {...stage,chairs,next:next||null,remaining:next?Math.max(0,next.min-chairs):0};
}
function createScene(t){
 const progress=construction(t),features=[],[lon,lat]=t.center,sx=1/(111320*Math.cos(lat*Math.PI/180)),sy=1/111320;
 const point=(x,y)=>[lon+x*sx*.55,lat+y*sy*.55];
 function rect(x,y,w,h,tone,height=0,base=0,extra={}){features.push(feature([[x-w/2,y-h/2],[x+w/2,y-h/2],[x+w/2,y+h/2],[x-w/2,y+h/2],[x-w/2,y-h/2]].map(([a,b])=>point(a,b)),{tone,height:height*.55,base:base*.55,...extra}));}
 function circle(x,y,r,tone,height=0,base=0,n=10){const pts=Array.from({length:n+1},(_,i)=>point(x+Math.cos(i/n*2*Math.PI)*r,y+Math.sin(i/n*2*Math.PI)*r));features.push(feature(pts,{tone,height:height*.55,base:base*.55}));}
 // Park and neighboring streets establish scale; relief is illustrative, not elevation data.
 rect(0,0,650,490,'ground');rect(0,0,555,400,'park');rect(0,-195,630,22,'road');rect(-310,0,20,490,'road');rect(310,0,20,490,'road');
 rect(0,0,290,220,'walk');rect(0,0,208,132,'pitch');
 for(let i=0;i<10;i++)rect(-93.6+i*20.8,0,20.8,132,i%2?'pitch':'stripe');
 const stroke=(coords,tone='line',width=1)=>({type:'Feature',properties:{tone,width},geometry:{type:'LineString',coordinates:coords.map(([x,y])=>point(x,y))}});
 features.push(stroke([[-101,-63],[101,-63],[101,63],[-101,63],[-101,-63]],'line',1.5));features.push(stroke([[0,-63],[0,63]],'line',1.2));
 features.push(stroke(Array.from({length:49},(_,i)=>[Math.cos(i/48*2*Math.PI)*18,Math.sin(i/48*2*Math.PI)*18]),'line',1));
 for(const sign of [-1,1]){features.push(stroke([[sign*101,-29],[sign*69,-29],[sign*69,29],[sign*101,29]],'line',1.2));features.push(stroke([[sign*101,-13],[sign*91,-13],[sign*91,13],[sign*101,13]],'line',1));
  rect(sign*105,-10,1.1,1.1,'white',9);rect(sign*105,10,1.1,1.1,'white',9);rect(sign*105,0,1,21,'white',9,8);rect(sign*109,0,8,20,'net',5);
 }
 // Structural geometry only. Optional president items are not equipped here.
 const level=Math.max(0,Math.min(4,Number(t.level)||0));
 // Fence and benches belong to the ground, not to a disposable level.
 // Their positions stay clear of the later stands and remain after each upgrade.
 for(let i=0;i<9;i++)for(const y of [-72,72])rect(-110+i*27.5,y,1,1,'wood',4,0,{persistent:true,asset:'fence'});
 for(const x of [-110,110])for(const z of [1.6,3.7])rect(x,0,.55,144,'wood',z+.3,z,{persistent:true,asset:'fence'});
 for(const y of [-72,72])for(const z of [1.6,3.7])rect(0,y,220,.55,'wood',z+.3,z,{persistent:true,asset:'fence'});
 for(const x of (progress.min>=10||level>0?[-46,46]:[-46])){
  rect(x,-76,34,3,'wood',1.5,0,{persistent:true,asset:'bench'});
  rect(x,-77.5,34,.5,'team',3,1.5,{persistent:true,asset:'bench'});
 }
 if(level>0){
  const tiers=level===4?3:level===3?2:1;
  const phase=progress.min;
  const rows=level===1?(phase>=150?10:phase>=100?9:phase>=50?8:7):level===2?(phase>=700?13:phase>=400?12:11):level===3?13:14;
  const rowD=2.2,rise=1.5,closed=level>=3;
  const width=level===1?(phase>=150?280:phase>=100?260:phase>=50?240:220):300;
  let outerX=0,outerY=0,top=0;
  for(let tier=0;tier<tiers;tier++){
   const innerX=118+tier*(rows*rowD+6),innerY=80+tier*(rows*rowD+6),h0=2+tier*(rows*rise+9);
   const long=level===1?width:closed?Math.max(300,2*(innerX+rows*rowD)):300;
   const short=closed?2*innerY:144;
   for(let row=0;row<rows;row++){
    const h=h0+row*rise+1.2,base=tier?h0-4:0;
    const extra={tier,row,compactSkip:level>=3?row!==rows-1:row!==0&&row!==rows-1&&row!==Math.floor(rows/2)};
    rect(0,innerY+row*rowD,long,rowD,'concrete',h,base,{...extra,side:'north'});
    if(!window.ARENA_SEATS)rect(0,innerY+row*rowD-rowD*.15,long-4,rowD*.5,'team',h+.18,h,{...extra,seatBand:true,side:'north'});
    if(level>=2){
     rect(0,-innerY-row*rowD,long,rowD,'concrete',h,base,{...extra,side:'south'});
     if(!window.ARENA_SEATS)rect(0,-innerY-row*rowD+rowD*.15,long-4,rowD*.5,'team',h+.18,h,{...extra,seatBand:true,side:'south'});
     for(const side of [-1,1]){
      rect(side*(innerX+row*rowD),0,rowD,short,'concrete',h,base,{...extra,side:side<0?'west':'east'});
      if(!window.ARENA_SEATS)rect(side*(innerX+row*rowD-rowD*.15),0,rowD*.5,short-4,'team',h+.18,h,{...extra,seatBand:true,side:side<0?'west':'east'});
     }
    }
   }
   outerX=innerX+rows*rowD;outerY=innerY+rows*rowD;top=h0+rows*rise+2;
   // Club trim and passages between storeys make tiers readable from a distance.
   rect(0,innerY-2,long,1.6,'team',h0+3,h0+1);
   if(level>=2){rect(0,-innerY+2,long,1.6,'team',h0+3,h0+1);for(const side of [-1,1])rect(side*(innerX-2),0,1.6,short,'team',h0+3,h0+1);}
   if(tier){rect(0,innerY-4,long,4,'walk',h0,h0-1);rect(0,-innerY+4,long,4,'walk',h0,h0-1);}
  }
  if(level<=2){
   const roofW=width+12,roofD=rows*rowD+9;
   rect(0,80+rows*rowD/2,roofW,roofD,'team',top+8,top+6,{asset:'stadium-roof'});
   for(const x of [-roofW/2+3,0,roofW/2-3])rect(x,80+rows*rowD,2.2,2.2,'metal',top+8);
   if(level===1&&phase>=150){rect(0,-110,38,10,'concrete',16);rect(0,-110,41,12,'team',18,16);}
  }else{
   // Closed facade, two/three distinct tiers and a roof covering every stand.
   for(const side of [-1,1]){rect(0,side*outerY,2*outerX,3,'secondary',top,0,{asset:'facade'});rect(side*outerX,0,3,2*outerY,'secondary',top,0,{asset:'facade'});}
   for(let i=-5;i<=5;i++){for(const side of [-1,1]){rect(i*outerX/6,side*(outerY+2),2,3,'concrete',top+1,0,{compactSkip:true,asset:'facade-strut'});rect(side*(outerX+2),i*outerY/6,3,2,'concrete',top+1,0,{compactSkip:true,asset:'facade-strut'});}}
   const roofExtra=phase>=3500?7:3,roofInnerX=level===4?108:outerX-38,roofInnerY=level===4?72:outerY-38;
   for(const side of [-1,1]){
    rect(0,side*(outerY+roofInnerY)/2,2*outerX+roofExtra,outerY-roofInnerY+roofExtra,'team',top+8,top+6,{asset:'stadium-roof'});
    rect(side*(outerX+roofInnerX)/2,0,outerX-roofInnerX+roofExtra,2*roofInnerY,'team',top+8,top+6,{asset:'stadium-roof'});
    rect(0,side*(outerY+3),2*outerX+6,2,level===4?'gold':'team',top+9,top+8);
   }
   // Secondary facade bands distinguish intermediate construction stages.
   const bands=level===4?3:phase>=2000?2:1;
   for(let n=1;n<=bands;n++)for(const side of [-1,1]){rect(0,side*(outerY+2),2*outerX,1.5,'team',top*n/(bands+1)+2,top*n/(bands+1),{compactSkip:n>1,asset:'facade-band'});rect(side*(outerX+2),0,1.5,2*outerY,'team',top*n/(bands+1)+2,top*n/(bands+1),{compactSkip:n>1,asset:'facade-band'});}
   if(level===4){
    // A continuous roof crown, luminous club ring and civic forecourt mark the final level.
    for(const side of [-1,1]){
     rect(0,side*(outerY+7),2*outerX+18,5,'team',top+14,top+11,{asset:'led-ring'});
     rect(side*(outerX+7),0,5,2*outerY+18,'team',top+14,top+11,{asset:'led-ring'});
     rect(0,side*(outerY+10),2*outerX+24,3,'white',top+18,top+16,{asset:'roof-crown'});
    }
    for(const x of [-outerX,0,outerX])for(const y of [-outerY,outerY]){rect(x,y,3,3,'metal',top+30,0,{compactSkip:true});rect(x,y,13,7,'white',top+32,top+30,{asset:'perimeter-light',compactSkip:true});}
    rect(0,-217,330,55,'walk',.7,0,{asset:'forecourt',compactSkip:true});
    for(const x of [-140,-70,70,140]){rect(x,-218,2,2,'metal',22,0,{compactSkip:true});circle(x,-218,4,'gold',24,22,8);features[features.length-1].properties.compactSkip=true;rect(x,-232,24,6,'wood',3,0,{compactSkip:true});}
   }
  }
 }
 // Decorative trees and small houses are map scenery, not playable constructions.
 for(let i=0;i<24;i++){const a=i/24*Math.PI*2,x=Math.cos(a)*235,y=Math.sin(a)*166;if(y< -120&&Math.abs(x)<100)continue;rect(x,y,3,3,'trunk',12);circle(x,y,11+(i%3)*2,'leaves',30+(i%3)*4,10,6);}
 for(const side of [-1,1])for(let j=0;j<3;j++){rect(side*(358+j%2*25),-110+j*105,44,40,'house',16);rect(side*(358+j%2*25),-110+j*105,48,44,'roof',22,16);}
 for(const x of [-122,122]){rect(x,114,1.8,1.8,'metal',51);rect(x+9,114,18,1,'team',49,39);}
 const data={type:'FeatureCollection',features,seats:t.seats===false?[]:window.ARENA_SEATS?.create(t)||[],center:t.center,cutaway:!!t.cutaway};
 const built=window.ARENA_DNA?window.ARENA_DNA.apply(t,data):data;
 return {...built,crowd:t.seats===false?[]:window.ARENA_CROWD?.create(t,built.seats)||[]};
}

window.ARENA_SCENE={construction,STAGES,create:createScene,colors:t=>['match',['get','tone'],'ground','#afcc91','park','#85b661','walk','#e4d7ad','road','#ced0b4','team',t.color1,'secondary',t.color2,'pitch','#4f974d','stripe','#5ca555','line','#e9efd7','white','#f7f3dd','net','#c5d6b2','metal','#64746b','concrete','#b9b7ae','wood','#a3825a','trunk','#856345','leaves','#65964d','house','#e5dbbe','roof','#8da787','gold','#e8bd59','#71955e']};
})();

;
/* One rendered seat per contribution, filled in stable construction order. */
(function(){
 function create(t){
  const level=Math.max(0,Math.min(4,Number(t.level)||0)),won=Math.max(0,Math.trunc(Number(t.cadeiras)||0));
  const capacity=Math.max(won,Number(t.seatCapacity)||[25,200,1000,5000,Math.max(10000,Math.ceil(won/1000)*1000)][level]),state=window.ARENA_SCENE.construction(t);
  const tiers=level===4?3:level===3?2:1,rows=level===0?1:level===1?(state.min>=150?10:state.min>=100?9:state.min>=50?8:7):level===2?(state.min>=700?13:state.min>=400?12:11):level===3?13:14;
  const sides=level<2?['north']:['north','south','west','east'],cols=level<2?Math.ceil(capacity/rows):Math.ceil(capacity/(tiers*rows*3));
  const seats=[],[lon,lat]=t.center,cos=Math.cos(lat*Math.PI/180);
  for(const side of sides)for(let tier=0;tier<tiers;tier++)for(let row=0;row<rows;row++){
   const count=['west','east'].includes(side)?Math.ceil(cols/2):cols;
   const ordered=Array.from({length:count},(_,i)=>i).sort((a,b)=>Math.abs(a-(count-1)/2)-Math.abs(b-(count-1)/2)||a-b);
   const innerX=118+tier*(rows*2.2+6),innerY=80+tier*(rows*2.2+6),h0=2+tier*(rows*1.5+9);
   const width=level===1?(state.min>=150?280:state.min>=100?260:state.min>=50?240:220):level===0?205:300;
   const long=['west','east'].includes(side)?140:width-8,spacing=long/count;
   for(const col of ordered){if(seats.length>=capacity)break;
    const along=(col-(count-1)/2)*spacing,across=(side==='west'?-1:1)*(innerX+row*2.2),y=level===0?77:innerY+row*2.2;
    const x=['west','east'].includes(side)?across:along,py=side==='south'?-y:['west','east'].includes(side)?along:y;
    const z=level===0?1.4:h0+row*1.5+1.5,index=seats.length;
    seats.push({index,filled:index<won,side,tier,row,position:[lon+x*.55/(111320*cos),lat+py*.55/111320],z:z*.55,w:Math.min(3.2,spacing*.7)*.55,d:.82,angle:side==='south'?Math.PI:side==='west'?Math.PI/2:side==='east'?-Math.PI/2:0,color:index<won?t.color1:'#b8beb9'});
   }
  }
  return seats;
 }
 window.ARENA_SEATS={create};
})();

;
/* Club identity is additive and confined to Arena and Mega Arena. */
(function(){
 function apply(t,data){
  const id=t.id==='inter'?'internacional':t.id;if(t.level<3||!['internacional','gremio','palmeiras'].includes(id))return data;
  const mega=t.level===4,rx=mega?124:101,ry=mega?103:80,h=mega?53:34,[lon,lat]=t.center,cos=Math.cos(lat*Math.PI/180);
  const replaced=new Set(['facade','facade-strut','facade-band','stadium-roof','led-ring','roof-crown','perimeter-light']);
  const features=data.features.filter(f=>!replaced.has(f.properties.asset)&&!(id==='internacional'&&['leaves','trunk'].includes(f.properties.tone))),point=(x,y)=>[lon+x/(111320*cos),lat+y/111320];
  function poly(coords,ink,height,base=0,extra={}){features.push({type:'Feature',properties:{tone:'dna',ink,height,base,dna:id,...extra},geometry:{type:'Polygon',coordinates:[coords.map(p=>point(...p))]}});}
  function rect(x,y,w,d,ink,z,b=0,extra={}){poly([[x-w/2,y-d/2],[x+w/2,y-d/2],[x+w/2,y+d/2],[x-w/2,y+d/2],[x-w/2,y-d/2]],ink,z,b,extra);}
  function ovalRing(x,y,ix,iy,color,z,b,extra={}){const steps=t.compact?12:48;for(let i=0;i<steps;i++){const a=i/steps*Math.PI*2,c=(i+1)/steps*Math.PI*2;poly([[Math.cos(a)*x,Math.sin(a)*y],[Math.cos(c)*x,Math.sin(c)*y],[Math.cos(c)*ix,Math.sin(c)*iy],[Math.cos(a)*ix,Math.sin(a)*iy],[Math.cos(a)*x,Math.sin(a)*y]],typeof color==='function'?color(i):color,z,b,extra);}}
  function rectRing(x,y,ix,iy,color,z,b,extra={}){for(const sign of [-1,1]){rect(0,sign*(y+iy)/2,x*2,y-iy,color,z,b,extra);rect(sign*(x+ix)/2,0,x-ix,iy*2,color,z,b,extra);}}
  if(id==='internacional'){
   const x=rx*1.44,y=ry*1.44;
   ovalRing(x,y,x-4,y-4,'#bd2430',8,0,{asset:'red-base'});
   ovalRing(x,y,x-5,y-5,i=>i%4===3?'#d32532':'#f2f2e7',h,8,{asset:'oval-petal'});
   ovalRing(x+1,y+1,mega?59:x*.76,mega?39:y*.76,'#e4e7dd',h+4,h+2,{asset:'stadium-roof'});
   ovalRing(x+2,y+2,x,y,'#e33b46',h+7,h+5,{asset:'led-ring'});
   for(let i=0;i<18;i++){const a=i/18*Math.PI*2,tx=Math.cos(a)*x*1.16,ty=Math.sin(a)*y*1.16;rect(tx,ty,1.4,1.4,'#8b7553',5);poly(Array.from({length:7},(_,n)=>[tx+Math.cos(n/6*Math.PI*2)*4.5,ty+Math.sin(n/6*Math.PI*2)*4.5]),'#65964d',11,5,{compactSkip:true});}
  }else if(id==='gremio'){
   rectRing(rx,ry,rx-4,ry-4,'#eceee7',h);
   for(let n=1;n<=(mega?3:2);n++)rectRing(rx+1,ry+1,rx-1,ry-1,'#2caff7',h*n/(mega?4:3)+2,h*n/(mega?4:3),{asset:'led-ring'});
   rectRing(rx+3,ry+3,mega?58:rx-24,mega?38:ry-24,'#e8f7f3',h+5,h+3,{asset:'stadium-roof',opacity:.78});
   if(mega)for(const sx of [-1,1])for(const sy of [-1,1]){const x=sx*rx,y=sy*ry;const disc=(radius,z,b,color)=>poly(Array.from({length:13},(_,i)=>[x+Math.cos(i/12*Math.PI*2)*radius,y+Math.sin(i/12*Math.PI*2)*radius]),color,z,b);disc(9,h+18,0,'#e9eee8');disc(9.3,h+14,h+11,'#21a7e8');disc(10,h+19,h+18,'#f8fbec');}
  }else{
   rectRing(rx,ry,rx-3,ry-3,'#245b44',h);
   for(let i=0;i<36;i++){const x=-rx+(i+.5)*2*rx/36;for(const sign of [-1,1])rect(x,sign*(ry+1),3.2,4,'#e5e7dc',h,0,{asset:'vertical-fin',compactSkip:i%3!==0});}
   for(let i=0;i<25;i++){const y=-ry+(i+.5)*2*ry/25;for(const sign of [-1,1])rect(sign*(rx+1),y,4,3.2,'#e5e7dc',h,0,{asset:'vertical-fin',compactSkip:i%3!==0});}
   rectRing(rx+5,ry+5,mega?58:rx-25,mega?38:ry-25,'#263831',h+5,h+2,{asset:'stadium-roof'});
   rectRing(rx+6,ry+6,rx+4,ry+4,'#45ca74',h+7,h+5,{asset:'led-ring'});
  }
  return {...data,features,dna:id};
 }
 window.ARENA_DNA={apply};
})();

;
/* Participants and chairs are separate: a participant has exactly one avatar. */
(function(){
 const key=f=>String(f.h||'').toLowerCase();
 const gate=t=>-(t.id==='internacional'||t.id==='inter'?[60,66,80,140,174]:[60,66,80,105,132])[t.level];
 function create(t,seats){
  const fans=[...(t.fans||[])].sort((a,b)=>(a.founderOrder||0)-(b.founderOrder||0)||a.h.localeCompare(b.h)),leaders=new Set((t.lideres||[]).map(f=>f.h));
  let front=0;const occupied=seats.filter(s=>s.filled),seen=new Set();
  return fans.filter(f=>{if(seen.has(key(f)))return false;seen.add(key(f));return true;}).map((f,i)=>{
   const president=t.presidente?.h===f.h,leader=leaders.has(f.h),own=t.visitorHandle===f.h,highlight=president||leader||own,role=president?'Presidente':leader?'Líder':own?'Seu perfil':'Torcedor';
   let position,z=0;
   if(highlight){const n=front++,x=-40+(n%5)*20,y=gate(t)-Math.floor(n/5)*15;position=[t.center[0]+x/(111320*Math.cos(t.center[1]*Math.PI/180)),t.center[1]+y/111320];}
   else{const s=occupied[i%Math.max(1,occupied.length)];position=s?.position||t.center;z=(s?.z||0)+.25;}
   const seed=[...f.h].reduce((n,c)=>n+c.charCodeAt(0),0);
   return {h:f.h,role,highlight,own,president,leader,position,z,color:t.color1,skin:['#dcae83','#b77e58','#8d5d40','#efc6a5'][seed%4],label:highlight&&!f.hide_handle&&!f.hideHandle,showName:own||president||leader&&front<=5};
  });
 }
 function newcomers(before,after){
  const existing=new Set(before.fans.map(key)),teams=new Set(after.fans.map(f=>f.team.id)),out=[];
  for(const team of teams){
   const growth=after.fans.filter(f=>f.team.id===team).length-before.fans.filter(f=>f.team?.id===team).length;
   // A renamed handle alone must not simulate another account arriving.
   if(growth<=0)continue;
   const candidates=after.fans.filter(f=>f.team.id===team&&!existing.has(key(f))&&f.first===after.today).sort((a,b)=>(b.founderOrder||0)-(a.founderOrder||0));
   out.push(...candidates.slice(0,growth).map(f=>({h:f.h,team,first:f.first})));
  }return out;
 }
 window.ARENA_CROWD={create,newcomers,gate};
})();

;
/* Orthographic export of the same geometry used by MapLibre. No image requests. */
(function(){
 const cache=new Map();
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function render(data,{compact=false,labels=[],aligned=false}={}){
  const project=(p,z=0)=>{const x=p[0]*111320,y=p[1]*111320;return aligned?[x,-y*.616-z*.788]:[.866*x+.5*y,(.5*x-.866*y)*.616-z*.788];};
  const faces=[];
  for(const f of data.features){
   const p=f.properties;if(compact&&(p.compactSkip||p.seatBand||(p.tier>0&&['east','west'].includes(p.side))))continue;const ink=p.ink||'#85b661';
   if(compact&&['ground','park','road','leaves','trunk','house','roof'].includes(p.tone))continue;
   const coords=f.geometry.type==='Polygon'?f.geometry.coordinates[0]:f.geometry.coordinates;
   const h=p.height||0,base=p.base||0;
   if(compact&&h&&h-base<2&&coords.length===5){const xs=coords.map(p=>p[0]),ys=coords.map(p=>p[1]);if((Math.max(...xs)-Math.min(...xs))*111320<4&&(Math.max(...ys)-Math.min(...ys))*111320<4)continue;}
   if(compact&&['metal','net'].includes(p.tone)&&h<12){
    const xs=coords.map(p=>p[0]*111320),ys=coords.map(p=>p[1]*111320),w=Math.max(...xs)-Math.min(...xs),d=Math.max(...ys)-Math.min(...ys);
    if(w<3&&d<3)continue;
    faces.push({points:coords.map(p=>project(p,h)),depth:0,ink,layer:1,line:true,width:.65});continue;
   }
   const depth=coords.reduce((n,p)=>n+project(p)[1]/coords.length,0);
   if(f.geometry.type==='LineString'){faces.push({points:coords.map(p=>project(p,.1)),depth:depth+.2,ink:'#f3f5de',line:true,layer:1,width:p.width||1});continue;}
   if(h>base)for(let i=0;i<coords.length-1;i++)if(!compact||i===1||i===2){const shade=i%2?.22:.12,sideInk=compact?'#'+[1,3,5].map(k=>Math.round(parseInt(ink.slice(k,k+2),16)*(1-shade)).toString(16).padStart(2,'0')).join(''):ink;faces.push({points:[project(coords[i],base),project(coords[i+1],base),project(coords[i+1],h),project(coords[i],h)],depth:depth+.01,layer:p.renderPriority||2,ink:sideInk,shade:compact?0:shade});}
   faces.push({points:coords.map(p=>project(p,h)),depth:depth+.02,layer:h?(p.renderPriority||2):0,ink});
  }
  const pts=faces.flatMap(f=>f.points),xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);
  const minX=Math.min(...xs),minY=Math.min(...ys),maxX=Math.max(...xs),maxY=Math.max(...ys),pad=compact?7:30;
  const width=maxX-minX+pad*2,height=maxY-minY+pad*2;
  const draw=faces.sort((a,b)=>(a.layer-b.layer)||(a.layer===0?0:a.depth-b.depth)).map(f=>{const points=f.points.map(p=>p.map(n=>Number(n.toFixed(compact?1:2))).join(',')).join(' ');return f.line?'<polyline points="'+points+'" fill="none" stroke="'+f.ink+'" stroke-width="'+f.width+'"/>':'<polygon points="'+points+'" fill="'+esc(f.ink)+'"/>'+(f.shade?'<polygon points="'+points+'" fill="#153b2b" opacity="'+f.shade+'"/>':'');}).join('');
  const pins=labels.map(l=>{const [x,y]=project([l.position[0]/111320,l.position[1]/111320],l.position[2]||30);return '<g transform="translate('+x+','+y+')"><circle r="10" fill="#fff9e9" stroke="#1e5944" stroke-width="1.3"/><text text-anchor="middle" dy="3.5" font-family="Arial,sans-serif" font-size="9" font-weight="700" fill="#174b39">'+l.number+'</text></g>';}).join('');
  return '<svg class="map-stadium geometry-stadium" xmlns="http://www.w3.org/2000/svg" viewBox="'+[minX-pad,minY-pad,width,height].join(' ')+'" aria-hidden="true">'+draw+pins+'</svg>';
 }
 function colorize(data,t){const exp=window.ARENA_SCENE.colors(t),colors={};for(let i=2;i<exp.length-1;i+=2)colors[exp[i]]=exp[i+1];return {...data,features:data.features.map(f=>({...f,properties:{...f.properties,ink:f.properties.ink||colors[f.properties.tone]||'#71955e'}}))};}
 function marker(level,c1,c2,chairs,id,aligned=false){
  const state=window.ARENA_SCENE.construction({level,cadeiras:typeof chairs==='number'?chairs:undefined});const key=state.id+':'+c1+':'+c2+':'+(id||'')+':'+aligned;if(cache.has(key))return cache.get(key);
  const safe=c=>/^#[a-f0-9]{6}$/i.test(c)?c:'#28755d',t={id,center:[0,0],level,cadeiras:state.chairs,color1:safe(c1),color2:safe(c2),seats:false,compact:true};
  const svg=render(colorize(window.ARENA_SCENE.create(t),t),{compact:true,aligned});cache.set(key,svg);return svg;
 }
 window.ARENA_RENDER={render,colorize,marker};
 // Small markers and close-up models share construction, projection and materials.
 window.ARENA_MAP.stadium=marker;
})();

;
/* Fixed opt-in layers. No item is awarded by level or by this renderer. */
(function(){
 const catalog=[
  ['screen','Telão',[-92,79,35]],['banner','Bandeirão',[-30,82,44]],
  ['smoke','Fumaça',[88,-65,36]],['floodlights','Refletores',[-105,-75,42]],
  ['president-box','Camarote do presidente',[65,51,30]],['leaders-banner','Faixa dos líderes',[0,-64,17]],
  ['mosaic','Mosaico da torcida',[-55,-48,18]],['training-ground','CT / campo de treino',[-245,-60,3]],
  ['trophy-room','Sala de troféus',[225,90,23]],['statue','Estátua / mascote',[-220,165,40]],
  ['tunnel','Túnel / entrada',[0,-102,15]],['club-shop','Loja do time',[220,-87,22]],
  ['plaza','Praça',[25,-205,8]]
 ].map(([id,name,position],i)=>({id,name,position,number:i+1,choice:'president',effect:'visual'}));
 function compose(t,enabled=[]){
  if(!Number.isInteger(t.level)||t.level<0||t.level>4)throw new Error('Nível inválido.');
  const base=window.ARENA_RENDER.colorize(window.ARENA_SCENE.create(t),t);
  const features=base.features.filter(f=>!['house','roof'].includes(f.properties.tone)).map(f=>({...f,properties:{...f.properties,layerId:'stadium'}}));
  const [lon,lat]=t.center,sx=1/(111320*Math.cos(lat*Math.PI/180)),sy=1/111320;
  const point=(x,y)=>[lon+x*sx,lat+y*sy];let id='';
  const outerX=[72,84,94,112,136][t.level],outerY=[52,62,72,91,114][t.level],heightScale=[.4,.65,.8,1.2,1.7][t.level];
  const internal=new Set(['screen','banner','smoke','floodlights','president-box','leaders-banner','mosaic','tunnel']);
  const poly=(coords,color,height=0,base=0)=>{const inside=internal.has(id);features.push({type:'Feature',properties:{layerId:id,tone:'item',ink:color,height:height*(inside?heightScale:1),base:base*(inside?heightScale:1),opacity:id==='smoke'?.45:1,renderPriority:['banner','mosaic','leaders-banner'].includes(id)?3:2},geometry:{type:'Polygon',coordinates:[coords.map(([x,y])=>point(x*(inside?outerX/105:1),y*(inside?outerY/77:1)))]}});};
  const rect=(x,y,w,h,color,z=0,b=0)=>poly([[x-w/2,y-h/2],[x+w/2,y-h/2],[x+w/2,y+h/2],[x-w/2,y+h/2],[x-w/2,y-h/2]],color,z,b);
  const disc=(x,y,r,color,z=0,b=0)=>poly(Array.from({length:13},(_,i)=>[x+Math.cos(i/12*2*Math.PI)*r,y+Math.sin(i/12*2*Math.PI)*r]),color,z,b);
  const team=t.color1,cream=t.color2,green='#4e954d',gold='#e4b956',metal='#6c8276',white='#fff5da';
  for(const item of catalog){if(!enabled.includes(item.id))continue;id=item.id;
   if(id==='screen'){
    rect(-92,79,2,3,metal,32);rect(-66,79,2,3,metal,32);
    rect(-79,79,40,5,team,41,22);rect(-79,76,33,1,'#132f2b',38,25);
    rect(-79,75,10,1,gold,35,28);rect(-79,75,2,1,cream,37,26);
   }
   if(id==='banner'){rect(-30,50,48,17,cream,23,22);for(let i=0;i<6;i++)rect(-50+i*8,50,4,17,team,23.5,23);disc(-30,50,7,gold,24,23.5);}
   if(id==='smoke'){for(const side of [-1,1])for(let i=0;i<6;i++)disc(side*(80+i*1.2),-57+i*2,4+i*.9,i%2?cream:team,14+i*5,8+i*5);}
   if(id==='floodlights'){for(const x of [-103,103])for(const y of [-77,77]){rect(x,y,2,2,metal,47);rect(x,y,19,5,metal,49,46);for(let i=0;i<5;i++)rect(x-7+i*3.5,y,2.5,5,white,50,49);}}
   if(id==='president-box'){rect(65,51,40,18,cream,29,15);rect(65,41.5,36,1,'#80bdc0',27,19);for(const x of [53,65,77])rect(x,41,1,1,team,28,18);rect(65,51,44,21,team,31,29);}
   if(id==='leaders-banner'){rect(0,-64,86,2,team,16,9);for(let i=0;i<10;i++)rect(-36+i*8,-65,4,1,cream,14,11);}
   if(id==='mosaic'){for(let row=0;row<6;row++)for(let col=0;col<12;col++)rect(-58+col*5,-44-row*3,4.8,2.8,(row+col)%3?team:cream,6+row*1.6,5+row*1.6);}
   if(id==='training-ground'){
    rect(-245,-60,155,110,'#c9d6a1');rect(-245,-60,132,83,green);for(let i=0;i<8;i++)rect(-303+i*16.5,-60,8,83,'#61a058');
    for(const y of [-100,-20])rect(-245,y,130,1,white);for(const x of [-309,-181,-245])rect(x,-60,1,80,white);disc(-245,-60,10,white);disc(-245,-60,9,green);
    rect(-245,10,100,25,cream,13);rect(-245,10,104,28,team,16,13);
   }
   if(id==='trophy-room'){rect(225,90,78,54,cream,20);rect(225,90,82,58,team,24,20);rect(225,62,66,1,'#86bcb4',17,5);rect(225,85,10,8,gold,39,28);rect(225,85,4,4,gold,29,24);disc(225,85,9,gold,40,35);}
   if(id==='statue'){disc(-190,145,22,'#d6d6b9',4);rect(-190,145,16,16,cream,10);disc(-190,145,6,gold,25,10);disc(-190,145,7,gold,34,25);for(const x of [-203,-177])rect(x,145,4,4,gold,25,22);rect(-190,145,26,4,gold,23,21);}
   if(id==='tunnel'){rect(0,-100,38,47,team,15);rect(0,-125,23,1,'#183c32',12,0);rect(0,-100,42,49,cream,17,15);for(const x of [-18,18])rect(x,-126,3,3,gold,19);}
   if(id==='club-shop'){rect(220,-87,79,45,cream,18);rect(220,-87,84,49,team,22,18);rect(220,-111,65,1,'#84bab3',15,4);for(let i=0;i<7;i++)rect(190+i*9,-116,6,12,i%2?team:cream,16,14);rect(220,-112,12,1,'#173e31',15);}
   if(id==='plaza'){
    rect(25,-205,187,80,'#dacdaa');rect(25,-205,10,80,'#f2e4c2');disc(25,-205,21,'#c0d9cf',3);disc(25,-205,15,'#71b6c4',3.5,3);disc(25,-205,5,cream,9,3.5);
    for(const x of [-50,100])for(const y of [-225,-185]){disc(x,y,12,'#6f9c57',16,5);rect(x,y,3,3,'#8c714e',5);}
    for(const x of [-20,70])rect(x,-237,22,6,team,5);
   }
  }
  const src=t.crest_url||(window.CRESTS||{})[t.id],screens=enabled.includes('screen')&&src?[{position:point(-79*outerX/105,74.3*outerY/77),z:31.5*heightScale,w:9*outerX/105,h:11*heightScale,src:src.startsWith('assets/')?'/'+src:src}]:[];
  return {...base,features,screens};
 }
 window.ARENA_ITEMS={catalog,compose};
})();

;
/* Daylight detail renderer. Shares geometry with map icons; loads Three only on approach. */
(function(){
 let library;
 function load(){return library||(library=new Promise((resolve,reject)=>{if(window.THREE)return resolve();const script=document.createElement('script');script.src='/assets/vendor/three-r128.min.js';script.onload=resolve;script.onerror=reject;document.head.append(script);}));}
 function create(map){
  let layer=null,pending=null,failed=false,firstFrame;const ready=new Promise(resolve=>firstFrame=resolve);
  function dispose(){if(!layer)return;for(const mesh of [...layer.root.children]){layer.root.remove(mesh);mesh.geometry.dispose();mesh.material.map?.dispose();mesh.material.dispose();}}
  function update(data,origin){
   pending={data,origin};
   if(failed)return;
   if(!layer){load().then(()=>{if(layer||failed)return;const T=window.THREE;
    layer={id:'stadium-daylight',type:'custom',renderingMode:'3d',
     onAdd(m,gl){this.map=m;this.camera=new T.Camera();this.scene=new T.Scene();this.root=new T.Group();this.scene.add(this.root);const ambient=new T.AmbientLight(0xffffff,.55);this.scene.add(ambient);this.sun=new T.DirectionalLight(0xfff6e2,.7);this.sun.position.set(-180,-150,300);this.scene.add(this.sun);this.renderer=new T.WebGLRenderer({canvas:m.getCanvas(),context:gl});this.renderer.autoClear=false;this.renderer.outputEncoding=T.sRGBEncoding;},
     render(gl,input){if(failed||!this.origin||!this.root.children.length)return;try{const mc=maplibregl.MercatorCoordinate.fromLngLat(this.origin,0),scale=mc.meterInMercatorCoordinateUnits();const matrix=Array.isArray(input)||input instanceof Float32Array?input:input.defaultProjectionData.mainMatrix;const transform=new T.Matrix4().makeTranslation(mc.x,mc.y,mc.z).scale(new T.Vector3(scale,-scale,scale));this.camera.projectionMatrix=new T.Matrix4().fromArray(matrix).multiply(transform);this.renderer.resetState();this.renderer.render(this.scene,this.camera);this.renderer.resetState();firstFrame(true);}catch(e){failed=true;firstFrame(false);map.setLayoutProperty('stadium-buildings','visibility','visible');console.warn('O detalhe segue no renderizador leve.',e.message);}},
     onRemove(){dispose();this.renderer.dispose();}
    };map.addLayer(layer);update(pending.data,pending.origin);
   }).catch(()=>{failed=true;firstFrame(false);});return;}
   dispose();layer.origin=origin;
   const T=window.THREE,cos=Math.cos(origin[1]*Math.PI/180),buckets=new Map();
   const xy=p=>[(p[0]-origin[0])*111320*cos,(p[1]-origin[1])*111320];
   for(const f of data.features){if(f.geometry.type!=='Polygon'||!(f.properties.height>0))continue;
    const coords=f.geometry.coordinates[0].map(xy),shape=new T.Shape(coords.map(p=>new T.Vector2(...p))),base=f.properties.base||0,height=f.properties.height;
    let g=new T.ExtrudeGeometry(shape,{depth:Math.max(.03,height-base),bevelEnabled:false,steps:1});g.translate(0,0,base);if(g.index){const raw=g;g=g.toNonIndexed();raw.dispose();}
    const ink=f.properties.ink||'#b9b7ae',alpha=data.cutaway&&f.properties.asset==='stadium-roof'?.12:(f.properties.opacity||1),key=ink+':'+alpha+':'+(f.properties.asset==='led-ring'?1:0);if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(g);
   }
   for(const [key,geometries]of buckets){const [ink,alpha,led]=key.split(':'),opacity=Number(alpha),n=geometries.reduce((n,g)=>n+g.attributes.position.array.length,0),positions=new Float32Array(n),normals=new Float32Array(n);let offset=0;for(const g of geometries){positions.set(g.attributes.position.array,offset);normals.set(g.attributes.normal.array,offset);offset+=g.attributes.position.array.length;g.dispose();}const merged=new T.BufferGeometry();merged.setAttribute('position',new T.BufferAttribute(positions,3));merged.setAttribute('normal',new T.BufferAttribute(normals,3));const material=new T.MeshStandardMaterial({color:ink,roughness:.85,metalness:0,side:T.DoubleSide,transparent:opacity<1,opacity,depthWrite:opacity===1});material.color.convertSRGBToLinear();if(led==='1'){material.emissive=new T.Color(ink).convertSRGBToLinear();material.emissiveIntensity=.7;}const mesh=new T.Mesh(merged,material);mesh.frustumCulled=false;layer.root.add(mesh);}
   const seats=data.seats||[];
   if(seats.length){
    const material=()=>new T.MeshStandardMaterial({color:0xffffff,roughness:.85}),seat=new T.InstancedMesh(new T.BoxGeometry(1,1,1),material(),seats.length),back=new T.InstancedMesh(new T.BoxGeometry(1,1,1),material(),seats.length),dummy=new T.Object3D();
    seats.forEach((s,i)=>{const [x,y]=xy(s.position),color=new T.Color(s.color).convertSRGBToLinear();dummy.position.set(x,y,s.z);dummy.rotation.set(0,0,s.angle);dummy.scale.set(s.w,s.d,.32);dummy.updateMatrix();seat.setMatrixAt(i,dummy.matrix);seat.setColorAt(i,color);dummy.position.set(x-Math.sin(s.angle)*s.d*.36,y+Math.cos(s.angle)*s.d*.36,s.z+.45);dummy.scale.set(s.w,.15,.75);dummy.updateMatrix();back.setMatrixAt(i,dummy.matrix);back.setColorAt(i,color);});
    for(const mesh of [seat,back]){mesh.instanceMatrix.needsUpdate=true;mesh.instanceColor.needsUpdate=true;mesh.frustumCulled=false;layer.root.add(mesh);}
   }
   const crowd=data.crowd||[];
   if(crowd.length){
    const material=()=>new T.MeshStandardMaterial({color:0xffffff,roughness:1}),bodies=new T.InstancedMesh(new T.BoxGeometry(1,1,1),material(),crowd.length*5),heads=new T.InstancedMesh(new T.SphereGeometry(1,8,6),material(),crowd.length),dummy=new T.Object3D();
    crowd.forEach((f,i)=>{const [x,y]=xy(f.position),scale=f.highlight?1.4:.7,z=f.z;
     const parts=[[0,0,1.9,.9,.55,1.2,f.color],[-.7,0,1.8,.35,.4,1.25,f.color],[.7,0,1.8,.35,.4,1.25,f.color],[-.28,0,.75,.36,.45,1.25,'#263d37'],[.28,0,.75,.36,.45,1.25,'#263d37']];
     parts.forEach(([a,b,c,w,d,h,color],j)=>{dummy.position.set(x+a*scale,y+b*scale,z+c*scale);dummy.rotation.set(0,0,0);dummy.scale.set(w*scale,d*scale,h*scale);dummy.updateMatrix();bodies.setMatrixAt(i*5+j,dummy.matrix);bodies.setColorAt(i*5+j,new T.Color(color).convertSRGBToLinear());});
     dummy.position.set(x,y,z+3.1*scale);dummy.scale.set(.5*scale,.47*scale,.55*scale);dummy.updateMatrix();heads.setMatrixAt(i,dummy.matrix);heads.setColorAt(i,new T.Color(f.skin).convertSRGBToLinear());
    });
    for(const mesh of [bodies,heads]){mesh.instanceMatrix.needsUpdate=true;mesh.instanceColor.needsUpdate=true;mesh.frustumCulled=false;layer.root.add(mesh);}
   }
   for(const screen of data.screens||[]){const [x,y]=xy(screen.position),material=new T.MeshBasicMaterial({transparent:true,side:T.DoubleSide}),mesh=new T.Mesh(new T.PlaneGeometry(screen.w,screen.h),material);mesh.rotation.x=Math.PI/2;mesh.position.set(x,y,screen.z);layer.root.add(mesh);new T.TextureLoader().load(screen.src,texture=>{if(!layer.root.children.includes(mesh)){texture.dispose();return;}texture.encoding=T.sRGBEncoding;material.map=texture;material.needsUpdate=true;map.triggerRepaint();},undefined,()=>{});}
   map.setLayoutProperty('stadium-buildings','visibility',data.features.length?'none':'visible');map.triggerRepaint();
  }
  return {update,dispose,ready};
 }
 window.ARENA_THREE={create};
})();

;
// Catálogo editorial; coordenadas aproximadas da cidade.
window.TEAMS_SEED=[
  {
    "id": "flamengo",
    "name": "Flamengo",
    "short": "FLA",
    "city": "Rio de Janeiro",
    "uf": "RJ",
    "country": "BR",
    "lat": -22.912,
    "lon": -43.23,
    "color1": "#d7172b",
    "color2": "#111111",
    "aliases": [
      "fla",
      "mengo",
      "mengão",
      "mengao",
      "urubu"
    ]
  },
  {
    "id": "fluminense",
    "name": "Fluminense",
    "short": "FLU",
    "city": "Rio de Janeiro",
    "uf": "RJ",
    "country": "BR",
    "lat": -22.912,
    "lon": -43.23,
    "color1": "#8a1c3a",
    "color2": "#1f7a4c",
    "aliases": [
      "flu",
      "fluzão",
      "fluzao",
      "tricolor carioca"
    ]
  },
  {
    "id": "vasco",
    "name": "Vasco",
    "short": "VAS",
    "city": "Rio de Janeiro",
    "uf": "RJ",
    "country": "BR",
    "lat": -22.891,
    "lon": -43.228,
    "color1": "#f2f2f2",
    "color2": "#111111",
    "aliases": [
      "vasco da gama",
      "vascão",
      "vascao",
      "gigante da colina"
    ]
  },
  {
    "id": "botafogo",
    "name": "Botafogo",
    "short": "BOT",
    "city": "Rio de Janeiro",
    "uf": "RJ",
    "country": "BR",
    "lat": -22.893,
    "lon": -43.292,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "fogão",
      "fogao",
      "glorioso"
    ]
  },
  {
    "id": "corinthians",
    "name": "Corinthians",
    "short": "COR",
    "city": "São Paulo",
    "uf": "SP",
    "country": "BR",
    "lat": -23.545,
    "lon": -46.474,
    "color1": "#f2f2f2",
    "color2": "#111111",
    "aliases": [
      "timão",
      "timao",
      "coringão",
      "coringao",
      "sccp"
    ]
  },
  {
    "id": "palmeiras",
    "name": "Palmeiras",
    "short": "PAL",
    "city": "São Paulo",
    "uf": "SP",
    "country": "BR",
    "lat": -23.527,
    "lon": -46.678,
    "color1": "#0b6b3a",
    "color2": "#f2f2f2",
    "aliases": [
      "verdão",
      "verdao",
      "porco",
      "sep"
    ]
  },
  {
    "id": "sao-paulo",
    "name": "São Paulo",
    "short": "SAO",
    "city": "São Paulo",
    "uf": "SP",
    "country": "BR",
    "lat": -23.6,
    "lon": -46.72,
    "color1": "#e3171f",
    "color2": "#f2f2f2",
    "aliases": [
      "spfc",
      "tricolor paulista",
      "soberano"
    ]
  },
  {
    "id": "santos",
    "name": "Santos",
    "short": "SAN",
    "city": "Santos",
    "uf": "SP",
    "country": "BR",
    "lat": -23.951,
    "lon": -46.339,
    "color1": "#f2f2f2",
    "color2": "#111111",
    "aliases": [
      "peixe",
      "santos fc"
    ]
  },
  {
    "id": "bragantino",
    "name": "Bragantino",
    "short": "RBB",
    "city": "Bragança Paulista",
    "uf": "SP",
    "country": "BR",
    "lat": -22.953,
    "lon": -46.542,
    "color1": "#f2f2f2",
    "color2": "#c8102e",
    "aliases": [
      "red bull bragantino",
      "massa bruta"
    ]
  },
  {
    "id": "mirassol",
    "name": "Mirassol",
    "short": "MIR",
    "city": "Mirassol",
    "uf": "SP",
    "country": "BR",
    "lat": -20.82,
    "lon": -49.52,
    "color1": "#f6c400",
    "color2": "#0a8f4a",
    "aliases": [
      "leão caipira"
    ]
  },
  {
    "id": "guarani",
    "name": "Guarani",
    "short": "GUA",
    "city": "Campinas",
    "uf": "SP",
    "country": "BR",
    "lat": -22.9,
    "lon": -47.07,
    "color1": "#0a8f4a",
    "color2": "#f2f2f2",
    "aliases": [
      "bugre"
    ]
  },
  {
    "id": "ponte-preta",
    "name": "Ponte Preta",
    "short": "PON",
    "city": "Campinas",
    "uf": "SP",
    "country": "BR",
    "lat": -22.912,
    "lon": -47.051,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "macaca"
    ]
  },
  {
    "id": "novorizontino",
    "name": "Novorizontino",
    "short": "NOV",
    "city": "Novo Horizonte",
    "uf": "SP",
    "country": "BR",
    "lat": -21.47,
    "lon": -49.22,
    "color1": "#f6c400",
    "color2": "#111111",
    "aliases": [
      "tigre do vale"
    ]
  },
  {
    "id": "botafogo-sp",
    "name": "Botafogo-SP",
    "short": "BFS",
    "city": "Ribeirão Preto",
    "uf": "SP",
    "country": "BR",
    "lat": -21.18,
    "lon": -47.81,
    "color1": "#e3171f",
    "color2": "#111111",
    "aliases": [
      "pantera"
    ]
  },
  {
    "id": "gremio",
    "name": "Grêmio",
    "short": "GRE",
    "city": "Porto Alegre",
    "uf": "RS",
    "country": "BR",
    "lat": -29.974,
    "lon": -51.195,
    "color1": "#1a8fd6",
    "color2": "#111111",
    "aliases": [
      "gremio",
      "tricolor gaúcho",
      "imortal"
    ]
  },
  {
    "id": "internacional",
    "name": "Internacional",
    "short": "INT",
    "city": "Porto Alegre",
    "uf": "RS",
    "country": "BR",
    "lat": -30.065,
    "lon": -51.236,
    "color1": "#e30613",
    "color2": "#f2f2f2",
    "aliases": [
      "inter",
      "colorado",
      "sci"
    ]
  },
  {
    "id": "juventude",
    "name": "Juventude",
    "short": "JUV",
    "city": "Caxias do Sul",
    "uf": "RS",
    "country": "BR",
    "lat": -29.168,
    "lon": -51.179,
    "color1": "#0a8f4a",
    "color2": "#f2f2f2",
    "aliases": [
      "ju",
      "papo"
    ]
  },
  {
    "id": "atletico-mg",
    "name": "Atlético Mineiro",
    "short": "CAM",
    "city": "Belo Horizonte",
    "uf": "MG",
    "country": "BR",
    "lat": -19.916,
    "lon": -43.97,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "atletico mineiro",
      "galo",
      "cam",
      "atlético-mg",
      "atletico-mg"
    ]
  },
  {
    "id": "cruzeiro",
    "name": "Cruzeiro",
    "short": "CRU",
    "city": "Belo Horizonte",
    "uf": "MG",
    "country": "BR",
    "lat": -19.866,
    "lon": -43.971,
    "color1": "#1d4fd1",
    "color2": "#f2f2f2",
    "aliases": [
      "raposa",
      "cabuloso"
    ]
  },
  {
    "id": "america-mg",
    "name": "América-MG",
    "short": "AME",
    "city": "Belo Horizonte",
    "uf": "MG",
    "country": "BR",
    "lat": -19.88,
    "lon": -43.93,
    "color1": "#0a8f4a",
    "color2": "#111111",
    "aliases": [
      "america mineiro",
      "coelho"
    ]
  },
  {
    "id": "bahia",
    "name": "Bahia",
    "short": "BAH",
    "city": "Salvador",
    "uf": "BA",
    "country": "BR",
    "lat": -12.979,
    "lon": -38.504,
    "color1": "#1453a3",
    "color2": "#e3171f",
    "aliases": [
      "bahêa",
      "baea",
      "esquadrão",
      "esquadrao"
    ]
  },
  {
    "id": "vitoria",
    "name": "Vitória",
    "short": "VIT",
    "city": "Salvador",
    "uf": "BA",
    "country": "BR",
    "lat": -12.94,
    "lon": -38.43,
    "color1": "#e3171f",
    "color2": "#111111",
    "aliases": [
      "vitoria",
      "leão da barra"
    ]
  },
  {
    "id": "fortaleza",
    "name": "Fortaleza",
    "short": "FOR",
    "city": "Fortaleza",
    "uf": "CE",
    "country": "BR",
    "lat": -3.807,
    "lon": -38.522,
    "color1": "#1453a3",
    "color2": "#e3171f",
    "aliases": [
      "leão do pici",
      "tricolor de aço"
    ]
  },
  {
    "id": "ceara",
    "name": "Ceará",
    "short": "CEA",
    "city": "Fortaleza",
    "uf": "CE",
    "country": "BR",
    "lat": -3.807,
    "lon": -38.522,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "ceara",
      "vozão",
      "vozao"
    ]
  },
  {
    "id": "sport",
    "name": "Sport",
    "short": "SPT",
    "city": "Recife",
    "uf": "PE",
    "country": "BR",
    "lat": -8.063,
    "lon": -34.903,
    "color1": "#e3171f",
    "color2": "#111111",
    "aliases": [
      "sport recife",
      "leão da ilha"
    ]
  },
  {
    "id": "nautico",
    "name": "Náutico",
    "short": "NAU",
    "city": "Recife",
    "uf": "PE",
    "country": "BR",
    "lat": -8.04,
    "lon": -34.9,
    "color1": "#e3171f",
    "color2": "#f2f2f2",
    "aliases": [
      "nautico",
      "timbu"
    ]
  },
  {
    "id": "santa-cruz",
    "name": "Santa Cruz",
    "short": "STA",
    "city": "Recife",
    "uf": "PE",
    "country": "BR",
    "lat": -8.03,
    "lon": -34.89,
    "color1": "#f2f2f2",
    "color2": "#e3171f",
    "aliases": [
      "cobra coral",
      "santinha"
    ]
  },
  {
    "id": "athletico-pr",
    "name": "Athletico Paranaense",
    "short": "CAP",
    "city": "Curitiba",
    "uf": "PR",
    "country": "BR",
    "lat": -25.448,
    "lon": -49.277,
    "color1": "#c8102e",
    "color2": "#111111",
    "aliases": [
      "athletico",
      "furacão",
      "furacao",
      "cap",
      "atletico paranaense"
    ]
  },
  {
    "id": "coritiba",
    "name": "Coritiba",
    "short": "CFC",
    "city": "Curitiba",
    "uf": "PR",
    "country": "BR",
    "lat": -25.421,
    "lon": -49.259,
    "color1": "#0a6e3c",
    "color2": "#f2f2f2",
    "aliases": [
      "coxa",
      "coxa branca"
    ]
  },
  {
    "id": "operario",
    "name": "Operário",
    "short": "OPE",
    "city": "Ponta Grossa",
    "uf": "PR",
    "country": "BR",
    "lat": -25.09,
    "lon": -50.16,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "operario",
      "fantasma"
    ]
  },
  {
    "id": "goias",
    "name": "Goiás",
    "short": "GOI",
    "city": "Goiânia",
    "uf": "GO",
    "country": "BR",
    "lat": -16.69,
    "lon": -49.23,
    "color1": "#0a8f4a",
    "color2": "#f2f2f2",
    "aliases": [
      "goias",
      "verdão do serra"
    ]
  },
  {
    "id": "atletico-go",
    "name": "Atlético Goianiense",
    "short": "ACG",
    "city": "Goiânia",
    "uf": "GO",
    "country": "BR",
    "lat": -16.66,
    "lon": -49.27,
    "color1": "#e3171f",
    "color2": "#111111",
    "aliases": [
      "atletico goianiense",
      "dragão",
      "dragao"
    ]
  },
  {
    "id": "vila-nova",
    "name": "Vila Nova",
    "short": "VIL",
    "city": "Goiânia",
    "uf": "GO",
    "country": "BR",
    "lat": -16.7,
    "lon": -49.26,
    "color1": "#e3171f",
    "color2": "#f2f2f2",
    "aliases": [
      "tigrão",
      "tigrao"
    ]
  },
  {
    "id": "cuiaba",
    "name": "Cuiabá",
    "short": "CUI",
    "city": "Cuiabá",
    "uf": "MT",
    "country": "BR",
    "lat": -15.6,
    "lon": -56.1,
    "color1": "#f6c400",
    "color2": "#0a8f4a",
    "aliases": [
      "cuiaba",
      "dourado"
    ]
  },
  {
    "id": "chapecoense",
    "name": "Chapecoense",
    "short": "CHA",
    "city": "Chapecó",
    "uf": "SC",
    "country": "BR",
    "lat": -27.1,
    "lon": -52.62,
    "color1": "#0a8f4a",
    "color2": "#f2f2f2",
    "aliases": [
      "chape",
      "verdão do oeste"
    ]
  },
  {
    "id": "criciuma",
    "name": "Criciúma",
    "short": "CRI",
    "city": "Criciúma",
    "uf": "SC",
    "country": "BR",
    "lat": -28.68,
    "lon": -49.37,
    "color1": "#f6c400",
    "color2": "#111111",
    "aliases": [
      "criciuma",
      "tigre"
    ]
  },
  {
    "id": "avai",
    "name": "Avaí",
    "short": "AVA",
    "city": "Florianópolis",
    "uf": "SC",
    "country": "BR",
    "lat": -27.6,
    "lon": -48.55,
    "color1": "#1453a3",
    "color2": "#f2f2f2",
    "aliases": [
      "avai",
      "leão da ilha sc"
    ]
  },
  {
    "id": "figueirense",
    "name": "Figueirense",
    "short": "FIG",
    "city": "Florianópolis",
    "uf": "SC",
    "country": "BR",
    "lat": -27.59,
    "lon": -48.56,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "figueira"
    ]
  },
  {
    "id": "remo",
    "name": "Remo",
    "short": "REM",
    "city": "Belém",
    "uf": "PA",
    "country": "BR",
    "lat": -1.45,
    "lon": -48.48,
    "color1": "#0d2a6e",
    "color2": "#f2f2f2",
    "aliases": [
      "leão azul",
      "clube do remo"
    ]
  },
  {
    "id": "paysandu",
    "name": "Paysandu",
    "short": "PAY",
    "city": "Belém",
    "uf": "PA",
    "country": "BR",
    "lat": -1.44,
    "lon": -48.49,
    "color1": "#36a9e1",
    "color2": "#f2f2f2",
    "aliases": [
      "papão",
      "papao"
    ]
  },
  {
    "id": "crb",
    "name": "CRB",
    "short": "CRB",
    "city": "Maceió",
    "uf": "AL",
    "country": "BR",
    "lat": -9.66,
    "lon": -35.73,
    "color1": "#e3171f",
    "color2": "#f2f2f2",
    "aliases": [
      "galo da praia"
    ]
  },
  {
    "id": "csa",
    "name": "CSA",
    "short": "CSA",
    "city": "Maceió",
    "uf": "AL",
    "country": "BR",
    "lat": -9.65,
    "lon": -35.72,
    "color1": "#1453a3",
    "color2": "#f2f2f2",
    "aliases": [
      "azulão"
    ]
  },
  {
    "id": "abc",
    "name": "ABC",
    "short": "ABC",
    "city": "Natal",
    "uf": "RN",
    "country": "BR",
    "lat": -5.79,
    "lon": -35.21,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "abc natal"
    ]
  },
  {
    "id": "amazonas",
    "name": "Amazonas",
    "short": "AMZ",
    "city": "Manaus",
    "uf": "AM",
    "country": "BR",
    "lat": -3.1,
    "lon": -60.02,
    "color1": "#f6c400",
    "color2": "#111111",
    "aliases": [
      "amazonas fc",
      "onça"
    ]
  },
  {
    "id": "real-madrid",
    "name": "Real Madrid",
    "short": "RMA",
    "city": "Madri",
    "uf": "ESP",
    "country": "ES",
    "lat": 40.453,
    "lon": -3.688,
    "color1": "#f2f2f2",
    "color2": "#d4af37",
    "aliases": [
      "real",
      "merengues"
    ]
  },
  {
    "id": "barcelona",
    "name": "Barcelona",
    "short": "BAR",
    "city": "Barcelona",
    "uf": "ESP",
    "country": "ES",
    "lat": 41.381,
    "lon": 2.123,
    "color1": "#a50044",
    "color2": "#004d98",
    "aliases": [
      "barça",
      "barca",
      "fc barcelona"
    ]
  },
  {
    "id": "atletico-madrid",
    "name": "Atlético de Madrid",
    "short": "ATM",
    "city": "Madri",
    "uf": "ESP",
    "country": "ES",
    "lat": 40.436,
    "lon": -3.599,
    "color1": "#cb3524",
    "color2": "#f2f2f2",
    "aliases": [
      "atletico madrid",
      "atleti",
      "colchoneros"
    ]
  },
  {
    "id": "sevilla",
    "name": "Sevilla",
    "short": "SEV",
    "city": "Sevilha",
    "uf": "ESP",
    "country": "ES",
    "lat": 37.384,
    "lon": -5.971,
    "color1": "#f2f2f2",
    "color2": "#d4021d",
    "aliases": [
      "sevilha"
    ]
  },
  {
    "id": "manchester-united",
    "name": "Manchester United",
    "short": "MUN",
    "city": "Manchester",
    "uf": "ING",
    "country": "GB",
    "lat": 53.463,
    "lon": -2.291,
    "color1": "#da291c",
    "color2": "#111111",
    "aliases": [
      "man united",
      "united",
      "manchester utd"
    ]
  },
  {
    "id": "manchester-city",
    "name": "Manchester City",
    "short": "MCI",
    "city": "Manchester",
    "uf": "ING",
    "country": "GB",
    "lat": 53.483,
    "lon": -2.2,
    "color1": "#6cabdd",
    "color2": "#1c2c5b",
    "aliases": [
      "man city",
      "city"
    ]
  },
  {
    "id": "liverpool",
    "name": "Liverpool",
    "short": "LIV",
    "city": "Liverpool",
    "uf": "ING",
    "country": "GB",
    "lat": 53.431,
    "lon": -2.961,
    "color1": "#c8102e",
    "color2": "#f2f2f2",
    "aliases": [
      "reds"
    ]
  },
  {
    "id": "arsenal",
    "name": "Arsenal",
    "short": "ARS",
    "city": "Londres",
    "uf": "ING",
    "country": "GB",
    "lat": 51.555,
    "lon": -0.108,
    "color1": "#ef0107",
    "color2": "#f2f2f2",
    "aliases": [
      "gunners"
    ]
  },
  {
    "id": "chelsea",
    "name": "Chelsea",
    "short": "CHE",
    "city": "Londres",
    "uf": "ING",
    "country": "GB",
    "lat": 51.482,
    "lon": -0.191,
    "color1": "#034694",
    "color2": "#f2f2f2",
    "aliases": [
      "blues"
    ]
  },
  {
    "id": "tottenham",
    "name": "Tottenham",
    "short": "TOT",
    "city": "Londres",
    "uf": "ING",
    "country": "GB",
    "lat": 51.604,
    "lon": -0.066,
    "color1": "#f2f2f2",
    "color2": "#132257",
    "aliases": [
      "spurs"
    ]
  },
  {
    "id": "newcastle",
    "name": "Newcastle",
    "short": "NEW",
    "city": "Newcastle",
    "uf": "ING",
    "country": "GB",
    "lat": 54.976,
    "lon": -1.622,
    "color1": "#111111",
    "color2": "#f2f2f2",
    "aliases": [
      "magpies"
    ]
  },
  {
    "id": "juventus",
    "name": "Juventus",
    "short": "JUVE",
    "city": "Turim",
    "uf": "ITA",
    "country": "IT",
    "lat": 45.11,
    "lon": 7.641,
    "color1": "#111111",
    "color2": "#f2f2f2",
    "aliases": [
      "juve"
    ]
  },
  {
    "id": "milan",
    "name": "Milan",
    "short": "MIL",
    "city": "Milão",
    "uf": "ITA",
    "country": "IT",
    "lat": 45.478,
    "lon": 9.124,
    "color1": "#fb090b",
    "color2": "#111111",
    "aliases": [
      "ac milan",
      "rossoneri"
    ]
  },
  {
    "id": "inter-milao",
    "name": "Inter de Milão",
    "short": "INM",
    "city": "Milão",
    "uf": "ITA",
    "country": "IT",
    "lat": 45.478,
    "lon": 9.124,
    "color1": "#0068a8",
    "color2": "#111111",
    "aliases": [
      "inter de milao",
      "internazionale",
      "nerazzurri"
    ]
  },
  {
    "id": "napoli",
    "name": "Napoli",
    "short": "NAP",
    "city": "Nápoles",
    "uf": "ITA",
    "country": "IT",
    "lat": 40.828,
    "lon": 14.193,
    "color1": "#12a0d7",
    "color2": "#f2f2f2",
    "aliases": [
      "napoles"
    ]
  },
  {
    "id": "roma",
    "name": "Roma",
    "short": "ROM",
    "city": "Roma",
    "uf": "ITA",
    "country": "IT",
    "lat": 41.934,
    "lon": 12.455,
    "color1": "#8e1f2f",
    "color2": "#f0bc42",
    "aliases": [
      "as roma",
      "giallorossi"
    ]
  },
  {
    "id": "bayern",
    "name": "Bayern de Munique",
    "short": "BAY",
    "city": "Munique",
    "uf": "ALE",
    "country": "DE",
    "lat": 48.219,
    "lon": 11.625,
    "color1": "#dc052d",
    "color2": "#f2f2f2",
    "aliases": [
      "bayern munique",
      "bayern"
    ]
  },
  {
    "id": "dortmund",
    "name": "Borussia Dortmund",
    "short": "BVB",
    "city": "Dortmund",
    "uf": "ALE",
    "country": "DE",
    "lat": 51.493,
    "lon": 7.452,
    "color1": "#fde100",
    "color2": "#111111",
    "aliases": [
      "borussia",
      "bvb"
    ]
  },
  {
    "id": "psg",
    "name": "Paris Saint-Germain",
    "short": "PSG",
    "city": "Paris",
    "uf": "FRA",
    "country": "FR",
    "lat": 48.841,
    "lon": 2.253,
    "color1": "#004170",
    "color2": "#da291c",
    "aliases": [
      "paris",
      "paris saint germain"
    ]
  },
  {
    "id": "marseille",
    "name": "Olympique de Marseille",
    "short": "OM",
    "city": "Marselha",
    "uf": "FRA",
    "country": "FR",
    "lat": 43.27,
    "lon": 5.396,
    "color1": "#2faee0",
    "color2": "#f2f2f2",
    "aliases": [
      "marselha",
      "om"
    ]
  },
  {
    "id": "benfica",
    "name": "Benfica",
    "short": "BEN",
    "city": "Lisboa",
    "uf": "POR",
    "country": "PT",
    "lat": 38.753,
    "lon": -9.185,
    "color1": "#e3171f",
    "color2": "#f2f2f2",
    "aliases": [
      "slb",
      "encarnados"
    ]
  },
  {
    "id": "sporting",
    "name": "Sporting",
    "short": "SCP",
    "city": "Lisboa",
    "uf": "POR",
    "country": "PT",
    "lat": 38.761,
    "lon": -9.161,
    "color1": "#0a8f4a",
    "color2": "#f2f2f2",
    "aliases": [
      "sporting lisboa",
      "leões"
    ]
  },
  {
    "id": "porto",
    "name": "Porto",
    "short": "FCP",
    "city": "Porto",
    "uf": "POR",
    "country": "PT",
    "lat": 41.162,
    "lon": -8.584,
    "color1": "#003893",
    "color2": "#f2f2f2",
    "aliases": [
      "fc porto",
      "dragões"
    ]
  },
  {
    "id": "aston-villa",
    "name": "Aston Villa",
    "short": "AVL",
    "city": "Birmingham",
    "uf": "GB",
    "country": "GB",
    "lat": 52.486,
    "lon": -1.89,
    "color1": "#670e36",
    "color2": "#95bfe5",
    "aliases": [
      "villa"
    ],
    "location_precision": "city"
  },
  {
    "id": "west-ham",
    "name": "West Ham United",
    "short": "WHU",
    "city": "Londres",
    "uf": "GB",
    "country": "GB",
    "lat": 51.507,
    "lon": -0.128,
    "color1": "#7a263a",
    "color2": "#1bb1e7",
    "aliases": [
      "west ham",
      "hammers"
    ],
    "location_precision": "city"
  },
  {
    "id": "nottingham-forest",
    "name": "Nottingham Forest",
    "short": "NFO",
    "city": "Nottingham",
    "uf": "GB",
    "country": "GB",
    "lat": 52.954,
    "lon": -1.158,
    "color1": "#dd0000",
    "color2": "#ffffff",
    "aliases": [
      "nottingham",
      "forest"
    ],
    "location_precision": "city"
  },
  {
    "id": "brighton",
    "name": "Brighton & Hove Albion",
    "short": "BHA",
    "city": "Brighton",
    "uf": "GB",
    "country": "GB",
    "lat": 50.823,
    "lon": -0.137,
    "color1": "#0057b8",
    "color2": "#ffffff",
    "aliases": [
      "brighton"
    ],
    "location_precision": "city"
  },
  {
    "id": "athletic-bilbao",
    "name": "Athletic Bilbao",
    "short": "ATH",
    "city": "Bilbao",
    "uf": "ES",
    "country": "ES",
    "lat": 43.263,
    "lon": -2.935,
    "color1": "#ee2523",
    "color2": "#ffffff",
    "aliases": [
      "athletic club",
      "bilbao"
    ],
    "location_precision": "city"
  },
  {
    "id": "real-sociedad",
    "name": "Real Sociedad",
    "short": "RSO",
    "city": "San Sebastián",
    "uf": "ES",
    "country": "ES",
    "lat": 43.318,
    "lon": -1.981,
    "color1": "#0067b1",
    "color2": "#ffffff",
    "aliases": [
      "sociedad"
    ],
    "location_precision": "city"
  },
  {
    "id": "real-betis",
    "name": "Real Betis",
    "short": "BET",
    "city": "Sevilha",
    "uf": "ES",
    "country": "ES",
    "lat": 37.389,
    "lon": -5.984,
    "color1": "#00954c",
    "color2": "#ffffff",
    "aliases": [
      "betis"
    ],
    "location_precision": "city"
  },
  {
    "id": "valencia",
    "name": "Valencia",
    "short": "VAL",
    "city": "Valência",
    "uf": "ES",
    "country": "ES",
    "lat": 39.47,
    "lon": -0.376,
    "color1": "#ffffff",
    "color2": "#111111",
    "aliases": [
      "valencia cf"
    ],
    "location_precision": "city"
  },
  {
    "id": "villarreal",
    "name": "Villarreal",
    "short": "VIL",
    "city": "Vila-real",
    "uf": "ES",
    "country": "ES",
    "lat": 39.938,
    "lon": -0.102,
    "color1": "#ffe667",
    "color2": "#005187",
    "aliases": [
      "submarino amarelo"
    ],
    "location_precision": "city"
  },
  {
    "id": "atalanta",
    "name": "Atalanta",
    "short": "ATA",
    "city": "Bérgamo",
    "uf": "IT",
    "country": "IT",
    "lat": 45.698,
    "lon": 9.677,
    "color1": "#1e71b8",
    "color2": "#111111",
    "aliases": [
      "atalanta bergamo"
    ],
    "location_precision": "city"
  },
  {
    "id": "lazio",
    "name": "Lazio",
    "short": "LAZ",
    "city": "Roma",
    "uf": "IT",
    "country": "IT",
    "lat": 41.903,
    "lon": 12.496,
    "color1": "#87d8f7",
    "color2": "#ffffff",
    "aliases": [
      "ss lazio"
    ],
    "location_precision": "city"
  },
  {
    "id": "fiorentina",
    "name": "Fiorentina",
    "short": "FIO",
    "city": "Florença",
    "uf": "IT",
    "country": "IT",
    "lat": 43.77,
    "lon": 11.256,
    "color1": "#5f259f",
    "color2": "#ffffff",
    "aliases": [
      "viola"
    ],
    "location_precision": "city"
  },
  {
    "id": "bologna",
    "name": "Bologna",
    "short": "BOL",
    "city": "Bolonha",
    "uf": "IT",
    "country": "IT",
    "lat": 44.494,
    "lon": 11.343,
    "color1": "#a21c26",
    "color2": "#1a2f48",
    "aliases": [
      "bolonha"
    ],
    "location_precision": "city"
  },
  {
    "id": "bayer-leverkusen",
    "name": "Bayer Leverkusen",
    "short": "B04",
    "city": "Leverkusen",
    "uf": "DE",
    "country": "DE",
    "lat": 51.045,
    "lon": 7.02,
    "color1": "#e32221",
    "color2": "#111111",
    "aliases": [
      "leverkusen",
      "bayer 04"
    ],
    "location_precision": "city"
  },
  {
    "id": "rb-leipzig",
    "name": "RB Leipzig",
    "short": "RBL",
    "city": "Leipzig",
    "uf": "DE",
    "country": "DE",
    "lat": 51.34,
    "lon": 12.373,
    "color1": "#dd0741",
    "color2": "#ffffff",
    "aliases": [
      "leipzig"
    ],
    "location_precision": "city"
  },
  {
    "id": "frankfurt",
    "name": "Eintracht Frankfurt",
    "short": "SGE",
    "city": "Frankfurt",
    "uf": "DE",
    "country": "DE",
    "lat": 50.111,
    "lon": 8.682,
    "color1": "#e1000f",
    "color2": "#111111",
    "aliases": [
      "eintracht",
      "frankfurt"
    ],
    "location_precision": "city"
  },
  {
    "id": "stuttgart",
    "name": "Stuttgart",
    "short": "VFB",
    "city": "Stuttgart",
    "uf": "DE",
    "country": "DE",
    "lat": 48.775,
    "lon": 9.182,
    "color1": "#ffffff",
    "color2": "#e32219",
    "aliases": [
      "vfb stuttgart"
    ],
    "location_precision": "city"
  },
  {
    "id": "lyon",
    "name": "Olympique Lyonnais",
    "short": "OL",
    "city": "Lyon",
    "uf": "FR",
    "country": "FR",
    "lat": 45.764,
    "lon": 4.835,
    "color1": "#ffffff",
    "color2": "#da001a",
    "aliases": [
      "lyon"
    ],
    "location_precision": "city"
  },
  {
    "id": "monaco",
    "name": "Monaco",
    "short": "ASM",
    "city": "Mônaco",
    "uf": "MC",
    "country": "MC",
    "lat": 43.738,
    "lon": 7.425,
    "color1": "#e31b23",
    "color2": "#ffffff",
    "aliases": [
      "as monaco"
    ],
    "location_precision": "city"
  },
  {
    "id": "lille",
    "name": "Lille",
    "short": "LOSC",
    "city": "Lille",
    "uf": "FR",
    "country": "FR",
    "lat": 50.629,
    "lon": 3.057,
    "color1": "#e01e13",
    "color2": "#172a53",
    "aliases": [
      "losc"
    ],
    "location_precision": "city"
  },
  {
    "id": "nice",
    "name": "Nice",
    "short": "OGCN",
    "city": "Nice",
    "uf": "FR",
    "country": "FR",
    "lat": 43.71,
    "lon": 7.262,
    "color1": "#ed1c24",
    "color2": "#111111",
    "aliases": [
      "ogc nice"
    ],
    "location_precision": "city"
  },
  {
    "id": "braga",
    "name": "Braga",
    "short": "SCB",
    "city": "Braga",
    "uf": "PT",
    "country": "PT",
    "lat": 41.551,
    "lon": -8.426,
    "color1": "#e30613",
    "color2": "#ffffff",
    "aliases": [
      "sporting braga",
      "sc braga"
    ],
    "location_precision": "city"
  },
  {
    "id": "vitoria-guimaraes",
    "name": "Vitória de Guimarães",
    "short": "VSC",
    "city": "Guimarães",
    "uf": "PT",
    "country": "PT",
    "lat": 41.443,
    "lon": -8.293,
    "color1": "#ffffff",
    "color2": "#111111",
    "aliases": [
      "vitoria guimaraes",
      "vitoria sc"
    ],
    "location_precision": "city"
  },
  {
    "id": "ajax",
    "name": "Ajax",
    "short": "AJA",
    "city": "Amsterdã",
    "uf": "NL",
    "country": "NL",
    "lat": 52.367,
    "lon": 4.904,
    "color1": "#d2122e",
    "color2": "#ffffff",
    "aliases": [
      "ajax amsterdam"
    ],
    "location_precision": "city"
  },
  {
    "id": "psv",
    "name": "PSV Eindhoven",
    "short": "PSV",
    "city": "Eindhoven",
    "uf": "NL",
    "country": "NL",
    "lat": 51.441,
    "lon": 5.469,
    "color1": "#ed1c24",
    "color2": "#ffffff",
    "aliases": [
      "psv eindhoven"
    ],
    "location_precision": "city"
  },
  {
    "id": "feyenoord",
    "name": "Feyenoord",
    "short": "FEY",
    "city": "Roterdã",
    "uf": "NL",
    "country": "NL",
    "lat": 51.924,
    "lon": 4.478,
    "color1": "#ffffff",
    "color2": "#e31e24",
    "aliases": [
      "feyenoord rotterdam"
    ],
    "location_precision": "city"
  },
  {
    "id": "celtic",
    "name": "Celtic",
    "short": "CEL",
    "city": "Glasgow",
    "uf": "GB",
    "country": "GB",
    "lat": 55.864,
    "lon": -4.252,
    "color1": "#018749",
    "color2": "#ffffff",
    "aliases": [
      "celtic glasgow"
    ],
    "location_precision": "city"
  },
  {
    "id": "rangers",
    "name": "Rangers",
    "short": "RAN",
    "city": "Glasgow",
    "uf": "GB",
    "country": "GB",
    "lat": 55.864,
    "lon": -4.252,
    "color1": "#0033a0",
    "color2": "#ffffff",
    "aliases": [
      "glasgow rangers"
    ],
    "location_precision": "city"
  },
  {
    "id": "boca-juniors",
    "name": "Boca Juniors",
    "short": "BOC",
    "city": "Buenos Aires",
    "uf": "AR",
    "country": "AR",
    "lat": -34.604,
    "lon": -58.382,
    "color1": "#003b7a",
    "color2": "#f7b600",
    "aliases": [
      "boca",
      "xeneize"
    ],
    "location_precision": "city"
  },
  {
    "id": "river-plate",
    "name": "River Plate",
    "short": "RIV",
    "city": "Buenos Aires",
    "uf": "AR",
    "country": "AR",
    "lat": -34.604,
    "lon": -58.382,
    "color1": "#ffffff",
    "color2": "#ed1c24",
    "aliases": [
      "river",
      "millonarios"
    ],
    "location_precision": "city"
  },
  {
    "id": "racing-argentina",
    "name": "Racing Club",
    "short": "RAC",
    "city": "Avellaneda",
    "uf": "AR",
    "country": "AR",
    "lat": -34.662,
    "lon": -58.365,
    "color1": "#75aadb",
    "color2": "#ffffff",
    "aliases": [
      "racing",
      "racing avellaneda"
    ],
    "location_precision": "city"
  },
  {
    "id": "independiente",
    "name": "Independiente",
    "short": "IND",
    "city": "Avellaneda",
    "uf": "AR",
    "country": "AR",
    "lat": -34.662,
    "lon": -58.365,
    "color1": "#e30613",
    "color2": "#ffffff",
    "aliases": [
      "independiente avellaneda",
      "rojo"
    ],
    "location_precision": "city"
  },
  {
    "id": "san-lorenzo",
    "name": "San Lorenzo",
    "short": "SLO",
    "city": "Buenos Aires",
    "uf": "AR",
    "country": "AR",
    "lat": -34.604,
    "lon": -58.382,
    "color1": "#173b79",
    "color2": "#e31b23",
    "aliases": [
      "san lorenzo",
      "cuervo"
    ],
    "location_precision": "city"
  },
  {
    "id": "estudiantes",
    "name": "Estudiantes de La Plata",
    "short": "EST",
    "city": "La Plata",
    "uf": "AR",
    "country": "AR",
    "lat": -34.921,
    "lon": -57.954,
    "color1": "#e31b23",
    "color2": "#ffffff",
    "aliases": [
      "estudiantes",
      "pincha"
    ],
    "location_precision": "city"
  },
  {
    "id": "velez",
    "name": "Vélez Sarsfield",
    "short": "VEL",
    "city": "Buenos Aires",
    "uf": "AR",
    "country": "AR",
    "lat": -34.604,
    "lon": -58.382,
    "color1": "#ffffff",
    "color2": "#003b7a",
    "aliases": [
      "velez",
      "velez sarsfield"
    ],
    "location_precision": "city"
  },
  {
    "id": "rosario-central",
    "name": "Rosario Central",
    "short": "ROS",
    "city": "Rosário",
    "uf": "AR",
    "country": "AR",
    "lat": -32.947,
    "lon": -60.639,
    "color1": "#004b8d",
    "color2": "#ffdd00",
    "aliases": [
      "rosario central",
      "canalla"
    ],
    "location_precision": "city"
  },
  {
    "id": "newells",
    "name": "Newell's Old Boys",
    "short": "NOB",
    "city": "Rosário",
    "uf": "AR",
    "country": "AR",
    "lat": -32.947,
    "lon": -60.639,
    "color1": "#e30613",
    "color2": "#111111",
    "aliases": [
      "newells",
      "newells old boys"
    ],
    "location_precision": "city"
  },
  {
    "id": "penarol",
    "name": "Peñarol",
    "short": "PEN",
    "city": "Montevidéu",
    "uf": "UY",
    "country": "UY",
    "lat": -34.901,
    "lon": -56.165,
    "color1": "#ffcf00",
    "color2": "#111111",
    "aliases": [
      "penarol",
      "manya"
    ],
    "location_precision": "city"
  },
  {
    "id": "nacional-uruguai",
    "name": "Nacional do Uruguai",
    "short": "NAC",
    "city": "Montevidéu",
    "uf": "UY",
    "country": "UY",
    "lat": -34.901,
    "lon": -56.165,
    "color1": "#ffffff",
    "color2": "#003b7a",
    "aliases": [
      "nacional uruguai",
      "nacional montevideo"
    ],
    "location_precision": "city"
  },
  {
    "id": "olimpia",
    "name": "Olimpia",
    "short": "OLI",
    "city": "Assunção",
    "uf": "PY",
    "country": "PY",
    "lat": -25.264,
    "lon": -57.575,
    "color1": "#ffffff",
    "color2": "#111111",
    "aliases": [
      "olimpia asuncion",
      "olimpia paraguai"
    ],
    "location_precision": "city"
  },
  {
    "id": "cerro-porteno",
    "name": "Cerro Porteño",
    "short": "CCP",
    "city": "Assunção",
    "uf": "PY",
    "country": "PY",
    "lat": -25.264,
    "lon": -57.575,
    "color1": "#003b7a",
    "color2": "#e31b23",
    "aliases": [
      "cerro porteno",
      "cerro"
    ],
    "location_precision": "city"
  },
  {
    "id": "libertad",
    "name": "Libertad",
    "short": "LIB",
    "city": "Assunção",
    "uf": "PY",
    "country": "PY",
    "lat": -25.264,
    "lon": -57.575,
    "color1": "#111111",
    "color2": "#ffffff",
    "aliases": [
      "libertad paraguai"
    ],
    "location_precision": "city"
  },
  {
    "id": "colo-colo",
    "name": "Colo-Colo",
    "short": "COL",
    "city": "Santiago",
    "uf": "CL",
    "country": "CL",
    "lat": -33.449,
    "lon": -70.669,
    "color1": "#ffffff",
    "color2": "#111111",
    "aliases": [
      "colo colo",
      "colocolo"
    ],
    "location_precision": "city"
  },
  {
    "id": "universidad-chile",
    "name": "Universidad de Chile",
    "short": "UCH",
    "city": "Santiago",
    "uf": "CL",
    "country": "CL",
    "lat": -33.449,
    "lon": -70.669,
    "color1": "#003b7a",
    "color2": "#e31b23",
    "aliases": [
      "universidad de chile",
      "la u chile"
    ],
    "location_precision": "city"
  },
  {
    "id": "universidad-catolica",
    "name": "Universidad Católica",
    "short": "UC",
    "city": "Santiago",
    "uf": "CL",
    "country": "CL",
    "lat": -33.449,
    "lon": -70.669,
    "color1": "#ffffff",
    "color2": "#003b7a",
    "aliases": [
      "universidad catolica",
      "catolica chile"
    ],
    "location_precision": "city"
  },
  {
    "id": "atletico-nacional",
    "name": "Atlético Nacional",
    "short": "ATN",
    "city": "Medellín",
    "uf": "CO",
    "country": "CO",
    "lat": 6.244,
    "lon": -75.581,
    "color1": "#008c45",
    "color2": "#ffffff",
    "aliases": [
      "atletico nacional",
      "nacional medellin"
    ],
    "location_precision": "city"
  },
  {
    "id": "millonarios",
    "name": "Millonarios",
    "short": "MIL",
    "city": "Bogotá",
    "uf": "CO",
    "country": "CO",
    "lat": 4.711,
    "lon": -74.072,
    "color1": "#0052a4",
    "color2": "#ffffff",
    "aliases": [
      "millonarios bogota"
    ],
    "location_precision": "city"
  },
  {
    "id": "america-cali",
    "name": "América de Cali",
    "short": "ADC",
    "city": "Cali",
    "uf": "CO",
    "country": "CO",
    "lat": 3.452,
    "lon": -76.532,
    "color1": "#e30613",
    "color2": "#ffffff",
    "aliases": [
      "america de cali"
    ],
    "location_precision": "city"
  },
  {
    "id": "junior",
    "name": "Junior Barranquilla",
    "short": "JUN",
    "city": "Barranquilla",
    "uf": "CO",
    "country": "CO",
    "lat": 10.964,
    "lon": -74.796,
    "color1": "#e30613",
    "color2": "#ffffff",
    "aliases": [
      "junior barranquilla",
      "junior de barranquilla"
    ],
    "location_precision": "city"
  },
  {
    "id": "ldu",
    "name": "LDU Quito",
    "short": "LDU",
    "city": "Quito",
    "uf": "EC",
    "country": "EC",
    "lat": -0.181,
    "lon": -78.468,
    "color1": "#ffffff",
    "color2": "#e30613",
    "aliases": [
      "liga de quito",
      "ldu quito"
    ],
    "location_precision": "city"
  },
  {
    "id": "barcelona-equador",
    "name": "Barcelona de Guayaquil",
    "short": "BSC",
    "city": "Guayaquil",
    "uf": "EC",
    "country": "EC",
    "lat": -2.171,
    "lon": -79.922,
    "color1": "#ffdf00",
    "color2": "#111111",
    "aliases": [
      "barcelona guayaquil",
      "barcelona equador"
    ],
    "location_precision": "city"
  },
  {
    "id": "independiente-del-valle",
    "name": "Independiente del Valle",
    "short": "IDV",
    "city": "Sangolquí",
    "uf": "EC",
    "country": "EC",
    "lat": -0.334,
    "lon": -78.452,
    "color1": "#003b7a",
    "color2": "#111111",
    "aliases": [
      "independiente del valle",
      "idv"
    ],
    "location_precision": "city"
  },
  {
    "id": "alianza-lima",
    "name": "Alianza Lima",
    "short": "ALI",
    "city": "Lima",
    "uf": "PE",
    "country": "PE",
    "lat": -12.046,
    "lon": -77.043,
    "color1": "#002b5c",
    "color2": "#ffffff",
    "aliases": [
      "alianza lima"
    ],
    "location_precision": "city"
  },
  {
    "id": "universitario",
    "name": "Universitario",
    "short": "UNI",
    "city": "Lima",
    "uf": "PE",
    "country": "PE",
    "lat": -12.046,
    "lon": -77.043,
    "color1": "#fff4d6",
    "color2": "#8a1538",
    "aliases": [
      "universitario de deportes"
    ],
    "location_precision": "city"
  },
  {
    "id": "sporting-cristal",
    "name": "Sporting Cristal",
    "short": "SCR",
    "city": "Lima",
    "uf": "PE",
    "country": "PE",
    "lat": -12.046,
    "lon": -77.043,
    "color1": "#71c5e8",
    "color2": "#ffffff",
    "aliases": [
      "sporting cristal"
    ],
    "location_precision": "city"
  },
  {
    "id": "bolivar",
    "name": "Bolívar",
    "short": "BOL",
    "city": "La Paz",
    "uf": "BO",
    "country": "BO",
    "lat": -16.49,
    "lon": -68.119,
    "color1": "#71c5e8",
    "color2": "#ffffff",
    "aliases": [
      "bolivar"
    ],
    "location_precision": "city"
  },
  {
    "id": "strongest",
    "name": "The Strongest",
    "short": "STR",
    "city": "La Paz",
    "uf": "BO",
    "country": "BO",
    "lat": -16.49,
    "lon": -68.119,
    "color1": "#ffcf00",
    "color2": "#111111",
    "aliases": [
      "the strongest"
    ],
    "location_precision": "city"
  },
  {
    "id": "caracas",
    "name": "Caracas FC",
    "short": "CAR",
    "city": "Caracas",
    "uf": "VE",
    "country": "VE",
    "lat": 10.48,
    "lon": -66.904,
    "color1": "#e30613",
    "color2": "#111111",
    "aliases": [
      "caracas fc"
    ],
    "location_precision": "city"
  },
  {
    "id": "america-mexico",
    "name": "América do México",
    "short": "AME",
    "city": "Cidade do México",
    "uf": "MX",
    "country": "MX",
    "lat": 19.433,
    "lon": -99.133,
    "color1": "#fff4b8",
    "color2": "#002b5c",
    "aliases": [
      "club america",
      "america mexico",
      "america do mexico"
    ],
    "location_precision": "city"
  },
  {
    "id": "chivas",
    "name": "Chivas Guadalajara",
    "short": "CHI",
    "city": "Guadalajara",
    "uf": "MX",
    "country": "MX",
    "lat": 20.66,
    "lon": -103.35,
    "color1": "#e30613",
    "color2": "#ffffff",
    "aliases": [
      "chivas",
      "guadalajara"
    ],
    "location_precision": "city"
  },
  {
    "id": "cruz-azul",
    "name": "Cruz Azul",
    "short": "CAZ",
    "city": "Cidade do México",
    "uf": "MX",
    "country": "MX",
    "lat": 19.433,
    "lon": -99.133,
    "color1": "#0052a4",
    "color2": "#ffffff",
    "aliases": [
      "cruz azul"
    ],
    "location_precision": "city"
  },
  {
    "id": "pumas",
    "name": "Pumas UNAM",
    "short": "PUM",
    "city": "Cidade do México",
    "uf": "MX",
    "country": "MX",
    "lat": 19.433,
    "lon": -99.133,
    "color1": "#002b5c",
    "color2": "#c6a664",
    "aliases": [
      "pumas",
      "pumas unam"
    ],
    "location_precision": "city"
  },
  {
    "id": "monterrey",
    "name": "Monterrey",
    "short": "MTY",
    "city": "Monterrey",
    "uf": "MX",
    "country": "MX",
    "lat": 25.687,
    "lon": -100.316,
    "color1": "#002b5c",
    "color2": "#ffffff",
    "aliases": [
      "rayados",
      "monterrey"
    ],
    "location_precision": "city"
  },
  {
    "id": "tigres",
    "name": "Tigres UANL",
    "short": "TIG",
    "city": "San Nicolás de los Garza",
    "uf": "MX",
    "country": "MX",
    "lat": 25.75,
    "lon": -100.283,
    "color1": "#ffcf00",
    "color2": "#0052a4",
    "aliases": [
      "tigres",
      "tigres uanl"
    ],
    "location_precision": "city"
  },
  {
    "id": "inter-miami",
    "name": "Inter Miami",
    "short": "MIA",
    "city": "Miami",
    "uf": "US",
    "country": "US",
    "lat": 25.762,
    "lon": -80.192,
    "color1": "#f7b5cd",
    "color2": "#111111",
    "aliases": [
      "inter miami",
      "inter de miami"
    ],
    "location_precision": "city"
  },
  {
    "id": "la-galaxy",
    "name": "LA Galaxy",
    "short": "LAG",
    "city": "Los Angeles",
    "uf": "US",
    "country": "US",
    "lat": 34.052,
    "lon": -118.244,
    "color1": "#ffffff",
    "color2": "#002b5c",
    "aliases": [
      "la galaxy",
      "los angeles galaxy"
    ],
    "location_precision": "city"
  },
  {
    "id": "lafc",
    "name": "Los Angeles FC",
    "short": "LAFC",
    "city": "Los Angeles",
    "uf": "US",
    "country": "US",
    "lat": 34.052,
    "lon": -118.244,
    "color1": "#111111",
    "color2": "#c6a664",
    "aliases": [
      "lafc",
      "los angeles fc"
    ],
    "location_precision": "city"
  },
  {
    "id": "orlando-city",
    "name": "Orlando City",
    "short": "ORL",
    "city": "Orlando",
    "uf": "US",
    "country": "US",
    "lat": 28.538,
    "lon": -81.379,
    "color1": "#61259e",
    "color2": "#ffffff",
    "aliases": [
      "orlando city"
    ],
    "location_precision": "city"
  },
  {
    "id": "seattle-sounders",
    "name": "Seattle Sounders",
    "short": "SEA",
    "city": "Seattle",
    "uf": "US",
    "country": "US",
    "lat": 47.606,
    "lon": -122.332,
    "color1": "#5d9741",
    "color2": "#005695",
    "aliases": [
      "seattle sounders"
    ],
    "location_precision": "city"
  },
  {
    "id": "atlanta-united",
    "name": "Atlanta United",
    "short": "ATL",
    "city": "Atlanta",
    "uf": "US",
    "country": "US",
    "lat": 33.749,
    "lon": -84.388,
    "color1": "#80000a",
    "color2": "#111111",
    "aliases": [
      "atlanta united"
    ],
    "location_precision": "city"
  },
  {
    "id": "toronto-fc",
    "name": "Toronto FC",
    "short": "TFC",
    "city": "Toronto",
    "uf": "CA",
    "country": "CA",
    "lat": 43.653,
    "lon": -79.383,
    "color1": "#e31937",
    "color2": "#ffffff",
    "aliases": [
      "toronto fc"
    ],
    "location_precision": "city"
  },
  {
    "id": "vancouver-whitecaps",
    "name": "Vancouver Whitecaps",
    "short": "VAN",
    "city": "Vancouver",
    "uf": "CA",
    "country": "CA",
    "lat": 49.283,
    "lon": -123.121,
    "color1": "#ffffff",
    "color2": "#002b5c",
    "aliases": [
      "vancouver whitecaps"
    ],
    "location_precision": "city"
  },
  {
    "id": "al-nassr",
    "name": "Al Nassr",
    "short": "NAS",
    "city": "Riad",
    "uf": "SA",
    "country": "SA",
    "lat": 24.7136,
    "lon": 46.6753,
    "color1": "#f4d431",
    "color2": "#153b8e",
    "aliases": [
      "al nassr",
      "al-nassr",
      "al nasr"
    ],
    "location_precision": "city"
  },
  {
    "id": "al-hilal",
    "name": "Al Hilal",
    "short": "HIL",
    "city": "Riad",
    "uf": "SA",
    "country": "SA",
    "lat": 24.7136,
    "lon": 46.6753,
    "color1": "#1750c4",
    "color2": "#ffffff",
    "aliases": [
      "al hilal",
      "al-hilal"
    ],
    "location_precision": "city"
  },
  {
    "id": "al-ittihad",
    "name": "Al Ittihad",
    "short": "ITT",
    "city": "Jidá",
    "uf": "SA",
    "country": "SA",
    "lat": 21.5433,
    "lon": 39.1728,
    "color1": "#f6ca24",
    "color2": "#141414",
    "aliases": [
      "al ittihad",
      "al-ittihad"
    ],
    "location_precision": "city"
  },
  {
    "id": "al-ahli-saudi",
    "name": "Al Ahli Saudi",
    "short": "AHL",
    "city": "Jidá",
    "uf": "SA",
    "country": "SA",
    "lat": 21.5433,
    "lon": 39.1728,
    "color1": "#078144",
    "color2": "#ffffff",
    "aliases": [
      "al ahli saudi",
      "al ahli saudita"
    ],
    "location_precision": "city"
  },
  {
    "id": "al-ahly",
    "name": "Al Ahly",
    "short": "AHY",
    "city": "Cairo",
    "uf": "EG",
    "country": "EG",
    "lat": 30.0444,
    "lon": 31.2357,
    "color1": "#c92028",
    "color2": "#ffffff",
    "aliases": [
      "al ahly",
      "al-ahly",
      "al ahly cairo"
    ],
    "location_precision": "city"
  },
  {
    "id": "zamalek",
    "name": "Zamalek",
    "short": "ZAM",
    "city": "Gizé",
    "uf": "EG",
    "country": "EG",
    "lat": 30.0131,
    "lon": 31.2089,
    "color1": "#ffffff",
    "color2": "#d4212a",
    "aliases": [
      "zamalek"
    ],
    "location_precision": "city"
  },
  {
    "id": "mamelodi-sundowns",
    "name": "Mamelodi Sundowns",
    "short": "SUN",
    "city": "Pretória",
    "uf": "ZA",
    "country": "ZA",
    "lat": -25.7479,
    "lon": 28.2293,
    "color1": "#f4da1d",
    "color2": "#087842",
    "aliases": [
      "mamelodi",
      "sundowns",
      "mamelodi sundowns"
    ],
    "location_precision": "city"
  },
  {
    "id": "orlando-pirates",
    "name": "Orlando Pirates",
    "short": "PIR",
    "city": "Joanesburgo",
    "uf": "ZA",
    "country": "ZA",
    "lat": -26.2041,
    "lon": 28.0473,
    "color1": "#111111",
    "color2": "#ffffff",
    "aliases": [
      "orlando pirates",
      "pirates"
    ],
    "location_precision": "city"
  },
  {
    "id": "kaizer-chiefs",
    "name": "Kaizer Chiefs",
    "short": "KAI",
    "city": "Joanesburgo",
    "uf": "ZA",
    "country": "ZA",
    "lat": -26.2041,
    "lon": 28.0473,
    "color1": "#f6bd20",
    "color2": "#111111",
    "aliases": [
      "kaizer chiefs",
      "kaizer"
    ],
    "location_precision": "city"
  },
  {
    "id": "galatasaray",
    "name": "Galatasaray",
    "short": "GAL",
    "city": "Istambul",
    "uf": "TR",
    "country": "TR",
    "lat": 41.0082,
    "lon": 28.9784,
    "color1": "#ab1830",
    "color2": "#f6ac27",
    "aliases": [
      "galatasaray",
      "gala"
    ],
    "location_precision": "city"
  },
  {
    "id": "fenerbahce",
    "name": "Fenerbahçe",
    "short": "FEN",
    "city": "Istambul",
    "uf": "TR",
    "country": "TR",
    "lat": 41.0082,
    "lon": 28.9784,
    "color1": "#f4d832",
    "color2": "#132b55",
    "aliases": [
      "fenerbahce",
      "fenerbahçe",
      "fener"
    ],
    "location_precision": "city"
  },
  {
    "id": "besiktas",
    "name": "Beşiktaş",
    "short": "BES",
    "city": "Istambul",
    "uf": "TR",
    "country": "TR",
    "lat": 41.0082,
    "lon": 28.9784,
    "color1": "#111111",
    "color2": "#ffffff",
    "aliases": [
      "besiktas",
      "beşiktaş"
    ],
    "location_precision": "city"
  },
  {
    "id": "trabzonspor",
    "name": "Trabzonspor",
    "short": "TRA",
    "city": "Trebizonda",
    "uf": "TR",
    "country": "TR",
    "lat": 41.0027,
    "lon": 39.7168,
    "color1": "#6f1634",
    "color2": "#62b7dc",
    "aliases": [
      "trabzonspor",
      "trabzon"
    ],
    "location_precision": "city"
  },
  {
    "id": "club-brugge",
    "name": "Club Brugge",
    "short": "BRU",
    "city": "Bruges",
    "uf": "BE",
    "country": "BE",
    "lat": 51.2093,
    "lon": 3.2247,
    "color1": "#1764b3",
    "color2": "#111111",
    "aliases": [
      "club brugge",
      "brugge",
      "bruges"
    ],
    "location_precision": "city"
  },
  {
    "id": "anderlecht",
    "name": "Anderlecht",
    "short": "AND",
    "city": "Bruxelas",
    "uf": "BE",
    "country": "BE",
    "lat": 50.8503,
    "lon": 4.3517,
    "color1": "#69348b",
    "color2": "#ffffff",
    "aliases": [
      "anderlecht"
    ],
    "location_precision": "city"
  },
  {
    "id": "genk",
    "name": "Genk",
    "short": "GNK",
    "city": "Genk",
    "uf": "BE",
    "country": "BE",
    "lat": 50.964,
    "lon": 5.5001,
    "color1": "#1764bc",
    "color2": "#ffffff",
    "aliases": [
      "genk",
      "racing genk"
    ],
    "location_precision": "city"
  },
  {
    "id": "bodo-glimt",
    "name": "Bodø/Glimt",
    "short": "BOD",
    "city": "Bodø",
    "uf": "NO",
    "country": "NO",
    "lat": 67.2804,
    "lon": 14.4049,
    "color1": "#f6d622",
    "color2": "#111111",
    "aliases": [
      "bodo glimt",
      "bodø/glimt",
      "bodo",
      "glimt"
    ],
    "location_precision": "city"
  },
  {
    "id": "rosenborg",
    "name": "Rosenborg",
    "short": "ROS",
    "city": "Trondheim",
    "uf": "NO",
    "country": "NO",
    "lat": 63.4305,
    "lon": 10.3951,
    "color1": "#ffffff",
    "color2": "#111111",
    "aliases": [
      "rosenborg"
    ],
    "location_precision": "city"
  },
  {
    "id": "molde",
    "name": "Molde",
    "short": "MOL",
    "city": "Molde",
    "uf": "NO",
    "country": "NO",
    "lat": 62.7375,
    "lon": 7.1607,
    "color1": "#1763bd",
    "color2": "#ffffff",
    "aliases": [
      "molde"
    ],
    "location_precision": "city"
  },
  {
    "id": "olympiacos",
    "name": "Olympiacos",
    "short": "OLY",
    "city": "Pireu",
    "uf": "GR",
    "country": "GR",
    "lat": 37.942,
    "lon": 23.6469,
    "color1": "#d51b2b",
    "color2": "#ffffff",
    "aliases": [
      "olympiacos",
      "olympiakos"
    ],
    "location_precision": "city"
  },
  {
    "id": "panathinaikos",
    "name": "Panathinaikos",
    "short": "PAN",
    "city": "Atenas",
    "uf": "GR",
    "country": "GR",
    "lat": 37.9838,
    "lon": 23.7275,
    "color1": "#00884b",
    "color2": "#ffffff",
    "aliases": [
      "panathinaikos"
    ],
    "location_precision": "city"
  },
  {
    "id": "aek-athens",
    "name": "AEK Atenas",
    "short": "AEK",
    "city": "Atenas",
    "uf": "GR",
    "country": "GR",
    "lat": 37.9838,
    "lon": 23.7275,
    "color1": "#f3c72a",
    "color2": "#111111",
    "aliases": [
      "aek",
      "aek athens",
      "aek atenas"
    ],
    "location_precision": "city"
  },
  {
    "id": "raja-casablanca",
    "name": "Raja Casablanca",
    "short": "RAJ",
    "city": "Casablanca",
    "uf": "MA",
    "country": "MA",
    "lat": 33.5731,
    "lon": -7.5898,
    "color1": "#07804c",
    "color2": "#ffffff",
    "aliases": [
      "raja",
      "raja casablanca"
    ],
    "location_precision": "city"
  },
  {
    "id": "wydad-casablanca",
    "name": "Wydad Casablanca",
    "short": "WYD",
    "city": "Casablanca",
    "uf": "MA",
    "country": "MA",
    "lat": 33.5731,
    "lon": -7.5898,
    "color1": "#d2222c",
    "color2": "#ffffff",
    "aliases": [
      "wydad",
      "wydad casablanca"
    ],
    "location_precision": "city"
  },
  {
    "id": "esperance",
    "name": "Espérance de Tunis",
    "short": "EST",
    "city": "Túnis",
    "uf": "TN",
    "country": "TN",
    "lat": 36.8065,
    "lon": 10.1815,
    "color1": "#dd222b",
    "color2": "#f5cc26",
    "aliases": [
      "esperance",
      "espérance",
      "esperance tunis"
    ],
    "location_precision": "city"
  },
  {
    "id": "club-africain",
    "name": "Club Africain",
    "short": "CAF",
    "city": "Túnis",
    "uf": "TN",
    "country": "TN",
    "lat": 36.8065,
    "lon": 10.1815,
    "color1": "#dc202b",
    "color2": "#ffffff",
    "aliases": [
      "club africain"
    ],
    "location_precision": "city"
  },
  {
    "id": "urawa-reds",
    "name": "Urawa Red Diamonds",
    "short": "URA",
    "city": "Saitama",
    "uf": "JP",
    "country": "JP",
    "lat": 35.8617,
    "lon": 139.6455,
    "color1": "#d9222b",
    "color2": "#111111",
    "aliases": [
      "urawa",
      "urawa reds",
      "urawa red diamonds"
    ],
    "location_precision": "city"
  },
  {
    "id": "yokohama-marinos",
    "name": "Yokohama F. Marinos",
    "short": "YFM",
    "city": "Yokohama",
    "uf": "JP",
    "country": "JP",
    "lat": 35.4437,
    "lon": 139.638,
    "color1": "#1758ac",
    "color2": "#ffffff",
    "aliases": [
      "yokohama marinos",
      "yokohama f marinos",
      "marinos"
    ],
    "location_precision": "city"
  },
  {
    "id": "ulsan-hd",
    "name": "Ulsan HD",
    "short": "ULS",
    "city": "Ulsan",
    "uf": "KR",
    "country": "KR",
    "lat": 35.5384,
    "lon": 129.3114,
    "color1": "#1764b5",
    "color2": "#f1ce2b",
    "aliases": [
      "ulsan",
      "ulsan hd",
      "ulsan hyundai"
    ],
    "location_precision": "city"
  },
  {
    "id": "jeonbuk",
    "name": "Jeonbuk Hyundai Motors",
    "short": "JEO",
    "city": "Jeonju",
    "uf": "KR",
    "country": "KR",
    "lat": 35.8242,
    "lon": 127.148,
    "color1": "#078347",
    "color2": "#c5df31",
    "aliases": [
      "jeonbuk",
      "jeonbuk hyundai motors"
    ],
    "location_precision": "city"
  },
  {
    "id": "melbourne-victory",
    "name": "Melbourne Victory",
    "short": "MVC",
    "city": "Melbourne",
    "uf": "AU",
    "country": "AU",
    "lat": -37.8136,
    "lon": 144.9631,
    "color1": "#122e59",
    "color2": "#ffffff",
    "aliases": [
      "melbourne victory"
    ],
    "location_precision": "city"
  },
  {
    "id": "sydney-fc",
    "name": "Sydney FC",
    "short": "SYD",
    "city": "Sydney",
    "uf": "AU",
    "country": "AU",
    "lat": -33.8688,
    "lon": 151.2093,
    "color1": "#72bde8",
    "color2": "#183452",
    "aliases": [
      "sydney fc"
    ],
    "location_precision": "city"
  },
  {
    "id": "copenhagen",
    "name": "FC Copenhagen",
    "short": "FCK",
    "city": "Copenhague",
    "uf": "DK",
    "country": "DK",
    "lat": 55.6761,
    "lon": 12.5683,
    "color1": "#ffffff",
    "color2": "#1e428a",
    "aliases": [
      "copenhagen",
      "kobenhavn",
      "fc copenhagen"
    ],
    "location_precision": "city"
  },
  {
    "id": "brondby",
    "name": "Brøndby",
    "short": "BIF",
    "city": "Brøndby",
    "uf": "DK",
    "country": "DK",
    "lat": 55.645,
    "lon": 12.411,
    "color1": "#f5d225",
    "color2": "#16438e",
    "aliases": [
      "brondby",
      "brøndby"
    ],
    "location_precision": "city"
  },
  {
    "id": "rapid-vienna",
    "name": "Rapid Viena",
    "short": "RAP",
    "city": "Viena",
    "uf": "AT",
    "country": "AT",
    "lat": 48.2082,
    "lon": 16.3738,
    "color1": "#168149",
    "color2": "#ffffff",
    "aliases": [
      "rapid vienna",
      "rapid viena",
      "rapid wien"
    ],
    "location_precision": "city"
  },
  {
    "id": "salzburg",
    "name": "Red Bull Salzburg",
    "short": "RBS",
    "city": "Salzburgo",
    "uf": "AT",
    "country": "AT",
    "lat": 47.8095,
    "lon": 13.055,
    "color1": "#dd2234",
    "color2": "#ffffff",
    "aliases": [
      "salzburg",
      "red bull salzburg"
    ],
    "location_precision": "city"
  },
  {
    "id": "basel",
    "name": "Basel",
    "short": "BAS",
    "city": "Basileia",
    "uf": "CH",
    "country": "CH",
    "lat": 47.5596,
    "lon": 7.5886,
    "color1": "#17469a",
    "color2": "#cf2436",
    "aliases": [
      "basel",
      "basileia"
    ],
    "location_precision": "city"
  },
  {
    "id": "young-boys",
    "name": "Young Boys",
    "short": "YB",
    "city": "Berna",
    "uf": "CH",
    "country": "CH",
    "lat": 46.948,
    "lon": 7.4474,
    "color1": "#f5ca25",
    "color2": "#111111",
    "aliases": [
      "young boys"
    ],
    "location_precision": "city"
  }
];

;
window.CRESTS = {
  "flamengo": "assets/escudos/flamengo.png",
  "fluminense": "assets/escudos/fluminense.png",
  "vasco": "assets/escudos/vasco.png",
  "botafogo": "assets/escudos/botafogo.png",
  "corinthians": "assets/escudos/corinthians.png",
  "palmeiras": "assets/escudos/palmeiras.png",
  "sao-paulo": "assets/escudos/sao-paulo.png",
  "santos": "assets/escudos/santos.png",
  "bragantino": "assets/escudos/bragantino.png",
  "mirassol": "assets/escudos/mirassol.png",
  "guarani": "assets/escudos/guarani.png",
  "ponte-preta": "assets/escudos/ponte-preta.png",
  "novorizontino": "assets/escudos/novorizontino.png",
  "botafogo-sp": "assets/escudos/botafogo-sp.png",
  "gremio": "assets/escudos/gremio.png",
  "internacional": "assets/escudos/internacional.png",
  "juventude": "assets/escudos/juventude.png",
  "atletico-mg": "assets/escudos/atletico-mg.png",
  "cruzeiro": "assets/escudos/cruzeiro.png",
  "america-mg": "assets/escudos/america-mg.png",
  "bahia": "assets/escudos/bahia.png",
  "vitoria": "assets/escudos/vitoria.png",
  "fortaleza": "assets/escudos/fortaleza.png",
  "ceara": "assets/escudos/ceara.png",
  "sport": "assets/escudos/sport.png",
  "nautico": "assets/escudos/nautico.png",
  "santa-cruz": "assets/escudos/santa-cruz.png",
  "athletico-pr": "assets/escudos/athletico-pr.png",
  "coritiba": "assets/escudos/coritiba.png",
  "operario": "assets/escudos/operario.png",
  "goias": "assets/escudos/goias.png",
  "atletico-go": "assets/escudos/atletico-go.png",
  "vila-nova": "assets/escudos/vila-nova.png",
  "cuiaba": "assets/escudos/cuiaba.png",
  "chapecoense": "assets/escudos/chapecoense.png",
  "criciuma": "assets/escudos/criciuma.png",
  "avai": "assets/escudos/avai.png",
  "figueirense": "assets/escudos/figueirense.png",
  "remo": "assets/escudos/remo.png",
  "paysandu": "assets/escudos/paysandu.png",
  "crb": "assets/escudos/crb.png",
  "csa": "assets/escudos/csa.png",
  "abc": "assets/escudos/abc.png",
  "amazonas": "assets/escudos/amazonas.png",
  "real-madrid": "assets/escudos/real-madrid.png",
  "barcelona": "assets/escudos/barcelona.png",
  "atletico-madrid": "assets/escudos/atletico-madrid.png",
  "sevilla": "assets/escudos/sevilla.png",
  "manchester-united": "assets/escudos/manchester-united.png",
  "manchester-city": "assets/escudos/manchester-city.png",
  "liverpool": "assets/escudos/liverpool.png",
  "arsenal": "assets/escudos/arsenal.png",
  "chelsea": "assets/escudos/chelsea.png",
  "tottenham": "assets/escudos/tottenham.png",
  "newcastle": "assets/escudos/newcastle.png",
  "juventus": "assets/escudos/juventus.png",
  "milan": "assets/escudos/milan.png",
  "inter-milao": "assets/escudos/inter-milao.png",
  "napoli": "assets/escudos/napoli.png",
  "roma": "assets/escudos/roma.png",
  "bayern": "assets/escudos/bayern.png",
  "dortmund": "assets/escudos/dortmund.png",
  "psg": "assets/escudos/psg.png",
  "marseille": "assets/escudos/marseille.png",
  "benfica": "assets/escudos/benfica.png",
  "sporting": "assets/escudos/sporting.png",
  "porto": "assets/escudos/porto.png",
  "aston-villa": "assets/escudos/aston-villa.png",
  "west-ham": "assets/escudos/west-ham.png",
  "nottingham-forest": "assets/escudos/nottingham-forest.png",
  "brighton": "assets/escudos/brighton.png",
  "athletic-bilbao": "assets/escudos/athletic-bilbao.png",
  "real-sociedad": "assets/escudos/real-sociedad.png",
  "real-betis": "assets/escudos/real-betis.png",
  "valencia": "assets/escudos/valencia.png",
  "villarreal": "assets/escudos/villarreal.png",
  "atalanta": "assets/escudos/atalanta.png",
  "lazio": "assets/escudos/lazio.png",
  "fiorentina": "assets/escudos/fiorentina.png",
  "bologna": "assets/escudos/bologna.png",
  "bayer-leverkusen": "assets/escudos/bayer-leverkusen.png",
  "rb-leipzig": "assets/escudos/rb-leipzig.png",
  "frankfurt": "assets/escudos/frankfurt.png",
  "stuttgart": "assets/escudos/stuttgart.png",
  "lyon": "assets/escudos/lyon.png",
  "monaco": "assets/escudos/monaco.png",
  "lille": "assets/escudos/lille.png",
  "nice": "assets/escudos/nice.png",
  "braga": "assets/escudos/braga.png",
  "vitoria-guimaraes": "assets/escudos/vitoria-guimaraes.png",
  "ajax": "assets/escudos/ajax.png",
  "psv": "assets/escudos/psv.png",
  "feyenoord": "assets/escudos/feyenoord.png",
  "celtic": "assets/escudos/celtic.png",
  "rangers": "assets/escudos/rangers.png",
  "boca-juniors": "assets/escudos/boca-juniors.png",
  "river-plate": "assets/escudos/river-plate.png",
  "racing-argentina": "assets/escudos/racing-argentina.png",
  "independiente": "assets/escudos/independiente.png",
  "san-lorenzo": "assets/escudos/san-lorenzo.png",
  "estudiantes": "assets/escudos/estudiantes.png",
  "velez": "assets/escudos/velez.png",
  "rosario-central": "assets/escudos/rosario-central.png",
  "newells": "assets/escudos/newells.png",
  "penarol": "assets/escudos/penarol.png",
  "nacional-uruguai": "assets/escudos/nacional-uruguai.png",
  "olimpia": "assets/escudos/olimpia.png",
  "cerro-porteno": "assets/escudos/cerro-porteno.png",
  "libertad": "assets/escudos/libertad.png",
  "colo-colo": "assets/escudos/colo-colo.png",
  "universidad-chile": "assets/escudos/universidad-chile.png",
  "universidad-catolica": "assets/escudos/universidad-catolica.png",
  "atletico-nacional": "assets/escudos/atletico-nacional.png",
  "millonarios": "assets/escudos/millonarios.png",
  "america-cali": "assets/escudos/america-cali.png",
  "junior": "assets/escudos/junior.png",
  "ldu": "assets/escudos/ldu.png",
  "barcelona-equador": "assets/escudos/barcelona-equador.png",
  "independiente-del-valle": "assets/escudos/independiente-del-valle.png",
  "alianza-lima": "assets/escudos/alianza-lima.png",
  "universitario": "assets/escudos/universitario.png",
  "sporting-cristal": "assets/escudos/sporting-cristal.png",
  "bolivar": "assets/escudos/bolivar.png",
  "strongest": "assets/escudos/strongest.png",
  "caracas": "assets/escudos/caracas.png",
  "america-mexico": "assets/escudos/america-mexico.png",
  "chivas": "assets/escudos/chivas.png",
  "cruz-azul": "assets/escudos/cruz-azul.png",
  "pumas": "assets/escudos/pumas.png",
  "monterrey": "assets/escudos/monterrey.png",
  "tigres": "assets/escudos/tigres.png",
  "inter-miami": "assets/escudos/inter-miami.png",
  "la-galaxy": "assets/escudos/la-galaxy.png",
  "lafc": "assets/escudos/lafc.png",
  "orlando-city": "assets/escudos/orlando-city.png",
  "seattle-sounders": "assets/escudos/seattle-sounders.png",
  "atlanta-united": "assets/escudos/atlanta-united.png",
  "toronto-fc": "assets/escudos/toronto-fc.png",
  "vancouver-whitecaps": "assets/escudos/vancouver-whitecaps.png",
  "al-nassr": "assets/escudos/al-nassr.png",
  "al-hilal": "assets/escudos/al-hilal.png",
  "al-ittihad": "assets/escudos/al-ittihad.png",
  "al-ahli-saudi": "assets/escudos/al-ahli-saudi.png",
  "al-ahly": "assets/escudos/al-ahly.png",
  "mamelodi-sundowns": "assets/escudos/mamelodi-sundowns.png",
  "orlando-pirates": "assets/escudos/orlando-pirates.png",
  "kaizer-chiefs": "assets/escudos/kaizer-chiefs.png",
  "galatasaray": "assets/escudos/galatasaray.png",
  "fenerbahce": "assets/escudos/fenerbahce.png",
  "besiktas": "assets/escudos/besiktas.png",
  "trabzonspor": "assets/escudos/trabzonspor.png",
  "club-brugge": "assets/escudos/club-brugge.png",
  "anderlecht": "assets/escudos/anderlecht.png",
  "genk": "assets/escudos/genk.png",
  "bodo-glimt": "assets/escudos/bodo-glimt.png",
  "rosenborg": "assets/escudos/rosenborg.png",
  "molde": "assets/escudos/molde.png",
  "olympiacos": "assets/escudos/olympiacos.png",
  "panathinaikos": "assets/escudos/panathinaikos.png",
  "aek-athens": "assets/escudos/aek-athens.png",
  "wydad-casablanca": "assets/escudos/wydad-casablanca.png",
  "esperance": "assets/escudos/esperance.png",
  "urawa-reds": "assets/escudos/urawa-reds.png",
  "yokohama-marinos": "assets/escudos/yokohama-marinos.png",
  "ulsan-hd": "assets/escudos/ulsan-hd.png",
  "melbourne-victory": "assets/escudos/melbourne-victory.png",
  "sydney-fc": "assets/escudos/sydney-fc.png",
  "copenhagen": "assets/escudos/copenhagen.png",
  "brondby": "assets/escudos/brondby.png",
  "rapid-vienna": "assets/escudos/rapid-vienna.png",
  "salzburg": "assets/escudos/salzburg.png",
  "basel": "assets/escudos/basel.png",
  "young-boys": "assets/escudos/young-boys.png",
  "zamalek": "assets/escudos/zamalek.png",
  "raja-casablanca": "assets/escudos/raja-casablanca.png",
  "jeonbuk": "assets/escudos/jeonbuk.png",
  "club-africain": "assets/escudos/club-africain.png"
};

;
(function(root){
 const starts=[0,25,200,1000,5000],names=['Campinho','Arquibancada','Estádio','Arena','Mega Arena'];
 function read(params){
  const n=Number(params.get('nivel')),number=Number.isFinite(n)&&n>0?Math.max(1,Math.min(5,Math.trunc(n))):2,level=number-1;
  const value=Number(params.get('cadeiras')),chairs=params.has('cadeiras')&&Number.isFinite(value)?Math.max(starts[level],Math.min((starts[level+1]||100000)-1,Math.trunc(value))):starts[level];
  return {number,level,chairs};
 }
 const api={starts,names,read};if(typeof module==='object')module.exports=api;else root.ARENA_PREVIEW=api;
})(typeof window==='object'?window:{});

;
(()=>{
 const $=id=>document.getElementById(id),A=window.ARENA_SCENE,P=window.ARENA_PREVIEW,{starts,names}=P,teams=window.TEAMS_SEED,params=new URLSearchParams(location.search);
 let {level,chairs}=P.read(params),tilted=true,map,detail,mapLoaded=false,lastData,cutaway=params.get('corte')==='1',demoCrowd=params.get('torcida')==='1',crowdMarkers=[],arrivalMarker,arrivalTimer;
 const enabled=new Set((params.get('itens')||'').split(',').filter(id=>window.ARENA_ITEMS.catalog.some(i=>i.id===id)));
 for(const t of [...teams].sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'))){const o=document.createElement('option');o.value=t.id;o.textContent=t.name;$('club').append(o);}
 const requested=(params.get('preview')||'gremio').toLowerCase();$('club').value=teams.find(t=>t.id===(requested==='inter'?'internacional':requested))?.id||'gremio';
 // No accounts, game data or scoring API are loaded in this isolated preview.
 function fallback(message){$('map').classList.remove('ready');$('fallback').hidden=false;$('render-status').textContent=message;}
 function camera(){
  if(!mapLoaded)return;
  const r=$('map').getBoundingClientRect(),h=document.querySelector('header').getBoundingClientRect(),c=document.querySelector('.controls').getBoundingClientRect();
  const top=Math.min(h.bottom+12,r.height*.28),bottom=Math.min(r.height-c.top+12,r.height*.38);
  map.jumpTo({center:[0,0],zoom:enabled.size?15.7:level>=3?16.3:17.1,pitch:tilted?52:0,bearing:-30,padding:{top,bottom,left:16,right:16}});
 }
 function upload(){
  if(!mapLoaded)return;
  map.getSource('scene').setData({type:'FeatureCollection',features:lastData.features});detail.update(lastData,[0,0]);camera();
  crowdMarkers.forEach(m=>m.remove());crowdMarkers=[];for(const f of (lastData.crowd||[]).filter(f=>f.label)){const el=document.createElement('span');el.className='preview-fan';el.textContent=f.own?'● @'+f.h:f.president?'♛':'★';el.title=f.role+' · @'+f.h;crowdMarkers.push(new maplibregl.Marker({element:el,offset:[0,f.own?-42:-12]}).setLngLat(f.position).addTo(map));}
  map.once('idle',()=>{if(!mapLoaded)return;$('map').classList.add('ready');$('fallback').hidden=true;$('render-status').textContent=tilted?'3D · mapa de dia':'2D · vista de cima';});
 }
 function draw(){
  const selected=teams.find(t=>t.id===$('club').value),fans=demoCrowd?Array.from({length:Math.min(25,chairs)},(_,i)=>({h:i===0?'presidente_exemplo':i===1?'seu_perfil_exemplo':'torcedor_exemplo_'+i,cad:1,founderOrder:i+1})):[],club={...selected,level,cadeiras:chairs,center:[0,0],cutaway,fans,presidente:fans[0],lideres:fans.slice(2,5),visitorHandle:fans[1]?.h},state=A.construction(club);
  lastData=window.ARENA_ITEMS.compose(club,[...enabled]);
  // Show the same geometry immediately, even while WebGL loads or is unavailable.
  $('fallback').innerHTML=window.ARENA_RENDER.render(lastData,{compact:true});
  $('fallback').setAttribute('aria-label',selected.name+' · '+names[level]+' · prévia ilustrada');
  $('name').textContent=selected.name+' · '+names[level]+' · nível '+(level+1);
  $('compare-art').href='../laboratorio-arte/?preview='+encodeURIComponent(selected.id)+'&nivel='+(level+1);
  $('chairs').value=chairs;$('chairs').min=starts[level];$('chairs').max=starts[level+1]?starts[level+1]-1:100000;
  const filled=lastData.seats.filter(s=>s.filled).length;$('seat-count').textContent=filled.toLocaleString('pt-BR')+' lugares coloridos · '+(lastData.seats.length-filled).toLocaleString('pt-BR')+' vagas em cinza';$('seat-count').dataset.filled=filled;
  $('cutaway').setAttribute('aria-pressed',String(cutaway));
  $('demo-crowd').setAttribute('aria-pressed',String(demoCrowd));
  $('status').textContent=chairs.toLocaleString('pt-BR')+' cadeiras simuladas · '+(starts[level+1]?'faltam '+(starts[level+1]-chairs).toLocaleString('pt-BR')+' para '+names[level+1]:'nível máximo');
  $('stages').innerHTML=A.STAGES.filter(s=>s.level===level).map(s=>'<button data-chairs="'+s.min+'" aria-pressed="'+(state.id===s.id)+'" title="'+s.name+'">'+s.min+'</button>').join('');
  document.querySelectorAll('[data-level]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.level)===level));
  history.replaceState(null,'','?'+new URLSearchParams({preview:selected.id,nivel:String(level+1),cadeiras:String(chairs),...(cutaway?{corte:'1'}:{}),...(demoCrowd?{torcida:'1'}:{}),...(enabled.size?{itens:[...enabled].join(',')}:{})}));upload();
 }
 $('levels').innerHTML=names.map((n,i)=>'<button data-level="'+i+'">'+(i+1)+' · '+n+'</button>').join('');
 $('levels').onclick=e=>{if(e.target.dataset.level===undefined)return;level=Number(e.target.dataset.level);chairs=starts[level];draw();};
 $('stages').onclick=e=>{if(e.target.dataset.chairs===undefined)return;chairs=Number(e.target.dataset.chairs);draw();};$('club').onchange=draw;
 $('flat').onclick=()=>{tilted=false;camera();$('flat').setAttribute('aria-pressed','true');$('tilt').setAttribute('aria-pressed','false');};
 $('tilt').onclick=()=>{tilted=true;camera();$('flat').setAttribute('aria-pressed','false');$('tilt').setAttribute('aria-pressed','true');};
 $('rotate').onclick=()=>{if(mapLoaded)map.jumpTo({bearing:map.getBearing()+45});};
 for(const [id,step]of[['minus',-1],['plus',1]])$(id).onclick=()=>{if(!mapLoaded)return;map.stop();map.jumpTo({...window.MAP_LAYOUT.zoomCamera(map.getCenter().toArray(),map.getZoom(),step,14,20)});};
 document.querySelector('.controls').ondblclick=e=>e.stopPropagation();
 $('item-checks').innerHTML=window.ARENA_ITEMS.catalog.map(i=>'<label><input type="checkbox" data-item="'+i.id+'" '+(enabled.has(i.id)?'checked':'')+'>'+i.name+'</label>').join('');
 $('item-checks').onchange=e=>{const id=e.target.dataset.item;if(!id)return;if(e.target.checked)enabled.add(id);else enabled.delete(id);draw();};
 $('cutaway').onclick=()=>{cutaway=!cutaway;draw();};$('chairs').onchange=()=>{chairs=P.read(new URLSearchParams({nivel:String(level+1),cadeiras:$('chairs').value})).chairs;draw();};
 $('demo-crowd').onclick=()=>{demoCrowd=!demoCrowd;if(demoCrowd&&chairs===0)chairs=10;draw();};
 $('focus-avatar').onclick=()=>{if(!mapLoaded)return;if(!demoCrowd){demoCrowd=true;if(!chairs)chairs=10;draw();}const own=lastData.crowd.find(f=>f.own);if(own)map.jumpTo({center:own.position,zoom:19.5,pitch:52});};
 $('demo-arrival').onclick=()=>{if(!mapLoaded)return;arrivalMarker?.remove();clearTimeout(arrivalTimer);const el=document.createElement('div');el.className='preview-arrival';el.innerHTML='<span>🚶 +1 cadeira · SIMULAÇÃO</span>';arrivalMarker=new maplibregl.Marker({element:el}).setLngLat([0,window.ARENA_CROWD.gate({id:$('club').value,level})/111320]).addTo(map);arrivalTimer=setTimeout(()=>arrivalMarker?.remove(),6000);};
 draw();
 try{
  if(typeof maplibregl.supported==='function'&&!maplibregl.supported())throw new Error('WebGL indisponível');
  map=new maplibregl.Map({container:'map',style:{version:8,sources:{scene:{type:'geojson',data:{type:'FeatureCollection',features:[]}}},layers:[{id:'background',type:'background',paint:{'background-color':'#a7cf84'}},{id:'floor',type:'fill',source:'scene',filter:['==',['geometry-type'],'Polygon'],paint:{'fill-color':['get','ink']}},{id:'lines',type:'line',source:'scene',filter:['==',['geometry-type'],'LineString'],paint:{'line-color':'#f2f4da','line-width':['get','width']}},{id:'stadium-buildings',type:'fill-extrusion',source:'scene',filter:['all',['==',['geometry-type'],'Polygon'],['>',['get','height'],0]],paint:{'fill-extrusion-color':['get','ink'],'fill-extrusion-height':['get','height'],'fill-extrusion-base':['get','base']}}]},center:[0,0],zoom:16,pitch:52,bearing:-30,minZoom:14,maxZoom:20,attributionControl:false});
  map.on('load',()=>{mapLoaded=true;detail=window.ARENA_THREE.create(map);upload();});
  map.on('error',()=>fallback('Prévia ilustrada · o 3D não carregou neste navegador.'));
  map.getCanvas().addEventListener('webglcontextlost',()=>{mapLoaded=false;fallback('Prévia ilustrada · aceleração 3D interrompida. Reabra a página para tentar novamente.');});
  map.getCanvas().addEventListener('webglcontextrestored',()=>{mapLoaded=true;upload();});
  addEventListener('resize',()=>{map.resize();camera();});
 }catch(e){console.warn('Prévia 3D:',e.message);fallback('Prévia ilustrada · navegador sem aceleração 3D disponível.');}
})();

