/* Transport recovery only. A retry keeps the original elapsedMs and never awards a score. */
(function(root){
 const syncCodes=new Set(['timing_out_of_window','too_fast','invalid_phase','stale_action','invalid_elapsed','flight_not_finished','replayed_request']);
 const expected={aim:['aim'],kick:['power'],next:['flight','stage-clear']};
 const deterministic=new Set(['too_fast','invalid_elapsed','timing_out_of_window','invalid_phase','stale_action','flight_not_finished']);
 async function runFree(action,payload,network,{now=()=>performance.now(),budgetMs=3000}={}){
  const until=now()+budgetMs,remaining=()=>Math.max(1,until-now());let original;
  try{return await network(action,{...payload},{timeoutMs:Math.min(2500,remaining())});}catch(e){original=e;}
  if(remaining()>40){try{const state=await network('state',{match_id:payload.match_id,game_kind:'freekick'},{timeoutMs:remaining()});if(deterministic.has(original.code)||state.expired||state.phase==='finished'||state.revision>payload.revision)return {...state,recovered_code:original.code||'network_error'};}catch{}}
  const e=Error('A cobrança continua sendo conferida. Toque em verificar conexão.');e.code='confirmation_pending';e.causeCode=original?.code;throw e;
 }
 async function run(action,payload,network,{sleep=ms=>new Promise(r=>setTimeout(r,ms)),attempts=3}={}){
  if(action==='action'&&payload.game_kind==='freekick')return runFree(action,payload,network,arguments[3]||{});
  const frozen={...payload};if(action==='action'&&frozen.elapsedMs!==undefined&&(!Number.isFinite(frozen.elapsedMs)||frozen.elapsedMs<0))frozen.elapsedMs=0;
  let error;
  for(let i=0;i<attempts;i++){
   try{return await network(action,{...frozen});}catch(e){
    error=e;const recover=action==='action'&&(syncCodes.has(e.code)||e.retryable||['network_error','server_timeout'].includes(e.code)||['TypeError','TimeoutError','AbortError'].includes(e.name));
    if(recover){
     try{
      const state=await network('state',{match_id:frozen.match_id,game_kind:frozen.game_kind});
      if(state.phase==='finished'||state.expired||state.revision>frozen.revision)return state;
      if(state.revision===frozen.revision&&(expected[frozen.type]||[]).includes(state.phase)){
       const wait=frozen.type==='next'?Math.max(80,Math.min(6000,(state.nextAt||0)-(state.server_time||Date.now())+35)):100;
       if(i<attempts-1){await sleep(wait);continue;}
      }
     }catch{}
    }
    const transient=recover||e.retryable||['TypeError','TimeoutError','AbortError'].includes(e.name);
    if(!transient||i===attempts-1)break;await sleep(Math.min(1200,200*(i+1)));
   }
  }
  if(!error.code){error.code='network_error';error.message='Sem conexão. Tentando reconectar…';}throw error;
 }
 const api={run,runFree,isDeterministic:code=>deterministic.has(code),isSync:code=>syncCodes.has(code)};if(typeof module==='object')module.exports=api;else root.ARENA_MOBILE_SYNC=api;
})(typeof window==='object'?window:globalThis);
