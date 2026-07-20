self.addEventListener('install', (event) => {
    // Activate this worker immediately.
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // No offline caching (the app needs the network for Discogs + Google Sheets).
    // A fetch handler must exist for the app to be installable on Android Chrome.
});
