'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "b33021451cd269f1033f225ecc45e7d5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a93173c844fee55159b2b2cab17845fa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8c107011338721b768ea16b8b7e50f3d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb155ed42ff767f413607e1f6e385464",
".git/logs/refs/heads/main": "eb155ed42ff767f413607e1f6e385464",
".git/logs/refs/remotes/origin/main": "356af081557c1feb35e63942afb056e6",
".git/objects/00/6f3434af34651a847c7ceaa329bc16d867b965": "b887f460d9ce27c670cccdde83d568d8",
".git/objects/08/b678d98f37fb71efab4e47f2fc75a9b8955ef6": "4e05550f893df115e9e97b34dc9d2eb6",
".git/objects/09/9f41e9b5d886e3fccf6d204e233511110b2e54": "43b6c060f82f7aedeb941d2245133937",
".git/objects/09/c9b2ec6d8f38663ae5eb8f4374dbcf0bca50b5": "95c29a3c1d7fb5f1b0d57813fd1cbb1b",
".git/objects/0a/2e48961524ad4170072376247f339463b0c3ce": "414a90643f2144a70fe78e20c79b3916",
".git/objects/0a/3cc84ff9cac2a21949ce6b817cd62407ecaae1": "ea96a50eb766a0e98239e22bf2b4766e",
".git/objects/21/06cf37707dcb4d46867a7ca71801dcbb0c884e": "9542b0997d71af318fab0f450daa9a96",
".git/objects/26/7bf0371a5e5ec4d72fd7b2ef28b14acb8ba2f7": "2ba2bcd4494202bb3c151aaa6fdaf1b5",
".git/objects/2b/cbf240597026001b46cfb4b01e089e3983cf6c": "33715c13a51333b395c8952225df1a2f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/666c37bac68e257d8478ef6c45a36c5bd1e8d0": "4e90cdf3424c697d94e2e5d497179065",
".git/objects/3a/da80e8a9cb2596cfb3fa893605b318b70b7375": "7be5e672f2883721e392050e0ea08c04",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/1c3ef3975395b0be0331393e8ca66533025322": "4f9e1dc33c043f17e603fd58a1057d8f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/55/d37480b40a5a0a12c7f066756071426ace0d51": "f6162d69653e0f6bbdc9777e293df6ca",
".git/objects/58/1fdc89552006b08fe96f11642c5072013e9053": "e52e6f60bbbe145aef2143113bc69426",
".git/objects/5c/81de675eccae25ad473b65699aea8b087a1653": "a72f8dddd152894ee5aff8ffae1fce78",
".git/objects/5e/72bbaecbe8b4fde0482c69547dbfcafa3ffac9": "4ce5c6225a8bd4fbf0786f41baaa5c0d",
".git/objects/64/7d1cad5477a38a02d6e0c6638c3a262524c346": "807f0114cdc53fbd99dd4135ef473ab0",
".git/objects/69/751c0f1fa1de2132c7bfe78d904d230bf14a22": "8760ec79b80924c1fa81fd74b5f991ce",
".git/objects/6f/e4683703520823f2fb566bcd929c8c5cdf7744": "f3d9da06d734fcc081f9cdb1f49d90d5",
".git/objects/73/f1ebd6f60d7a559476c30e2aef4b78c2437a35": "a7bad9a418f9c807540a35643637d178",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9767b6c88e024f73b7b578820daa474c9e4d4a": "0e617f9d1912cda4dbf1edb696ff172d",
".git/objects/89/cfd350e9ec9cd22a4c3f6962dca922ecf3e756": "18da785c1a9f5a4802bf13fd141cd3b9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/52ef5acf519af2692a6d23c4bf33bbe1d0b9b1": "cdb096ce7e2494e886409a462f72eed9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e64dd7de14e1f8e9951df9da0c2d4098ca1163": "b618dc850d764aea2d77315224eb9528",
".git/objects/a7/b84e331e0c9a3a67c4df70c847a47f2a845c18": "9db260f6e36dfdf92df519dcfc9e088a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/6ccc1da217243252c31d275227e65fb6a7d8e1": "a4084af1ca1d853da92d1020c3f802e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/79e6bf309c9e83e7e0cb71ab39adca1ddfff66": "886c0f821aeae15c46dba16e78d998fb",
".git/objects/c2/52d9a8584fec6a3fc3d9a8461eedceac3cbf93": "952977561bc272ab109e0e1bdb7bb4b7",
".git/objects/c7/574feb0b10c89d56863a7d8dc03ed174a2b757": "9ed84f3e525c9fe65532e6200b821ed8",
".git/objects/cc/6ed94455a865e97f55811fd775a00daaa82886": "afc38f116ddc75e07f27b14c0684715f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/0b3c0cb088bce8c93ed9de73f9983c3901fb8b": "d20259402886b3038e52f8a22dfa9fbe",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/dc6b9bbafbbad17c99ae3aa3b0f61a5014a18e": "404483c139ac96042bae09523ffa4018",
".git/objects/f6/224c9deb9a7929311f725a4c1ff54efd14502b": "d15239c0fb692d2aa1c765008daa328f",
".git/objects/f7/607c691c1addd24f4ece66d3a28cd08fa885a6": "bc8fb27eb44998cf5a23a4b7e7056609",
".git/objects/f9/819d560b621b01f2c053b6dddf6a015152bfbf": "b1af68e525bc07799ef7c46f57159264",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/ORIG_HEAD": "1bb353eba94d838e52c17cfe5fc23722",
".git/refs/heads/main": "1bb353eba94d838e52c17cfe5fc23722",
".git/refs/remotes/origin/main": "1bb353eba94d838e52c17cfe5fc23722",
"assets/AssetManifest.json": "98f7a4f255372727cc1d9b0c930f0b1c",
"assets/assets/icons/menu.png": "0e0415cd743d1639e7e447d56c59393c",
"assets/assets/icons/order-food.png": "f9229b97a8bf97d03079a460f4400bfc",
"assets/assets/icons/pizza.png": "ac8594f1e36c98e8be423026a8881943",
"assets/assets/icons/sandwich.png": "4970e7291cdcef2473744396ed0d81cb",
"assets/assets/icons/table.png": "35bc2b5086ce3b491b76965ae9f768f9",
"assets/assets/images/clip.png": "7a6cbe61fbf44d1b2b95a6c03de05942",
"assets/assets/images/dessert.png": "2c31f70600845fc859e3cd11a8478913",
"assets/assets/images/fast_food.png": "7d5f86ec2127c54fbe300b52af6fbc9a",
"assets/assets/images/ice-cream-sundae.png": "3ec4c17a35f8669a8710878eab2d847a",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/meal.png": "088fab301372feed064596656526a12c",
"assets/assets/images/sea-food-.png": "035a7ddd2aa2913f0860093f664c6459",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "05efba5548dd4c2e5478ad92e88bf803",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.ico": "0156373ce6f69422128835d55341273b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ca0ed2582533cea767e91ed1f53df2a5",
"icons/Icon-512.png": "e19f03f3b3d91c0220828eb1e365ba1a",
"icons/Icon-maskable-192.png": "ca0ed2582533cea767e91ed1f53df2a5",
"icons/Icon-maskable-512.png": "e19f03f3b3d91c0220828eb1e365ba1a",
"index.html": "c95598ab2fa556f7d0bc126ca3cfc071",
"/": "c95598ab2fa556f7d0bc126ca3cfc071",
"main.dart.js": "dd60a09f1ff1309fa23f9a725e6b1d51",
"manifest.json": "9ce05590a6f4aabd2503293be537ac20",
"version.json": "c4811f3069556529c38ebd0cebf7ed16"
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
