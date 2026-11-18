/* Presentation-only crowd choreography; never creates participants or chairs. */
(()=>{
 const budget=(lite,count)=>Math.min(count,lite?3:24);
 function pose({time,index,home,plazaZ,gateZ,labeled=false,celebrating=false,arrivalAge=null,lite=false}){
  const phase=index*.71,base={x:home.x,z:home.z,y:.5+Math.sin(time*1.8+phase)*.075,rotation:Math.sin(time*.65+phase)*.025,action:'idle'};
  if(arrivalAge!==null){const u=Math.max(0,Math.min(1,arrivalAge/5));return {...base,x:0,z:(plazaZ+12)*(1-u)+(gateZ-3)*u,rotation:Math.PI,action:'walk'};}
  if(celebrating)return {...base,action:'jump',y:.5};
  if(labeled)return base;
  const phaseTime=(time+index*3)%36;
  if(index%3===1){const a=(time*.38+phase);return {...base,x:home.x+Math.sin(a)*3,z:home.z+Math.cos(a)*2.2,rotation:Math.atan2(Math.cos(a)*3,-Math.sin(a)*2.2),action:'walk'};}
  if(index%3===2&&phaseTime<14){
   // An ambient round trip through the gate; this never claims a new contribution.
   const waypoints=[[home.x,home.z],[0,plazaZ+8],[0,gateZ-4],[10,gateZ+5],[home.x,home.z]],f=phaseTime/14*4,k=Math.min(3,Math.floor(f)),u=f-k,a=waypoints[k],b=waypoints[k+1];
   return {...base,x:a[0]+(b[0]-a[0])*u,z:a[1]+(b[1]-a[1])*u,rotation:Math.atan2(b[0]-a[0],b[1]-a[1]),action:'walk'};
  }
  return base;
 }
 function plazaBounds(team,lite,P){const people=P.people(team,lite),plan=P.plan(team),xs=people.map(f=>f.x),zs=people.map(f=>f.z);return {left:Math.min(-18,...xs)-5,right:Math.max(18,...xs)+5,back:Math.min(plan.gateZ-6,...zs)-5,front:Math.max(plan.plazaZ+14,...zs)+6};}
 function gains(before,after){const old=new Map((before.teams||[]).map(t=>[t.id,Number(t.cadeiras)||0]));return (after.teams||[]).filter(t=>old.has(t.id)&&Number(t.cadeiras)>old.get(t.id)).map(t=>t.id);}
 function labelLift(lat,zoom,pitch,scale=1.3){const ppm=512*Math.pow(2,zoom)/(40075016.686*Math.cos(lat*Math.PI/180));return Math.max(14,4.8*scale*ppm*Math.sin(pitch*Math.PI/180)+8);}
 window.ARENA_MOTION={budget,pose,plazaBounds,gains,labelLift};
})();
