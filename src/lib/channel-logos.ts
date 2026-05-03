// Centralized channel logo data — exact URLs provided by user.
// NO Clearbit, NO text logos, NO CSS logos.

export interface ChannelLogo {
  name: string;
  src: string;
  alt: string;
  category: "sports" | "movies" | "news" | "documentary" | "kids" | "arabic";
}

export const CHANNEL_LOGOS: ChannelLogo[] = [
  // ── Sports ────────────────────────────────────────────────────────────────
  {
    name: "ESPN",
    src: "https://pluspng.com/logo-img/fi133espb337-espn-logo-file-espn-logos-png-wikimedia-commons.png",
    alt: "ESPN logo",
    category: "sports",
  },
  {
    name: "beIN Sports",
    src: "https://e7.pngegg.com/pngimages/19/599/png-clipart-bein-sports-text-bein-sports-united-states-la-liga-bein-sports-1-sports-miscellaneous-purple-thumbnail.png",
    alt: "beIN Sports logo",
    category: "sports",
  },
  {
    name: "Sky Sports",
    src: "https://e7.pngegg.com/pngimages/552/474/png-clipart-sky-sports-premier-league-sky-uk-golf-premier-league-television-text.png",
    alt: "Sky Sports logo",
    category: "sports",
  },
  {
    name: "FOX Sports",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/FOX_Sports_logo.svg/1280px-FOX_Sports_logo.svg.png",
    alt: "FOX Sports logo",
    category: "sports",
  },
  {
    name: "TNT Sports",
    src: "https://1000logos.net/wp-content/uploads/2025/08/TNT-Sports-Logo.jpg",
    alt: "TNT Sports logo",
    category: "sports",
  },
  {
    name: "Eurosport",
    src: "https://img.favpng.com/9/10/24/eurosport-logo-Jawd4eJ0_t.jpg",
    alt: "Eurosport logo",
    category: "sports",
  },
  {
    name: "Sport TV",
    src: "https://cdn.freebiesupply.com/logos/large/2x/sporttv-logo-svg-vector.svg",
    alt: "Sport TV logo",
    category: "sports",
  },
  {
    name: "Premier League",
    src: "https://logos-world.net/wp-content/uploads/2023/02/Premier-League-Logo.png",
    alt: "Premier League logo",
    category: "sports",
  },
  {
    name: "Champions League",
    src: "https://1000logos.net/wp-content/uploads/2022/01/UEFA-Champions-League-logo-2012.png",
    alt: "UEFA Champions League logo",
    category: "sports",
  },
  {
    name: "LaLiga",
    src: "https://icon2.cleanpng.com/lnd/20250110/hv/04cc16ced7831d27ecbdcfd003d356.webp",
    alt: "LaLiga logo",
    category: "sports",
  },
  {
    name: "Serie A",
    src: "https://1000logos.net/wp-content/uploads/2019/01/Italian-Serie-A-Logo.png",
    alt: "Serie A logo",
    category: "sports",
  },
  {
    name: "Ligue 1",
    src: "https://1000logos.net/wp-content/uploads/2019/01/Ligue-1-Logo.png",
    alt: "Ligue 1 logo",
    category: "sports",
  },
  {
    name: "Bundesliga",
    src: "https://e7.pngegg.com/pngimages/489/415/png-clipart-bundesliga-logo-bundesliga-logo-icons-logos-emojis-football.png",
    alt: "Bundesliga logo",
    category: "sports",
  },
  {
    name: "UFC",
    src: "https://1000logos.net/wp-content/uploads/2017/06/Logo-UFC.png",
    alt: "UFC logo",
    category: "sports",
  },
  {
    name: "WWE",
    src: "https://freepnglogo.com/images/all_img/1717223569transparent-wwe-logo-png.png",
    alt: "WWE logo",
    category: "sports",
  },
  {
    name: "NBA",
    src: "https://static.vecteezy.com/system/resources/thumbnails/027/127/440/small/nba-logo-nba-icon-transparent-free-png.png",
    alt: "NBA logo",
    category: "sports",
  },

  // ── Movies & Series ───────────────────────────────────────────────────────
  {
    name: "Netflix",
    src: "https://e7.pngegg.com/pngimages/241/697/png-clipart-netflix-full-logo-tech-companies-thumbnail.png",
    alt: "Netflix logo",
    category: "movies",
  },
  {
    name: "Disney+",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/640px-Disney%2B_logo.svg.png",
    alt: "Disney+ logo",
    category: "movies",
  },
  {
    name: "HBO",
    src: "https://e7.pngegg.com/pngimages/973/890/png-clipart-hbo-television-cinemax-film-warner-one-television-text-thumbnail.png",
    alt: "HBO logo",
    category: "movies",
  },
  {
    name: "Canal+",
    src: "https://cdn.freebiesupply.com/logos/large/2x/canal-logo-black-and-white.png",
    alt: "Canal+ logo",
    category: "movies",
  },
  {
    name: "OSN",
    src: "https://e7.pngegg.com/pngimages/894/497/png-clipart-osn-mena-netflix-orbit-showtime-entertainment-let-s-go-miscellaneous-text.png",
    alt: "OSN logo",
    category: "movies",
  },

  // ── News ──────────────────────────────────────────────────────────────────
  {
    name: "BBC",
    src: "https://toppng.com/uploads/preview/bbc-logo-vector-free-download-11574232003rzffoz63kn.png",
    alt: "BBC logo",
    category: "news",
  },
  {
    name: "CNN",
    src: "https://e7.pngegg.com/pngimages/432/428/png-clipart-logo-graphics-cnn-turk-cruise-director-job-text-trademark.png",
    alt: "CNN logo",
    category: "news",
  },
  {
    name: "Al Jazeera",
    src: "https://icon2.cleanpng.com/lnd/20241222/cc/405d1997d1d7095a78b086422e0d8c.webp",
    alt: "Al Jazeera logo",
    category: "news",
  },

  // ── Documentary ───────────────────────────────────────────────────────────
  {
    name: "Nat Geo",
    src: "https://icon2.cleanpng.com/20180607/gjb/aa814czat.webp",
    alt: "National Geographic logo",
    category: "documentary",
  },

  // ── Kids ──────────────────────────────────────────────────────────────────
  {
    name: "Cartoon Network",
    src: "https://www.citypng.com/public/uploads/preview/cartoon-network-cn-logo-hd-png-701751694708568zxoq18qbzl.png",
    alt: "Cartoon Network logo",
    category: "kids",
  },
  {
    name: "Nickelodeon",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Nickelodeon_2009_logo.svg/640px-Nickelodeon_2009_logo.svg.png",
    alt: "Nickelodeon logo",
    category: "kids",
  },
  {
    name: "Disney Channel",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Disney_Channel_logo_2014.svg/640px-Disney_Channel_logo_2014.svg.png",
    alt: "Disney Channel logo",
    category: "kids",
  },

  // ── Arabic ────────────────────────────────────────────────────────────────
  {
    name: "MBC",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/81/Mbc1logo.png",
    alt: "MBC logo",
    category: "arabic",
  },
  {
    name: "OSN Arabic",
    src: "https://e7.pngegg.com/pngimages/894/497/png-clipart-osn-mena-netflix-orbit-showtime-entertainment-let-s-go-miscellaneous-text.png",
    alt: "OSN logo",
    category: "arabic",
  },
  {
    name: "Al Jazeera Arabic",
    src: "https://icon2.cleanpng.com/lnd/20241222/cc/405d1997d1d7095a78b086422e0d8c.webp",
    alt: "Al Jazeera logo",
    category: "arabic",
  },
];

// Pre-filtered exports by category
export const SPORTS_LOGOS      = CHANNEL_LOGOS.filter((l) => l.category === "sports");
export const MOVIES_LOGOS      = CHANNEL_LOGOS.filter((l) => l.category === "movies");
export const NEWS_LOGOS        = CHANNEL_LOGOS.filter((l) => l.category === "news");
export const DOCUMENTARY_LOGOS = CHANNEL_LOGOS.filter((l) => l.category === "documentary");
export const KIDS_LOGOS        = CHANNEL_LOGOS.filter((l) => l.category === "kids");
export const ARABIC_LOGOS      = CHANNEL_LOGOS.filter((l) => l.category === "arabic");

// Animated strip — best mix across all categories
export const STRIP_LOGOS = CHANNEL_LOGOS.filter((l) =>
  [
    "Netflix", "beIN Sports", "ESPN", "Sky Sports", "HBO", "Disney+",
    "BBC", "MBC", "Canal+", "Champions League", "Premier League",
    "UFC", "NBA", "Al Jazeera", "Eurosport", "FOX Sports",
    "Nat Geo", "Cartoon Network", "Bundesliga", "WWE",
  ].includes(l.name)
);
