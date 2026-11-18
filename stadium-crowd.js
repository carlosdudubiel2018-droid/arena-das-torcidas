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
