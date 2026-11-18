(function(root){'use strict';
 const prizes=[5,3,1];
 const day=t=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(t));
 const order=rows=>[...rows].filter(r=>r.points>0).sort((a,b)=>b.points-a.points||a.reachedAt-b.reachedAt||a.handle.localeCompare(b.handle));
 function refresh(value,now){const s=value?JSON.parse(JSON.stringify(value)):{day:day(now),rows:[],roundIds:[],previous:null};if(s.day!==day(now)){s.previous={day:s.day,winners:order(s.rows).slice(0,3).map((r,i)=>({...r,chairs:prizes[i]}))};s.day=day(now);s.rows=[];s.roundIds=[];}return s;}
 function record(value,round,now){const s=refresh(value,now);if(!round.counted||!round.handle||!round.teamId||s.roundIds.includes(round.id))return s;s.roundIds.push(round.id);const goals=Math.max(0,Math.min(5,Math.floor(round.goals)||0)),points=goals*10;let r=s.rows.find(r=>r.handle===round.handle);if(!r){r={handle:round.handle,teamId:round.teamId,teamName:round.teamName,crest:round.crest,points:0,rounds:0,reachedAt:now};s.rows.push(r);}r.rounds++;r.points+=points;if(points)r.reachedAt=now;return s;}
 function ranked(s){return order(s.rows).map((r,i)=>({...r,position:i+1,chairs:prizes[i]||0}));}
 const api={prizes,day,refresh,record,ranked};if(typeof module!=='undefined')module.exports=api;else root.ARENA_LEADERBOARD=api;
})(typeof window==='undefined'?globalThis:window);
