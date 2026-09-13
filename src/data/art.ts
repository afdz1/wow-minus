/** Official World of Warcraft: Forever art from Blizzard Entertainment. */
const IMG = "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec";
const VID = "https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec";

export const BLIZZARD_CREDIT =
  "World of Warcraft®: Forever artwork © Blizzard Entertainment, Inc. All rights reserved.";

export const OFFICIAL = {
  source: "https://worldofwarcraft.blizzard.com/en-us/forever",
  logo: `${IMG}/blt527dd61848a757c7/6aa3316cad92093ee45628fd/camelot-logo-gamepage.png`,
  icon: `${IMG}/bltee571c6de7ccbaf6/6a95adbf1deff31d75439029/camelot-icon.png`,
  og: `${IMG}/blt766f7698aedb7b7f/6a9bc5882437ed5612d4878f/Open_Graph_-_Camelot.jpg`,
  paper: `${IMG}/blt3be5fbbd8ab0160d/6a9bc736f8f1240c84bcb8fd/paper-bg.jpg`,
  masthead: `${IMG}/blt4d412035d16da095/6aa204fb2c0580bfcf273e54/masthead-art.jpg`,
  mastheadMd: `${IMG}/blt27ce9eca34bd523d/6aa1eb902c0580208d273e42/masthead-art-md.jpg`,
  countdown: `${IMG}/blt195a9f74585f069a/6a95c2dc2924f56db28aa8b8/countdown-timer-bg.jpg`,
  cinematic: `${IMG}/blt2ba5c8ba05a5aed8/6aa43f0b203da39637f0e411/Cinematic_Trailer.jpg`,
  skyborne: `${IMG}/blt86ec9f1909d2e4f3/6a99ff068102310aeb81e0de/Skyborne-BG.jpg`,
  collection: `${IMG}/blt93cdf699622c1b0d/6aa43b37f8f1245cfdbcbb80/WoWForever_Collection.jpg`,
  heroicPack: `${IMG}/blteb250711dec6ee18/6a96037132e602b75fc0dadb/Heroic_Comp.jpg`,
  epicPack: `${IMG}/blt08431c31023ba96e/6a9603712c05804cc3273c15/Epic_Comp.jpg`,
  collectionPack: `${IMG}/bltc02ff90fbb5fae15/6a9603716cec0d6339b1415e/Warcraft_Forever_Collection_Comp.jpg`,
  features: {
    stories: `${IMG}/blt4865ad3281f25cb8/6aa09df51deff31ac7439163/Explore_Untold_Stories.jpg`,
    expanses: `${IMG}/blt491397daad992c6d/6aa09e0ec751e10dc30c50e0/Soak_in_Breathtaking_Expanses.jpg`,
    paths: `${IMG}/blt7a58f20dd8f6b2d9/6aa09f1c7ec8fef91000059e/Take_Unknown_Paths.jpg`,
    power: `${IMG}/blt2dc686732f526be5/6aa09db81deff3540b439161/Claim_New_Power.jpg`,
    journey: `${IMG}/blt848d2f0dbc2d2d1e/6aa09dd67ec8fedf4f00059c/Every_Journey_Matters.jpg`,
    systems: `${IMG}/blt50839e89a98e4d22/6aa09f512437ed84d9d48846/System_Revamps.jpg`,
  },
  zones: {
    ashenvale1: `${IMG}/blt58abba267979c75c/6a985e232437ed4648d48726/Updates_Ashenvale_01.jpg`,
    ashenvale2: `${IMG}/bltaea7929ebe6f9a8b/6a985e239b942e3ba6f7426b/Updates_Ashenvale_02.jpg`,
    darkshore: `${IMG}/blt7c732bea431c18cf/6a985e239b942e1f62f74267/Updates_Darkshore.jpg`,
    dustwallow: `${IMG}/blt7bdf8e7ba8e4b30a/6a985e232c05804582273c55/Updates_Dustwallow.jpg`,
    felwood: `${IMG}/blt013749cb805b2c05/6a985e23dee884432bcba951/Updates_Felwood.jpg`,
    mulgore: `${IMG}/bltf8ea7f909345c09b/6a985e23203da3e3fcf0e10e/Updates_Mulgore.jpg`,
    barrens: `${IMG}/blta4c0f5c59e8c1615/6a985e243ad3924af56f8e16/Updates_TheBarrens.jpg`,
  },
  videos: {
    zephras: `${VID}/bltecda2e16d91ab78f/6a97ea009b942e961bf7425b/Zephras_01.mp4`,
    riverglades: `${VID}/blte44b2fce6363c19b/6a97ea839b942e39adf7425f/Riverglades_02.mp4`,
    hyjal: `${VID}/blt9e4944aa1727b4d3/6a97ea4cf8f1247522bcb8c2/Hyjal02.mp4`,
    ashenvale1: `${VID}/blt920cb8826b7d24ee/6aa34ca62437ed7c63d48a25/WowF_Ashenvale_01.mp4`,
    ashenvale2: `${VID}/blt6d31ebc3540757b6/6aa3547455641d3738f35704/WowF_Ashenvale_02.mp4`,
    darkshore: `${VID}/blt81092bd16d5c6336/6aa34f252437ed11d3d48a29/WowF_Darkshore_02.mp4`,
    dustwallow: `${VID}/blt9f84490d0996c43c/6aa35223203da32240f0e3c7/WowF_Dustwallow_01.mp4`,
    felwood: `${VID}/blt422381960737d558/6aa353059b942e867af7452e/WowF_Felwood_01.mp4`,
    mulgore: `${VID}/bltc84f80888ba45d64/6aa353872c05800a50273f4a/WowF_Mulgore_01.mp4`,
    barrens: `${VID}/blt103ca55446d8a591/6aa354218102319c8681e341/WowF_TheBarrens_01.mp4`,
  },
} as const;

export const ZAM_ICON = (name: string) =>
  `https://wow.zamimg.com/images/wow/icons/large/${name}.jpg`;
export const GAME_ICON = (name: string) => `/icons/${name}.jpg`;
export const ZAM_TALENT_BG = (id: number) =>
  `https://wow.zamimg.com/images/wow/talents/backgrounds/classic/${id}.jpg`;
