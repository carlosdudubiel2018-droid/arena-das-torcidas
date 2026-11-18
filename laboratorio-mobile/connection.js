/* Connection-only pilot. No energy, score, prize or keeper changes. */
(function(root){'use strict';
 const retryable=e=>!e?.code||['request_failed','connection_failed'].includes(e.code);
 function create(api){
  async function resume(matchId){let last;for(let i=0;i<2;i++){try{return await api.call('resume',{match_id:matchId});}catch(e){last=e;if(!retryable(e))throw e;}}throw last;}
  async function send(matchId,action){const payload={match_id:matchId,...action},sendOnce=api.prepare?await api.prepare('action',payload):()=>api.call('action',payload);let error;
   for(let attempt=0;attempt<3;attempt++){try{return {data:await sendOnce()};}catch(e){error=e;if(!retryable(e))break;}}
   {const e=error;
    if(['match_expired','match_not_found','session_required','confirmation_required','energy_empty'].includes(e.code))throw e;
    // The first request may have committed even if its response was lost.
    // Read canonical state; never submit another shot or consume another energy.
    const data=await resume(matchId);return {data,recovered:true,warning:action.type!=='next'&&data.revision<=action.revision?'O toque não foi confirmado. Tente novamente nesta etapa.':''};
  }}
  return {send,resume};
 }
 root.ARENA_CONNECTION={create};
})(typeof window!=='undefined'?window:globalThis);
