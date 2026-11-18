/* Geographic presentation only. Ranking and chair totals arrive unchanged. */
(function(root){
const az=22/Math.hypot(22,18),ay=18/Math.hypot(22,18);
const AM=new Set(['AR','UY','PY','CL','BO','PE','CO','EC','VE','US','MX','CA','CR','PA','HN','GT','SV','NI','BZ','CU','DO','HT','JM','TT','GY','SR','GF']);
const anchors={rio:[-41.5,-22.7],minas:[-44,-17.8],capital:[-46.7,-23.5],interior:[-50.5,-20.6],parana:[-51.1,-25.8],sul:[-53,-30.1],nordeste:[-39,-7],'centro-norte':[-62,-2]};
const titles={rio:'Rio de Janeiro',minas:'Minas e Espírito Santo',capital:'Grandes de São Paulo',interior:'Interior de São Paulo',parana:'Paraná',sul:'Sul',nordeste:'Nordeste','centro-norte':'Norte e Centro-Oeste'};
const point=([lon,lat],east=false)=>{const x=(lon+54.5)*.35-(east?2:0),z=-(lat+14)*.35;return east?{x:11+(x-11)*.50,z:z*.50}:{x:x*1.08,z:z*1.08};};
const zone=t=>t.uf==='RJ'?'rio':['MG','ES'].includes(t.uf)?'minas':t.uf==='SP'?(['palmeiras','corinthians','santos','sao-paulo'].includes(t.id)?'capital':'interior'):t.uf==='PR'?'parana':['RS','SC'].includes(t.uf)?'sul':['MA','PI','CE','RN','PB','PE','AL','BA','SE'].includes(t.uf)?'nordeste':'centro-norte';
function nodes(data){const groups=new Map();for(const t of data.teams.filter(t=>t.country==='BR')){const id=zone(t);if(!groups.has(id))groups.set(id,[]);groups.get(id).push(t);}const list=[...groups].map(([id,teams])=>({id,title:titles[id],teams,...point(anchors[id]),hub:false}));
list.push({id:'americas',title:'AMÉRICAS',teams:data.teams.filter(t=>t.country!=='BR'&&AM.has(t.country)&&t.cadeiras>0),...point([-66,-24]),hub:true},{id:'mundo',title:'EUROPA E MUNDO',teams:data.teams.filter(t=>t.country!=='BR'&&!AM.has(t.country)&&t.cadeiras>0),...point([-3.8,40],true),hub:true});
for(const n of list){n.teams.sort((a,b)=>a.rankAll-b.rankAll);n.team=n.teams[0];}return list.filter(n=>n.team);}
root.WORLD_MODEL={az,ay,point,zone,nodes,anchors};
})(typeof window!=='undefined'?window:this);
