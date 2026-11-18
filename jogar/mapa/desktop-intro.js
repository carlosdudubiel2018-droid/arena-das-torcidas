(() => {
  const desktop = matchMedia('(min-width: 900px)');
  const key = 'arena-desktop-intro-dismissed';
  try {
    if (localStorage.getItem(key) === '1') document.body.classList.add('desktop-intro-dismissed');
  } catch {}
  document.querySelector('#dismiss-intro').addEventListener('click', () => {
    if (!desktop.matches) return;
    document.body.classList.add('desktop-intro-dismissed');
    try { localStorage.setItem(key, '1'); } catch {}
  });
})();
