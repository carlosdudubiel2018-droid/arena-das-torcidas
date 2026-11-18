/* Presentation only: retain the original rule nodes, IDs, text and game listeners. */
(()=>{
 const view=document.querySelector('#view-regras'),wrap=view?.querySelector('.wrap');if(!wrap||wrap.dataset.rulesLayout)return;
 wrap.dataset.rulesLayout='mobile';
 const evolution=document.querySelector('.evolution-card'),ladder=document.querySelector('#ladder'),duplicate=ladder?.closest('.card');
 if(duplicate){for(const note of duplicate.querySelectorAll('p.note'))evolution?.append(note);duplicate.hidden=true;duplicate.setAttribute('aria-hidden','true');}
 const dna=document.querySelector('#preview-dna');if(dna)dna.hidden=true;
 const outdated='O calendário de abertura será divulgado quando o jogo estiver pronto para começar.';
 const season=document.querySelector('.season-rules');if(season){const walker=document.createTreeWalker(season,NodeFilter.SHOW_TEXT);let node;while((node=walker.nextNode()))if(node.textContent.includes(outdated))node.textContent=node.textContent.replace(outdated,'');}
 const old=[...wrap.children].filter(n=>!n.matches('.lab-page-return,.site-footer'));
 const words=nodes=>{const out=[];for(const n of nodes){const walk=document.createTreeWalker(n,NodeFilter.SHOW_TEXT);let text;while((text=walk.nextNode()))out.push(...text.textContent.trim().split(/\s+/).filter(Boolean));}return out.sort().join(' ');};
 const originalWords=words(old);
 const hero=document.createElement('section');hero.className='rules-hero';
 hero.innerHTML='<p class="eyebrow">ARENA DAS TORCIDAS · COMO JOGAR</p><h1>Seu comentário.<br>Seu lugar na torcida.</h1><p class="rules-intro">Entenda o jogo em cinco passos.</p>';
 const cards=document.createElement('div');cards.className='rules-quick';cards.setAttribute('aria-label','Resumo das regras');
 const quick=[['💬','Comente o nome do seu time no post do @arenadastorcidas2026 e ganhe uma cadeira.'],['🏟️','Mais cadeiras fazem seu estádio crescer: Campinho → Arquibancada → Estádio → Arena → Mega Arena.'],['👑','Quem tem mais cadeiras individuais no time vira Presidente e escolhe as melhorias.'],['⚠️','Se alguém te passar, você perde o cargo na próxima apuração.'],['📅','A temporada recomeça; a história da sua torcida fica.']];
 quick.forEach(([icon,text],i)=>{const card=document.createElement('article');card.className='rules-quick-card';card.innerHTML='<span class="quick-icon" aria-hidden="true">'+icon+'</span><p>'+text+'</p><span class="quick-step" aria-hidden="true">0'+(i+1)+'</span>';cards.append(card);});
 hero.append(cards);
 const full=document.createElement('section');full.className='rules-full';full.innerHTML='<p class="eyebrow">CADA DETALHE DA DISPUTA</p><h2>Regras completas</h2><p>Toque em um assunto para abrir.</p>';
 const titles=['Como ganhar cadeiras','Níveis do estádio','Cargos e eleição','Temporada','Regras de conduta'];
 const buckets=titles.map((title,i)=>{const details=document.createElement('details');details.className='rules-accordion';details.id='rules-topic-'+i;const summary=document.createElement('summary');summary.innerHTML='<span>'+title+'</span><span class="accordion-plus" aria-hidden="true">+</span>';details.append(summary);const content=document.createElement('div');content.className='rules-content';details.append(content);full.append(details);return content;});
 function place(n){
  const text=n.querySelector('h3')?.textContent||'';
  const bucket=n.matches('.season-rules')?3:n.matches('.evolution-card')||text==='Níveis do estádio'?1:/Cargos da torcida|Melhorias escolhidas|Quem para/.test(text)?2:n.matches('#fair-play,[aria-label="Jogo em piloto"]')||n.matches('p.note')?4:0;
  buckets[bucket].append(n);
 }
 old.forEach(n=>{if(n.matches('.grid2')){[...n.children].forEach(place);n.remove();}else place(n);});
 wrap.append(hero,full);
 // Break long original paragraphs into shorter visual blocks, keeping their text verbatim.
 for(const p of full.querySelectorAll('p')){
  if(p.id||p.children.length||p.textContent.length<360)continue;
  const parts=p.textContent.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g);if(!parts||parts.length<3)continue;
  const block=document.createDocumentFragment();let chunk='';
  parts.forEach((s,i)=>{chunk+=s;if(chunk.length>=180||i===parts.length-1){const next=p.cloneNode(false);next.textContent=chunk;block.append(next);chunk='';}});p.replaceWith(block);
 }
 const preserved=words(buckets)===originalWords;wrap.dataset.completeRulesPreserved=String(preserved);
 const tabs=document.querySelector('#evolution-tabs');tabs?.addEventListener('click',e=>{if(!e.target.closest('[data-stage]'))return;requestAnimationFrame(()=>document.querySelector('#evolution-scene')?.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));});
 function insetCardText(){for(const button of tabs?.querySelectorAll('[data-stage]')||[]){if(button.dataset.textInset)return;button.dataset.textInset='true';for(const node of [...button.childNodes])if(node.nodeType===Node.TEXT_NODE&&node.textContent.trim()){const label=document.createElement('span');label.className='stage-name';label.textContent=node.textContent;node.replaceWith(label);}const number=button.querySelector(':scope > span:not(.stage-name)');number?.classList.add('stage-number');}}
 if(tabs){new MutationObserver(insetCardText).observe(tabs,{childList:true,subtree:true});insetCardText();}
 function diagnostics(){const images=[...view.querySelectorAll('img')].filter(i=>i.closest('.stage-thumb,.ladder-neighborhood,.neighborhood-photo'));parent.postMessage({type:'arena:rules-diagnostics',preserved,viewport:innerWidth,width:view.scrollWidth,font:parseFloat(getComputedStyle(view.querySelector('.rules-quick-card p')).fontSize),images:images.filter(i=>i.complete&&i.naturalWidth).map(i=>({width:i.naturalWidth,display:Math.round(i.getBoundingClientRect().width),src:i.currentSrc.split('/').pop()}))},location.origin);}
 view.addEventListener('load',diagnostics,true);new ResizeObserver(diagnostics).observe(view);diagnostics();
})();
