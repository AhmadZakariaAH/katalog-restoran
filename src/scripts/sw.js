import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './images/icons/icon72x72.png',
  './images/icons/icon96x96.png',
  './images/icons/icon144x144.png',
  './images/icons/icon192x192.png',
  './images/icons/icon180x180.png',
  './images/icons/icon512x512.png',
  './images/icons/icon180x180-white.png',
  './images/icons/icon192x192-white.png',
  './index.html',
  './images/icons/favicon.png',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
