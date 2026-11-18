(function(root){'use strict';
// Shared by the trusted engine and the laboratory renderer. Never accepts scores.
const STAGES=Object.freeze([
 {phase:1,name:'Muito fácil',distance:11,wall:false,wind:0,aimSpeed:.62,powerSpeed:.72,width:.50,aimRange:.83,coins:1,xp:3},
 {phase:2,name:'Fácil',distance:14,wall:false,wind:0,aimSpeed:.77,powerSpeed:.84,width:.38,aimRange:.90,coins:2,xp:4},
 {phase:3,name:'Médio',distance:18,wall:true,wind:0,aimSpeed:.94,powerSpeed:.97,width:.28,aimRange:.96,coins:3,xp:5},
 {phase:4,name:'Difícil',distance:22,wall:true,wind:.65,aimSpeed:1.30,powerSpeed:1.25,width:.17,aimRange:1,coins:4,xp:6},
 {phase:5,name:'Muito difícil',distance:26,wall:true,wind:1.1,aimSpeed:1.78,powerSpeed:1.62,width:.100,aimRange:1,coins:5,xp:8},
 {phase:6,name:'Lendário',distance:30,wall:true,wind:1.65,aimSpeed:2.22,powerSpeed:2.02,width:.065,aimRange:1,coins:6,xp:10}
]);
const UNLOCK=Object.freeze({2:10,3:20,4:40,5:80,6:150});
function stage(n=1){return STAGES[Math.max(0,Math.min(5,Math.trunc(Number(n)||1)-1))];}
function profile(phase,shot=0,seed=.5){const s=stage(phase),i=Math.max(0,Math.min(4,shot)),jitter=1+Math.sin(seed*19+i*2.7)*.025;return {...s,origin:s.distance-11,aimSpeed:s.aimSpeed*(1+i*.025)*jitter,powerSpeed:s.powerSpeed*(1+i*.015),sweet:[.70-s.width/2,.70+s.width/2],wind:s.wind*(seed<.5?-1:1)};}
function decorate(plan,p){const hard=Math.max(0,p.phase-3),error=1-plan.quality;plan.target.x+=(Math.sign(plan.target.x)||1)*error*hard*1.2;plan.target.y+=(plan.power>p.sweet[1]?1:-.7)*error*hard*.65;plan.duration*=Math.pow(p.distance/11,.6);plan.freePhase=p.phase;plan.distance=p.distance;plan.wind=p.wind;plan.wallZ=-9.15*11/p.distance;plan.wallTop=p.wall?1.95:0;if(plan.reads){plan.hand.x=Math.max(-3.4,Math.min(3.4,plan.target.x+plan.wind*plan.duration*plan.duration/2));plan.hand.y=Math.max(.35,Math.min(2.3,plan.target.y));}return plan;}
function rewards(shots){let xp=10,coins=0;for(const s of shots)if(s.outcome==='goal'){const p=stage(s.freePhase);xp+=p.xp;coins+=p.coins;}return {xp,coins,goals:shots.filter(s=>s.outcome==='goal').length};}
function compare(a,b){return (b.highest_phase||1)-(a.highest_phase||1)||(b.goals||0)-(a.goals||0)||Date.parse(a.reached_at)-Date.parse(b.reached_at)||String(a.handle).localeCompare(String(b.handle));}
function trainingPhase(requested=1,record=1,identified=false){const phase=Number(requested);const max=identified?Math.max(1,Math.min(6,Number(record)||1)):1;if(!Number.isInteger(phase)||phase<1||phase>max)throw Error('practice_phase_locked');return phase;}
function roundStatus(phase,goals,shots,legendRound=1){const remaining=Math.max(0,5-shots),needed=Math.max(0,3-goals),next=Math.min(6,phase+1);let warning='';if(remaining&&needed===1)warning=phase===6?'FALTA 1 GOL PARA CONTINUAR NO LENDÁRIO!':'FALTA 1 GOL PARA LIBERAR A FASE '+next+'!';if(remaining&&needed===remaining)warning='ÚLTIMA CHANCE! '+(warning||'Acerte todos os '+remaining+' chutes restantes.');return {warning,passed:goals>=3,next,legendRound};}
root.ARENA_FREE_RUN={trainingPhase,roundStatus,STAGES,UNLOCK,stage,profile,decorate,rewards,compare};

})(typeof window==='undefined'?globalThis:window);
