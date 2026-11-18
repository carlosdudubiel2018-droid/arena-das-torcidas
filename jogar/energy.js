(function(root){
 const INTERVAL=30*60*1000,CAP=6;
 const day=now=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(now));
 function fresh(now){return {energy:CAP,refillAt:now,day:day(now),points:0,rounds:0,best:0,history:[],active:null};}
 function refresh(input,now){const s=input&&Number.isFinite(input.refillAt)?JSON.parse(JSON.stringify(input)):fresh(now);s.energy=Math.max(0,Math.min(CAP,Number(s.energy)||0));const ticks=Math.max(0,Math.floor((now-s.refillAt)/INTERVAL));if(s.energy===CAP)s.refillAt=now;else if(ticks){s.energy=Math.min(CAP,s.energy+ticks);s.refillAt=s.energy===CAP?now:s.refillAt+ticks*INTERVAL;}if(s.day!==day(now)){s.day=day(now);s.points=0;s.rounds=0;s.history=[];}return s;}
 function start(input,now,id,counted){const s=refresh(input,now);if(s.active||counted&&s.energy<1)return null;if(counted){if(s.energy===CAP)s.refillAt=now;s.energy--;}s.active={id,counted,started:now};return s;}
 function finish(input,now,id,goals){const s=refresh(input,now);if(!s.active||s.active.id!==id)return s;const n=Math.max(0,Math.min(5,Math.floor(goals)||0));if(s.active.counted){s.points+=n*10;s.rounds++;s.history.unshift({goals:n,points:n*10,at:now});s.history=s.history.slice(0,20);}s.best=Math.max(s.best,n);s.active=null;return s;}
 function abandon(input,now){const s=refresh(input,now);s.active=null;return s;}
 const next=(s,now)=>s.energy===CAP?0:Math.max(0,s.refillAt+INTERVAL-now);
 const api={INTERVAL,CAP,day,fresh,refresh,start,finish,abandon,next};if(typeof module!=='undefined')module.exports=api;else root.ARENA_ENERGY=api;
})(typeof window==='undefined'?globalThis:window);
