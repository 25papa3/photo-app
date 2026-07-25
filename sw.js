self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // ネットワーク経由で通常リクエストを通す
  e.respondWith(fetch(e.request));
});