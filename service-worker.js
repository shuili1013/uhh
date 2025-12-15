// service-worker.js
// 這是為了滿足 PWA 安裝條件所需要的 Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // 這裡什麼都不用做，只是為了滿足 Chrome 的 "fetch handler" 要求
});