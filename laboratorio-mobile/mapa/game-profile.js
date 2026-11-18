(function(root){
// Timing only. The approved keeper decision and physical collision code are unchanged.
function profile(kind,shot=0,seed=.5){
 const i=Math.max(0,Math.min(4,Number(shot)||0));
 if(kind!=='freekick')return {aimSpeed:1,powerSpeed:1,sweet:[.62,.78]};
 const jitter=1+(Math.sin((Number(seed)||.5)*19+i*2.7)*.035);
 const width=[.20,.165,.13,.10,.075][i];
 return {aimSpeed:[1.02,1.22,1.45,1.72,2.04][i]*jitter,powerSpeed:[1,1.10,1.21,1.33,1.46][i],sweet:[.70-width/2,.70+width/2]};
}
const api={profile};root.PLAY_GAME_PROFILE=api;

})(window);