/* Device limits reduce work; they never silently press Pause or Leve. */
(()=>{
 function profile({smallScreen=false,touch=false,memory,cores,saveData=false,forceCompact=false}={}){const compact=!!(forceCompact||smallScreen||touch||saveData||memory&&memory<=2||cores&&cores<=4);return {compact,lite:false,animate:true,fps:compact?20:25,visible:compact?12:30,animated:compact?6:30};}
 function active({paused=false,lite=false,hidden=false}={}){return !paused&&!lite&&!hidden;}
 window.ARENA_MOTION_POLICY={profile,active};
})();
