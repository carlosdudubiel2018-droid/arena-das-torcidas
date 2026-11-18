(function(root){
 function workGate(){let suspended=false,waiting=[];return {pause(){suspended=true;},resume(){suspended=false;const batch=waiting;waiting=[];batch.forEach(r=>r());},wait(){return suspended?new Promise(r=>waiting.push(r)):Promise.resolve();},get paused(){return suspended;}};}
 function qualityController(mobile,onChange){let tier=0,start=null,frames=0,slow=0,lastFps=0;return {sample(now){if(start===null)start=now;frames++;if(now-start<1400)return;lastFps=Math.round(frames*1000/(now-start));slow=lastFps<(tier?32:44)?slow+1:0;if(mobile&&slow>=2&&tier<2){tier++;slow=0;onChange(tier);}start=now;frames=0;},reset(){tier=0;start=null;frames=slow=0;lastFps=0;onChange(0);},get tier(){return tier;},get fps(){return lastFps;}};}
 const api={workGate,qualityController};if(typeof module==='object')module.exports=api;else root.ARENA_MOBILE_RUNTIME=api;
})(typeof window==='object'?window:globalThis);
