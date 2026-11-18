/* Presentation only: the server remains the only source of goal/save results. */
(function(root){
 function previewElapsed(age,decision){return Math.max(0,(Number(age)||0)-.12);}
 function confirmedElapsed(preview,decision){return .12+Math.max(0,Math.min(Number(preview)||0,decision+.05));}
 const api={previewElapsed,confirmedElapsed};if(typeof module==='object'&&module.exports)module.exports=api;else root.ARENA_SHOT_CLOCK=api;
})(typeof window==='object'?window:globalThis);
