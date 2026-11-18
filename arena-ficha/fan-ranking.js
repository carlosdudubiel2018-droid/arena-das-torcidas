(function(root){'use strict';
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const fmt=n=>Number(n||0).toLocaleString('pt-BR');
 const order=(a,b)=>b.cad-a.cad||(a.founderOrder||0)-(b.founderOrder||0)||a.h.localeCompare(b.h);
 function model(t,inactivity=5,options={}){
  const fans=t.fans||[],roles=(options.roles||[]).filter(r=>r.team_id===t.id);
  const resolve=r=>r?(fans.find(f=>f.h===r.handle)||{h:r.handle,cad:null,week:0,idle:null,roleChairs:r.chairs}):null;
  // Only the daily server snapshot appoints officers. Activity filtering cannot remove them.
  const officialPresident=roles.find(r=>r.position===1);
  const president=officialPresident?resolve(officialPresident):t.presidente||null;
  const leaders=(roles.length?roles.filter(r=>r.position>1&&r.position<=21).sort((a,b)=>a.position-b.position).map(resolve):(t.lideres||[])).filter(f=>f&&f.h!==president?.h).slice(0,20);
  const active=fans.filter(f=>Number(f.idle)<inactivity).slice().sort(order);
  const weeklyRows=active.filter(f=>f.week>0).slice().sort((a,b)=>b.week-a.week||order(a,b));
  return {active,president,leaders,weekly:weeklyRows[0]||null,seasonRows:active,weeklyRows};
 }
 const handle=f=>'<button type="button" class="fan-history-button" data-fan-history="'+esc(f.h)+'">@'+esc(f.h)+'</button>';
 function badges(f,m){return '<span class="fan-badges">'+(f.h===m.president?.h?'<span class="role-badge president-badge">♛ Presidente</span>':'')+(m.leaders.some(x=>x.h===f.h)?'<span class="role-badge leader-badge">◆ Líder</span>':'')+(f.h===m.weekly?.h?'<span class="role-badge weekly-badge">⚑ Destaque da semana</span>':'')+'</span>';}
 const seasonScore=f=>f.cad===null?fmt(f.roleChairs)+' cadeiras na última apuração':fmt(f.cad)+' '+(f.cad===1?'cadeira':'cadeiras')+' na temporada';
 const reviewNote=(f,inactivity)=>f.idle!==null&&f.idle>=inactivity?'<p class="office-review">'+fmt(f.idle)+' dias sem comentar · cargo será revisto na apuração das 22h.</p>':'';
 function renderOverview(t,inactivity=5,me='',options={}){
  const m=model(t,inactivity,options),crest=root.ARENA_CREST?.(t)||t.crest_url||root.CRESTS?.[t.id]||'';
  const president=m.president?'<article class="fan-hero president" data-fan-role="president"><div class="fan-hero-top"><span>♛ PRESIDENTE DA TORCIDA</span>'+(crest?'<img alt="Escudo do '+esc(t.name)+'" src="'+esc(crest)+'">':'')+'</div>'+handle(m.president)+badges(m.president,m)+'<p class="fan-score-label">'+seasonScore(m.president)+'</p>'+reviewNote(m.president,inactivity)+'</article>':'<article class="office-empty"><b>♛ PRESIDENTE DA TORCIDA</b><p>Este clube ainda não tem presidente confirmado na apuração.</p></article>';
  const weekly=m.weekly?'<article class="fan-hero weekly" data-fan-role="weekly"><div class="fan-hero-top"><span>⚑ DESTAQUE DA SEMANA</span></div>'+handle(m.weekly)+badges(m.weekly,m)+'<p class="fan-score-label">'+fmt(m.weekly.week)+' '+(m.weekly.week===1?'cadeira':'cadeiras')+' nesta semana</p><small>Destaque por pontuação da semana; este selo não concede a presidência.</small></article>':'<p class="office-empty">⚑ Destaque da semana: aguardando a primeira cadeira desta semana.</p>';
  return '<section class="fan-office-overview" aria-label="Cargos e destaque da torcida">'+president+weekly+'<p class="roles-explanation">Cargos oficiais são atualizados às <b>22h de Brasília</b>. O ranking muda durante o dia; ultrapassar alguém só muda o cargo na próxima apuração.</p></section>';
 }
 function rowsHTML(m,period,me){const rows=period==='week'?m.weeklyRows:m.seasonRows;return rows.length?rows.map((f,i)=>'<li class="'+(f.h===me?'me':'')+'"><span class="n">'+(i+1)+'º</span><span class="h">'+handle(f)+badges(f,m)+'</span><span class="v">'+fmt(period==='week'?f.week:f.cad)+'<small>'+((period==='week'?f.week:f.cad)===1?'cadeira':'cadeiras')+'</small></span></li>').join(''):'<li class="ranking-empty">Nenhuma cadeira nesta semana.</li>';}
 function renderList(t,inactivity=5,me='',options={}){const m=model(t,inactivity,options);return '<section class="fan-standings" aria-label="Ranking da torcida"><h3>RANKING DA TORCIDA</h3><div class="fan-period-tabs" role="tablist" aria-label="Período do ranking"><button type="button" role="tab" data-fan-period="season" id="fan-tab-season" aria-controls="fan-rank-panel" aria-selected="true">Temporada</button><button type="button" role="tab" data-fan-period="week" id="fan-tab-week" aria-controls="fan-rank-panel" aria-selected="false" tabindex="-1">Esta semana</button></div><div id="fan-rank-panel" role="tabpanel" aria-labelledby="fan-tab-season"><p class="ranking-period-description">Cadeiras individuais da temporada · participantes ativos.</p><ol class="list active-fans">'+rowsHTML(m,'season',me)+'</ol></div><p class="note">Quem está há '+fmt(inactivity)+' dias sem comentar fica fora desta classificação ativa. Suas cadeiras continuam contando para o clube; cargos vigentes aparecem acima até a próxima apuração.</p></section>';}
 function bind(container,t,inactivity,me,options={}){
  const m=model(t,inactivity,options),tabs=container.querySelector('.fan-period-tabs');if(!tabs)return;
  const select=period=>{const panel=container.querySelector('#fan-rank-panel');for(const b of tabs.querySelectorAll('[data-fan-period]')){const active=b.dataset.fanPeriod===period;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;}panel.setAttribute('aria-labelledby','fan-tab-'+period);panel.querySelector('.active-fans').innerHTML=rowsHTML(m,period,me);panel.querySelector('.ranking-period-description').textContent=period==='week'?'Cadeiras desta semana · participantes ativos.':'Cadeiras individuais da temporada · participantes ativos.';};
  tabs.onclick=e=>{const b=e.target.closest('[data-fan-period]');if(b)select(b.dataset.fanPeriod);};
  tabs.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const period=e.key==='Home'?'season':e.key==='End'?'week':tabs.querySelector('[aria-selected=true]').dataset.fanPeriod==='season'?'week':'season';select(period);tabs.querySelector('[aria-selected=true]').focus();};
 }
 function render(t,inactivity=5,me='',options={}){return renderOverview(t,inactivity,me,options)+renderList(t,inactivity,me,options);}
 root.ARENA_FAN_RANKING={model,render,renderOverview,renderList,bind};if(typeof module!=='undefined')module.exports=root.ARENA_FAN_RANKING;
})(typeof window!=='undefined'?window:globalThis);
