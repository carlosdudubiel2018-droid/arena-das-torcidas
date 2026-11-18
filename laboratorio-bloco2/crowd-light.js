/* Cheap independent poses for every visible mobile supporter; 2–3 full walkers. */
(()=>{
 function pose(time,index,home,{walker=false,celebrating=false}={}){const phase=index*.79,t=(time+index*1.73)%18,wave=t<4,jump=celebrating||t>=8&&t<10;return {x:home.x+(walker?Math.sin(time*.4+phase)*2.3:0),z:home.z+(walker?Math.cos(time*.4+phase)*1.7:0),y:home.y+Math.sin(time*1.9+phase)*.08+(jump?Math.abs(Math.sin(time*5+phase))*.55:0),rotation:walker?Math.atan2(Math.cos(time*.4+phase)*2.3,-Math.sin(time*.4+phase)*1.7):Math.sin(time*.8+phase)*.04,action:walker?'walk':jump?'jump':wave?'emote-yes':'idle'};}
 window.ARENA_CROWD_LIGHT={pose};
})();
