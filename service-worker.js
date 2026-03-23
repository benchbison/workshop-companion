/**
 * Workshop Companion — Service Worker
 * Cache strategy:
 *   - App shell (index.html, icons): cache-first, update in background
 *   - Netlify function (/api/*): network-only, never cached
 *   - Everything else: network-first, fall back to cache
 */

const CACHE_NAME = 'workshop-companion-v1';
const CACHE_TIMEOUT_MS = 3000; // 3s network timeout before falling back to cache

const APP_SHELL = [
  '/',
  '/index.html',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/favicon-32.png',
];

// ── INSTALL: cache the app shell ──────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_SHELL).catch(err => {
        // Don't fail install if some assets are missing
        console.warn('SW: some shell assets could not be cached', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: clean up old caches ────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('SW: deleting old cache', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: routing strategy ────────────────────────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Never cache API calls (Netlify functions / Anthropic)
  if (url.pathname.startsWith('/.netlify/functions/') ||
      url.hostname === 'api.anthropic.com') {
    event.respondWith(fetch(event.request));
    return;
  }

  // Never cache Google Fonts (they have their own caching)
  if (url.hostname === 'fonts.googleapis.com' ||
      url.hostname === 'fonts.gstatic.com') {
    event.respondWith(fetch(event.request));
    return;
  }

  // App shell: cache-first, update in background
  if (APP_SHELL.includes(url.pathname) || url.pathname === '/') {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cached = await cache.match(event.request);
        const fetchPromise = fetch(event.request)
          .then(response => {
            if (response && response.status === 200) {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => null);

        return cached || fetchPromise;
      })
    );
    return;
  }

  // Everything else: network-first with cache fallback
  event.respondWith(
    Promise.race([
      fetch(event.request).then(response => {
        // Cache successful GET responses
        if (response && response.status === 200 &&
            event.request.method === 'GET') {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone());
          });
        }
        return response;
      }),
      // Timeout fallback
      new Promise(resolve =>
        setTimeout(() => resolve(null), CACHE_TIMEOUT_MS)
      )
    ]).then(response => {
      if (response) return response;
      // Network timed out or failed -- try cache
      return caches.match(event.request);
    }).catch(() => caches.match(event.request))
  );
});
