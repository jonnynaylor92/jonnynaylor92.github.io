'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a59de21c3ea1766b6aed5cd86d635795",
".git/config": "c380b2251cd8d067ebf7fa30184fbb0e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ef06db9eac8a3c772c0ac9dbfc425f76",
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
".git/index": "825a9d593cfd8f28b1d46ef2699dddee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fc24ca6c3766a88f34c23e743f3812ba",
".git/logs/refs/heads/main": "fc24ca6c3766a88f34c23e743f3812ba",
".git/logs/refs/remotes/origin/HEAD": "ad944d951a9da5625c826159b9cac94f",
".git/logs/refs/remotes/origin/main": "40f2d274a287ee6bc0ba22d23bcfa408",
".git/objects/00/dd03d9b4dc30d270b5ff6da263e41417eef1cb": "162668bd368b39a3884ca6299572087b",
".git/objects/03/1b9f824ba754e1811bb75176c7f68f369c4330": "8395f36cf41d25918de80f45c87b76dd",
".git/objects/1c/dc1a4575ff381cfd131cf8aa0a2145c4002724": "50d0994c62fa8becea06e8494c2c5b86",
".git/objects/20/bd7f048a3cd9b32652c1e927ecc0852e5a5af6": "f59350275d0b72e83cfad162c45c11bf",
".git/objects/36/00d35ddc97995f5acf5395d2d3c1b51aa22b6a": "f589d26a49eaec14a833bd0e0b47ed38",
".git/objects/38/408e4e84ab80331a5e0123723f1dfd7bdd7dce": "d7d5160027b474660e69cbed2c5e1d28",
".git/objects/3e/43e7cb8c6caa37a2caefe95a239dec4ff8018b": "98c1cc4bbfc4b87b4c53b795f4b388ac",
".git/objects/43/98c3dbfc061e258d2e59e2a02a27010215aba1": "cc2a446bf147811c17f4752ef7f46fa8",
".git/objects/47/7bd55447f84afd96838d9286efd36eae19bb0c": "8fd1e3444b38d48b1637bcca88a956bd",
".git/objects/60/47c67b55c0d10f9d14671b3b4ca5cb70763cf5": "74eb59fd44b77f8b23feaca824a04763",
".git/objects/7e/1d87138aa3ad7516ad04edcfd8c09dad46a4ba": "781161c08f827cf2a41a0c899ff37539",
".git/objects/83/39469f97e34e42397158e64c4425818010bda7": "42ec902ba568c5493537c6526e6cd6f8",
".git/objects/91/5b2d611683897dc7f0172421d933ffcc16a652": "38f931dc13c00201f0c6e4cbc25c9262",
".git/objects/95/51c73087e16bc1d3b161d90e1ffd2ce3e514f1": "15d33ffe2905bfb0066952bccf183105",
".git/objects/a4/5c6b2196da33701d2817441a4b2434a352a532": "a7f2e36ea13bd4cf0d744ffc41b875c9",
".git/objects/aa/ad08e42d5b23869a7a72dbfe2fefc70f8533e1": "cb0f6862f3a46f806c4682d5e09d1ef8",
".git/objects/b0/6fabcd0eb894d31890b00b362ae592b455ce06": "d99c5934941bee273e89b76adba76d0b",
".git/objects/b2/05c2940b09410098d51c19705ab9e5f41d73e3": "0f48c575fd9e78e9be4a807209d6f850",
".git/objects/b6/e649e956f41ac816a1c743768d2400cc1d9e56": "13235056c9d0f23b40619b88e005d5d8",
".git/objects/c0/77eac20c22ed65dde674dc85adf0decf3e45e0": "ce656c6c0207310acb5a8606708c8ac1",
".git/objects/c1/28be7d825bf533d0e081877b4ce67d6eee8133": "ae3e79ddd32d43e5ade2b044650315e6",
".git/objects/c2/ea5a4d0fba9a81a2d21ba2ba8f7a8a875e0539": "0f5f44c0edb8b756936c35735d4d68f6",
".git/objects/d6/e8153448edeccc90d6b3f5133d73df5cbcf1ff": "e9503bf3009b5eaa631bb1524ad04dc5",
".git/objects/da/57b83d4be16b6b13d015041f0b9037c85485f6": "f9c8bc36f3ef6b720653a2667e456ce5",
".git/objects/df/d33e8d5f37690f5ee276ed5c56ba274bd95b8b": "71afd2f4ffd04ff54079f60a2ab4f9b4",
".git/objects/e2/1fa871690fb55b065948cd5cb9528b0c686752": "ac096d26dc355cfa83165a8fd5c1e875",
".git/objects/e3/064e496a1500f298332584e29f31511e246db6": "a42edc4ef665c49c74c4640d88cbcd88",
".git/objects/e9/18365ecacd29dc39164217ddeaef9de0eac94c": "e0c274f4712fbad72aa4fccc4f097cdd",
".git/objects/ee/a8446e2805da95e738f3d126b2567e5235b9ac": "86dceeccb9f579b91d9f737e66d13042",
".git/objects/f4/12a0663c3c4ae6e74db6306b8851ce6fe7e641": "d0fa56bbc388962d084775f8f789c6de",
".git/objects/f7/22414c92c6c81ac35459230b1198f74f3c24ac": "1f28ab4b82117d5f1e67adc7cbe76095",
".git/objects/f8/6e82e23fa2d802a9bc06b703751aaa2ccdd3bc": "0c3564cc816c3f6eba3556e7138f8eb5",
".git/objects/f9/41b7d4c088a36268abc59882ad00d983b730c8": "2b44c0c4ae3ff1e4ce37c735acf11b3c",
".git/objects/fc/6b9510555be6975572ee704252fe27ba68c1e2": "fa7b96f0c993837d7ab1a94feffb4fee",
".git/objects/fd/1aecef51e6931aa518f1ab8cfb65763dfeed09": "605b97658b63487899311230f078b01b",
".git/objects/pack/pack-d2aa55c4823fc8d49c0d6b052cc31b10a28b411c.idx": "4dbf52ee4724422bdc645eed566078ac",
".git/objects/pack/pack-d2aa55c4823fc8d49c0d6b052cc31b10a28b411c.pack": "c179006f633b6ea3101a9907fc91bc62",
".git/ORIG_HEAD": "b0386491ec0aa76dc50c3b717d55c2d3",
".git/packed-refs": "f1c9045afd8b4c1c5dba2b80e7022af8",
".git/refs/heads/main": "e2ad3d62df26ef8c429ae0374fc30aa5",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e2ad3d62df26ef8c429ae0374fc30aa5",
"assets/AssetManifest.json": "8a786556f997e2992d36a7b3eefe1e0f",
"assets/assets/fonts/Font1-Regular.ttf": "713136bbc20196908fff7f52437bb2ac",
"assets/assets/fonts/Myfont2-Regular.ttf": "b24649a70ffa9623375956a42f27c7fc",
"assets/assets/images/box_dashed.png": "08ecd5c29a3b0ec512ced11ccdd2dad9",
"assets/assets/images/buttons/button1_sheet.png": "4daa1f8b38de95ac3081d014b7963b94",
"assets/assets/images/buttons/button2_sheet.png": "71943821df832fd3d0cd7eb608d8964c",
"assets/assets/images/buttons/button3.png": "6cb79ac53d9e776771f1245ecc817752",
"assets/assets/images/buttons/button4.png": "a0a84cbffecf757fa931c207982bf58e",
"assets/assets/images/buttons/button5.png": "d367b0433fb5064633e5df2f16e08714",
"assets/assets/images/buttons/button6.png": "394d7f53018226b0c1d32ee60d2925d0",
"assets/assets/images/buttons/button7.png": "d31971052da639e171971074a4d4da86",
"assets/assets/images/buttons/button_arrow.png": "51fc6ff64ec5c3f2b2fa6221862eb1de",
"assets/assets/images/chilli_road_1.jpg": "618b640432eefc19eea77851f50d22da",
"assets/assets/images/chilli_road_2.jpg": "bcd3b01197200194c84ac58490f4a9b1",
"assets/assets/images/chilli_road_3.jpg": "8739554866d980bd726df1db9d414d44",
"assets/assets/images/claremont_tower.jpg": "5fd9f17085660fc3d98a9f0c2338e3cd",
"assets/assets/images/divider.png": "74a168e2b36bf7f9408a6046058cea94",
"assets/assets/images/divider_dashed.png": "dfb26209010e6d7fec64d51045aeebe0",
"assets/assets/images/divider_stubby.png": "19361e5c39d37d331b6eeb8bcf57c300",
"assets/assets/images/gallery/chilli_road_1.jpg": "618b640432eefc19eea77851f50d22da",
"assets/assets/images/gallery/spider-1.JPG": "a0090525ca321efff268a3fb34fec56b",
"assets/assets/images/gallery/spider-11.JPG": "feceeb8abc25393f9be31f6b55a6a290",
"assets/assets/images/gallery/spider-3.JPG": "256070659759a27a642dc088352d2f23",
"assets/assets/images/gallery/spider-4.JPG": "49aa25f8c87aba52fe28677da3369ed2",
"assets/assets/images/gallery/spider-5.JPG": "70325a340141dfe91bcddc0184d0c108",
"assets/assets/images/gallery/spider-6.JPG": "deed89cc0afacddef477d842ebf7f894",
"assets/assets/images/gallery/spider-7.JPG": "ab9c70a2293c0281e85d4e86b0fd5b7c",
"assets/assets/images/gallery/spider-8.JPG": "4742eb8f0fb69ddaa2d7eff34d896be7",
"assets/assets/images/gallery/spider-9.JPG": "779351213efa3f93fb2a131fc52a88d0",
"assets/assets/images/gem_iconholder.png": "3a785c1b56b2e42eabc5e9a306f1e44a",
"assets/assets/images/icons/icon_artist.png": "41d374568c2028b64c2696e0cb57a2b3",
"assets/assets/images/icons/icon_home.gif": "b512cbea00f7a82a0d053468306901e6",
"assets/assets/images/icons/icon_home.png": "3e1b9934fe9480f7699fa2cd07ab781b",
"assets/assets/images/icons/icon_programmer.png": "0d89914c0452bd516c1376e0d63bbd65",
"assets/assets/images/icons/icon_scientist.png": "817efe39af3e3ecb9dee0d967024d47a",
"assets/assets/images/icons/icon_scientist_sheet.png": "ab861309cd4c6d5900b715f6a21a3754",
"assets/assets/images/icons/icon_tools.png": "16a66dbad3e9ea10ea04937cd37a2975",
"assets/assets/images/imagetest.png": "26cdf61937893ee84fd6f43f79cdea0c",
"assets/assets/images/lgo.png": "791d5fc179087178bcdba3ea52d53bfe",
"assets/assets/images/logo.png": "14ae407d445929ee72b40528d376e455",
"assets/assets/images/logotest.png": "2a631c296d007a9d368a6e3692cd124d",
"assets/assets/images/logo_animated.xcf": "54b2153daf9064052fb94bca98cc9b30",
"assets/assets/images/logo_animated_sheet.png": "200d5fc2aba1bc0d4a95e1490e015eaf",
"assets/assets/images/logo_animated_sheet.xcf": "7b785ca53ebc5b5cad8ac90bbddeb4b4",
"assets/assets/images/lp_image.png": "5aad4d4216174954f5228d7d268546e8",
"assets/assets/images/mywork/art/art1.png": "9384d884c2e0341e5c3a262121019298",
"assets/assets/images/mywork/art/art2.png": "421103a43473cb0bb5c1e86a244618c5",
"assets/assets/images/mywork/art/art3.png": "dbaf363693426d01ed43cdb256cf072b",
"assets/assets/images/mywork/art/art4.png": "94eb684133d84ab79e1271339f637375",
"assets/assets/images/mywork/art/buddy_storyboard.png": "3bf92d872c52c36c024ef2b23bde498c",
"assets/assets/images/mywork/cell.png": "5a4d6e1e219d6a1fe0cd8f2793091607",
"assets/assets/images/mywork/cell_population.png": "dd2d287ac8632c28f647bbcdfd17c7af",
"assets/assets/images/mywork/easybiotics1.png": "3ac1049ca73434ad55c80f58ab653b48",
"assets/assets/images/mywork/easybiotics2.png": "381fb2a57eb93d4bf9d226a2b0859929",
"assets/assets/images/mywork/simbiotics_components.png": "ea9187c6859fc8678f8c4b8d0c9153e9",
"assets/assets/images/mywork/simbiotics_logo.jpg": "aca7ad514dfd6175d6e0144f3609b7e2",
"assets/assets/images/mywork/simbiotics_structure.png": "0f8b0676562dc9713a524b9cc9dc09ce",
"assets/assets/images/ngod1.jpg": "ef3e46e44cf2d9a57201621c17adcf41",
"assets/assets/images/ngod1_edited.xcf": "f3930d9173484f0e40d2a95f5a7a30c0",
"assets/assets/images/paper.png": "87586a21752a7615012031f2556026ea",
"assets/assets/images/paper2.png": "629100375bef524abc99223dca96ec10",
"assets/assets/images/paper2_animated.gif": "6a8f89ba1e6b5e810d513fb2d7a08bfb",
"assets/assets/images/paper3.png": "282e4f9954d894b823cbf7222bd5e83a",
"assets/assets/images/paper4.png": "712e838988a9afa4fa9ad4f35c5a8d30",
"assets/assets/images/paper4torn.png": "e3033f263eb598554a890a8987bf6a11",
"assets/assets/images/paper_animated.gif": "f429619ad38f5177dcb1467e3f5ae256",
"assets/assets/images/paper_animated.xcf": "14e3911dda56073ef41811fe335b15bf",
"assets/assets/images/paper_animated2.gif": "50a3ae7542d2d404e5047a7732d53cb8",
"assets/assets/images/paper_tag.png": "3c16881ddbb30079028f72ef9ce7c7af",
"assets/assets/images/s1.png": "ab7a6b87e1af9563900f5b983de8b7d9",
"assets/assets/images/stickman_left.png": "11e14ba96cff381e1a9c1276d0b779f9",
"assets/FontManifest.json": "ed5d717ac5cfdf361d1b38f4ca9b73b6",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "df28b11a37183fbe1855cc859effd622",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "26b5c4a08f44ade9a7275f6fde7f2134",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d1aef793749ebf4ee36fad9c02a53824",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5714a584090d841966a4f72ed695c405",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"CNAME": "98f55b120ebc12c4691b375f09d07eae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a4877eceb0637facd34b8ac1f886576f",
"/": "a4877eceb0637facd34b8ac1f886576f",
"main.dart.js": "20ff3207074f01f502e22f3a8eca6ef7",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
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
