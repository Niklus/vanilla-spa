const cacheName = 'cache-v2';

const precacheResources = [
  '/',
  'index.html',
  'dist/index.js',
  'dist/index.css',
  'manifest.json',
  'img/spa-benefits.png',
  'favicon.ico',
  'robots.txt',
  'icons/android-chrome-192x192.png',
  'icons/android-chrome-512x512.png',
  'icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(precacheResources);
    }),
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');

  let cacheKeeplist = [cacheName];

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});
