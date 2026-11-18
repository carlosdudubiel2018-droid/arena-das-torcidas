/* Practice-only input timing and a precommitted keeper plan. */
(function(root){
 const clamp=(x,a,b)=>Math.max(a,Math.min(b,x)),sweet=[.62,.78];
 const triangle=t=>1-Math.abs(((t%2)+2)%2-1);
 function scan(t){return {x:(triangle(t*.82+.23)*2-1)*4.22,y:1.18+Math.sin(t*1.27)*.57};}
 const power=t=>triangle(t*1.18);
 function plan(locked,charge,random=Math.random,range=sweet){
  const p=clamp(charge,0,1),error=p<range[0]?(range[0]-p)/range[0]:p>range[1]?(p-range[1])/(1-range[1]):0;
  const quality=1-clamp(error,0,1),side=Math.sign(locked.x)||1;
  const target={x:locked.x+(random()*2-1)*error*.75,y:locked.y+(p>.78?error*1.9:-error*.85),z:-11};
  const central=Math.abs(target.x)<1.05;
  const chance=central?.52:quality>.99?.25:.25+error*.35;
  const reads=random()<chance;
  const hand={x:reads?clamp(target.x,-3.4,3.4):-side*(2.3+random()*.65),y:reads?clamp(target.y,.35,2.3):.7+random()*.75};
  return {target,hand,quality,perfect:error===0,power:p,duration:1.03-p*.28,reaction:reads?.13:.19,reads};
 }
 const api={clamp,sweet,triangle,scan,power,plan};if(typeof window!=='undefined')root.ARENA_PENALTY=api;else if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
