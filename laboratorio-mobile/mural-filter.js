/* Client feedback; the laboratory database enforces the same restrictions. */
(function(root){
 function clean(input){
  const text=String(input??'').replace(/\s+/g,' ').trim();
  const folded=text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[013457]/g,c=>({'0':'o','1':'i','3':'e','4':'a','5':'s','7':'t'}[c])).replace(/[._*\-]/g,'');
  const banned=/\b(porra|caralho|puta|puto|merda|foder|foda|fdp|buceta|cuzao|arrombado|viado|vagabunda|retardado|imbecil|idiota|macaco)\b/;
  if(!text||[...text].length>60||/[<>@＠]/.test(text)||/(:\/\/|www\.|[\p{L}\d-]+\.[a-z]{2,24}([./\s]|$))/iu.test(text)||banned.test(folded))throw Error('Use até 60 caracteres, sem ofensas, links ou @.');
  return text;
 }
 root.ARENA_MURAL_FILTER={clean};
})(typeof window==='undefined'?globalThis:window);
