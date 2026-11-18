/* Visual layout only. Geography, participation filter and road clearance. */
(function(root){
 const MAP_SCALE=150,HALF=16,GAP=4;
 const AM=new Set(['AR','UY','PY','CL','BO','PE','CO','EC','VE','US','MX','CA','CR','PA','HN','GT','SV','NI','BZ','CU','DO','HT','JM','TT','GY','SR','GF']);
 const zones={rio:'Rio de Janeiro',minas:'Minas e Espírito Santo',capital:'São Paulo',interior:'Interior de SP',parana:'Paraná',rs:'Rio Grande do Sul',sc:'Santa Catarina',nordeste:'Nordeste','centro-norte':'Norte e Centro-Oeste',americas:'Américas',mundo:'Europa e Mundo'};
 const point=([lon,lat],east=false)=>{const x=(lon+54.5)*.35-(east?2:0),z=-(lat+14)*.35;return east?{x:(11+(x-11)*.5)*MAP_SCALE,z:z*.5*MAP_SCALE}:{x:x*1.08*MAP_SCALE,z:z*1.08*MAP_SCALE};};
 const zone=t=>t.country!=='BR'?(AM.has(t.country)?'americas':'mundo'):t.uf==='RJ'?'rio':['MG','ES'].includes(t.uf)?'minas':t.uf==='SP'?(['palmeiras','corinthians','santos','sao-paulo'].includes(t.id)?'capital':'interior'):t.uf==='PR'?'parana':t.uf==='RS'?'rs':t.uf==='SC'?'sc':['MA','PI','CE','RN','PB','PE','AL','BA','SE'].includes(t.uf)?'nordeste':'centro-norte';
 const normalize=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const participating=teams=>teams.filter(t=>Number(t.cadeiras)>0);
 const box=a=>({minX:a.x-HALF,maxX:a.x+HALF,minZ:a.z-HALF,maxZ:a.z+HALF});
 function layout(teams,geo,land){
  const scale=p=>({outer:p.outer.map(([x,z])=>[x*MAP_SCALE,z*MAP_SCALE]),holes:(p.holes||[]).map(r=>r.map(([x,z])=>[x*MAP_SCALE,z*MAP_SCALE]))});
  const polygons=Object.fromEntries(['brazil','south','east','states'].map(k=>[k,geo[k].map(scale)]));
  const occupied=[],anchors={},groups=new Map();
  const fits=(ps,x,z)=>{for(const dx of [-HALF,0,HALF])for(const dz of [-HALF,0,HALF])if(!land.contains(ps,x+dx,z+dz))return false;return true;};
  for(const t of participating(teams).sort((a,b)=>a.id.localeCompare(b.id))){
   const k=zone(t),east=k==='mundo',ps=polygons[t.country==='BR'?'brazil':east?'east':'south'];
   let desired=Number.isFinite(+t.lon)&&Number.isFinite(+t.lat)?point([+t.lon,+t.lat],east):point(east?[-4,40]:[-66,-24],east);
   const real={...desired};let state=null;
   if(t.country==='BR')state=polygons.states.find(p=>land.contains([p],desired.x,desired.z))||polygons.states.slice().sort((a,b)=>Math.min(...a.outer.map(([x,z])=>Math.hypot(x-desired.x,z-desired.z)))-Math.min(...b.outer.map(([x,z])=>Math.hypot(x-desired.x,z-desired.z))))[0];
   // Clubs outside this first terrain stay in the labelled international area.
   if(t.country!=='BR'&&!land.contains(ps,desired.x,desired.z))desired=point(east?[-4,40]:[-66,-24],east);
   // Reserve actual ground for neighbours, rather than moving their labels apart.
   const spacing=t.uf==='SP'?60:HALF*2+GAP;
   let a=null;for(let radius=0;radius<=260&&!a;radius+=2){const count=radius?Math.max(32,Math.ceil(radius*2)):1;for(let j=0;j<count;j++){const angle=Math.PI+j/count*Math.PI*2,x=desired.x+Math.cos(angle)*radius,z=desired.z+Math.sin(angle)*radius;if(occupied.some(p=>(Math.abs(p.x-x)<HALF*2+GAP&&Math.abs(p.z-z)<HALF*2+GAP)||Math.hypot(p.x-x,p.z-z)<Math.max(spacing,p.spacing))||state&&!land.contains([state],x,z)||!fits(ps,x,z))continue;a={x,z,spacing};break;}}
   if(!a)throw Error('Sem terreno seguro perto de '+t.name);
   a.box=box(a);a.city=real;a.offset=Math.hypot(a.x-real.x,a.z-real.z);occupied.push(a);anchors[t.id]=a;
   if(!groups.has(k))groups.set(k,{id:k,title:zones[k],teams:[]});groups.get(k).teams.push(t);
  }
  for(const g of groups.values()){g.teams.sort((a,b)=>b.cadeiras-a.cadeiras||(a.rankAll||999)-(b.rankAll||999));g.team=g.teams[0];g.x=anchors[g.team.id].x;g.z=anchors[g.team.id].z;if(g.id==='americas'){const a=point([-59,-33]);g.x=a.x;g.z=a.z;g.title='AMÉRICAS · fora do Brasil';}}
  return {anchors,groups:[...groups.values()]};
 }
 function roadClear(a,b,anchors,land,polys){
  const distance=Math.hypot(b.x-a.x,b.z-a.z),steps=Math.ceil(distance/.5);
  for(let i=0;i<=steps;i++){const x=a.x+(b.x-a.x)*i/steps,z=a.z+(b.z-a.z)*i/steps;if(!land.contains(polys,x,z))return false;for(const n of Object.values(anchors)){const r=n.box;if(x>r.minX-1&&x<r.maxX+1&&z>r.minZ-1&&z<r.maxZ+1)return false;}}
  return true;
 }
 const api={layout,zone,point,normalize,participating,roadClear,MAP_SCALE,HALF};if(typeof module!=='undefined')module.exports=api;else root.ARENA_CATALOG=api;
})(typeof window!=='undefined'?window:globalThis);
