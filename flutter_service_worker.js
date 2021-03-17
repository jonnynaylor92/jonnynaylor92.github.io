'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a313e479f6457be88f30ed1122cfa114",
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
".git/index": "aa4f65970a519f3e1f8558ad89b3fbf3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "310cf99b219d0d0f3d8ea8cf97581ae3",
".git/logs/refs/heads/main": "310cf99b219d0d0f3d8ea8cf97581ae3",
".git/logs/refs/remotes/origin/HEAD": "ad944d951a9da5625c826159b9cac94f",
".git/logs/refs/remotes/origin/main": "d10b36f88b1b80889e102f18527745ad",
".git/objects/00/dd03d9b4dc30d270b5ff6da263e41417eef1cb": "162668bd368b39a3884ca6299572087b",
".git/objects/02/c67f1e7281dd01bfda4e4d30a538d15aefc7ef": "7d427ab2fd73271d9c734e5dd7ccb58e",
".git/objects/03/1b9f824ba754e1811bb75176c7f68f369c4330": "8395f36cf41d25918de80f45c87b76dd",
".git/objects/04/1df0bab55c42dc2ad4ff5dcece632796a63b77": "669b465d22bf2f50a94d2c20d5112359",
".git/objects/06/67f48b4dadf7bf3a128fccf24dfc476500cae4": "647a1fea681c1af370cd0aef55740dae",
".git/objects/07/1eb936d70912781b0475a0bef1b1ba6c53ce8b": "0d1f51e73edc37b7be7ab11628160499",
".git/objects/09/a1bda0a70a388cf7c6159ee883208c29358e3f": "02983b2cad9d3636df0a3405cf7faafa",
".git/objects/09/df9658a83f80144f315795318d8afe6ebaea70": "383dce624efa6125dd951d3e507d864d",
".git/objects/0a/c40a648306f810df056cb1418bf00ef36ff68d": "beedbfd85ab2eef8b8fa32c54342b504",
".git/objects/0b/e577c5fa87f6a3565bd8c4f5dcae50f54fe41e": "3458d3e0b004c639aad86e19fc52259a",
".git/objects/0d/1aa1fd2c3861084968633110e478537bb63f4d": "4641cebaa1aa688de9bbdb0bc762ae3f",
".git/objects/12/1547a42a6cbe8345227dcc9a406f883aa17a01": "f0674cc85e45f775ce564abb9ed2722c",
".git/objects/14/957ed42e67d1c2159e7419c13f01a468eee123": "eabc0d3cab7597b9ba45b30c7487855e",
".git/objects/16/b323ad4790e761b7375c14b84c7dfa93fb3015": "86e4ee37909cd5df179cb318cca09629",
".git/objects/1a/27ee08ca8370e6013c5057d771d534d4677fb0": "2c827932ff1a3eb37b005c175aa52fac",
".git/objects/1c/dc1a4575ff381cfd131cf8aa0a2145c4002724": "50d0994c62fa8becea06e8494c2c5b86",
".git/objects/1d/31e6e6c9d09ed4377e8e80f778e53172a441ad": "ac0712106e6e326f86a9711f339ed64c",
".git/objects/20/bd7f048a3cd9b32652c1e927ecc0852e5a5af6": "f59350275d0b72e83cfad162c45c11bf",
".git/objects/22/09df7cc95c68c66dc6f02312a72f3442e517b2": "592cc06bf48af27ca9120343a82c2bb7",
".git/objects/2a/2c78292cfac2a2bd566969624bd35917da417c": "63a5ea04f012aace2ecf303d8341756e",
".git/objects/2a/4e06719b0c8c65628db359d42d7b3f1b4b0ec9": "0be647165ce83d40c7036f267d70d922",
".git/objects/2a/723fef4dd41d891cae439b75f885ff8249b271": "b2c5bd28a8644596ddc2a0a21e270bc2",
".git/objects/2a/e8a488048c58a2f4d941d1d90fdb5768b2290e": "df0d7ac690c19951c31a28a2fd1af908",
".git/objects/33/d6031758126987902187ce7b5906db8c7dfee8": "eb22a3540a77a545003979a1eb6eaea8",
".git/objects/36/00d35ddc97995f5acf5395d2d3c1b51aa22b6a": "f589d26a49eaec14a833bd0e0b47ed38",
".git/objects/38/408e4e84ab80331a5e0123723f1dfd7bdd7dce": "d7d5160027b474660e69cbed2c5e1d28",
".git/objects/38/c5d476b4f75b3f4d7d8ffffdf02593fd432521": "f9fe74ce019d194b60e7cc8efe93dc5a",
".git/objects/3a/52a1a01647b6178f42d7d895103960580d0ae9": "55ae33f8cb2ec86b95536120df6e6ef8",
".git/objects/3b/91b90fd1d99c45c4c8b10ab474781fdd34c5e9": "261e035483549c78c8b1b522a2b499ee",
".git/objects/3c/9c69416f39a9182da1942dcc7235bffecb433e": "a2a9f707690e67340852b86a62f3bc29",
".git/objects/3e/21150858dbccbea150dc35654b99d5acfddcfc": "93f5b62acad6ad0b0266294bc19cf8f8",
".git/objects/3e/43e7cb8c6caa37a2caefe95a239dec4ff8018b": "98c1cc4bbfc4b87b4c53b795f4b388ac",
".git/objects/3e/668b9c587cb778c812c47cf6356bca0c4c153f": "8706607c44b47aed8b03bc9a711e53e4",
".git/objects/3f/60be0092cdbd040be24b929c9a8590685136af": "223d525e265ca82e91aabe84344324fb",
".git/objects/40/d98b9f2395702e6a409c5b5b8c5150beddb158": "990e07bf30772afa8f4cc5d13d1d6380",
".git/objects/41/73c8babd3c3a0649f915c3d28067f3a8fab5e6": "b944afa023f5991352216285c6605eb7",
".git/objects/42/044bb4a15021f503d85d12f521f9b3a5dd9bd7": "b135cbbeabeabe301c3c62e618f64e50",
".git/objects/43/4b497abbd37b6d60e8cf8898a76252731d76ee": "f1af513ac7d34a37cae808558dd1f580",
".git/objects/43/98c3dbfc061e258d2e59e2a02a27010215aba1": "cc2a446bf147811c17f4752ef7f46fa8",
".git/objects/44/8929949461135abc5d84f7941edd0c683c4c36": "c429e8eaa57f1601d808a7a481d325b8",
".git/objects/47/7bd55447f84afd96838d9286efd36eae19bb0c": "8fd1e3444b38d48b1637bcca88a956bd",
".git/objects/49/fa3d111e2c677961c4be2da460abf39c1f138a": "273f7f59e0ad292178970ae6359b7c24",
".git/objects/4b/5931fb2ea749c1c1b62a035d0123bc9b79b785": "21a7e6327e668de8282114263ba9dda5",
".git/objects/4d/2e139141c9cf32e0a44627777f1e27cfd32fea": "95626524100b8a54b80ea22ea131a492",
".git/objects/4e/07dd298f808e529da207a1c98b992675228786": "8f383f4acdb3cb1f3da1c3b33dc4458c",
".git/objects/53/f8f2a18bf379952eaa4d852a46b38868c976ad": "7b002dcd5bc8320236c665b296989b97",
".git/objects/55/0ae2eb09093116b4c6299774f77d4e31366316": "0786b40345018f536f1584322d3ed1de",
".git/objects/55/f7e7e29ac57e99bd37575e004916016fb3feae": "97a52af038cbd661a7d662fe15bb8c02",
".git/objects/5c/f79067a424174061fd33d68f04bcdb7763d132": "532d7a84338b76951bbdaaf1e56bde15",
".git/objects/5d/0e9c6cc3392d1e7415bc2c8aaac8ab8b135b94": "c8743eb67c24d050e6104717ddadba15",
".git/objects/5d/e98d7a74bb5b5a9e5e1cd496dfa4af758ac050": "57e1bc7e270260124a0eda70f1b6e8ca",
".git/objects/5d/eb23b2527163ac8a997e561f822e6d7aafbde0": "5f62a88cc33a608ee6e12d086aa98f40",
".git/objects/5e/6e811b514423b610757500f3a95b33b9d1ce94": "d7f4394e840d427b806125dd4a29178f",
".git/objects/60/47c67b55c0d10f9d14671b3b4ca5cb70763cf5": "74eb59fd44b77f8b23feaca824a04763",
".git/objects/60/53fd9f725d97afb36983ade0609113dc87ae70": "08340197c575ebaf63ef5b88a6827c43",
".git/objects/63/066ee01cfde7f4721cede58220969a872ddb35": "9430d4ece81cc620dc8226dcc976841b",
".git/objects/63/a09c0a7731661f914aa4d7d0433a82c3671ae9": "03bb768258a393af8201bda63414abb0",
".git/objects/64/6dce1736c065232b1b9303dbbc1c84c6846635": "42a3830e764f8dec34fc8131481f74ba",
".git/objects/66/f24ec1a019e1f8a9eb8e6938094e252181c7a0": "690f027ecde591f526f13c2959208768",
".git/objects/68/cf730931133ad765027f264b6309593b6beddc": "46583b95dc034768131878fe8ddceaba",
".git/objects/68/ed60ba6189cfbee305cbd72d808606f12b0532": "59a8a8fe872f3c0569f595fcb2d8f646",
".git/objects/69/3f8d980382d79e1c6d3a3fa26234c5ba88170d": "2ec661ae654d197dee9a025a006d5ea7",
".git/objects/6c/ecb6e329caa97af7ca30acdd4d3318ef6a07fc": "c3eb39674a31c29863892670c9a32322",
".git/objects/6e/690df2c859d5b1243b277e33d8e543383d2c3c": "028884534c284f76ff3643855523339b",
".git/objects/6f/72c2fa30f2294d545819e4372099b0b1ad9bf6": "565b455dd2614abd26dcca2fcba7290f",
".git/objects/6f/b82d2a2986c7566eacd456144559687f323916": "760b98d063519c5356d691a3efed7d8b",
".git/objects/70/1c3caf65a2ca2ea8f93273b69783897e81669c": "242224955180396f6ac5b8f5811e3c6d",
".git/objects/71/34f216437a3b805f38618d73c3324076e1888d": "a0c897a3ec2e158b6d39812e810c0eb7",
".git/objects/71/dbd986afb26d36b96d71e7af49c3bba192ec95": "2422a7d5a6dd1aebbaa58b393ccfc39e",
".git/objects/74/ee48783456588b2e2999595a5d06364d9c380f": "927ebfd8f80a0f0eead7b0d95aabe7fc",
".git/objects/75/5a02100a9564593accb83e11f4f11b472d4f07": "0e33f6c3024832108e3655600a3d8e0d",
".git/objects/7a/a680d64a2bd9db5d824d465c26a7f48ef3dbf6": "c2758fc0080761dbef665b1ab60b3751",
".git/objects/7c/ed59a3f80a9a74b53492b39f263e1ad1884f19": "15bc0f6492783275388914258c4d4452",
".git/objects/7d/c02d4a2e2b40e80e73bdc1efc6263c06e289ce": "7bfe947d01cb1ad87065a1557a6db725",
".git/objects/7e/1d87138aa3ad7516ad04edcfd8c09dad46a4ba": "781161c08f827cf2a41a0c899ff37539",
".git/objects/80/17a87af1b753e974b49b01f8aad8ce1a85c21f": "4800a33d188dd68fed6ac0f3ef6609fc",
".git/objects/81/3baa77f9aea750bed11d58cf033adb353312d7": "cefb0a208fc7b981a713c671e9ac6826",
".git/objects/82/71635c9f219366b56a6df546ee9983c7f5e201": "da8f50c6a26482884372c194cce473e8",
".git/objects/83/39469f97e34e42397158e64c4425818010bda7": "42ec902ba568c5493537c6526e6cd6f8",
".git/objects/84/07471a2fc9cc564feab635e3bfc2f39ea55133": "472c89d2ec9040c7dd07c21c095df16b",
".git/objects/84/73a19ccd2c7b4614d9e045bfd7564833b4ca03": "94fdeae2137c578eb91c6810ee3ffa20",
".git/objects/89/febae03d9a8bd75544b0d78a4693dbe9b4ea5f": "7a1372f3f8e25636ae7765c63c140c38",
".git/objects/8a/60fbc700470583c0f393018991e6916d098f3c": "ed2c29653559fb830e88c1e7cd1dbde1",
".git/objects/8b/170f995e7fac8920c622a0e0bd22eca077c81f": "388933c8d2dafa693f2f48bdfb264ea4",
".git/objects/8d/d6ea4410e87377bd218e5aba9426a119da49c4": "b99cc8b0620d73c844abcce3055a540d",
".git/objects/8f/98fbc5c5f887d56ae1b54a5abf2dee02ac59c9": "f0db2786d12e35cd2e4361ba5cbb1336",
".git/objects/91/1d011f1881e505cf39dbdb02f82c1b7fe11661": "8bc202b24c38950e287985aa9cd552f9",
".git/objects/91/5b2d611683897dc7f0172421d933ffcc16a652": "38f931dc13c00201f0c6e4cbc25c9262",
".git/objects/91/5cb956cb9e7780069916627d40ad640e8f613e": "c286119132de17ffae8b616871521cc0",
".git/objects/91/e7ec469b339e387cbe207b3e3c70c7016c2210": "ed56f4c8cb3af8dd6a4964ec4bdf4e2f",
".git/objects/92/430d7e818375d9c3e57e391b6852890f496d0c": "3aebf40b8ee9edc16f230fb5d4956e3a",
".git/objects/93/a5353bf00ffc23bb9b6460b2cf7e8309eb0c24": "8c9b5bf363227676333619661429baf1",
".git/objects/94/51dd6d1dc7da1ecbd5aab4a42c7e6072b79a4b": "5bff758efb40ec23963ee8b3cf8d8343",
".git/objects/95/51c73087e16bc1d3b161d90e1ffd2ce3e514f1": "15d33ffe2905bfb0066952bccf183105",
".git/objects/98/42535a3aa078f43b40be6e3016e63deff11d68": "690b749fd56f59573a317c559394ea22",
".git/objects/99/84924fd2e1cf2aaa712376c51554c7c536693f": "5a9ae73f2d51819867fbeb0f5d45adb5",
".git/objects/9a/a973a23619796dc3d7d4e66c71540ded96b8bc": "8a24b6c7eb753896a1d7e4ee46277364",
".git/objects/9b/b7bf21c0b635fd782ff4600eb385583ab81484": "8e7ceea71d12653d08b9c91509719773",
".git/objects/a0/69cb5ed5d11500c74f4a361ed1285f2f998af7": "4db8b5e4229ffd8dc1af1ff76d5f364f",
".git/objects/a1/017cc35b956e4477be8aa42dc387eede356dd0": "a3299d53c6f2f5a93e3923f18fd74c35",
".git/objects/a4/5c6b2196da33701d2817441a4b2434a352a532": "a7f2e36ea13bd4cf0d744ffc41b875c9",
".git/objects/a5/e53e8a2d852ff96cc32e2bc88a29eb8794a7fd": "43a9fcedac0e0a8940f2f39047c90b5d",
".git/objects/a6/5206e785922d124b024e4f967f3bf0c58bb131": "4959212ccc6ca4d95162e101da2de078",
".git/objects/aa/ad08e42d5b23869a7a72dbfe2fefc70f8533e1": "cb0f6862f3a46f806c4682d5e09d1ef8",
".git/objects/aa/c0dae9791210a7407cb492487517311309810b": "f8c7529f58444bb79ae025589c978689",
".git/objects/b0/6fabcd0eb894d31890b00b362ae592b455ce06": "d99c5934941bee273e89b76adba76d0b",
".git/objects/b0/a5652b0607be125ea3da2a385625449dc8444c": "623c79697222b5ff6162997afc3332e7",
".git/objects/b0/f725a039668ab00071323b907ce3a5c62da962": "f120302a1feab225965a1d3633c80ea4",
".git/objects/b1/03499e5c736565fef9df0a1772559e858136b0": "a2148e0e5a32dddeac2e577e7bf9b8fd",
".git/objects/b2/05c2940b09410098d51c19705ab9e5f41d73e3": "0f48c575fd9e78e9be4a807209d6f850",
".git/objects/b6/e649e956f41ac816a1c743768d2400cc1d9e56": "13235056c9d0f23b40619b88e005d5d8",
".git/objects/b6/f72ef5e4cecf1fc0ac910e2c5b7cfc5557d940": "1c0379523328b428470f6b3296adee50",
".git/objects/bc/d17e5defb69ac799681d0c2840ea4ddae05e96": "1e82c408dacbbc4bea2ff4a731d370cb",
".git/objects/bd/68d515a247a429beec5ffccd05e7cd66595428": "5fd9e9d0fd7df60d80a7e9b209e43d66",
".git/objects/bd/bf4299948e98137e070e1c323db419a11adc09": "04c7db7b19c5c05ae2863cefea3616ec",
".git/objects/c0/77eac20c22ed65dde674dc85adf0decf3e45e0": "ce656c6c0207310acb5a8606708c8ac1",
".git/objects/c1/28be7d825bf533d0e081877b4ce67d6eee8133": "ae3e79ddd32d43e5ade2b044650315e6",
".git/objects/c1/5d83b6b5e45d542091af186464516f3b1f9c89": "9823f87499f151c4da310b241722b1e3",
".git/objects/c2/8019706a89b508a44cf20604d7e63aabf5d2db": "96650da8d67d85c055c10b453891b8fa",
".git/objects/c2/ea5a4d0fba9a81a2d21ba2ba8f7a8a875e0539": "0f5f44c0edb8b756936c35735d4d68f6",
".git/objects/cb/00285a0fe92455964d15457fdb728fc3ba50f4": "83966d9290fc20c614728301e7833551",
".git/objects/ce/87a46f8ca3010dbf9c8b49e82adb71994fd65c": "aa6cb6013e42aee3b408a0801e877f75",
".git/objects/d0/bc719566af4d2a0f34c7eedabc8b77b9f2228e": "29bb2ecdfbadbc5da9dd531b0922a446",
".git/objects/d1/138797c42e86470a04ea351b4506b9a916406a": "20eb00670cc75a611b6e606006ed5a0a",
".git/objects/d2/c890229160aadc97ecf495753bdaf4d34c4887": "0af1614e3d20d322b49219d35561f4ca",
".git/objects/d3/9313cf67e3de15f62e7a3f55fb9c90088d0fac": "41ab1a08bac321a3c567250a0bb8216d",
".git/objects/d4/0b46a969ba6c6e98a1825630905bbf43bd3ea1": "41366b88e0b6b43c36779042757800ed",
".git/objects/d5/708d6c3cf89b1af8b79c10570a35692c12d8e4": "cb2f37a42be26da5423e6f17cf7a0065",
".git/objects/d6/e8153448edeccc90d6b3f5133d73df5cbcf1ff": "e9503bf3009b5eaa631bb1524ad04dc5",
".git/objects/d7/44f5525881516982cd075d037698d58ff8280e": "7c301272db21cf2d3ff56b83dd4e0341",
".git/objects/d8/277f043c1cde51601b29edcf90dd5e5d631f26": "b22d19224a824f3077e9b6bc5cefd50c",
".git/objects/d8/a32a409d61a5aa37ad49b6a53731af59ce1400": "f798362ef36e9a98475ab721b441aaf7",
".git/objects/da/57b83d4be16b6b13d015041f0b9037c85485f6": "f9c8bc36f3ef6b720653a2667e456ce5",
".git/objects/dc/bc696ba94dac7d9ce9f7c738ea9544a75d2943": "b66047a14acb2877947e67016d6c8855",
".git/objects/dd/493fe22427099d19a1ece4cb414921ccb513a9": "818c15a55f640b20c0f87d524154860a",
".git/objects/de/1a5b479c51d448e10db2193453a63b74eabe81": "8854e45c3e0500ba556763898c318283",
".git/objects/df/d33e8d5f37690f5ee276ed5c56ba274bd95b8b": "71afd2f4ffd04ff54079f60a2ab4f9b4",
".git/objects/e1/ffa1d8489a9f160d989c2a5d20cb9dcb539ff4": "15f192706bc3f354e34c74e503dd11fe",
".git/objects/e2/1fa871690fb55b065948cd5cb9528b0c686752": "ac096d26dc355cfa83165a8fd5c1e875",
".git/objects/e3/064e496a1500f298332584e29f31511e246db6": "a42edc4ef665c49c74c4640d88cbcd88",
".git/objects/e4/df933bfcea18bdd3dc2897b52ddf5040af2ba8": "93a0aeb563d531bee1341f1aa1447007",
".git/objects/e6/f83d3e1abeb77966057cf9d083bb76e88223d8": "c6eeb4c5ceda92e76daebb20ad728144",
".git/objects/e9/009442c83cb768508edb9b6e7d860a931cf357": "515b08e83d886bc640a23baefdd218e1",
".git/objects/e9/18365ecacd29dc39164217ddeaef9de0eac94c": "e0c274f4712fbad72aa4fccc4f097cdd",
".git/objects/ea/33d49a14d06e0f8f56000e4befd93f46bdef0a": "b73efa35d7fa207a4fa1ff9bee351fe4",
".git/objects/ec/538e873de40e190cb319506736631ec4b15679": "bda40c0ee66b56c08ff5e70c663cec1a",
".git/objects/ed/15c8c040ef08cdde2ad2adc658690244a9e30e": "62388dc52b2084e9a49a15d9357f5599",
".git/objects/ed/3bce0f2d4f21110e5f33ebf3013ab0493d6806": "ebfcd9c0a6b9130e526962ee9ab1cafc",
".git/objects/ee/3a8ea3561a8423ab613006c9184bf8ec929a43": "b90339da02426574f8cf10fc34223806",
".git/objects/ee/a8446e2805da95e738f3d126b2567e5235b9ac": "86dceeccb9f579b91d9f737e66d13042",
".git/objects/ef/4866bff0ae8b03a5fec9b7c84f1e6ad6f6f559": "d9d4a3338ff9cd700f0b7b6336e9faf5",
".git/objects/f4/12a0663c3c4ae6e74db6306b8851ce6fe7e641": "d0fa56bbc388962d084775f8f789c6de",
".git/objects/f4/548cc1f28e8a7bb49e12ae659dcf24b8652077": "0589ac086719ee130ee7b3f3e9abf129",
".git/objects/f7/22414c92c6c81ac35459230b1198f74f3c24ac": "1f28ab4b82117d5f1e67adc7cbe76095",
".git/objects/f7/9935bdc9ed30d74bc1e28536ce17d441198255": "92fe6b19b0e8527914417d9d9f22355d",
".git/objects/f8/6e82e23fa2d802a9bc06b703751aaa2ccdd3bc": "0c3564cc816c3f6eba3556e7138f8eb5",
".git/objects/f9/41b7d4c088a36268abc59882ad00d983b730c8": "2b44c0c4ae3ff1e4ce37c735acf11b3c",
".git/objects/f9/b20374a03fdebdbc208ae8df9896a979bb9069": "2d03ee0b19ecd0f2136599dd61c5728f",
".git/objects/f9/d5f4bf674daaa2a6448a5d7b8fecd4021078c7": "8d7b5fa525026ab7dae0ff1e4c1b0b13",
".git/objects/fc/6b9510555be6975572ee704252fe27ba68c1e2": "fa7b96f0c993837d7ab1a94feffb4fee",
".git/objects/fc/74cfd3e37cf364608ad87d8108f2d42ae11825": "c4370aa64e164dacdcc8fcf91517be53",
".git/objects/fc/8df3a441356140411d130153fb1442ed692011": "45cc106798bbe0a2ee8385e21dc79833",
".git/objects/fd/1aecef51e6931aa518f1ab8cfb65763dfeed09": "605b97658b63487899311230f078b01b",
".git/objects/pack/pack-d2aa55c4823fc8d49c0d6b052cc31b10a28b411c.idx": "4dbf52ee4724422bdc645eed566078ac",
".git/objects/pack/pack-d2aa55c4823fc8d49c0d6b052cc31b10a28b411c.pack": "c179006f633b6ea3101a9907fc91bc62",
".git/ORIG_HEAD": "b0386491ec0aa76dc50c3b717d55c2d3",
".git/packed-refs": "f1c9045afd8b4c1c5dba2b80e7022af8",
".git/refs/heads/main": "0354861a119bcb7030021e9c82e0e15b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0354861a119bcb7030021e9c82e0e15b",
"assets/AssetManifest.json": "b8e839e1c3bb7b841c0b61be0938fb28",
"assets/assets/fonts/Antic-Regular.ttf": "31a31ce68535e31daf32de8efdb10223",
"assets/assets/fonts/BadScript-Regular.ttf": "7ed4b6a5bca63723fcfc69217f85ddb9",
"assets/assets/fonts/Font1-Regular.ttf": "713136bbc20196908fff7f52437bb2ac",
"assets/assets/fonts/Myfont2-Regular.ttf": "b24649a70ffa9623375956a42f27c7fc",
"assets/assets/fonts/NanumPenScript-Regular.ttf": "6238324b9cfd31534885a47e8b07231e",
"assets/assets/fonts/Pangolin-Regular.ttf": "7810feee2a587264c0d6058d52b60ae4",
"assets/assets/fonts/VarelaRound-Regular.ttf": "159cb67fc3bc762a8c3232f0a0c6728e",
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
"assets/assets/images/gallery/games/buddy.png": "7ba1cc2eff7d4a08cb99ea71822d24d4",
"assets/assets/images/gallery/games/buddy1.png": "25a7a8bc30079d27518832d15e981ae1",
"assets/assets/images/gallery/games/buddy2.png": "53a4de8f6cb10bf0175570e2572f7dd3",
"assets/assets/images/gallery/games/buddy3.png": "0c89f87aa4c59f0ac171bc3af75dd3fe",
"assets/assets/images/gallery/games/buddy4.png": "0cd46d2880cd70d1de1c9e2c0eb82070",
"assets/assets/images/gallery/games/buddy5.png": "e75b97bfa0e26a4299b6568d6ece32d4",
"assets/assets/images/gallery/games/buddy6.png": "d39be16a2deb66e4c00780b554dbbcd6",
"assets/assets/images/gallery/games/buddy7.png": "4d69338acf6eb38f873e02e4a45fe6ae",
"assets/assets/images/gallery/games/odyssey1.png": "ac511663f3cc76d0ed6b69176172576e",
"assets/assets/images/gallery/games/odyssey10.png": "4e37ed4ddceb0cd8d57dee9f3601ae71",
"assets/assets/images/gallery/games/odyssey2.png": "8e08299aa5e3b0421952dfbb601d63bb",
"assets/assets/images/gallery/games/odyssey3.png": "74933373cfba9553540766207b03f1b0",
"assets/assets/images/gallery/games/odyssey4.png": "a8ea2944a0af6db878c986c2ac2929f1",
"assets/assets/images/gallery/games/odyssey5.png": "df47ec61ed27bf22a6aeb9c3d81f913a",
"assets/assets/images/gallery/games/odyssey6.png": "488207ae1b75c45262d55ef66eac0f6b",
"assets/assets/images/gallery/games/odyssey7.png": "287df99d64678e5285afe29b7f969acf",
"assets/assets/images/gallery/games/odyssey8.png": "b21354234a7f2492370a17dcc185ef4f",
"assets/assets/images/gallery/games/odyssey9.png": "f2d2bab03b7c5b2a396eca9cd7503d40",
"assets/assets/images/gallery/games/rts1.png": "135a8595e562612c640e2aa74a38efca",
"assets/assets/images/gallery/games/rts2.png": "43ad8687819bfa4d7428465c2ebdf1f0",
"assets/assets/images/gallery/games/rts3.png": "cf1a424660b7523d7b5785cd7a555aa8",
"assets/assets/images/gallery/games/rts4.png": "4bb3d333c2bb74efbea138eabae4e809",
"assets/assets/images/gallery/games/rts5.png": "f72bf336c9edfc5fd4c890852bcf1ff4",
"assets/assets/images/gallery/games/rts6.png": "91864423e971852ced296b4c4e6e2e8a",
"assets/assets/images/gallery/games/rts7.png": "0d6850e018fe41d76bf7c09d8b544a38",
"assets/assets/images/gallery/games/rts8.png": "7d72228b6b43ab7a95cd475f7e4ce64f",
"assets/assets/images/gallery/games/space1.png": "19cedb3187cae951f02fa223cb7d0a07",
"assets/assets/images/gallery/games/space2.png": "2bd540bd3ba85233921de4762ccc4f10",
"assets/assets/images/gallery/games/space3.png": "71fabe9d1f2d0697718598f7acb6e2ef",
"assets/assets/images/gallery/photography/chilli_road_1.jpg": "618b640432eefc19eea77851f50d22da",
"assets/assets/images/gallery/photography/spider-1.JPG": "a0090525ca321efff268a3fb34fec56b",
"assets/assets/images/gallery/photography/spider-11.JPG": "feceeb8abc25393f9be31f6b55a6a290",
"assets/assets/images/gallery/photography/spider-3.JPG": "256070659759a27a642dc088352d2f23",
"assets/assets/images/gallery/photography/spider-4.JPG": "49aa25f8c87aba52fe28677da3369ed2",
"assets/assets/images/gallery/photography/spider-5.JPG": "70325a340141dfe91bcddc0184d0c108",
"assets/assets/images/gallery/photography/spider-6.JPG": "deed89cc0afacddef477d842ebf7f894",
"assets/assets/images/gallery/photography/spider-7.JPG": "ab9c70a2293c0281e85d4e86b0fd5b7c",
"assets/assets/images/gallery/photography/spider-8.JPG": "4742eb8f0fb69ddaa2d7eff34d896be7",
"assets/assets/images/gallery/photography/spider-9.JPG": "779351213efa3f93fb2a131fc52a88d0",
"assets/assets/images/gallery/publications/auto_paper.png": "e617f8222258c7be020e913b3974c1e2",
"assets/assets/images/gallery/publications/easy_paper.png": "ae8a967e4c36143e2a911ee1142bf295",
"assets/assets/images/gallery/publications/simbiotics_paper.png": "617f6f158e9224368b37dbcd0ff830d4",
"assets/assets/images/gallery/publications/towards_paper.png": "b6ded8ec0e1710ac6f77c5e483536c50",
"assets/assets/images/gallery/software/easybiotics1.png": "3ac1049ca73434ad55c80f58ab653b48",
"assets/assets/images/gallery/software/simbiotics_logo.jpg": "aca7ad514dfd6175d6e0144f3609b7e2",
"assets/assets/images/gem_iconholder.png": "3a785c1b56b2e42eabc5e9a306f1e44a",
"assets/assets/images/icons/icon_artist.png": "41d374568c2028b64c2696e0cb57a2b3",
"assets/assets/images/icons/icon_home.gif": "b512cbea00f7a82a0d053468306901e6",
"assets/assets/images/icons/icon_home.png": "3e1b9934fe9480f7699fa2cd07ab781b",
"assets/assets/images/icons/icon_programmer.png": "0d89914c0452bd516c1376e0d63bbd65",
"assets/assets/images/icons/icon_scientist.gif": "012ce92451d9e5f74cc8e449382ce683",
"assets/assets/images/icons/icon_scientist.png": "817efe39af3e3ecb9dee0d967024d47a",
"assets/assets/images/icons/icon_scientist_sheet.png": "ab861309cd4c6d5900b715f6a21a3754",
"assets/assets/images/icons/icon_tools.png": "16a66dbad3e9ea10ea04937cd37a2975",
"assets/assets/images/imagetest.png": "26cdf61937893ee84fd6f43f79cdea0c",
"assets/assets/images/lgo.png": "791d5fc179087178bcdba3ea52d53bfe",
"assets/assets/images/logo.png": "14ae407d445929ee72b40528d376e455",
"assets/assets/images/logos/icos_slides.png": "2aa8bd0dcafc41458dc1ebb77cb71fb1",
"assets/assets/images/logos/newcastle_transparent.png": "af8df5c56b3e9986a216f074b53a81ca",
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
"assets/assets/images/paper_animated2_smaller.gif": "e2f7f03f0464254f79058b316a6e2785",
"assets/assets/images/paper_tag.png": "3c16881ddbb30079028f72ef9ce7c7af",
"assets/assets/images/s1.png": "ab7a6b87e1af9563900f5b983de8b7d9",
"assets/assets/images/stickman_left.png": "11e14ba96cff381e1a9c1276d0b779f9",
"assets/FontManifest.json": "855185c32b278ee8655cdcde0f6475db",
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
"index.html": "cdbd9591fb9e5079a3512566487cbb71",
"/": "cdbd9591fb9e5079a3512566487cbb71",
"main.dart.js": "4a15b5bf603852b016198db9758ba0e5",
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
