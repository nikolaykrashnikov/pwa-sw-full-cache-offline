importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
);

workbox.routing.registerRoute(
  new RegExp("/.*"),
  workbox.strategies.cacheFirst({
    cacheName: "all-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 100,
        maxAgeSeconds: 365 * 24 * 60 * 60,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  })
);
