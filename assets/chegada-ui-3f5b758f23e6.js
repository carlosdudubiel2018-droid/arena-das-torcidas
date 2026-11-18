/* Presentation only: reads the rendered profile; never writes game data. */
(()=>{'use strict';
 const sheet=document.getElementById('sheet');if(!sheet)return;
 function el(tag,cls,text){const n=document.createElement(tag);n.className=cls;if(text!==undefined)n.textContent=text;return n;}
 function arrange(){
  const welcome=sheet.querySelector('.fan-welcome');
  sheet.classList.toggle('personal-arrival',!!welcome);
  if(!welcome||welcome.dataset.arrivalReady)return;
  const numbers=welcome.querySelector('.fan-welcome-numbers'),today=welcome.querySelector('.today-chair'),count=numbers?.querySelector('b'),heading=welcome.querySelector('h3');
  const enter=[...welcome.querySelectorAll('button')].find(b=>b.textContent==='Ver meu bonequinho no mapa');
  if(!numbers||!today||!count||!heading||!enter)return;
  welcome.dataset.arrivalReady='1';
  const mini=sheet.querySelector('.sheet-mini');mini.after(welcome);
  const close=el('button','arrival-close','×');close.type='button';close.setAttribute('aria-label','Voltar ao tabuleiro');close.onclick=()=>sheet.querySelector('#sh-close')?.click();welcome.prepend(close);
  const team=sheet.querySelector('.sh-title h2')?.textContent||'sua torcida',crest=sheet.querySelector('.sh-title img');
  const card=el('div','arrival-contribution'),row=el('div','arrival-contribution-row');
  if(crest){const img=crest.cloneNode();img.removeAttribute('data-crest-src');img.src=crest.getAttribute('src')||crest.dataset.crestSrc;img.alt='Escudo de '+team;row.append(img);}
  const copy=el('div','arrival-contribution-copy'),number=el('div','arrival-number');number.append(el('strong','',count.textContent),el('span','',count.textContent.trim()==='1'?'cadeira':'cadeiras'));
  copy.append(number,el('p','','Você está construindo o estádio do '+team+'.'));row.append(copy);card.append(row,today);heading.after(card);
  const streak=[...welcome.children].find(n=>n.tagName==='P'&&n.textContent.startsWith('Sequência atual:'));
  const bonus=el('div','arrival-bonus');bonus.append(el('b','arrival-bonus-title','Seu próximo bônus'));if(streak)bonus.append(streak);card.after(bonus);
  enter.id='arrival-enter';enter.className='btn arrival-enter';enter.textContent='Ver meu lugar na torcida →';bonus.after(enter);
  const detail=el('details','arrival-details'),summary=el('summary','','Minha posição e eleição');detail.append(summary,numbers);
  const sharing=welcome.querySelector('.personal-share');
  for(const child of [...welcome.children])if(child.tagName==='P')detail.append(child);
  enter.after(detail);if(sharing)detail.after(sharing);
  const invite=welcome.querySelector('.fan-invite');if(invite)welcome.append(invite);
 }
 document.addEventListener('click',e=>{if(e.target.closest('#arrival-enter'))window.ARENA_PANEL?.command('plaza');});
 new MutationObserver(arrange).observe(sheet,{childList:true});arrange();
})();
