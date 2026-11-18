// Headlines from actual public scores; changes require two real observations.
(function(){
 const rivalries=[['gremio','internacional','Gre-Nal'],['palmeiras','corinthians','Derby paulista'],['flamengo','vasco','Clássico dos Milhões'],['atletico-mg','cruzeiro','Clássico mineiro'],['benfica','sporting','Dérbi de Lisboa'],['porto','benfica','O Clássico'],['barcelona','real-madrid','El Clásico']];
 function changes(before,after,levels){
  const events=[],old=new Map(before.teams.map(t=>[t.id,t]));
  after.teams.forEach(t=>{const p=old.get(t.id);if(!p)return;
   if(t.level>p.level)events.push({kind:'level',team:t.id,icon:'▥',label:'ESTÁDIO EVOLUIU',title:t.name+' chegou a '+levels[t.level].name,detail:t.cadeiras+' cadeiras construíram essa conquista.'});
   else if(t.n&&p.n&&t.rankAll<p.rankAll)events.push({kind:'rank',team:t.id,position:t.rankAll,icon:'↗',label:'MUDOU NO RANKING',title:t.name+' subiu '+(p.rankAll-t.rankAll)+' posições: '+p.rankAll+'º → '+t.rankAll+'º',detail:'Mudança confirmada entre duas atualizações.'});
   const P=window.ARENA_ART_STATE;
   if(P&&t.level===p.level&&P.plan(t).phase>P.plan(p).phase)events.push({kind:'work',team:t.id,icon:'▥',label:'NOVA ETAPA DA OBRA',title:t.name+' · '+P.plan(t).work,detail:t.cadeiras+' cadeiras · a construção cresceu desde a última atualização.'});
   if(t.cadeiras>p.cadeiras)events.push({kind:'growth',team:t.id,icon:'+',label:'A TORCIDA CRESCEU',title:t.name+' ganhou +'+(t.cadeiras-p.cadeiras)+' '+(t.cadeiras-p.cadeiras===1?'cadeira':'cadeiras'),detail:'Desde a última atualização confirmada · total: '+t.cadeiras+'.'});
  });
  return events;
 }
 function events(state,levels,updates=[]){
  const roles=(state.governance?.events||[]).map(e=>({kind:'role',team:e.team_id,eventId:e.id,icon:e.role==='president'?'♛':'⚑',label:'CARGOS DA TORCIDA',title:'@'+e.handle+(e.action==='entered'?' assumiu ':' deixou ')+(e.role==='president'?'a presidência':'a liderança'),detail:(state.teams.find(t=>t.id===e.team_id)?.name||e.team_id)+' · apuração diária de '+new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',day:'2-digit',month:'2-digit'}).format(new Date(e.created_at))}));
  const first=window.ARENA_ELECTION.firstEvents(state.governance?.first_presidents||state.governance?.events||[]).sort((a,b)=>(state.teams.find(t=>t.id===a.team_id)?.rankAll||999)-(state.teams.find(t=>t.id===b.team_id)?.rankAll||999)).map(e=>({kind:'first-election',team:e.team_id,eventId:e.id,icon:'♟',label:e.simulation?'SIMULAÇÃO · PRIMEIRA ELEIÇÃO':'PRIMEIROS PRESIDENTES',title:'@'+e.handle+' é o primeiro presidente do '+(state.teams.find(t=>t.id===e.team_id)?.name||e.team_id)+'!',detail:'Primeira apuração · '+new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}).format(new Date(e.created_at))+' · Brasília. Escolhas pendentes preservadas.'}));
  const out=[...first,...roles.filter(e=>!first.some(f=>f.eventId===e.eventId)).slice(0,3),...updates],playing=state.teams.filter(t=>t.n>0).sort((a,b)=>a.rankAll-b.rankAll);
  const add=e=>{if(!out.some(x=>x.kind===e.kind&&(e.kind==='fan'?x.title===e.title:x.team===e.team)))out.push(e);};
  playing.filter(t=>t.level>0).sort((a,b)=>b.level-a.level||b.cadeiras-a.cadeiras).slice(0,2).forEach(t=>add({kind:'milestone',team:t.id,icon:'▥',label:'CONQUISTA DA TORCIDA',title:t.name+' · '+levels[t.level].name,detail:t.cadeiras+' cadeiras no estádio da temporada.'}));
  const closest=rivalries.map(([a,b,name])=>({a:state.teams.find(t=>t.id===a),b:state.teams.find(t=>t.id===b),name})).filter(r=>r.a?.n&&r.b?.n).sort((x,y)=>Math.abs(x.a.cadeiras-x.b.cadeiras)-Math.abs(y.a.cadeiras-y.b.cadeiras))[0];
  if(closest){const {a,b,name}=closest,gap=Math.abs(a.cadeiras-b.cadeiras);if(gap<=Math.max(5,Math.max(a.cadeiras,b.cadeiras)*.15))add({kind:'rivalry',team:a.id,icon:'⚔',label:name.toLocaleUpperCase('pt-BR'),title:a.name+' '+a.cadeiras+' × '+b.cadeiras+' '+b.name,detail:gap===0?'Tudo igual nas cadeiras. Quem vai passar?':'Só '+gap+' cadeira'+(gap===1?'':'s')+' de diferença.'});}
  const nearing=playing.filter(t=>levels[t.level+1]).sort((a,b)=>(levels[a.level+1].min-a.cadeiras)-(levels[b.level+1].min-b.cadeiras))[0];
  if(nearing){const next=levels[nearing.level+1],gap=next.min-nearing.cadeiras;add({kind:'next',team:nearing.id,icon:'⚑',label:'PRÓXIMA CONQUISTA',title:nearing.name+' mira '+next.name,detail:'Faltam '+gap+' cadeiras para o estádio crescer.'});}
  state.fans.filter(f=>f.first===state.today).sort((a,b)=>(b.founderOrder||0)-(a.founderOrder||0)||a.h.localeCompare(b.h)).slice(0,3).forEach(f=>add({kind:'fan',team:f.team.id,icon:'+',label:'ENTROU HOJE',title:'@'+f.h+' está com '+f.team.name,detail:'Uma nova voz na arquibancada.'}));
  if(playing[0])add({kind:'leader',team:playing[0].id,icon:'1',label:'NA LIDERANÇA GERAL',title:playing[0].name+' puxa a torcida',detail:playing[0].cadeiras+' cadeiras na temporada · '+playing[0].n+' torcedores.'});
  if(window.ARENA_ART_STATE)playing.filter(t=>t.level>0).slice(0,3).forEach(t=>add({kind:'construction',team:t.id,icon:'▥',label:'A OBRA DA TORCIDA',title:t.name+' · '+window.ARENA_ART_STATE.plan(t).work,detail:'Etapa atual construída com '+t.cadeiras+' cadeiras.'}));
  [...playing].filter(t=>t.semana>0).sort((a,b)=>b.semana-a.semana||a.rankAll-b.rankAll).slice(0,3).forEach(t=>add({kind:'week-growth',team:t.id,icon:'↗',label:'FORÇA NA RODADA',title:t.name+' somou '+t.semana+' cadeiras na rodada',detail:'Total confirmado desta rodada · '+t.cadeiras+' na temporada.'}));
  playing.filter(t=>t.bonusCurtidas>0).slice(0,2).forEach(t=>add({kind:'likes',team:t.id,icon:'♥',label:'PRÊMIOS DE CURTIDAS',title:t.name+' recebeu '+t.bonusCurtidas+' cadeiras em prêmios',detail:'Acumulado confirmado da temporada · não representa somente o dia de hoje.'}));
  (state.governance?.choices||[]).filter(c=>c.item_id&&c.chosen_at).sort((a,b)=>String(b.chosen_at).localeCompare(String(a.chosen_at))).slice(0,2).forEach(c=>{const t=state.teams.find(t=>t.id===c.team_id),item=window.ARENA_ART_STATE?.catalog.find(i=>i.id===c.item_id);if(t)add({kind:'item',team:t.id,icon:'⚑',label:'MELHORIA ESCOLHIDA',title:t.name+' · '+(item?.name||c.item_id),detail:'Escolha registrada em '+new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',day:'2-digit',month:'2-digit'}).format(new Date(c.chosen_at))+'.'});});
  const priority={'first-election':0,role:0,level:1,rank:1,work:1,growth:1,item:2,fan:3,likes:4,rivalry:5,leader:6,next:7,milestone:8,construction:9,'week-growth':10};return out.sort((a,b)=>(priority[a.kind]??20)-(priority[b.kind]??20)).slice(0,Math.max(15,first.length+4));
 }
 window.ARENA_ACTIVITY={events,changes};
})();
