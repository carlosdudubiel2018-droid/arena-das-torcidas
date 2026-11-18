/* Display only. This lab cannot award real chairs. */
window.PENALTY_PRIZES={day:(t=Date.now())=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(t),forDay:()=>[0,0,0,0,0]};
new MutationObserver(()=>{for(const e of document.querySelectorAll('[data-penalty-prize-copy],[data-prize-schedule]'))if(e.textContent!=='Teste isolado · nenhum prêmio real')e.textContent='Teste isolado · nenhum prêmio real';}).observe(document.documentElement,{childList:true,subtree:true});
