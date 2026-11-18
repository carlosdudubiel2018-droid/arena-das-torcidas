(function (root) {
  'use strict';
  const active = location.pathname.startsWith('/laboratorio-mobile/') && new URLSearchParams(location.search).get('demo') === '1';
  const entries = [
    ['demo_verdao', 'palmeiras', 30, {cap:'cap',scarf:'scarf',flag:'streak-flag'}, 'male-e'],
    ['demo_rubro', 'flamengo', 25, {shirt:'shirt',flag:'flag'}, 'male-a'],
    ['demo_tricolor', 'gremio', 20, {cap:'cap',scarf:'scarf'}, 'male-e'],
    ['demo_colorado', 'internacional', 16, {flag:'flag'}, 'male-a'],
    ['demo_fiel', 'corinthians', 11, {cap:'cap',shirt:'shirt'}, 'male-e'],
    ['demo_soberano', 'sao-paulo', 7, {scarf:'scarf'}, 'male-a'],
    ['demo_xeneize', 'boca-juniors', 5, {cap:'cap',flag:'flag'}, 'male-e'],
    ['demo_merengue', 'real-madrid', 3, {shirt:'shirt'}, 'male-a'],
    ['demo_vozao', 'ceara', 2, {scarf:'scarf',flag:'flag'}, 'male-e'],
    ['demo_coral', 'santa-cruz', 1, {}, 'male-a']
  ];
  const day = new Intl.DateTimeFormat('en-CA', {timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const freeOrder=[2,0,3,1,5,4,6,8,7,9];
  const players = entries.map(([handle, team_id, level, equipped, avatar_variant], i) => ({
    handle, team_id, level, equipped, avatar_variant, avatar_style:'male', jersey_number:10+i,
    played:true, demo:true, day, role:i===0?'Presidente':'Torcedor',
    positions:{penalty:i+1,freekick:freeOrder.indexOf(i)+1},
    records:{penalty:{goals:Math.max(1,5-Math.floor(i/3)),points:50-Math.floor(i/3)*10,available:true,source:'demo'},
      freekick:{phase:Math.max(1,6-Math.floor(freeOrder.indexOf(i)/2)),goals:Math.max(2,31-freeOrder.indexOf(i)*3),available:true,source:'demo'}}
  }));
  const copy = x => structuredClone(x);
  const ranking = kind => ({day,game_kind:kind,rewards_enabled:false,environment:'demo-local',rows:players.map(p=>({
    handle:p.handle,team_id:p.team_id,level:p.level,position:p.positions[kind],points:(11-p.positions[kind])*50,
    highest_phase:p.records.freekick.phase,goals:p.records.freekick.goals,demo:true
  })).sort((a,b)=>a.position-b.position)});
  const api = {async call(action,p={}) {
    if (!active) throw Error('Demonstração indisponível fora do laboratório.');
    if (action==='profile') {
      const player=players.find(x=>x.handle===p.handle);
      if(!player) throw Error('Esse @ não faz parte da demonstração.');
      return copy(player);
    }
    if(action==='ranking' && ['penalty','freekick'].includes(p.game_kind)) return copy(ranking(p.game_kind));
    throw Error('Modo demonstração: ações de jogo e gravações estão desativadas.');
  }};
  function start() {
    if(!active) return;
    const esc=SOCIO_CARD.esc, teams=entries.map(([,id],i)=>({...TEAMS_SEED.find(t=>t.id===id),cadeiras:[5000,1000,200,90,38,25,16,8,3,1][i]}));
    const state={teams,fans:players.map(p=>({h:p.handle,team:teams.find(t=>t.id===p.team_id)}))};
    const content=document.querySelector('#content');
    document.body.classList.add('profile-demo');
    document.querySelector('.bottom-nav').hidden=true;
    document.querySelector('.desktop-nav').hidden=true;
    document.querySelector('.brand').href='?demo=1&v=167';
    content.innerHTML='<section class="demo-shell"><div class="demo-heading"><span class="demo-badge">DEMONSTRAÇÃO · DADOS FICTÍCIOS</span><h1>Conheça os jogadores</h1><p>10 torcedores de exemplo. Toque em um @ para abrir a ficha, girar o avatar e gerar o Story.</p><p class="demo-safety">Nenhuma conta, moeda, ponto ou cadeira é gravada.</p><a href="?v=167#jogador">Sair da demonstração →</a></div><section id="demo-ranking"></section></section>';
    ARENA_PLAYER_PROFILE.install({api,crest:ARENA_CREST,getState:()=>state,wallet:()=>null,onView:()=>{}});
    const el=document.querySelector('#demo-ranking');
    function show(kind='penalty') {
      const rows=ranking(kind).rows.map(r=>{const t=teams.find(t=>t.id===r.team_id);return {...r,teamId:r.team_id,teamName:t.name,crest:ARENA_CREST(t),chairs:0};});
      PLAY_NEXT_UI.renderRanking({el,kind,rows,crest:ARENA_CREST,onGame:show,allowFree:true});
      el.querySelector('.podium-prizes')?.remove();
      el.querySelector('.muted')?.remove();
      el.querySelector('details')?.remove();
      el.querySelector('.eyebrow').textContent='RANKING DE EXEMPLO · SEM PRÊMIOS';
      ARENA_PLAYER_PROFILE.upgradeLinks(el);
    }
    show();
  }
  root.ARENA_PROFILE_DEMO = {active,api,start,players:()=>copy(players),ranking:kind=>copy(ranking(kind))};
})(window);
