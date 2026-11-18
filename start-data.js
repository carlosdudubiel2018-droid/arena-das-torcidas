// Begin public reads while the browser downloads/parses the map engine.
window.ARENA_DATA=window.GAME.load();
window.ARENA_DATA.catch(()=>{});
