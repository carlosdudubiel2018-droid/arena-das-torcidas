(function(root){'use strict';
const normalize=v=>String(v||'').toLowerCase().replace(/[@\s]/g,'');
const valid=h=>/^[a-z0-9._]{1,30}$/.test(h);
function remember(storage,key){return{
 read(){try{const h=normalize(storage().getItem(key));return valid(h)?h:'';}catch{return '';}},
 save(handle){const h=normalize(handle);if(!valid(h))return;try{storage().setItem(key,h);}catch{}},
 clear(){try{storage().removeItem(key);}catch{}}
};}
function canShareFile(nav,file){try{return !!file&&typeof nav.share==='function'&&typeof nav.canShare==='function'&&nav.canShare({files:[file]});}catch{return false;}}
async function shareFile(nav,file){
 if(!canShareFile(nav,file))return 'unsupported';
 try{await nav.share({files:[file],title:'Minha carteirinha · Arena das Torcidas'});return 'shared';}
 catch(e){return e.name==='AbortError'?'cancelled':'failed';}
}
const api={remember,canShareFile,shareFile};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.SOCIO_FLOW=api;
})(typeof window!=='undefined'?window:globalThis);
