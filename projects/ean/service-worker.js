var STATIC_CACHE_NAME  = 'static-cache-v1';
var APP_CACHE_NAME = 'barcodescanner-23'; //22.03.2018 - 21:08

var CACHE_APP = [
    '/',
    '/index.html',
    '/js/main.js',
    '/js/quagga.js',
    '/css/style.css'
];

var CACHE_STATIC  = [
    //'https://fonts.googleapis.com/css?family=Roboto:300,600,300italic,600italic"'
];

// TODO check new function
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(APP_CACHE_NAME).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');

            CACHE_APP.forEach(function (file) {
                console.log('[ServiceWorker] Caching file ' + file);
                cache.add(file).catch(function (reason) {
                    console.log('[ServiceWorker] Caching failed for file ' + file + ", " + reason);
                })
            });
            //return cache.addAll(CACHE_APP);
        })
    );
});

/*self.addEventListener('install',function(e){
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        Promise.all([caches.open(STATIC_CACHE_NAME),caches.open(APP_CACHE_NAME),self.skipWaiting()]).then(function(storage){
            var static_cache = storage[0];
            var app_cache = storage[1];
            return Promise.all([static_cache.addAll(CACHE_STATIC),app_cache.addAll(CACHE_APP)]);
        })
    );
});*/

// TODO check new function
self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if(key !== APP_CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        }).then(function () {
            return self.clients.claim();
        })
    );
});

/*self.addEventListener('activate', function(e) {
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

    /!*
   * Fixes a corner case in which the app wasn't returning the latest data.
   * You can reproduce the corner case by commenting out the line below and
   * then doing the following steps: 1) load app for first time so that the
   * initial New York City data is shown 2) press the refresh button on the
   * app 3) go offline 4) reload the app. You expect to see the newer NYC
   * data, but you actually see the initial data. This happens because the
   * service worker is not yet activated. The code below essentially lets
   * you activate the service worker faster.
   *!/
    return self.clients.claim();
});*/


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

/*self.addEventListener('fetch',function(e){
    const url = new URL(e.request.url);
    if (url.hostname === 'bennytalent.github.io' || url.hostname === 'fonts.googleapis.com'){
        console.log('[ServiceWorker] Fetch event for ', event.request.url);
        e.respondWith(
            caches.match(e.request).then(function(response){
                if (response) {
                    return response;
                }
                var fetchRequest = e.request.clone();

                return fetch(fetchRequest).then(function(response) {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    var responseToCache = response.clone();
                    caches.open(STATIC_CACHE_NAME).then(function(cache) {
                        cache.put(e.request, responseToCache);
                    });
                    return response;
                });
            })
        );
    } else if (CACHE_APP.indexOf(url.pathname) !== -1){
        e.respondWith(caches.match(e.request));
    }
});*/
