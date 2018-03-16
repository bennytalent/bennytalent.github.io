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

            filesToCache.forEach(function (file) {
                cache.add(file).catch(function (reason) {

                });
            });
            console.log('[ServiceWorker] Caching failed for file ' + file);
            //return cache.addAll(filesToCache);
        })
    );
});

// TODO check new function
/*self.addEventListener('activate', function(e) {
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
});*/

self.addEventListener('activate', function (event) {
    console.log('[ServiceWorker] Activating new service worker...');

    var chacheWhiteList = [cacheName];

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if(chacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// when the browser fetches a URL... TODO check new function
/*
self.addEventListener('fetch', function (event) {
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

self.addEventListener('fetch', function (event) {
    console.log('[ServiceWorker] Fetch event for ', event.request.url);
    event.respondWIth(
        caches.match(event.request).then(function (response) {
            if(response) {
                console.log('Found ', event.request.url, ' in cache');
                return response;
            }
            console.log('Network request for ', event.request.url);
            return fetch(event.request).then(function(response) {

                // TODO 5 - Respond with custom 404 page

                return caches.open(staticCacheName).then(function(cache) {
                    if (event.request.url.indexOf('test') < 0) {
                        cache.put(event.request.url, response.clone());
                    }
                    return response;
                });
            });

        }).catch(function (error) {

            // TODO 6 - Respond with custom offline page

        })
    );
});