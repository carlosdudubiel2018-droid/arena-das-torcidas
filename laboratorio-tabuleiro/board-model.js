(function(root){
 const angleZ=22/Math.hypot(22,18),angleY=18/Math.hypot(22,18),point=([lon,lat])=>({x:(lon+54.5)*.35,z:-(lat+14)*.35});
 function inside(p,ring){let yes=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const a=point(ring[i]),b=point(ring[j]);if((a.z>p.z)!==(b.z>p.z)&&p.x<(b.x-a.x)*(p.z-a.z)/(b.z-a.z)+a.x)yes=!yes;}return yes;}
 const zone=t=>t.uf==='RJ'?'rio':t.uf==='MG'||t.uf==='ES'?'minas':t.uf==='SP'?(['palmeiras','corinthians','santos','sao-paulo'].includes(t.id)?'capital':'interior'):t.uf==='PR'?'parana':['RS','SC'].includes(t.uf)?'sul':['MA','PI','CE','RN','PB','PE','AL','BA','SE'].includes(t.uf)?'nordeste':'centro-norte';
 const titles={rio:'Rio',minas:'Minas',capital:'Grandes de SP',interior:'Interior de SP',parana:'Paraná',sul:'Sul',nordeste:'Nordeste','centro-norte':'Centro-Oeste / Norte'};
 function nodes(data){const anchors={rio:[-42,-20.5],minas:[-44,-12],capital:[-49,-18],interior:[-57,-20],parana:[-52,-25],sul:[-53,-30],nordeste:[-39,-7],'centro-norte':[-62,-2]};const map=new Map();for(const t of data.teams){const k=zone(t);if(!map.has(k))map.set(k,[]);map.get(k).push(t);}const out=[...map].map(([id,teams])=>{teams.sort((a,b)=>b.cadeiras-a.cadeiras||a.rankAll-b.rankAll);const p=point(anchors[id]);return {id,title:titles[id],teams,team:teams[0],...p};});
  // Fixed artistic anchors preserve each region's relative position.
  return out;
 }
 function view(w,h,mobile=false,welcome=true){const top=mobile?55:63,bottom=mobile&&welcome?100:32,usable=Math.max(140,h-top-bottom),scale=Math.min((w-(mobile?34:45))/15.9,usable/12);return {w,h,scale,cx:w/2,cy:top+usable/2+7};}
 const project=(p,v,y=0)=>({x:v.cx+p.x*v.scale,y:v.cy+(p.z*angleZ-y*angleY)*v.scale});
 const random=seed=>()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};
 const value={point,inside,nodes,view,project,random,angleZ,angleY};if(typeof module!=='undefined')module.exports=value;else root.BOARD_MODEL=value;
})(typeof window!=='undefined'?window:this);

