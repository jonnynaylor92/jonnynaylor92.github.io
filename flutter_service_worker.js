'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6e32667938ed4208006bc069bf0c42f7",
".git/config": "c380b2251cd8d067ebf7fa30184fbb0e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ebe455c43c95c9570d90a5d4e8928244",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15e16e9ff5e05dca6460547c8a9e4813",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c430402cb0f644dda9d463916cfd27bc",
".git/logs/refs/heads/main": "edc33155a80f8ea28b90a94c042d974c",
".git/logs/refs/remotes/origin/main": "77350cf9dd30adb1f1f141fb2f6fb31c",
".git/objects/01/94bde68a97893f19ec268c9fc084fc7ad6241a": "c8966348a99063e1ccf40bb286d2dc07",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/42a1fd5d71d97eb50f1e583b5dad3160fe1e3e": "364748da207153a664f4a209a6c79733",
".git/objects/09/bf04bfc92c10ca60562ed5f38b4b138b0b275b": "47a94254fa4c4d674276976ff59d5da1",
".git/objects/0e/21d311209051c09be89143517a31b87c6bcdf1": "a169a148d52e768a786d2af6f81e4f07",
".git/objects/10/70c6b14135bd6a94c39adf92da2bf13381ca3c": "4008b6ce2df7fe274a45cc92b54b8e67",
".git/objects/19/836ca8a3bdd83c0653aaa8d3e8db844262f2e8": "6598baea8a060ce269e90e12e3f560b3",
".git/objects/1a/23a2a4001ccb655ec7283287ffd00da0c20467": "fb57c8ddafa7a2d6a3bfee717a1810f5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/34d66bdb7c670807c1d7da815bad372fb6b6f2": "4089350c6429ac654248909da9ed30c0",
".git/objects/29/6e2b1aa80ec18ea5cd9e53c08a91f3013ea0bc": "b0871dca02071a4ca443812b09532eaa",
".git/objects/2e/f98e981fb2b9fa47d6ecee27790ac9d1dec985": "9155f56b33669fd711a594a4d8927ac2",
".git/objects/35/7fc71abc92cc54cfafe54c5563d6e040dabf4d": "7012cc64b3c0595e7f2ed50c39040632",
".git/objects/35/f4c17ca1772685e41a7e4b0b841f7fd6166b1a": "def04407a1b978457e026f9e38c75d4b",
".git/objects/41/0902d2a9f11387a9ecea2fec2f4069da843eed": "7c2a1946a2c55db2799dc4b804b247a8",
".git/objects/44/b18b870f69d76daf6ded820679a8c5e3a30ffe": "d7474ffc612e66e2eec33c25657905f3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/47/d25a68a62a857884d2ca2b3c7668c06de45b6d": "5e1de746bd98ce1fed35c218f910d4b7",
".git/objects/48/d3f5ebd6c87dd16586695d5b46e4bb36201901": "bb76449d11aba5c9fa4deb18c4c78a44",
".git/objects/48/e0db8388d3acf7bbd586e96cba7a8d719d1d8d": "29466397537aae6ea9e77c9e18d54efe",
".git/objects/4c/1e77a1a6fc8e4e7399e0a4fecb34e394390bc9": "6d6478c56738ff351a35710edb8128da",
".git/objects/4f/513922d3901d113737632d64bf17413d6319c2": "bba060cc3733406fce3e250881595d38",
".git/objects/5b/78f467c7aae4c647a92a29ab1d0545fc122bdd": "66741db213f00d62d506e0a8ebf96c2e",
".git/objects/5b/c1638acf09664602804e81d03ceb4929c9322f": "fec61bcaaf3240208f14ecc459f13815",
".git/objects/5c/d89f108c3195abdfc251224ff23db6a2fd0e34": "7bbf00dc7021eba767d03d23b3868872",
".git/objects/66/2cf2ff05264885772c801ebfed2011bd18a281": "4bba3a32dad6a59513e2f04cbb8cc89b",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/6c/22272964dbcfacc81bddc4b99528ccbf3566a1": "7bc85f294d318b5f01718a415b273e38",
".git/objects/75/ea150a95b52c0153c14addc32340d251c40ce1": "2181d9743715b8ffc0b2dadcd7d7c443",
".git/objects/75/fff8076bb65ee4d05e1aa96caeb4d32d86c107": "14c0d05302ee2aa11c799955666f0c5d",
".git/objects/76/7ded1ad2ed90e2c4797f0b0355a9c441a2416e": "fdc69eab0859f970aabb7af59ea283a0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/3222f7aac0226544e004d973dbe47a296f4e4e": "a76edbaa5bc3e34947183df0d0a9bf31",
".git/objects/7d/137f31838913f4010593d312b14d264521fc73": "7be31e97364aa6b98d6dc9e35620220f",
".git/objects/82/209227a3a0e6c83001cabbd6021d3fd3b6feac": "ce2e62533d6cfed207de27e9f661e5a1",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/50443a5cdd40fbd9226485ece1f30794cf2e15": "44a0b3f8ececb17754d93813f71ea4e6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e5f3d226d450b651a0fb69dc7fd71d2b8198f5": "7a93cc9ca3a4b6c6741af08780397fe7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/83c35bcdf9cf314313e804fbcad768fb8ae69c": "bcbc3cde7dea37b31c2ae5d04c1de48d",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/699736d1f7d61d45203b14c95c431efdceccff": "bfb1e788cd9d87f8ae833429d96cd46f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/6e564c780130af471ff9a39c3b2c5a8d942167": "6babdcc2b54527568d5734054a21e5de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/572fbd0ab4cf4a6bd9275338bb3fa124c90fa5": "fcbfb4e324ea341e2690d25f5e8ab250",
".git/objects/be/6ffb5fb81569b9eb0d29139878589cd882919a": "279ed35c2c2206ec418ace01c7fea46b",
".git/objects/c3/54a1ada49edd1af73a653b462734408e75cc28": "4e76fd9f4d2fe4ad651c79b2991e1dfd",
".git/objects/c5/7402f70e1bab1bc3f4d4c280779f131d8a4712": "a2875fe1c8545359a27f532fb9d690b1",
".git/objects/c5/bd6223f27d7bb56d6c79922e679c4901068c9f": "b3b47cb1ae986b65b732b07e43a16b9c",
".git/objects/cd/540b36561f615c77ae7c55aac1cd2d3f19f236": "bd310a91af48df3e48c73eefb1c49e86",
".git/objects/d2/02d89a16ee1fa3f2d3d3b0933c862cc8c1d471": "eb5d2b90f36375094705e850041a328e",
".git/objects/d7/62744d7a893598ec39e59d97394e541c674267": "f3997540f6553d964cb3d8d610705998",
".git/objects/d9/d68373baf83595e0cb0763bd9a122d815353b6": "b990776fece6be2bba04094acc2806ed",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/c5bfac1bc9da6bdb6e9f0e64d7eb30dc0d9710": "2c6c00b8730eca9824779e4f8401e50b",
".git/objects/ed/b389f713f0d2272f828dd8e9e72e8aca91dc26": "39124157ceb093b8f4339c36d4dcc1c3",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/e57954d8cc60a0d33344e1c05d32bcb7aea57b": "4354b14121b9be4c372aa13733b9ccde",
".git/objects/f9/1cf4baa856924aa567aedab29edae083272746": "249adfeda9f5b39f39ba07a46f2b5918",
".git/objects/f9/5a02937abcd5da0d822c2b7820e4283cdd11ba": "15501d0d1d6d79b1eadb456374480d64",
".git/objects/fd/53b2f993b79ed8c20dfe8c1fd0ce0709324b48": "c7601e55533039f36323269659674341",
".git/ORIG_HEAD": "8b3c1841425ffeae05435e7258fe64b6",
".git/refs/heads/main": "5903654f800a1161c105fbff7167caa0",
".git/refs/remotes/origin/main": "5903654f800a1161c105fbff7167caa0",
"assets/AssetManifest.json": "7f2af5d2d52927bf599c6beac21afabe",
"assets/assets/fonts/Font1-Regular.ttf": "713136bbc20196908fff7f52437bb2ac",
"assets/assets/images/gem_iconholder.png": "3a785c1b56b2e42eabc5e9a306f1e44a",
"assets/assets/images/logotest.png": "2a631c296d007a9d368a6e3692cd124d",
"assets/assets/images/s1.png": "ab7a6b87e1af9563900f5b983de8b7d9",
"assets/assets/images/stickman_left.png": "11e14ba96cff381e1a9c1276d0b779f9",
"assets/FontManifest.json": "07cfef14e48e1f98d5381bf4e3078b68",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "57f5cfbc3e48dcaf6dc765c196b4edce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "98f55b120ebc12c4691b375f09d07eae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "74cb464130fc1785eb47aff1189bdc46",
"/": "74cb464130fc1785eb47aff1189bdc46",
"main.dart.js": "2c50f23725423f8a5e4660db13c82846",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"README.md": "048a0208c64fb6399cef5716cbffd400",
"version.json": "426313f2f3133c2f20415344c4a22df3"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
