import CacheHelper from "./utils/cache-helper";

const assetsToCache = [
  "./",
  "./icons/icon72x72.png",
  "./icons/icon96x96.png",
  "./icons/icon144x144.png",
  "./icons/icon192x192.png",
  "./icons/icon512x512.png",
  "./index.html",
  "./icons/tasteTrail-icon.png",
  "./app.bundle.js",
  "./app.webmanifest",
  "./sw.bundle.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
