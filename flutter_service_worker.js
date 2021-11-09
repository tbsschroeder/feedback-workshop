'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/refs/heads/master": "856a64ccd843a708e1087b4669ea20fc",
".git/refs/remotes/origin/master": "856a64ccd843a708e1087b4669ea20fc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/config": "381ae578e674a246bd68b29cc85d32d1",
".git/objects/ff/cb8f4f4d5f4cd3d9450b1927fa69f5f4037290": "7b83839a37711c25651a93122ce0954d",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/6c/dde859125dc1f877e2bf7d8441a1a6309c675c": "8e63f6217aa59e9c1b51fecf8a707a8f",
".git/objects/12/ceb7fb8a0ca03c854da2f6315bd53163460aec": "310160ea4f7577f296f50fd46c787960",
".git/objects/4a/133fc09399fcd6fcf86996e095074d2a8668ae": "8815c78ee40fa8ddd38cf58b1a06305f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/0a/72259ca420b15a72f2194bc1efb539c316bd68": "e6175cb1acab53b34f69169b5b41ab57",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/e8/8379a9a085c056dfa322045afbf061e6f6eead": "8d9e2cdd28ab56da533117bbb1af38e7",
".git/objects/6f/6bfc544ae67337ec15e92428f3996a3a9001a5": "8274261a27a8e57600d01d41974e9b8f",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/2a/3fdd6c788b57d8f07b7f138f0c402b6a7aff7f": "8fc2c36f4bddd4d7c12c1e69096b1328",
".git/objects/29/043a7e721fa5ac07b0e449a20379521a581ff7": "6c4a670479e2f62913a47b184b0da294",
".git/objects/db/aa4bcc52ebebe37bbe4243a7b1405b9aa8a40a": "5ba57a9f62ac8d790b82ea073c19a32e",
".git/objects/24/ff32b9491b6e3322eba76c979aa0a19dfae2e5": "6801e214018a3d1d58b8076d71b088bb",
".git/objects/46/a17d0507056870031a2a5ca1a024e61728e194": "15f87d4499f7e87255913793b8d9ab0b",
".git/objects/a9/f2b11248437c619d99cc4a29f5da43b40fd9a2": "ba2292d9ffa1f8e2c8624c16e57643e3",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/8f/e8b84fe430d3d94c6e72c7e40c614a6f803f83": "88ce84e16a31d4b9286ce6c4697ff5de",
".git/objects/80/497666ec8ca0abb81ce5bd9ce649896555753e": "48fd3ef257b98d8add62806e975bc782",
".git/objects/f2/0c1dda3930909cbef8c38b516a8143ac375231": "9c11db192de4d7aea890bce7552eb072",
".git/objects/a4/fe07250ace7b81647a68490f48c8c98786f816": "08b6af5807dd7fdb62f6b7cfd3d329de",
".git/objects/b5/b995ed220136f90a9e350f77165169de851a14": "5da162d63647b1c9bc1f43547fc5703a",
".git/objects/c4/62fee1ddcfd3513df7b33e7a438aeb294ba6c6": "08e2181a6a95eb53ef06c729fe275260",
".git/objects/82/dd686507ca20b26e6ad6e3c9d412afc28bf212": "42af82b6f086f5050ef6741d839c3f15",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/79/3dce5e2976aa083ce9af35f23b035b9c81f483": "df6423b8b276f31534f59b2a27116812",
".git/objects/19/0c6f5ab4b094db47f70e5c044c5ec0adbb9824": "75fcf6614747273a12629184605a54a9",
".git/objects/15/43660daf312c87535cb387f57da10c2e626626": "55b955064f5a012c5a6e39b02f3be73b",
".git/objects/5d/b6db9842c4b1439050cbda4c181d2b7ebd786a": "c259ade0b7558c17580476a8bde42781",
".git/objects/5d/3942329be26e25e75f7192b6f8374748e78455": "329a9f7bb524305edfdf6f2c66b7eb17",
".git/objects/27/dbd0b1bdf138ddfc4652398120ccf16baf280f": "ff8af4df4c5db4642aebd6cccc8daf23",
".git/objects/7d/0e5f0b28115515514e23f021b182d13e7e5ff5": "e048f25acb891f6e3dff94c14bb6126e",
".git/objects/e2/71ed50aa6f2a2faba55765d807339c0d2bb145": "70a1bf42fc875695141a0e31d4b45112",
".git/objects/72/0e4470635a9e081723db3257e87a7f47e7c20d": "00e75bde67b3c81ac2285b14c8091e2f",
".git/objects/13/ab7aab14c4723539256ea76383277a0ceaabd2": "f06a8f7e55486c52e93bd34b5cc3bfac",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/87/59d2bd195e89785067d71e85b10c82e0b905ee": "a3f0d47f6f8c73014c5d3b9666537f7b",
".git/objects/87/9e4fb6aeb4ca5646cbb69c35f61995ceeb6eb8": "fafcb769db8fbdc96b84a710ab8214f7",
".git/objects/fc/d6a410ec77e2290db1913fca5beb39679eb057": "6b1737dbc09078e185b4e5329e855451",
".git/index": "1d628ecbf7f2507dbaaee9b4aa0a91aa",
".git/logs/refs/heads/master": "669643573378b8101097a72a74fa092e",
".git/logs/refs/remotes/origin/master": "0c80679af2355731ce65673dca35ebec",
".git/logs/HEAD": "669643573378b8101097a72a74fa092e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/COMMIT_EDITMSG": "5f25e4fdc175f5c9f4fe3a1c016d4eb8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"favicon.png": "8b06b6ba5a32d551e1a4e0b116036681",
"icons/icon.png": "aff50e0711dcd493cef45f99429e595d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/assets/img/metro.digital1.png": "7f77c0636f81d783810f47c20c29e76e",
"assets/assets/img/metro.digital0.png": "393988fbb894c58dd29faf1056dd018d",
"assets/assets/img/metro.digital2.png": "76e0788582f2ac06536921158daa9328",
"assets/assets/img/flag_ro_round.png": "1ff06486339e7d824923ecdd685934b2",
"assets/assets/img/flag_de_round.png": "7b60e3ada9ab04ebbe1e9f4547cdcc48",
"assets/assets/img/flag_us_round.png": "0561de4840599342bdb9f4dd6292e3a4",
"assets/AssetManifest.json": "261949978d625b89a1d763e59ba5aeab",
"assets/fonts/GoogleSans-Medium.ttf": "8d57e4014b18edef070d285746485115",
"assets/fonts/GothamMediumItalic.ttf": "b1951be38b528a44704a217b9c44ab55",
"assets/fonts/GothamBold.ttf": "db33e70bc9dee9fa9ae9737ad83d77ba",
"assets/fonts/GoogleSans-Regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/fonts/GothamMedium_1.ttf": "77171d8f5b5283f9d47a3434704bf944",
"assets/fonts/GothamBook.ttf": "b54724f54d4dd3f6796e3c4cc422f998",
"assets/fonts/GothamBoldItalic.ttf": "9b92f7fc1500a19b09dc9053fbe46b0c",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/GothamLightItalic.ttf": "0f0e43f48efb679501feff0240c3eb55",
"assets/fonts/GothamMedium.ttf": "77171d8f5b5283f9d47a3434704bf944",
"assets/fonts/GothamLight.ttf": "8566e2336952927984495865df90963c",
"assets/fonts/GoogleSans-Bold.ttf": "4457817ac2b9993c65e81aa05828fe9c",
"assets/FontManifest.json": "de47893cfeb82e5bc5254e5ef1b46042",
"assets/NOTICES": "27c6e93756b3a52b5e37178d22ab670e",
"main.dart.js": "8a2a14e52d54fc6b9b035e804dda8849",
"index.html": "b4658917bf05f4cd4fb73fca5ab86eed",
"/": "b4658917bf05f4cd4fb73fca5ab86eed",
"version.json": "56c84bbe34125e89700f38294527b57c",
"manifest.json": "3256c7838b334b232912ae9dfefdf57e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
