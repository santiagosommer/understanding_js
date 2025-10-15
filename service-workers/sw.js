const CACHE_VERSION = "v1"

// Takes URLs and caches them into 'v1' cache
const addResourcesToCache = async (resources) => {
    // To update is enough to change 'v1'. E.g.: to 'v2'
    // It may be needed to clean old caches
    const cache = await caches.open(CACHE_VERSION);
    await cache.addAll(resources);
};

// When 'install' event is fired can't move forward from 'installing' to 'installed' 
// until addResourcesToCache promise is fulfilled
self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/app.js",
            "/gallery/snowTroopers.jpg",

            // Update resources for the new version here
        ]),
    );
});


// Save fetched data in cache
const putInCache = async (request, response) => {
    const cache = await caches.open(CACHE_VERSION);
    await cache.put(request, response);
};

// Handle if there are no matching resources
const cacheFirst = async (
    request,
    preloadResponsePromise,
    fallbackUrl,
    event
) => {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
        return responseFromCache;
    }

    const preloadResponse = await preloadResponsePromise;
    if (preloadResponse) {
        console.info("using preload response", preloadResponse);
        event.waitUntil(putInCache(request, preloadResponse.clone()));
        return preloadResponse;
    }

    try {
        // Fetch the network if no response, and store data into cache
        const responseFromNetwork = await fetch(request.clone());
        // Cloning is necessary because request and response can only be read once
        // We save a copy in cache 
        putInCache(request, responseFromNetwork.clone());
        return responseFromNetwork
    } catch (error) {
        const fallbackResponse = await caches.match(fallbackUrl);
        if (fallbackResponse) {
            return fallbackResponse
        }
        // Even if fallback response is not available we must return something
        return new Response("network error happened", {
            status: 408,
            headers: { "Content-Type": "text/plain" },
        });
    }
};

// Hijack the HTTP response
self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") {
        console.log(event.request.url)
        return;
    }
    // Matches each resource requested by the network with the equivalent
    // available in the cache
    event.respondWith(
        cacheFirst(
            event.request,
            event.preloadResponse,
            "/gallery/snowTroopers.jpg",
            event,
        )
    );
});

const enableNavigationPreload = async () => {
    if (self.registration.navigationPreload) {
        await self.registration?.navigationPreload.enable()
    }
}

const deleteCache = async (key) => {
    await caches.delete(key);
};

const deleteOldCaches = async () => {
    const cacheKeepList = ['v1'];
    const keyList = await caches.keys();
    const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
    await Promise.all(cachesToDelete.map(deleteCache));
};

self.addEventListener("activate", (event) => {
    event.waitUntil(deleteOldCaches());
    event.waitUntil(enableNavigationPreload());
});