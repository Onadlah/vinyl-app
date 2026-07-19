self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // This satisfies Chrome's requirement for a Progressive Web App
  e.respondWith(fetch(e.request));
});
