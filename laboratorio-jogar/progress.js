(function(root){
 function progress(rows,handle,points){
  const mine=rows.find(x=>x.handle===handle),position=mine?.position||null;
  if(position===1)return {position,text:'Você está na liderança! Continue defendendo seu lugar.'};
  const target=position>3?rows.find(x=>x.position===3):position?rows.find(x=>x.position===position-1):rows.find(x=>x.position===3)||rows.at(-1);
  if(!target)return {position,text:'Faça um gol para entrar no ranking dos pênaltis.'};
  const needed=Math.max(10,(Math.floor((target.points-points)/10)+1)*10);
  return {position,text:'Faltam '+needed+' pontos para ultrapassar o '+target.position+'º (@'+target.handle+').',needed};
 }
 if(typeof module!=='undefined')module.exports={progress};else root.PLAY_PROGRESS={progress};
})(typeof window==='undefined'?globalThis:window);
