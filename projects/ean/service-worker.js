var STATIC_CACHE_NAME  = 'static-cache-v1';
var APP_CACHE_NAME = 'barcodescanner-16'; //22.03.2018 - 13:51

var CACHE_APP = [
    '/projects/ean/',
    '/projects/ean/index.html',
    '/projects/ean/js/main.js',
    '/projects/ean/js/quagga.js',
    '/projects/ean/css/style.css'
];

var CACHE_STATIC  = [
    'https://fonts.googleapis.com/css?family=Roboto:300,600,300italic,600italic"'
];

// TODO check new function
/*self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(APP_CACHE_NAME).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');

            CACHE_APP.forEach(function (file) {
                cache.add(file).catch(function (reason) {
                    console.log('[ServiceWorker] Caching failed for file ' + file);
                });
            });
            //return cache.addAll(CACHE_APP);
        })
    );
});*/

self.addEventListener('install',function(e){
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        Promise.all([caches.open(STATIC_CACHE_NAME),caches.open(APP_CACHE_NAME),self.skipWaiting()]).then(function(storage){
            var static_cache = storage[0];
            var app_cache = storage[1];
            return Promise.all([static_cache.addAll(CACHE_STATIC),app_cache.addAll(CACHE_APP)]);
        })
    );
});

// TODO check new function
/*self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if(key !== APP_CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});*/

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        if (cacheName !== APP_CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
                            console.log('[ServiceWorker] Removing old cache', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});


// when the browser fetches a URL... TODO check new function
self.addEventListener('fetch', function (event) {
    // ... either respond with the cached object or go ahead and fetch the actual URL
    console.log('[ServiceWorker] Fetch event for ', event.request.url);
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
});