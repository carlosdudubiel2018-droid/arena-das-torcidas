(() => {
  const desktop = matchMedia('(min-width: 900px)');
  let current, wallet, account, signature;

  function refresh() {
    if (!current) return;
    const balance = current.querySelector('.coin-balance');
    let player = balance.querySelector('.desktop-player');
    const handle = wallet?.handle || account?.handle;
    if (!desktop.matches || !handle) {
      if (player) { player.remove(); balance.removeAttribute("title"); }
      signature = undefined;
      return;
    }
    if (!player) {
      player = document.createElement('span');
      player.className = 'desktop-player';
      player.innerHTML = '<img alt=""><strong></strong><small></small>';
      balance.prepend(player);
    }
    const avatar = player.querySelector('img');
    player.querySelector('strong').textContent = '@' + handle;
    player.querySelector('small').textContent = wallet ? 'Nível ' + wallet.level : 'Meu jogador';
    balance.title = '@' + handle + (wallet ? ' · Nível ' + wallet.level + ' · ' + wallet.coins + ' moedas' : '');
    const key = JSON.stringify([handle, wallet?.team_id, wallet?.equipped]);
    if (signature === key) return;
    signature = key;
    avatar.src = '/arena-viva/assets/arena-simbolo.webp';
    if (wallet?.team_id) window.ARENA_PLAYER_PROFILE?.warmOwn(wallet)?.then(frames => {
      if (signature === key && frames?.[0]) avatar.src = frames[0];
    }).catch(() => {});
  }

  desktop.addEventListener('change', refresh);
  window.ARENA_DESKTOP_NAV = {
    update(top, nextWallet, nextAccount) {
      current = top;
      wallet = nextWallet;
      account = nextAccount;
      refresh();
    }
  };
})();

