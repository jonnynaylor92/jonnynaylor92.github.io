'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4030fed26f00e695e5b74b02c0fdfe0b",
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
"assets/assets/images/icons/icon_home.png": "3e1b9934fe9480f7699fa2cd07ab781b",
"assets/assets/images/icons/icon_programmer.png": "0d89914c0452bd516c1376e0d63bbd65",
"assets/assets/images/imagetest.png": "26cdf61937893ee84fd6f43f79cdea0c",
"assets/assets/images/lgo.png": "791d5fc179087178bcdba3ea52d53bfe",
"assets/assets/images/logo.png": "14ae407d445929ee72b40528d376e455",
"assets/assets/images/logotest.png": "2a631c296d007a9d368a6e3692cd124d",
"assets/assets/images/logo_animated.xcf": "54b2153daf9064052fb94bca98cc9b30",
"assets/assets/images/logo_animated_sheet.png": "200d5fc2aba1bc0d4a95e1490e015eaf",
"assets/assets/images/logo_animated_sheet.xcf": "7b785ca53ebc5b5cad8ac90bbddeb4b4",
"assets/assets/images/lp_image.png": "5aad4d4216174954f5228d7d268546e8",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cbb16b48fd87d90a8ff19e69e51e352a",
"/": "712f2be753ae8ba0ed0426fea4a7c279",
"jonnynaylor92.github.io/.git/config": "c380b2251cd8d067ebf7fa30184fbb0e",
"jonnynaylor92.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"jonnynaylor92.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"jonnynaylor92.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"jonnynaylor92.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"jonnynaylor92.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"jonnynaylor92.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"jonnynaylor92.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"jonnynaylor92.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"jonnynaylor92.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"jonnynaylor92.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"jonnynaylor92.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"jonnynaylor92.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"jonnynaylor92.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"jonnynaylor92.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"jonnynaylor92.github.io/.git/index": "4668348c6e8547234719068d6877c71a",
"jonnynaylor92.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"jonnynaylor92.github.io/.git/logs/HEAD": "2dc73586e48e5e4324e78aab877dcf1a",
"jonnynaylor92.github.io/.git/logs/refs/heads/main": "2dc73586e48e5e4324e78aab877dcf1a",
"jonnynaylor92.github.io/.git/logs/refs/remotes/origin/HEAD": "2dc73586e48e5e4324e78aab877dcf1a",
"jonnynaylor92.github.io/.git/objects/pack/pack-be9347afab71fa5d4ed0442802c6d52bf7fb4207.idx": "ee819d3327ec120bcd0807b582bfd3b5",
"jonnynaylor92.github.io/.git/objects/pack/pack-be9347afab71fa5d4ed0442802c6d52bf7fb4207.pack": "aa13210126d5e6bf6328240179c4d2db",
"jonnynaylor92.github.io/.git/packed-refs": "7cf3cb4bbcbca3b523f71b09ff37246f",
"jonnynaylor92.github.io/.git/refs/heads/main": "35241c23110d465877dce83eb53be801",
"jonnynaylor92.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"jonnynaylor92.github.io/assets/AssetManifest.json": "e88b851da20fd4c18709cea92dffd2e9",
"jonnynaylor92.github.io/assets/assets/fonts/Font1-Regular.ttf": "713136bbc20196908fff7f52437bb2ac",
"jonnynaylor92.github.io/assets/assets/fonts/Myfont2-Regular.ttf": "e5927132368effd3d8426521fd3fd0db",
"jonnynaylor92.github.io/assets/assets/images/box_dashed.png": "08ecd5c29a3b0ec512ced11ccdd2dad9",
"jonnynaylor92.github.io/assets/assets/images/buttons/button1_sheet.png": "4daa1f8b38de95ac3081d014b7963b94",
"jonnynaylor92.github.io/assets/assets/images/buttons/button2_sheet.png": "71943821df832fd3d0cd7eb608d8964c",
"jonnynaylor92.github.io/assets/assets/images/buttons/button3.png": "6cb79ac53d9e776771f1245ecc817752",
"jonnynaylor92.github.io/assets/assets/images/buttons/button4.png": "a0a84cbffecf757fa931c207982bf58e",
"jonnynaylor92.github.io/assets/assets/images/buttons/button5.png": "d367b0433fb5064633e5df2f16e08714",
"jonnynaylor92.github.io/assets/assets/images/buttons/button6.png": "394d7f53018226b0c1d32ee60d2925d0",
"jonnynaylor92.github.io/assets/assets/images/buttons/button7.png": "d31971052da639e171971074a4d4da86",
"jonnynaylor92.github.io/assets/assets/images/buttons/button_arrow.png": "51fc6ff64ec5c3f2b2fa6221862eb1de",
"jonnynaylor92.github.io/assets/assets/images/chilli_road_1.jpg": "618b640432eefc19eea77851f50d22da",
"jonnynaylor92.github.io/assets/assets/images/chilli_road_2.jpg": "bcd3b01197200194c84ac58490f4a9b1",
"jonnynaylor92.github.io/assets/assets/images/chilli_road_3.jpg": "8739554866d980bd726df1db9d414d44",
"jonnynaylor92.github.io/assets/assets/images/claremont_tower.jpg": "5fd9f17085660fc3d98a9f0c2338e3cd",
"jonnynaylor92.github.io/assets/assets/images/divider.png": "74a168e2b36bf7f9408a6046058cea94",
"jonnynaylor92.github.io/assets/assets/images/divider_dashed.png": "dfb26209010e6d7fec64d51045aeebe0",
"jonnynaylor92.github.io/assets/assets/images/divider_stubby.png": "19361e5c39d37d331b6eeb8bcf57c300",
"jonnynaylor92.github.io/assets/assets/images/gallery/chilli_road_1.jpg": "618b640432eefc19eea77851f50d22da",
"jonnynaylor92.github.io/assets/assets/images/gallery/spider-1.JPG": "a0090525ca321efff268a3fb34fec56b",
"jonnynaylor92.github.io/assets/assets/images/gallery/spider-11.JPG": "feceeb8abc25393f9be31f6b55a6a290",
"jonnynaylor92.github.io/assets/assets/images/gallery/spider-3.JPG": "256070659759a27a642dc088352d2f23",
"jonnynaylor92.github.io/assets/assets/images/gallery/spider-4.JPG": "49aa25f8c87aba52fe28677da3369ed2",
"jonnynaylor92.github.io/assets/assets/images/gallery/spider-5.JPG": "70325a340141dfe91bcddc0184d0c108",
"jonnynaylor92.github.io/assets/assets/images/gallery/spider-6.JPG": "deed89cc0afacddef477d842ebf7f894",
"jonnynaylor92.github.io/assets/assets/images/gallery/spider-7.JPG": "ab9c70a2293c0281e85d4e86b0fd5b7c",
"jonnynaylor92.github.io/assets/assets/images/gallery/spider-8.JPG": "4742eb8f0fb69ddaa2d7eff34d896be7",
"jonnynaylor92.github.io/assets/assets/images/gallery/spider-9.JPG": "779351213efa3f93fb2a131fc52a88d0",
"jonnynaylor92.github.io/assets/assets/images/gem_iconholder.png": "3a785c1b56b2e42eabc5e9a306f1e44a",
"jonnynaylor92.github.io/assets/assets/images/icons/icon_artist.png": "e9796d183eae74fc2ab930d20e8ed0ab",
"jonnynaylor92.github.io/assets/assets/images/icons/icon_home.png": "0d8df333c0633699c330bf40c45baec8",
"jonnynaylor92.github.io/assets/assets/images/icons/icon_programmer.png": "b8d7aa71db3230d13de9cd77a30dbdd5",
"jonnynaylor92.github.io/assets/assets/images/imagetest.png": "26cdf61937893ee84fd6f43f79cdea0c",
"jonnynaylor92.github.io/assets/assets/images/lgo.png": "791d5fc179087178bcdba3ea52d53bfe",
"jonnynaylor92.github.io/assets/assets/images/logo.png": "14ae407d445929ee72b40528d376e455",
"jonnynaylor92.github.io/assets/assets/images/logotest.png": "2a631c296d007a9d368a6e3692cd124d",
"jonnynaylor92.github.io/assets/assets/images/logo_animated.xcf": "54b2153daf9064052fb94bca98cc9b30",
"jonnynaylor92.github.io/assets/assets/images/logo_animated_sheet.png": "200d5fc2aba1bc0d4a95e1490e015eaf",
"jonnynaylor92.github.io/assets/assets/images/logo_animated_sheet.xcf": "7b785ca53ebc5b5cad8ac90bbddeb4b4",
"jonnynaylor92.github.io/assets/assets/images/lp_image.png": "5aad4d4216174954f5228d7d268546e8",
"jonnynaylor92.github.io/assets/assets/images/mywork/cell.png": "5a4d6e1e219d6a1fe0cd8f2793091607",
"jonnynaylor92.github.io/assets/assets/images/mywork/cell_population.png": "dd2d287ac8632c28f647bbcdfd17c7af",
"jonnynaylor92.github.io/assets/assets/images/mywork/easybiotics1.png": "3ac1049ca73434ad55c80f58ab653b48",
"jonnynaylor92.github.io/assets/assets/images/mywork/easybiotics2.png": "381fb2a57eb93d4bf9d226a2b0859929",
"jonnynaylor92.github.io/assets/assets/images/mywork/simbiotics_components.png": "ea9187c6859fc8678f8c4b8d0c9153e9",
"jonnynaylor92.github.io/assets/assets/images/mywork/simbiotics_logo.jpg": "aca7ad514dfd6175d6e0144f3609b7e2",
"jonnynaylor92.github.io/assets/assets/images/mywork/simbiotics_structure.png": "0f8b0676562dc9713a524b9cc9dc09ce",
"jonnynaylor92.github.io/assets/assets/images/ngod1.jpg": "ef3e46e44cf2d9a57201621c17adcf41",
"jonnynaylor92.github.io/assets/assets/images/ngod1_edited.xcf": "f3930d9173484f0e40d2a95f5a7a30c0",
"jonnynaylor92.github.io/assets/assets/images/paper.png": "87586a21752a7615012031f2556026ea",
"jonnynaylor92.github.io/assets/assets/images/paper2.png": "629100375bef524abc99223dca96ec10",
"jonnynaylor92.github.io/assets/assets/images/paper2_animated.gif": "6a8f89ba1e6b5e810d513fb2d7a08bfb",
"jonnynaylor92.github.io/assets/assets/images/paper3.png": "282e4f9954d894b823cbf7222bd5e83a",
"jonnynaylor92.github.io/assets/assets/images/paper4.png": "712e838988a9afa4fa9ad4f35c5a8d30",
"jonnynaylor92.github.io/assets/assets/images/paper4torn.png": "e3033f263eb598554a890a8987bf6a11",
"jonnynaylor92.github.io/assets/assets/images/paper_animated.gif": "f429619ad38f5177dcb1467e3f5ae256",
"jonnynaylor92.github.io/assets/assets/images/paper_animated.xcf": "14e3911dda56073ef41811fe335b15bf",
"jonnynaylor92.github.io/assets/assets/images/paper_animated2.gif": "50a3ae7542d2d404e5047a7732d53cb8",
"jonnynaylor92.github.io/assets/assets/images/paper_tag.png": "3c16881ddbb30079028f72ef9ce7c7af",
"jonnynaylor92.github.io/assets/assets/images/s1.png": "ab7a6b87e1af9563900f5b983de8b7d9",
"jonnynaylor92.github.io/assets/assets/images/stickman_left.png": "11e14ba96cff381e1a9c1276d0b779f9",
"jonnynaylor92.github.io/assets/FontManifest.json": "ed5d717ac5cfdf361d1b38f4ca9b73b6",
"jonnynaylor92.github.io/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"jonnynaylor92.github.io/assets/NOTICES": "a9f343100b8134a7bc7b8b5e44fc26be",
"jonnynaylor92.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"jonnynaylor92.github.io/assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "a55f81d64486cd9da0f09dafc6be6b57",
"jonnynaylor92.github.io/assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "bca1fb292ea1f1df3af6d25d450afea8",
"jonnynaylor92.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "26b5c4a08f44ade9a7275f6fde7f2134",
"jonnynaylor92.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d1aef793749ebf4ee36fad9c02a53824",
"jonnynaylor92.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5714a584090d841966a4f72ed695c405",
"jonnynaylor92.github.io/assets/packages/wakelock_web/assets/no_sleep.js": "9c3aa3cd0b217305aa860decab3d9f42",
"jonnynaylor92.github.io/CNAME": "98f55b120ebc12c4691b375f09d07eae",
"jonnynaylor92.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"jonnynaylor92.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"jonnynaylor92.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"jonnynaylor92.github.io/index.html": "712f2be753ae8ba0ed0426fea4a7c279",
"jonnynaylor92.github.io/main.dart.js": "e14b711fdc4d39d289c73e6e91439309",
"jonnynaylor92.github.io/manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"jonnynaylor92.github.io/README.md": "048a0208c64fb6399cef5716cbffd400",
"jonnynaylor92.github.io/version.json": "426313f2f3133c2f20415344c4a22df3",
"main.dart.js": "3031c04120e132711a7314265b17117b",
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
