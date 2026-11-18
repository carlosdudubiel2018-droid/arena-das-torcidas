const CACHE = "arena-app-lab-static-v1";
const IMAGE_PATH = /\.(?:png|webp|avif|jpe?g|svg|gif|ico)$/i;
const FONT_PATH = /\.(?:woff2?|ttf|otf)$/i;
const STATIC_PREFIX = /^\/(?:laboratorio-app|arena-viva\/assets|jogar\/(?:assets|mapa\/assets)|assets|copa\/escudos|tabuleiro-oficial\/assets)\//;

function strategy(request, origin) {
  if (request.method !== "GET") return null;
  const url = new URL(request.url);
  if (url.origin !== origin) return null;
  if (request.mode === "navigate" || request.destination === "document") return "page";
  if (!STATIC_PREFIX.test(url.pathname) || url.search) return null;
  if (request.destination === "image" && IMAGE_PATH.test(url.pathname)) return "static";
  if (request.destination === "font" && FONT_PATH.test(url.pathname)) return "static";
  return null;
}

if (typeof module !== "undefined") module.exports = {strategy};
if (typeof self !== "undefined" && self.addEventListener) {
  self.addEventListener("install", event => event.waitUntil(self.skipWaiting()));
  self.addEventListener("activate", event => {
    event.waitUntil((async () => {
      for (const name of await caches.keys()) {
        if (name.startsWith("arena-app-lab-static-") && name !== CACHE) await caches.delete(name);
      }
      await self.clients.claim();
    })());
  });
  self.addEventListener("fetch", event => {
    const mode = strategy(event.request, self.location.origin);
    if (!mode) return;
    if (mode === "page") {
      event.respondWith(fetch(event.request, {cache: "no-store"}).catch(() =>
        new Response("Sem conexão. Reconecte e abra a Arena novamente.", {
          status: 503, headers: {"Content-Type":"text/plain; charset=utf-8", "Cache-Control":"no-store"}
        })
      ));
      return;
    }
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const saved = await cache.match(event.request);
      if (saved) return saved;
      const response = await fetch(event.request);
      if (response.ok && !response.redirected) {
        const type = response.headers.get("Content-Type") || "";
        if (type.startsWith("image/") || type.startsWith("font/")) {
          await cache.put(event.request, response.clone()).catch(() => {});
        }
      }
      return response;
    })());
  });
}
