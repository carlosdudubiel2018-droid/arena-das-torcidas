(function(root){'use strict';
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const order=(a,b)=>b.cad-a.cad||(a.founderOrder||0)-(b.founderOrder||0)||a.h.localeCompare(b.h);
 function model(t,inactivity=5){
  const active=(t.fans||[]).filter(f=>Number(f.idle)<inactivity).slice().sort(order);
  const president=active.find(f=>f.h===t.presidente?.h)||null;
  const weekly=active.filter(f=>f.week>0).slice().sort((a,b)=>b.week-a.week||order(a,b))[0]||null;
  return {active,president,weekly,rows:active.map((fan,i)=>({fan,position:i+1})).filter(r=>r.fan.h!==president?.h&&r.fan.h!==weekly?.h)};
 }
 function render(t,inactivity=5,me=''){
  const m=model(t,inactivity),crest=root.ARENA_CREST?.(t)||t.crest_url||root.CRESTS?.[t.id]||'';
  const handle=f=>'<button type="button" class="fan-history-button" data-fan-history="'+esc(f.h)+'">@'+esc(f.h)+'</button>';
  const hero=(f,type)=>'<article class="fan-hero '+type+'" data-fan-role="'+type+'"><div class="fan-hero-top"><span>'+(type==='president'?'👑 PRESIDENTE':'⚑ TORCEDOR Nº 1 DA RODADA')+'</span>'+(crest?'<img alt="Escudo do '+esc(t.name)+'" src="'+esc(crest)+'">':'')+'</div>'+handle(f)+'<div class="fan-hero-score"><strong>'+Number(type==='president'?f.cad:f.week).toLocaleString('pt-BR')+'</strong><span>'+(type==='president'?'cadeiras na temporada':'cadeiras na rodada')+'</span></div><small>'+esc(t.name)+'</small></article>';
  return '<section class="fan-standings" aria-label="Ranking da torcida">'+(m.president?hero(m.president,'president'):'<p class="note">Presidência: acompanhe a próxima apuração diária.</p>')+(m.weekly?hero(m.weekly,'weekly'):'<p class="note">A liderança da rodada começa com o próximo comentário.</p>')+'<h3 class="sub">Ranking da torcida · '+m.active.length+' ativos</h3><ol class="list active-fans">'+m.rows.map(({fan:f,position})=>'<li class="'+(f.h===me?'me':'')+'"><span class="n">'+position+'º</span><span class="h">'+handle(f)+(t.lideres?.some(x=>x.h===f.h)?'<small>Líder de torcida</small>':'')+'</span><span class="v">'+f.cad+' cad.</span></li>').join('')+'</ol><p class="note">A lista mostra quem está ativo na disputa. Todas as cadeiras conquistadas continuam contando para o clube.</p></section>';
 }
 root.ARENA_FAN_RANKING={model,render};if(typeof module!=='undefined')module.exports={model,render};
})(typeof window!=='undefined'?window:globalThis);
