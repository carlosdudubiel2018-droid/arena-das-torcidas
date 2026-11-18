(function (root) {
  function platform({userAgent = "", navigatorPlatform = "", touch = 0} = {}) {
    if (/Instagram/i.test(userAgent)) return "instagram";
    if (/iPhone|iPad|iPod/i.test(userAgent) || (navigatorPlatform === "MacIntel" && touch > 1)) return "ios";
    return /Android/i.test(userAgent) ? "android" : "other";
  }

  const steps = {
    instagram: ["Toque nos três pontinhos do Instagram.", "Escolha Abrir no navegador.", "No navegador, volte a tocar em Instalar."],
    ios: ["No Safari, toque em Compartilhar.", "Escolha Adicionar à Tela de Início.", "Toque em Adicionar."],
    android: ["Abra a Arena no Chrome.", "No menu ⋮, toque em Instalar app ou Adicionar à tela inicial.", "Confirme a instalação."],
    other: ["Abra o menu do navegador.", "Procure Instalar app ou Adicionar à tela inicial."]
  };

  const INVITE_KEY = "arena-app-install-invite-v1";

  function inviteAction({finished, blocked, installed, seen}) {
    return finished && !blocked && !installed && !seen;
  }

  if (typeof module !== "undefined") module.exports = {platform, inviteAction};
  if (!root.document) return;
  const button = document.querySelector("#arena-install");
  const dialog = document.querySelector("#arena-install-help");
  const list = dialog.querySelector("ol");
  const invite = document.querySelector("#arena-install-invite");
  const installFromInvite = invite.querySelector("[data-install-now]");
  const dismissInvite = invite.querySelector("[data-install-dismiss]");
  let seenThisPage = false;
  let finished = false;

  function seenInvite() {
    if (seenThisPage) return true;
    try { return localStorage.getItem(INVITE_KEY) === "1"; }
    catch (_) { return false; }
  }

  function rememberInvite() {
    seenThisPage = true;
    try { localStorage.setItem(INVITE_KEY, "1"); } catch (_) {}
  }

  function hideInvite() {
    invite.hidden = true;
  }
  const display = root.matchMedia("(display-mode: standalone)");
  let deferredPrompt = null;
  let installedThisVisit = false;

  function update() {
    button.hidden = display.matches || navigator.standalone === true || installedThisVisit;
    if (button.hidden && dialog.open) dialog.close();
    if (button.hidden) hideInvite();
  }

  root.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
    update();
  });
  root.addEventListener("appinstalled", () => {
    installedThisVisit = true;
    deferredPrompt = null;
    update();
  });
  display.addEventListener("change", update);

  async function showInstall() {
    hideInvite();
    const device = platform({
      userAgent: navigator.userAgent, navigatorPlatform: navigator.platform, touch: navigator.maxTouchPoints
    });
    if (deferredPrompt && device !== "instagram" && device !== "ios") {
      const prompt = deferredPrompt;
      deferredPrompt = null;
      try {
        await prompt.prompt();
        await prompt.userChoice;
        return;
      } catch (_) {}
    }
    list.replaceChildren(...steps[device].map(text => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    }));
    if (!dialog.open) dialog.showModal();
  }
  button.addEventListener("click", showInstall);
  installFromInvite.addEventListener("click", showInstall);
  dismissInvite.addEventListener("click", () => {
    rememberInvite();
    hideInvite();
  });

  const copaResult = document.querySelector("#scr-result");
  let inviteTimer;
  function checkInvite() {
    const finishDialog = document.querySelector("#finish-dialog[open]");
    const resultVisible = copaResult && !copaResult.hidden;
    if (finishDialog || resultVisible) finished = true;
    const blocked = document.hidden || !!document.querySelector(
      "dialog[open], details.app-more[open], .modal:not([hidden]), .overlay:not([hidden]), #coach:not([hidden]), #orientGate:not([hidden])"
    ) || document.body.classList.contains("in-game") || (copaResult && !resultVisible);
    if (blocked && !invite.hidden) hideInvite();
    const eligible = inviteAction({finished, blocked, installed:button.hidden, seen:seenInvite()});
    if (!eligible) {
      clearTimeout(inviteTimer);
      inviteTimer = undefined;
      return;
    }
    inviteTimer ??= setTimeout(() => {
      if (seenInvite()) return;
      rememberInvite();
      invite.hidden = false;
    }, 600);
  }
  update();
  if (!button.hidden && !seenInvite()) {
    const changes = new MutationObserver(checkInvite);
    changes.observe(document.body, {subtree:true, childList:true, attributes:true, attributeFilter:["open","hidden","class"]});
    document.addEventListener("visibilitychange", checkInvite);
    root.addEventListener("storage", event => {
      if (event.key === INVITE_KEY) hideInvite();
    });
  }

  for (const shortcut of document.querySelectorAll("[data-app-game]")) {
    shortcut.addEventListener("click", () => {
      const picker = document.querySelector(shortcut.dataset.appGame === "freekick" ? "#pick-free" : "#pick-penalty");
      if (picker && document.body.dataset.view === "jogar") picker.click();
    });
  }

  checkInvite();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/laboratorio-app/sw.js", {
      scope: "/laboratorio-app/", updateViaCache: "none"
    }).catch(error => console.warn("Instalação da Arena indisponível", error));
  }
})(globalThis);
