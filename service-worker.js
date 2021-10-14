import {registerRoute} from 'workbox-routing';

import {StaleWhileRevalidate} from 'workbox-strategies';

registerRoute(
  ({request}) => request.destination === 'va-calculator' ||
                  request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// STATIC_CACHE_FILES = ["./index.html", "./style.css", ".va-calculator.js"]

// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

// workbox.routing.registerRoute(
//   ({request}) => request.destination === STATIC_CACHE_FILES,
//   new workbox.strategies.CacheFirst()
// );