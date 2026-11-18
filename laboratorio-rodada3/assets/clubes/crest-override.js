/* Lab-only official crest override. Load after crest-map/crest-lite, before app. */
(function(){
 const base=new URL('.',document.currentScript.src).href,files={"inter-bebedouro": "escudos/inter-bebedouro.webp", "ibis": "escudos/ibis.webp", "andira": "escudos/andira.webp", "santo-andre": "escudos/santo-andre.webp", "marcilio-dias": "escudos/marcilio-dias.webp", "nacional-am": "escudos/nacional-am.webp", "juventus-mooca": "escudos/juventus-mooca.webp", "asa": "escudos/asa.webp", "feira-fc": "escudos/feira-fc.webp", "itacoatiara": "escudos/itacoatiara.webp", "uniao-corinthians": "escudos/uniao-corinthians.webp"};
 const original=window.ARENA_CREST;
 const url=id=>files[id]?new URL(files[id],base).href:null;
 window.ARENA_ROUNDS_CREST_FILES=Object.fromEntries(Object.keys(files).map(id=>[id,url(id)]));
 window.CRESTS=Object.assign(window.CRESTS||{},window.ARENA_ROUNDS_CREST_FILES);
 window.ARENA_CREST=t=>url(t?.id)||(original?original(t):t.crest_url||window.CRESTS[t.id]);
})();
