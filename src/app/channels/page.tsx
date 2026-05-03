import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Trophy, Film, Globe2, Baby, MonitorPlay, Newspaper } from "lucide-react";
import AnimatedLogos from "@/components/AnimatedLogos";
import SchemaMarkup from "@/components/SchemaMarkup";
import {
  SPORTS_LOGOS,
  MOVIES_LOGOS,
  NEWS_LOGOS,
  KIDS_LOGOS,
  ARABIC_LOGOS,
} from "@/lib/channel-logos";

export const metadata = {
  title: "Premium IPTV Channels List | Sports, Movies & International",
  description:
    "Explore our full list of 26,000+ premium IPTV channels. Watch live football, blockbuster movies, kids shows, and international broadcasts in 4K.",
  alternates: { canonical: "https://www.iflexiptv.com/channels" },
};

const CATEGORIES = [
  {
    id: "sports",
    name: "Live Sports",
    icon: <Trophy className="h-5 w-5" />,
    description:
      "Premier League, Champions League, UFC, NBA, F1 and more — all in 4K UHD with anti-freeze servers and zero buffering.",
    image:
      "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1200",
    logos: SPORTS_LOGOS.slice(0, 8),
    count: "4,000+",
  },
  {
    id: "movies",
    name: "Cinema & Series",
    icon: <Film className="h-5 w-5" />,
    description:
      "100,000+ movies and series from the world's biggest studios. Blockbusters, award-winning dramas, anime and more.",
    image:
      "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1200",
    logos: MOVIES_LOGOS,
    count: "100,000+",
  },
  {
    id: "news",
    name: "Global News & Documentary",
    icon: <Newspaper className="h-5 w-5" />,
    description:
      "Stay informed with 24/7 global news, documentaries, and current affairs channels from every continent.",
    image:
      "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1200",
    logos: NEWS_LOGOS,
    count: "800+",
  },
  {
    id: "arabic",
    name: "Arabic & Middle East",
    icon: <Globe2 className="h-5 w-5" />,
    description:
      "Stay connected to home. Thousands of Arabic channels including drama, sports, news, and entertainment.",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1200",
    logos: ARABIC_LOGOS,
    count: "3,000+",
  },
  {
    id: "kids",
    name: "Kids & Family",
    icon: <Baby className="h-5 w-5" />,
    description:
      "Safe, fun, and educational. Dedicated kids channels with age-appropriate content your family will love.",
    image:
      "https://images.unsplash.com/photo-1593789382576-54f489cea11a?q=80&w=1200",
    logos: KIDS_LOGOS,
    count: "500+",
  },
];

function LogoGrid({
  logos,
}: {
  logos: { name: string; src: string; alt: string }[];
}) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex items-center justify-center h-20 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300 group p-3 cursor-default"
          title={logo.name}
        >
          <div className="relative w-full h-full grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain max-w-full max-h-full"
              loading="lazy"
              width={120}
              height={48}
            />
          </div>
        </div>
      ))}
      <div className="flex flex-col items-center justify-center h-20 rounded-xl bg-brand/10 border border-brand/20 hover:bg-brand/20 transition-all duration-300 cursor-default col-span-1">
        <span className="text-lg font-black text-brand leading-none">+500</span>
        <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest mt-1">
          More
        </span>
      </div>
    </div>
  );
}

export default function ChannelsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Premium IPTV Channels List",
    url: "https://www.iflexiptv.com/channels",
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-44 sm:pb-32 border-b border-white/5">
        <div className="absolute inset-0 -z-20 bg-black">
          <Image
            src="https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="TV wall background"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.18),transparent_45rem)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-black/40 px-4 py-2 text-sm font-semibold text-accent backdrop-blur shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <MonitorPlay className="h-4 w-4" />
              26,000+ Live Channels
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
              Explore Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-300">
                Live Channels.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl mx-auto font-medium">
              Sports, movies, kids, news, Arabic, French, Spanish and
              international entertainment — all in one IPTV subscription.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/1234567890"
                className="button-glow-success inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-bold"
              >
                <MessageCircle className="h-5 w-5" />
                Get Free Trial
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-8 text-base font-semibold text-white backdrop-blur hover:border-brand/50 hover:text-brand transition-colors"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Animated Logo Strip ───────────────────────────────────────────── */}
      <AnimatedLogos />

      {/* ── Category Blocks ───────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#020617] relative">
        <div className="absolute inset-0 -z-10 cinema-grid opacity-40 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-28">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Cinematic poster card */}
              <div className="w-full lg:w-5/12 shrink-0">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6)] group" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src={cat.image}
                    alt={`${cat.name} channels`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 lg:p-10">
                    <div className="mb-3 inline-flex items-center gap-2 bg-brand text-black px-3 py-1.5 rounded-lg font-bold text-sm w-fit shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                      {cat.icon}
                      {cat.name}
                    </div>
                    <p className="text-2xl font-extrabold text-white mb-1">
                      {cat.count} Channels
                    </p>
                    <p className="text-white/70 font-medium mb-6 leading-relaxed text-sm">
                      {cat.description}
                    </p>
                    <Link
                      href="https://wa.me/1234567890"
                      className="button-glow-success inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-bold"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Request Free Trial
                    </Link>
                  </div>
                </div>
              </div>

              {/* Logo grid */}
              <div className="w-full lg:w-7/12">
                <h2 className="text-3xl font-extrabold text-white mb-2">
                  {cat.name}
                </h2>
                <p className="text-white/50 mb-8 font-medium leading-relaxed">
                  {cat.description}
                </p>
                <LogoGrid logos={cat.logos} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Disclaimer + Final CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-sm text-white/30 mb-10 italic">
            Channel availability may vary by package and region. Contact us on
            WhatsApp for the latest channel list and M3U playlist.
          </p>
          <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to unlock 26,000+ channels?
            </h3>
            <p className="text-white/60 mb-8 font-medium">
              Activation takes less than 3 minutes. Test it yourself before you
              pay.
            </p>
            <Link
              href="https://wa.me/1234567890"
              className="button-glow-success cta-pulse-success inline-flex h-14 items-center justify-center gap-3 rounded-full px-10 text-lg font-bold text-white"
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
