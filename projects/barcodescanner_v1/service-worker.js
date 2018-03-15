var cacheName = 'barcodescanner-4';

var filesToCache = [
    '/projects/barcodescanner_v1/',
    '/projects/barcodescanner_v1/index.html',
    '/projects/barcodescanner_v1/js/main.js',
    '/projects/barcodescanner_v1/js/quagga.js',
    '/projects/barcodescanner_v1/css/style.css'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if(key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

// when the browser fetches a URL...
/*self.addEventListener('fetch', function (event) {
    // ... either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if(response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});*/

// when the browser fetches a URL...
self.addEventListener('fetch', function (event) {

    // abandon non-GET requests
    if (event.request.method !== 'GET') return;

    let url = event.request.url;

    // ... either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(

        caches.open(chacheName).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                if(response && !navigator.onLine) {
                    // return cached file
                    console.log('cache fetch: ' + url);
                    return response;
                }

                // make network request
                return fetch(event.request).then(function (newreq) {
                    console.log('network fetch: ' + url);
                    if (newreq.ok) cache.put(event.request, newreq.clone());
                    return newreq;
                })
            });
        }));
});