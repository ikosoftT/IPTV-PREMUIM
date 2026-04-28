import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Baby, Film, Globe, Music, Newspaper, Trophy } from "lucide-react";
import PremiumCarousel from "@/components/PremiumCarousel";
import { premiumImages, topChannels } from "@/lib/media";

export const metadata = {
  title: "IPTV Channels List - Sports, Movies & Global Networks",
  description: "Browse the massive channel list provided by iflexiptv. Get access to premium sports, breaking news, movie networks, and international channels.",
  alternates: {
    canonical: "https://www.iflexiptv.com/channels",
  },
};

const categories = [
  {
    name: "Live Sports",
    icon: <Trophy className="h-6 w-6 text-brand" />,
    description: "NFL, NBA, Premier League, Champions League, UFC, WWE, and more.",
    count: "1,200+ Channels",
    image: premiumImages.channelSports,
    alt: "Live sports action inside a packed stadium",
  },
  {
    name: "Movies & Entertainment",
    icon: <Film className="h-6 w-6 text-brand" />,
    description: "Premium movie networks, premium series, and 24/7 entertainment.",
    count: "3,500+ Channels",
    image: premiumImages.channelMovies,
    alt: "Cinema audience watching a premium movie channel",
  },
  {
    name: "International",
    icon: <Globe className="h-6 w-6 text-brand" />,
    description: "Channels from USA, UK, Canada, Europe, Latino, Arabic, and Asia.",
    count: "8,000+ Channels",
    image: premiumImages.channelInternational,
    alt: "Large stadium representing international live channel coverage",
  },
  {
    name: "News Networks",
    icon: <Newspaper className="h-6 w-6 text-brand" />,
    description: "Stay updated with global and local 24/7 news broadcasting.",
    count: "500+ Channels",
    image: premiumImages.channelNews,
    alt: "Laptop and desk setup for streaming news channels",
  },
  {
    name: "Kids & Family",
    icon: <Baby className="h-6 w-6 text-brand" />,
    description: "Cartoons, educational shows, and family-friendly movies.",
    count: "400+ Channels",
    image: premiumImages.channelFamily,
    alt: "Family living room television setup for IPTV viewing",
  },
  {
    name: "Music & Lifestyle",
    icon: <Music className="h-6 w-6 text-brand" />,
    description: "Music videos, concerts, documentaries, and lifestyle channels.",
    count: "600+ Channels",
    image: premiumImages.channelLifestyle,
    alt: "Premium television screen for lifestyle and entertainment channels",
  },
];

export default function ChannelsPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Image
          src={premiumImages.channelHero}
          alt="Premium cinema screen representing iflexiptv channel categories"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,6,0.96),rgba(5,5,6,0.76)_55%,rgba(5,5,6,0.96)),radial-gradient(circle_at_70%_22%,rgba(244,199,107,0.24),transparent_32rem)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Global entertainment lineup</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">Explore Our Channels</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              With over 15,000 live channels and a massive VOD library, iflexiptv brings the world of entertainment to your screen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => (
              <article key={category.name} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-card shadow-2xl shadow-black/24 transition duration-500 hover:-translate-y-1 hover:border-brand/40">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 1024px) 31vw, (min-width: 768px) 48vw, 92vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/82 via-background/12 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-black/35 backdrop-blur">
                    {category.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand">{category.count}</div>
                  <h2 className="text-xl font-bold mb-2">{category.name}</h2>
                  <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <PremiumCarousel
              eyebrow="Top channels"
              title="Browse the premium lineup"
              description="Entertainment, live sports, movies, news, international categories, and lifestyle channels presented in a polished, touch-friendly rail."
              items={topChannels}
            />
          </div>

          <div className="mt-16 luxury-surface rounded-[2rem] p-8 md:p-12 text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Channel requests</p>
            <h3 className="mt-3 text-2xl font-bold mb-4">Looking for a specific channel?</h3>
            <p className="text-muted-foreground mb-8">Our channel list is constantly updated to bring you the best content. If you have a specific request, feel free to contact our support team.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/pricing"
                className="button-glow inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-bold text-background transition hover:-translate-y-0.5 hover:bg-brand-hover"
              >
                Get Full Access Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/8 px-8 text-base font-bold text-foreground transition hover:border-brand/40 hover:text-brand"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
