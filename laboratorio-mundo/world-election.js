/* Read-only presentation clock. Never releases offices or changes election rules. */
(()=>{'use strict';
 const card=document.getElementById('world-election'),title=card.querySelector('b'),clock=card.querySelector('strong'),hint=card.querySelector('small');
 let state=null,timer;
 function status(now=Date.now(),s=state){
  if(!s?.season)return{phase:'loading',title:'ARENA DAS TORCIDAS',text:'Atualizando…',urgent:false};
  if(s.season?.roles_released)return{phase:'results',title:'PRESIDENTES ELEITOS',text:'VER RESULTADO',urgent:false};
  const target=Date.parse(s.governance?.first_role_at||'2026-10-26T02:59:00.000Z'),left=target-now;
  if(left<=0)return{phase:'counting',title:'ELEIÇÃO DA TORCIDA',text:'APURAÇÃO EM ANDAMENTO',urgent:false};
  const total=Math.ceil(left/1000),d=Math.floor(total/86400),h=Math.floor(total%86400/3600),m=Math.floor(total%3600/60),sec=total%60,pad=n=>String(n).padStart(2,'0');
  return{phase:'waiting',title:'🗳️ ELEIÇÃO DA TORCIDA · APURAÇÃO DOMINGO 23h59',text:'FALTAM '+(d?d+'d ':'')+pad(h)+'h '+pad(m)+'min'+(left<=3600000?' '+pad(sec)+'s':''),urgent:left<=86400000,lastHour:left<=3600000};
 }
 function tick(){clearTimeout(timer);const c=status();card.hidden=!!state?.season&&state.season.number!==1;card.dataset.phase=c.phase;document.body.dataset.electionPhase=c.phase;card.setAttribute('aria-busy',String(c.phase==='loading'));card.classList.toggle('urgent',c.urgent);title.textContent=c.title;clock.textContent=c.text;hint.textContent=c.phase==='loading'?'Consultando a situação atual':c.phase==='results'?'Toque para conhecer os presidentes':c.phase==='counting'?'Aguardando confirmação da apuração · Brasília':'Horário de Brasília · toque para entender a eleição';card.setAttribute('aria-label',c.title+' · '+c.text+' · '+hint.textContent);timer=setTimeout(tick,c.lastHour?1000:60000-Date.now()%60000);}
 window.WORLD_ELECTION={status,update(s){state=s;tick();},onOpen:null};card.onclick=()=>window.WORLD_ELECTION.onOpen?.(status().phase);document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick();});tick();
})();
