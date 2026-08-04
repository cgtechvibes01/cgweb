const CACHE_NAME = "cgweb-v1";

const getBase = () => {
  try {
    return new URL(self.registration.scope).pathname.replace(/\/$/, "");
  } catch {
    return "";
  }
};

const base = getBase();

const APP_SHELL = [
  `${base}/`,
  `${base}/projects`,
  `${base}/about`,
  `${base}/contact`,
  `${base}/blog`,
  `${base}/terms`,
  `${base}/privacy`,
  `${base}/manifest.webmanifest`,
  `${base}/icons/icon-96.png`,
  `${base}/icons/icon-192.png`,
  `${base}/icons/icon-512.png`,
  `${base}/icons/apple-touch-icon.png`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return response;
        })
        .catch(() => cached);

      return cached || networkFetch;
    })
  );
});
