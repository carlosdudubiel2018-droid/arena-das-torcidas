// Núcleo do jogo: carrega dados e calcula cadeiras, níveis e cargos.
(function () {
  const C = window.CONFIG;
  const LEVEL_NAMES = ["Campinho de várzea", "Arquibancada", "Estádio", "Arena", "Mega arena"];
  const LEVELS = LEVEL_NAMES.map((name, i) => ({ name, min: C.NIVEIS[i] }));
  const DEMO = !C.SUPABASE_URL || !C.SUPABASE_ANON_KEY || (typeof location !== "undefined" && new URLSearchParams(location.search).get("demo") === "1");
  // Public pages need only RLS-protected reads, not the full auth SDK.
  function publicReader(){
    async function read(path,body,headers={}){try{
      const r=await fetch(C.SUPABASE_URL+'/rest/v1/'+path,{method:body===undefined?'GET':'POST',headers:{apikey:C.SUPABASE_ANON_KEY,Authorization:'Bearer '+C.SUPABASE_ANON_KEY,'Content-Type':'application/json',...headers},...(body===undefined?{}:{body:JSON.stringify(body)}),signal:AbortSignal.timeout(15000)});
      if(!r.ok)return {data:null,error:new Error('Não foi possível atualizar os dados')};
      return {data:await r.json(),error:null};
    }catch(error){return {data:null,error};}}
    return {rpc:(name,args={})=>read('rpc/'+encodeURIComponent(name),args),from:table=>({select:cols=>({range:(from,to)=>read(encodeURIComponent(table)+'?select='+encodeURIComponent(cols),undefined,{Range:from+'-'+to})})})};
  }
  const sb = DEMO?null:window.supabase?window.supabase.createClient(C.SUPABASE_URL, C.SUPABASE_ANON_KEY):publicReader();

  const EUROPE = new Set(['ES','GB','IT','DE','FR','PT','NL','MC','BE','TR','GR','AT','CH','DK','NO','SE','PL','CZ','HR','RS','UA']);
  const ASIA = new Set(['SA','JP','KR','AE','QA','IR']);
  const AFRICA = new Set(['EG','ZA','MA','TN']);
  const AMERICAS = new Set(['BR','AR','UY','PY','CL','CO','EC','PE','BO','VE','MX','US','CA','CR']);
  const regionOf = (t) => EUROPE.has(t.country) ? 'EU' : AMERICAS.has(t.country) ? 'AM' : ASIA.has(t.country) ? 'AS' : AFRICA.has(t.country) ? 'AF' : t.country==='AU' ? 'OC' : 'OTHER';
  const groupOf = (t) => t.country === 'BR' ? 'BR:' + t.uf : t.country;
  // ---------- datas no horário de Brasília ----------
  function todayBR() {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo" }).format(new Date());
  }
  const dnum = (s) => Math.floor(Date.parse(s + "T00:00:00Z") / 86400000);
  const dstr = (n) => new Date(n * 86400000).toISOString().slice(0, 10);
  function weekStart(today) { // segunda-feira da rodada atual
    const n = dnum(today); const dow = (new Date(n * 86400000).getUTCDay() + 6) % 7;
    return dstr(n - dow);
  }

  // ---------- carregamento ----------
  async function fetchAll(table, cols) {
    const out = []; let from = 0; const step = 1000;
    for (;;) {
      const { data, error } = await sb.from(table).select(cols).range(from, from + step - 1);
      if (error) throw error;
      out.push(...data); if (data.length < step) break; from += step;
    }
    return out;
  }
  let catalog=null,settingsCache=null;
  async function load() {
    if (DEMO) return demoData();
    const [teams, scoreResult, settings, seasonResult, governanceResult] = await Promise.all([
      catalog||fetchAll("teams", "*"), sb.rpc("public_fan_scores"), settingsCache||fetchAll("settings", "key,value"),sb.rpc('public_season_info'),sb.rpc('public_season_governance')
    ]);
    if(scoreResult.error) throw scoreResult.error;
    const set = Object.fromEntries(settings.map(s=>[s.key,s.value]));
    if(seasonResult.error)throw seasonResult.error;
    if(governanceResult.error)throw governanceResult.error;
    catalog=teams;settingsCache=null;
    const season=seasonResult.data.season;
    const thresholds=season&&season.status==='active'?season.thresholds:set.niveis_estadio;
    if(Array.isArray(thresholds)&&thresholds.length===5&&thresholds[0]===0&&thresholds.every((v,i)=>Number.isInteger(v)&&v>=0&&(!i||v>thresholds[i-1]))) thresholds.forEach((min,i)=>{LEVELS[i].min=min;});
    const equipment=set.stadium_equipment?.[String(season?.id)]||{};
    return {teams:teams.filter(t=>t.active!==false).map(t=>({...t,stadium_items:Array.isArray(equipment[t.id])?equipment[t.id].filter(id=>typeof id==='string'):[]})),fans:scoreResult.data.fans,scores:true,team_bonuses:scoreResult.data.team_bonuses||[],comments:[],today:scoreResult.data.today,inactivity:Number(season&&season.status==='active'?season.inactivity_days:set.inatividade_dias||5),season,governance:governanceResult.data,history:seasonResult.data.history||[],team_honors:seasonResult.data.team_honors||[]};
  }

  // ---------- regras de pontuação ----------
  // +1 por dia com comentário (o primeiro dia é a entrada), +2 ao chegar a 3 dias seguidos,
  // +5 a cada 7 dias seguidos e +1 por novo amigo confirmado. Curtidas somam apenas ao time.
  function compute(raw, inactivity, today = raw.today || todayBR()) {
    const ws = weekStart(today), tN = dnum(today);
    const teams = raw.teams.map((t) => ({ ...t, crest_url: t.crest_url || (window.CRESTS || {})[t.id] || null, fans: [] }));
    const byId = Object.fromEntries(teams.map((t) => [t.id, t]));
    const days = {};
    raw.comments.filter((c) => c.comment_day <= today).forEach((c) => (days[c.handle] = days[c.handle] || []).push(c.comment_day));
    const refCount = {};
    raw.fans.forEach((f) => { if (f.referred_by && f.referred_by !== f.handle && f.first_day <= today) (refCount[f.referred_by] = refCount[f.referred_by] || []).push(f.first_day); });
    const fans = [];
    raw.fans.forEach((f) => {
      const team = byId[f.team_id]; if (!team || f.first_day > today) return;
      const ds = [...new Set(days[f.handle] || [f.first_day])].sort();
      const events = []; // [dia, cadeiras]
      let run = 0, prev = null;
      ds.forEach((d) => {
        const n = dnum(d); run = prev !== null && n === prev + 1 ? run + 1 : 1; prev = n;
        events.push([d, 1]);
        if (run === 3) events.push([d, 2]);
        if (run % 7 === 0) events.push([d, 5]);
      });
      (refCount[f.handle] || []).forEach((d) => events.push([d, 1]));
      const cad = events.reduce((a, e) => a + e[1], 0);
      const week = events.filter((e) => e[0] >= ws).reduce((a, e) => a + e[1], 0);
      const last = ds[ds.length - 1];
      const fan = { h: f.handle, team, cad, week, idle: tN - dnum(last), first: f.first_day, referred: (refCount[f.handle] || []).length, streak: run && tN - prev <= 1 ? run : 0 };
      if(raw.scores){Object.assign(fan,{cad:f.cad,week:f.week,idle:f.idle,streak:f.streak,referred:f.referred,founderOrder:f.founder_order});}
      team.fans.push(fan); fans.push(fan);
    });
    teams.forEach((t) => {
      const bonus=(raw.team_bonuses||[]).find(b=>b.team_id===t.id)||{cad:0,week:0};
      t.bonusCurtidas=Number(bonus.cad)||0;
      const honor=(raw.team_honors||[]).find(h=>h.team_id===t.id);
      t.stars=honor?honor.stars:0;t.championships=honor?honor.seasons:[];
      t.n = t.fans.length;
      [...t.fans].sort((a,b)=>a.first.localeCompare(b.first)||(a.founderOrder||0)-(b.founderOrder||0)||a.h.localeCompare(b.h)).forEach((f,i)=>{f.entryNumber=i+1;});
      t.cadeiras = t.fans.reduce((a, f) => a + f.cad, 0)+t.bonusCurtidas;
      t.semana = t.fans.reduce((a, f) => a + f.week, 0)+(Number(bonus.week)||0);
      t.level = LEVELS.reduce((acc, l, i) => (t.cadeiras >= l.min ? i : acc), 0);
      t.rolesPending=!!(raw.season&&raw.season.status==='active'&&raw.season.roles_released!==true);
      const elig = (t.rolesPending?[]:t.fans).filter((f) => f.idle < inactivity && f.cad >= 1).sort((a, b) => b.cad - a.cad || (a.founderOrder||0)-(b.founderOrder||0) || a.h.localeCompare(b.h));
      // Official roles come only from the once-a-day server snapshot, never a live browser election.
      if(raw.season){
        const roles=t.rolesPending?[]:(raw.governance?.roles||[]).filter(r=>r.team_id===t.id);
        const resolve=r=>{const f=t.fans.find(f=>f.h===r.handle);return f?{...f,roleChairs:r.chairs}:null;};
        t.presidente=resolve(roles.find(r=>r.position===1)||{})||null;
        t.lideres=roles.filter(r=>r.position>1&&r.position<=21).sort((a,b)=>a.position-b.position).map(resolve).filter(Boolean);
      }else{t.presidente=elig[0]?.cad>=1?elig[0]:null;t.lideres=elig.filter(f=>f!==t.presidente).slice(0,20);}
      t.pendingChoices=(raw.governance?.choices||[]).filter(c=>c.team_id===t.id&&!c.item_id);
      t.fundador = [...t.fans].sort((a, b) => (a.first < b.first ? -1 : a.first > b.first ? 1 : (a.founderOrder || 0) - (b.founderOrder || 0) || a.h.localeCompare(b.h)))[0] || null;
      t.lostRole = (t.rolesPending?[]:t.fans).filter((f) => f.cad > 0 && f.idle >= inactivity).sort((a, b) => b.cad - a.cad)[0] || null;
    });
    [...teams].sort((a, b) => b.cadeiras - a.cadeiras || (a.name||a.id).localeCompare(b.name||b.id,'pt-BR')).forEach((t, i) => (t.rankAll = i + 1));
    const groups = {};
    teams.forEach((t) => (groups[groupOf(t)] = groups[groupOf(t)] || []).push(t));
    Object.values(groups).forEach((arr) => { arr.sort((a, b) => b.cadeiras - a.cadeiras || (a.name||a.id).localeCompare(b.name||b.id,'pt-BR')); arr.forEach((t, i) => { t.rankUF = i + 1; t.ufCount = arr.length; }); });
    return { teams, fans, inactivity, today, weekStart: ws,season:raw.season||null,governance:raw.governance||null,history:raw.history||[] };
  }

  function seasonBadge(season,now=Date.now()){
    const title='Temporada '+(season?season.number:1);
    if(!season||!season.ends_at||season.status==='draft')return {title,detail:''};
    const remaining=Date.parse(season.ends_at)-now;
    if(remaining<=0)return {title,detail:season.status==='closed'?'Encerrada':'Apuração final'};
    const minutes=Math.ceil(remaining/60000);
    return {title,detail:remaining>=86400000?'Faltam '+Math.ceil(remaining/86400000)+' dias':'Faltam '+Math.floor(minutes/60)+'h '+minutes%60+'min'};
  }

  // ---------- modo demonstração ----------
  function rng(seed) { return function () { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function demoData() {
    const R = rng(7), today = todayBR(), tN = dnum(today);
    const FN = ["joao", "maria", "pedro", "ana", "lucas", "julia", "gabriel", "bia", "rafa", "leo", "duda", "caio", "nanda", "vini", "manu", "gui", "lari", "theo", "bruno", "carol", "davi", "isa", "enzo", "lu", "matheus", "clara", "felipe", "nina", "tiago", "sofia"];
    const SN = ["silva", "souza", "costa", "lima", "alves", "rocha", "dias", "melo", "nunes", "pires", "reis", "ramos"];
    const size = { flamengo: 260, corinthians: 210, palmeiras: 180, "sao-paulo": 130, gremio: 150, internacional: 140, "atletico-mg": 110, cruzeiro: 105, vasco: 100, bahia: 90, fortaleza: 70, santos: 70, botafogo: 65, fluminense: 60, sport: 50, "real-madrid": 45, barcelona: 40, "manchester-city": 18, liverpool: 22, psg: 15, benfica: 20 };
    const used = new Set(), fans = [], comments = [];
    window.TEAMS_SEED.forEach((t) => {
      const n = size[t.id] ?? Math.floor(R() * 25);
      for (let k = 0; k < n; k++) {
        let h; do { h = FN[Math.floor(R() * FN.length)] + [".", "_", ""][Math.floor(R() * 3)] + SN[Math.floor(R() * SN.length)] + (R() < 0.5 ? Math.floor(R() * 99) : ""); } while (used.has(h)); used.add(h);
        const start = tN - Math.floor(R() * 20), first = dstr(start);
        fans.push({ handle: h, team_id: t.id, first_day: first, referred_by: R() < 0.12 && fans.length ? fans[Math.floor(R() * fans.length)].handle : null });
        const p = 0.25 + R() * 0.7;
        for (let d = start; d <= tN; d++) if (d === start || R() < p) comments.push({ handle: h, comment_day: dstr(d) });
      }
    });
    return { teams: window.TEAMS_SEED, fans, comments, inactivity: 5 };
  }

  function fanProgress(f){
    const run=Number(f.idle)<=1?Math.max(0,Number(f.streak)||0):0;
    const target=run<3?3:(Math.floor(run/7)+1)*7;
    return {todayDone:Number(f.idle)===0,run,target,remaining:target-run,bonus:target===3?2:5};
  }
  window.GAME = { regionOf, groupOf, CONFIG: C, LEVELS, DEMO, sb, load, compute, todayBR, weekStart,seasonBadge,fanProgress };
})();
