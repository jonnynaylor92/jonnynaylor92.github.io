'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b78d654242ff1e9ac49c4307deb2c954",
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
".git/index": "5eda576ede19956cb947e34950379596",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1727593c427c9674ed4eecba348a6a95",
".git/logs/refs/heads/main": "9956ecbcc269885f1521d9a47c9173e5",
".git/logs/refs/remotes/origin/main": "479c77ffc2bd2843c00f89eb357d1d64",
".git/objects/00/32f383ac0086838b069a5c8ece7395caa0c438": "b260fc107c74dc11ffb08208eef67c4f",
".git/objects/01/252b9d99b8dd74fd3053eec14c23f8c4f3fac8": "b0a5113120c2c24a307c6effa81cedfb",
".git/objects/01/94bde68a97893f19ec268c9fc084fc7ad6241a": "c8966348a99063e1ccf40bb286d2dc07",
".git/objects/03/4d0ff36729ba2c28ea85c2c6d9ed761556453c": "146efac338dd9228d54ef6fb86726b58",
".git/objects/03/c88c499ba366c279194261f35410dce22a53fc": "a022577819ed1a56ff8a128a60c9fb68",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/42a1fd5d71d97eb50f1e583b5dad3160fe1e3e": "364748da207153a664f4a209a6c79733",
".git/objects/09/543ced8732c93c198ed36c2eb815e94b6303ee": "5a6d1f9e68f4d54b208222ed7990e8b4",
".git/objects/09/751032d29c1d42b989eb2a553f01a7f12eda64": "d82a2ddbc1d34e2a020f45e69cd6fcb0",
".git/objects/09/bf04bfc92c10ca60562ed5f38b4b138b0b275b": "47a94254fa4c4d674276976ff59d5da1",
".git/objects/0b/c7d4be01406fa413665875d454dda61c9e4237": "d89e971c14156961e4974b152e5c5f5d",
".git/objects/0d/29b00ba0a362d427ee5e996a98582d82076c6b": "9183297c2843ebe2aca82061a9ccdd47",
".git/objects/0e/21d311209051c09be89143517a31b87c6bcdf1": "a169a148d52e768a786d2af6f81e4f07",
".git/objects/10/70c6b14135bd6a94c39adf92da2bf13381ca3c": "4008b6ce2df7fe274a45cc92b54b8e67",
".git/objects/10/83364b4ba1961701950d3f643251d561ac2d48": "71e6e22cf05247d7a779d904ccf0334a",
".git/objects/11/a408abf4d9b0b46d7988b432bdc0b6a7dc9d5e": "366a431ffe70766f43f73cd7b63bd416",
".git/objects/12/5450bc0ca0d0e20620d8c8378c53b7dbb2824c": "2545081363b4875d23692d4863cd0ab4",
".git/objects/13/3e19911041dd8d50a7ae242205efa1bb0ec454": "91cc657bb9f9b80c15255f1d36a891fe",
".git/objects/16/4f6712684bd03099e3c3d3124605c02a890366": "ba44eb9f3c0f9c96f50a3028d89f148b",
".git/objects/16/e253da83dd5f4d905d2e9e4fe0f01959c700f5": "4355f3a373aff1cd00ae23e57f587092",
".git/objects/19/836ca8a3bdd83c0653aaa8d3e8db844262f2e8": "6598baea8a060ce269e90e12e3f560b3",
".git/objects/1a/23a2a4001ccb655ec7283287ffd00da0c20467": "fb57c8ddafa7a2d6a3bfee717a1810f5",
".git/objects/1b/25f8e7c88b405f3956cde79fe3d1e0631109a2": "d1a84fed772c2ca0851bf36b82bca660",
".git/objects/1d/85b59e3b38adfe678eefbe90dd177f98a899f4": "f5703515b4f970e3202cff138439b3ff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/0b6248a127d84a0bcf52c707c6e5fe7792f2c1": "a93814e0a22ed0ecaa3411a28e3104f6",
".git/objects/22/2592661b18a3649aa56bba351ba957a260c4b7": "5783447af349530faf8f82de28ff2d1b",
".git/objects/22/5dc6da1d2d4a69ca01de98abba3e6f6caef1cf": "034b1813ae594eda2f29be2a4a5c207e",
".git/objects/23/6af44ffa76248adac1939435b54dea5f44ec10": "c436022969f92caac3d2c72835f007b6",
".git/objects/25/34d66bdb7c670807c1d7da815bad372fb6b6f2": "4089350c6429ac654248909da9ed30c0",
".git/objects/25/7bf4e687c70368436432656fbc99e06817dc79": "e5ba7b268b0c0a490e62e76112d99815",
".git/objects/29/6e2b1aa80ec18ea5cd9e53c08a91f3013ea0bc": "b0871dca02071a4ca443812b09532eaa",
".git/objects/2e/f98e981fb2b9fa47d6ecee27790ac9d1dec985": "9155f56b33669fd711a594a4d8927ac2",
".git/objects/30/38dc28a9ab081edafd3761b468648906a08ef7": "601cd5c20a6228f1d589ec529d481a3f",
".git/objects/35/7fc71abc92cc54cfafe54c5563d6e040dabf4d": "7012cc64b3c0595e7f2ed50c39040632",
".git/objects/35/f4c17ca1772685e41a7e4b0b841f7fd6166b1a": "def04407a1b978457e026f9e38c75d4b",
".git/objects/37/476f74da0a64f45a19af4c08ab8447ba3e6391": "02d9c3b33462c7d24b806521f04308c3",
".git/objects/38/af53d2ccabb724f5a9c5ce638d46a95ff6e943": "53a2c6c53378ed732dc217bb4ac90333",
".git/objects/3e/1570e8f138bc4a6562b8dfeb564c75d9fe3c20": "a12a7b322b482b842778150e5388bfd3",
".git/objects/3f/baa8602682a24ba9511c54696d473995bddef1": "28eb4c407c72e560c8761bb9b776533b",
".git/objects/40/bea799bd8a9d5fca5f112bf5525775e8cf2f6e": "1a4675c0deceeb42756a312422b066f1",
".git/objects/41/0902d2a9f11387a9ecea2fec2f4069da843eed": "7c2a1946a2c55db2799dc4b804b247a8",
".git/objects/42/2e0782695045aef196d8f4e295cfead151949d": "07b6d5bc3455a424268c9842d44d0f3c",
".git/objects/44/b18b870f69d76daf6ded820679a8c5e3a30ffe": "d7474ffc612e66e2eec33c25657905f3",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c2fdac65a8f06caf68906d57e8a8eacd08621b": "d8791684b33c3b156d6bca0d4050e8ce",
".git/objects/47/3f0e5cf8d56a5f3202748bc753f1656a7f02f3": "3d36a60bdee4331d6b2a9852acbc7562",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/47/d25a68a62a857884d2ca2b3c7668c06de45b6d": "5e1de746bd98ce1fed35c218f910d4b7",
".git/objects/48/d3f5ebd6c87dd16586695d5b46e4bb36201901": "bb76449d11aba5c9fa4deb18c4c78a44",
".git/objects/48/e0db8388d3acf7bbd586e96cba7a8d719d1d8d": "29466397537aae6ea9e77c9e18d54efe",
".git/objects/49/ff36f5f1284de040447b4556aed69b9dd93017": "655526c23dda7989a4cf320ed94150cd",
".git/objects/4c/1e77a1a6fc8e4e7399e0a4fecb34e394390bc9": "6d6478c56738ff351a35710edb8128da",
".git/objects/4c/96338460be53518843a37d1a6c82d9269c7e08": "4308f024094386785191d3b2bdc460fa",
".git/objects/4f/513922d3901d113737632d64bf17413d6319c2": "bba060cc3733406fce3e250881595d38",
".git/objects/51/fa3c439e93e71a7c4ba1424c8ac6cb807613a6": "19c7f028de0076cd170c09deaa8e1585",
".git/objects/53/4cc180255417c45ecd80afb48ca374d542791a": "1540031f0aad76ca47950193f720e9d4",
".git/objects/56/bf87219b02e07e3e68049740b42e1790612fc8": "3b679c4035510ca1fc544492fe9f85b1",
".git/objects/5a/d1275ea79739ae4b0f7f5dc3b8ec23e3725311": "d014c2f861c5dc870cd241992e577656",
".git/objects/5b/78f467c7aae4c647a92a29ab1d0545fc122bdd": "66741db213f00d62d506e0a8ebf96c2e",
".git/objects/5b/c1638acf09664602804e81d03ceb4929c9322f": "fec61bcaaf3240208f14ecc459f13815",
".git/objects/5c/61d64de24a191590f57b7ed859cca0f5895ce6": "b2d183c5086802bec3b53e73b2a79503",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/d89f108c3195abdfc251224ff23db6a2fd0e34": "7bbf00dc7021eba767d03d23b3868872",
".git/objects/5d/3adda98710c06b3074254e687f91d686e9aa3c": "e08e39d6d04411ba9acb2d522c623ae6",
".git/objects/5e/97a18db3244c039876570a4bc068e91a0b5f06": "8a86e229dc105363e86b142d54e83b74",
".git/objects/61/27ed09973ed49e8b543886446075e06f4c64cb": "ae3621b74f47a05dbc9bd7a0a8816106",
".git/objects/61/8477b5bec97f7bb35ab3217d944f090ceee9be": "2ba8f116989ce668965623f1067c6e82",
".git/objects/63/efa902cc6b4e7942866522658c05700c56cdf6": "7113f834c6636da3a7d5b4396092f83e",
".git/objects/64/39946c76162d9ea6513baf3c32f6409af623d9": "6cfa180e55a4c567c2a7116bad8a4253",
".git/objects/66/2cf2ff05264885772c801ebfed2011bd18a281": "4bba3a32dad6a59513e2f04cbb8cc89b",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/e30fbd72e6c7ed7e43b6a84b140d89e8faa2d6": "dd07eb71c158974a516b29d8f61d3686",
".git/objects/6c/22272964dbcfacc81bddc4b99528ccbf3566a1": "7bc85f294d318b5f01718a415b273e38",
".git/objects/75/ea150a95b52c0153c14addc32340d251c40ce1": "2181d9743715b8ffc0b2dadcd7d7c443",
".git/objects/75/fff8076bb65ee4d05e1aa96caeb4d32d86c107": "14c0d05302ee2aa11c799955666f0c5d",
".git/objects/76/7ded1ad2ed90e2c4797f0b0355a9c441a2416e": "fdc69eab0859f970aabb7af59ea283a0",
".git/objects/78/5643e8f976fbf9e475908246418f19a8de1bb8": "794b71e75c53e587c674513eefa511e3",
".git/objects/78/e6a97b724e498edd90c69e2b55ed39a0daf8e5": "e39c476eb3873ad111a2bf99237704b7",
".git/objects/78/f345d7131f608aa79f7e5441aace713b9222a3": "c637efa4db6e45af590805dce074443e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/3222f7aac0226544e004d973dbe47a296f4e4e": "a76edbaa5bc3e34947183df0d0a9bf31",
".git/objects/7d/137f31838913f4010593d312b14d264521fc73": "7be31e97364aa6b98d6dc9e35620220f",
".git/objects/7e/392d8100259302ebb911d49e3d8eb3f7b3c76d": "51c2ecb5821dc6491308b0f460318957",
".git/objects/7f/ac404147095b718572ed554d29fb4cd3f62c0c": "98d0a98ff3ce97c8e60c178a87502bbf",
".git/objects/82/209227a3a0e6c83001cabbd6021d3fd3b6feac": "ce2e62533d6cfed207de27e9f661e5a1",
".git/objects/82/a8f7dd601e610e02c1f1c0b85e0232ea08c30c": "25ec4221efdddecf5d4ce304808d0232",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/86/21e5907987dd2d6ccb37de25b6d488ecb4621b": "8678119f06091b97813c2a1972767d27",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/888b94c03a514221df40d1cadc18d0f953e43c": "90e58f7e1db4a8fb7b3a8c9d68c7f390",
".git/objects/8a/50443a5cdd40fbd9226485ece1f30794cf2e15": "44a0b3f8ececb17754d93813f71ea4e6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/df6db424eac86c7a1f73a272086de84da743e1": "2427d543ab75d0f578bba8fb9dca19fd",
".git/objects/8b/e5f3d226d450b651a0fb69dc7fd71d2b8198f5": "7a93cc9ca3a4b6c6741af08780397fe7",
".git/objects/8c/20b6041f7d7b58e9647ca52c564f509a2c8cdb": "6c01a0e3a2a2d17478cbc18ba115616d",
".git/objects/8c/c58fd2e25db321e933a115d4f998fde0a91f10": "c15a7d35adb1f4e8d257f3b770d76cc9",
".git/objects/8d/be75e172b24c565c5d0aab222f3cdcbb65e4cd": "6bbb8d69af426064c324326c8794674d",
".git/objects/8f/33e29c2ec6430454fe9d204e7503b1ec5d9ee5": "04640deea13b9ed9ff2e7fa911dadd60",
".git/objects/93/bc7e112f2cb9468d28afd8230dd5294f997146": "5925c5c47abc397e10e08eefd5bf795b",
".git/objects/97/00ea15cc8bb00bdb715b2b5c26a150cecf79c0": "8c9ac6387aa8444c2a033945c57847b2",
".git/objects/97/ac18a18a500d00ae05181904c672235dea89d3": "9a7b2caa4511eb33a9460b1f63c4aa5b",
".git/objects/98/c05bf01ca10a229533d10b204d67f6bfd12e51": "0bb6054416eb24d5f9850478a26aa677",
".git/objects/99/3b26af2428b04424d2a7a8db2a5703128df998": "386ff9e565debe412a23b5713005537b",
".git/objects/9a/69b72d91edff32c6a417d8b46844ca50d08908": "535c1629e56ed65cd1c4987a253a4d7a",
".git/objects/9a/c4192d3427e313610034362b1e8f6e14bf1ec9": "f5e97f3792f49c74d5a79de469c4478b",
".git/objects/9c/c94fa00363bdedef9792749d634b562512a74e": "298d5169513ca89e7aea4bd0e511e35c",
".git/objects/9e/160e86f43164de72c09fb3fa7321b73589bf15": "2780b382e3f48343c99ed02ceb17d801",
".git/objects/9e/48fc9fe9e07e5ef7ae57161f6e8c6cc9316959": "f54a8e0fb3a4a79c3ff3782d0706995a",
".git/objects/9e/50d22385c86561eac5c5ca9c9b54196ed787b6": "9d1a7c69eff551bf0f31cda2eed7e381",
".git/objects/9e/9f9f07e80d56dd73ccebb20c199f94f2da2000": "a428067e22ce4be519a026c208a5578b",
".git/objects/a0/180be83cd431f31f5f72fce325b87f0687e5bd": "987a34aa0a9e4c1ad7e2765c09999c87",
".git/objects/a0/b970d63633a49a2420a2b9b2cfeb015883dcbc": "daa13f80f11ccfcc0fe45ce63512b1a3",
".git/objects/a0/dd39af807254562e8a76b030b0424112ac6fa7": "32976382559efad9056eb5753e13511f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/8fd599cf4e7af26c842e2328f506076a073aff": "ac3af701b967065a11964aff9a9baae9",
".git/objects/a2/919b81a837f520b18fe59a0a3b104db6234456": "e0f5dc05ba44170fc89ab2a907dce341",
".git/objects/a3/621c1556ad7857a49f296ff4f3100b5e82594e": "136bed00233c7dd07dd7e27ee6c1d015",
".git/objects/a4/56bd50f90a6b730fda9aa543e9bf408e8f0dd6": "9bf9980127607d298572f583d74c5a31",
".git/objects/a5/83c35bcdf9cf314313e804fbcad768fb8ae69c": "bcbc3cde7dea37b31c2ae5d04c1de48d",
".git/objects/a6/580c455d57c9d397473cb5c04c86591494f173": "4a7e9030efb9c45e2be8e562f90d6784",
".git/objects/a7/61ef8eafecb3712bbe544ea1da22ec692ddc0e": "71590892dba8e0fed95a3d83c30f71f3",
".git/objects/a7/d61b07a8bbfb5d7dfdd95726fa96d9ddcb75ab": "c1ea5a41a3286fd42b2d6cba57ff8bcb",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/699736d1f7d61d45203b14c95c431efdceccff": "bfb1e788cd9d87f8ae833429d96cd46f",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/86cf5d110753f7d4d43a8b793c31f21277d775": "d080041fd6bcad67a75cbaef299f511b",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/8f2bdc70ea0d52350171d81ad09b93c8b904bc": "aeab26de542f7f8216083a8f62f7d837",
".git/objects/ae/3caa6e4ecf43996baa033e7b8c0d9b9b5ce443": "30af9821bb390a14e56a4943278358a3",
".git/objects/ae/9e7b9bc433dcbb035ce813c4c9956d4fc08a18": "5e4d5dbffb4266329a4abac120349cbe",
".git/objects/af/0d7af022c6396b8549c83b084707b0e3bb4c09": "6807d485bed4fd6cb5a0077f86c39eba",
".git/objects/b0/19ce0ec0abd72253c668cf4a0c85fa07717884": "857ed25842f9e30ecfc99cc0306b9d4a",
".git/objects/b2/92face5c38dc2e117dc68373425ee4d91f5f7e": "7f8bed9b8e21d5b986a01668084974b0",
".git/objects/b2/cae45f19f867939f45e83be74b3cebb4dba00f": "2e3b478cc694390fb359bddc175c6edd",
".git/objects/b5/49cf41bbb1698fd20379c93a1d614518b03262": "172aebff695e52b4ed9623064413d469",
".git/objects/b5/b550862104cf73180314436b862c03a0a17c6b": "f49c0c74101dea2e24ac4dd25db43f8f",
".git/objects/b6/0cc055dfaf7852987666f9af58b3441de27a6e": "65db9b7054181627925e318f8674e639",
".git/objects/b6/6e564c780130af471ff9a39c3b2c5a8d942167": "6babdcc2b54527568d5734054a21e5de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4b404254168eaddff76880304e2b3dde4a9c88": "4a0e22754af152e04f65d3d99dab1b19",
".git/objects/b8/448b291a4cf9ef09019473e26756b4797aa4e4": "625888f500dd536b1feca6a81e5eb8c5",
".git/objects/b9/60df864c95a76ba8de720101535c22ed391730": "a635f762a4a39289cb631ab598640f3d",
".git/objects/ba/5a2bac86452df573333d1f024a2966ee796cfa": "9d8b9e765337df1ac1c121bf2db91ca9",
".git/objects/bc/ac9a601cb97d166a483d77b11f66480c8fb55b": "e81e4b017af9da201c538332b7057eda",
".git/objects/bd/a387234d38ce20436e169041fa01756194563d": "73bb52867b6d4597fc13984e0f0c50a3",
".git/objects/bd/df1cc69dba8ff38f1485982a228b00696ded34": "38a6ec5f57d034496ac9e3875ba3923c",
".git/objects/be/572fbd0ab4cf4a6bd9275338bb3fa124c90fa5": "fcbfb4e324ea341e2690d25f5e8ab250",
".git/objects/be/6ffb5fb81569b9eb0d29139878589cd882919a": "279ed35c2c2206ec418ace01c7fea46b",
".git/objects/c0/c8d11d33adf36bc29ab67c4f9e0d5bfc820fc6": "15b8c0d8c3e93304d7dbb2ba493dabce",
".git/objects/c1/29004f95d8a0e8e6ce1847eb77ab2330bca8af": "70ba61c7ae057d4ad362b97a1da847bc",
".git/objects/c3/54a1ada49edd1af73a653b462734408e75cc28": "4e76fd9f4d2fe4ad651c79b2991e1dfd",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c5/7402f70e1bab1bc3f4d4c280779f131d8a4712": "a2875fe1c8545359a27f532fb9d690b1",
".git/objects/c5/9c039a633cf533697939ab76e041bf379c8da6": "778078057dda21a2943b64bd2a36a7d3",
".git/objects/c5/bd6223f27d7bb56d6c79922e679c4901068c9f": "b3b47cb1ae986b65b732b07e43a16b9c",
".git/objects/c5/d152819a7cd10725603336477be5e513d993a6": "5b7fe5e5a85b4a11c1c0eb6539ebf872",
".git/objects/c6/17224db58182751a2b414e53c3db0d51413314": "fd7420d2c74262600ad94ed56064c580",
".git/objects/c7/ba51dfaa091576a2147b3448844c857a900a15": "633b78367128e6b38a2717ca1f7bb352",
".git/objects/c7/ee06f74f72da612805c42ec523fb3e8d3ece4e": "a5447c2621ccefb4e28cef2188b3c500",
".git/objects/cb/b23fc45ab979d3008db8be23a094e4054c8797": "24da7a7cd8dd531be09caf5b93f1edaa",
".git/objects/cb/e7de2a1c113b1bb7e0400ac28abf76894f4d1f": "68317973ca1aeada3fa336691f28991d",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/5393c00dbf0441266653ab468463aeee32b8d1": "a63d71fcc1d143e2b20bb324acc294f7",
".git/objects/cd/540b36561f615c77ae7c55aac1cd2d3f19f236": "bd310a91af48df3e48c73eefb1c49e86",
".git/objects/d2/02d89a16ee1fa3f2d3d3b0933c862cc8c1d471": "eb5d2b90f36375094705e850041a328e",
".git/objects/d2/7c7e6dda132121cdd301a1174793b7db024d1c": "3150c15a2a77a863777acfe49c50620f",
".git/objects/d4/0afe5525057230e790dc5d9e915281742bce9c": "ea25b6123d2a463369920dc4130fb9ab",
".git/objects/d5/636393c63ad05f73804ed23d4fd47c2b66b4d9": "812a74de41ad65fc6e0f768412d37e6c",
".git/objects/d7/276848543d433d2fd993b21854d8070e3eaca3": "296cffe103defd5974f0795a74cf1d2a",
".git/objects/d7/61e4f31601acaf3b5613cef4941b0eb29492f1": "0acb83665091f1496e9a992d9e11f3b7",
".git/objects/d7/62744d7a893598ec39e59d97394e541c674267": "f3997540f6553d964cb3d8d610705998",
".git/objects/d9/29764fcbd8e33d9d54375b689deb000881e731": "2e4291f0235b72ef0cf01518ce8bde79",
".git/objects/d9/d68373baf83595e0cb0763bd9a122d815353b6": "b990776fece6be2bba04094acc2806ed",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/db/d398a1ec005f15af21bc5702449bcfa85deb3d": "8901fa2c1e8fd6bd7ddfa8a414db7e0e",
".git/objects/dc/8c6822a6d3340f5c24cd5b42b7eef121b43bc5": "951317bbe019d7ebe39bc73f5dd95952",
".git/objects/de/e14eb2874fa411747f7563cd01c95ff7b24598": "69a12c376ec00e369bb326e72cbebbac",
".git/objects/df/07b0dd49f57ac7c1511e1c5273204749ffa858": "47ce8661c88f3123ac9e75dc3eff46a7",
".git/objects/df/f746ea60363932d75ba3daa56d3a670de6468c": "930f93b57e1aaaf068fa4cf2513bce11",
".git/objects/e0/9947e614e0929abf557ef81cffba2877e3aaa2": "1111dda30ae299650af0e43742a0c84a",
".git/objects/e1/2a6c20ded472141b0c45eb5e7c5f15122c77c3": "04661f88e6de1c0b2a7c0d0362e14060",
".git/objects/e1/dad52a8dceedf6a9d577d3c2ab0fd5da3bc836": "24dd4015f2da44128e297051adb1867c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/ca862691ec123151addf9612b7f7ad5aba48d1": "1219a07d9a93f08ce60454154afd951e",
".git/objects/e7/c5bfac1bc9da6bdb6e9f0e64d7eb30dc0d9710": "2c6c00b8730eca9824779e4f8401e50b",
".git/objects/e7/d6fe622c409c546f47c0ea84a3659f9dffb3c2": "3007640de3a539ea3057aff4aa9cd644",
".git/objects/ed/1a5824f5d14f260f50ca4bf3ca5b33d50f863a": "76dc0e7dee417350f16055435b652029",
".git/objects/ed/b389f713f0d2272f828dd8e9e72e8aca91dc26": "39124157ceb093b8f4339c36d4dcc1c3",
".git/objects/ee/4426516af92d47b15705d896c1e2a3631e6fbe": "081f50dfcb28e316f8c816385c05269d",
".git/objects/ee/fdfd4ff710727e2fe6d63821bf7c08cab5ad8d": "f6ca0ce723ef6ed3050e758f87231514",
".git/objects/ef/211f399273eb7e65b2a9f26402d00df3840726": "2e14766f72cce9071a2d8b1793628fe3",
".git/objects/f0/1aedf55d5d4a9e96e4587aa6ddf7e929478d2b": "747bd193fb5580248f962e9b3a9b8e04",
".git/objects/f1/5219b42a32a029a705491346e023405915de53": "2956a58000dd37f0f2b05b5bc48ed752",
".git/objects/f2/06c5d959548fa9e7c0f679d8d5800e0a0cb9f3": "570b543b1364bf810888f8e14d68ec7c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/c1e8f68a5543480241b27a406a046b8af3808e": "026865042e4cafc9c500f96848e07bb7",
".git/objects/f4/e57954d8cc60a0d33344e1c05d32bcb7aea57b": "4354b14121b9be4c372aa13733b9ccde",
".git/objects/f5/0aaf03d6898b88a3470288370d8fe75b70e317": "ad18a2e6b910cfee62c9d4c765521bb5",
".git/objects/f5/ff258e5a44efe487dbb5b12192f5828607f3fe": "23102189a58847bdabc886d50aa04da2",
".git/objects/f6/89b0f9cdbdec85adac0c1b054a468e95a64b98": "c28b6745fd7148274e6468711e92e4e3",
".git/objects/f9/1cf4baa856924aa567aedab29edae083272746": "249adfeda9f5b39f39ba07a46f2b5918",
".git/objects/f9/5a02937abcd5da0d822c2b7820e4283cdd11ba": "15501d0d1d6d79b1eadb456374480d64",
".git/objects/fa/2dcf9b1d72824e30ba5501248dc938fccaa36a": "f3114ac93016efe104c8f498e80ade41",
".git/objects/fa/7c267e91efdeb027665b7bcde63f87fabe3ecb": "f1e36b0f77e3dc95da98e59129a89b66",
".git/objects/fd/0753fea157b630744ac9c6cce4da7124f2b0cd": "04723ef233319cb3b0c7da47d6c23df6",
".git/objects/fd/53b2f993b79ed8c20dfe8c1fd0ce0709324b48": "c7601e55533039f36323269659674341",
".git/ORIG_HEAD": "8b3c1841425ffeae05435e7258fe64b6",
".git/refs/heads/main": "7fec4172a6ef732019ae8a667eebaa47",
".git/refs/remotes/origin/main": "7fec4172a6ef732019ae8a667eebaa47",
"assets/AssetManifest.json": "4879bdfde3f17e798ff78d89cbab2c1a",
"assets/assets/fonts/Font1-Regular.ttf": "713136bbc20196908fff7f52437bb2ac",
"assets/assets/fonts/Myfont2-Regular.ttf": "e5927132368effd3d8426521fd3fd0db",
"assets/assets/images/buttons/button1_sheet.png": "4daa1f8b38de95ac3081d014b7963b94",
"assets/assets/images/buttons/button2_sheet.png": "71943821df832fd3d0cd7eb608d8964c",
"assets/assets/images/chilli_road_1.jpg": "618b640432eefc19eea77851f50d22da",
"assets/assets/images/chilli_road_2.jpg": "bcd3b01197200194c84ac58490f4a9b1",
"assets/assets/images/chilli_road_3.jpg": "8739554866d980bd726df1db9d414d44",
"assets/assets/images/claremont_tower.jpg": "5fd9f17085660fc3d98a9f0c2338e3cd",
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
"assets/assets/images/imagetest.png": "26cdf61937893ee84fd6f43f79cdea0c",
"assets/assets/images/lgo.png": "791d5fc179087178bcdba3ea52d53bfe",
"assets/assets/images/logo.png": "fb267e085b3b77a1999af9d6961ced27",
"assets/assets/images/logotest.png": "2a631c296d007a9d368a6e3692cd124d",
"assets/assets/images/lp_image.png": "5aad4d4216174954f5228d7d268546e8",
"assets/assets/images/ngod1.jpg": "ef3e46e44cf2d9a57201621c17adcf41",
"assets/assets/images/paper.png": "87586a21752a7615012031f2556026ea",
"assets/assets/images/paper2.png": "629100375bef524abc99223dca96ec10",
"assets/assets/images/paper2_animated.gif": "6a8f89ba1e6b5e810d513fb2d7a08bfb",
"assets/assets/images/paper3.png": "282e4f9954d894b823cbf7222bd5e83a",
"assets/assets/images/paper4.png": "712e838988a9afa4fa9ad4f35c5a8d30",
"assets/assets/images/paper4torn.png": "e3033f263eb598554a890a8987bf6a11",
"assets/assets/images/paper_animated.gif": "f429619ad38f5177dcb1467e3f5ae256",
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
"index.html": "b61835e89ef5fa7519f9115b1c379a03",
"/": "b61835e89ef5fa7519f9115b1c379a03",
"main.dart.js": "0b521f81f2f98466797589d6c8a0ee79",
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
