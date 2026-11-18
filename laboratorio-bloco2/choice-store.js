/* Explicit build-time switch. Laboratory never writes to Supabase. */
(()=>{
 function create({laboratory,sb,storage,key}){
  async function load(){if(laboratory){try{return JSON.parse(storage.getItem(key)||'[]')}catch{return []}}const r=await sb.rpc('admin_stadium_choices');if(r.error)throw r.error;return r.data.choices||[];}
  async function save(c,operation){if(laboratory){const rows=await load();storage.setItem(key,JSON.stringify(rows.filter(d=>!(d.season_id===c.season_id&&d.team_id===c.team_id&&d.level===c.level)).concat(c)));return;}const r=operation==='notify'?await sb.rpc('mark_stadium_president_notified',{p_team:c.team_id,p_level:c.level,p_president:c.notified_president,p_notified_at:c.notified_at}):await sb.rpc('record_stadium_choice',{p_team:c.team_id,p_level:c.level,p_president:c.chosen_by,p_item:c.item_id});if(r.error)throw r.error;}
  function clear(){if(!laboratory)throw Error('Limpeza permitida somente no laboratório.');storage.removeItem(key);}
  return {load,save,clear,laboratory};
 }
 window.ARENA_CHOICE_STORE={create};
})();
