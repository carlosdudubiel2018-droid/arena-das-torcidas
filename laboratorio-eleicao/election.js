/* Read-only election projections. Official offices still come from server snapshots. */
(()=>{
 const firstAt='2026-10-26T02:59:00.000Z',notice='Eleição da Torcida · apuração domingo 25/10 às 23h59 (Brasília)';
 const compare=(a,b)=>b.cad-a.cad||(a.founderOrder??Number.MAX_SAFE_INTEGER)-(b.founderOrder??Number.MAX_SAFE_INTEGER)||(a.h<b.h?-1:a.h>b.h?1:0);
 function candidates(team,inactivity=5){return [...team.fans].filter(f=>f.cad>=1&&f.idle<inactivity).sort(compare);}
 function personal(f,state){const list=candidates(f.team,state.inactivity),index=list.findIndex(p=>p.h===f.h),ahead=index>0?list[index-1]:null;return {position:index<0?null:index+1,candidate:index>=0&&index<3,ahead,gap:ahead?Math.max(0,ahead.cad-f.cad+1):0,eligible:index>=0};}
 function nextClub(team,state){const next=state.teams.find(t=>t.rankAll===team.rankAll-1);return next?{team:next,gap:Math.max(1,next.cadeiras-team.cadeiras+1)}:null;}
 function firstEvents(events){const entered=[...events].filter(e=>e.role==='president'&&e.action==='entered').sort((a,b)=>String(a.created_at).localeCompare(String(b.created_at))||Number(a.id)-Number(b.id)),seen=new Set();return entered.filter(e=>{if(seen.has(e.team_id))return false;seen.add(e.team_id);return true;});}
 function decorate(state,{simulate=false}={}){state.election={firstAt,notice,simulated:simulate};for(const team of state.teams){team.contestants=candidates(team,state.inactivity);if(simulate){team.presidente=team.contestants[0]||null;team.lideres=team.contestants.slice(1,21);team.rolesPending=false;}}
  if(simulate){state.season={...state.season,roles_released:true};state.governance={...state.governance,events:state.teams.filter(t=>t.presidente).map((t,i)=>({id:i+1,team_id:t.id,handle:t.presidente.h,role:'president',action:'entered',created_at:firstAt,simulation:true}))};}return state;}
 window.ARENA_ELECTION={firstAt,notice,compare,candidates,personal,nextClub,firstEvents,decorate};
})();
