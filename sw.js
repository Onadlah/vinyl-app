self.addEventListener('install', (event) => {
    // Forces the browser to activate this script immediately
    self.skipWaiting();
    console.log('[Service Worker] Installed and Activated');
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Leave empty to bypass PWA security check safely
});
