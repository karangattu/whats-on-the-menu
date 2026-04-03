const CACHE_NAME = "whats-on-the-menu-v4";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./game-data.js",
  "./manifest.webmanifest",
  "./assets/acorn.png",
  "./assets/acorn_woodpecker_bird.png",
  "./assets/acorn_woodpecker_eating_meal.png",
  "./assets/american_avocet_bird.png",
  "./assets/american_avocet_eating_meal.png",
  "./assets/american_goldfinch_bird.png",
  "./assets/american_goldfinch_eating_meal.png",
  "./assets/annas_hummingbird_bird.png",
  "./assets/annas_hummingbird_eating_meal.png",
  "./assets/berries.png",
  "./assets/burger.png",
  "./assets/canada_goose_bird.png",
  "./assets/canada_goose_eating_meal.png",
  "./assets/common_raven_bird.png",
  "./assets/common_raven_eating_meal.png",
  "./assets/crab.png",
  "./assets/earthworm.png",
  "./assets/fish.png",
  "./assets/grass.png",
  "./assets/great_blue_heron_bird.png",
  "./assets/great_blue_heron_eating_meal.png",
  "./assets/long_billed_curlew_bird.png",
  "./assets/long_billed_curlew_eating_meal.png",
  "./assets/mouse.png",
  "./assets/nectar.png",
  "./assets/northern_shoveler_bird.png",
  "./assets/northern_shoveler_eating_meal.png",
  "./assets/red_tailed_hawk_bird.png",
  "./assets/red_tailed_hawk_eating_meal.png",
  "./assets/scrub_jay_bird.png",
  "./assets/scrub_jay_eating_meal.png",
  "./assets/seeds_thistle.png",
  "./assets/sfboo_logo.png",
  "./assets/tern_bird.png",
  "./assets/water_boatmen.png",
  "./assets/water_flea.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(async () => {
        return (
          (await caches.match("./index.html")) ||
          caches.match("./")
        );
      }),
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        const responseClone = networkResponse.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });

        return networkResponse;
      });
    }),
  );
});
