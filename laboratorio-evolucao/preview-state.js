(function(root){
 const starts=[0,25,200,1000,5000],names=['Campinho','Arquibancada','Estádio','Arena','Mega Arena'];
 function read(params){
  const n=Number(params.get('nivel')),number=Number.isFinite(n)&&n>0?Math.max(1,Math.min(5,Math.trunc(n))):2,level=number-1;
  const value=Number(params.get('cadeiras')),chairs=params.has('cadeiras')&&Number.isFinite(value)?Math.max(starts[level],Math.min((starts[level+1]||100000)-1,Math.trunc(value))):starts[level];
  return {number,level,chairs};
 }
 const api={starts,names,read};if(typeof module==='object')module.exports=api;else root.ARENA_PREVIEW=api;
})(typeof window==='object'?window:{});
