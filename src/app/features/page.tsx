import Link from "next/link";
import Image from "next/image";
import { Activity, ArrowRight, MonitorPlay, RefreshCw, Shield, Wifi, Zap } from "lucide-react";
import { premiumImages } from "@/lib/media";

export const metadata = {
  title: "Premium IPTV Features - Anti-Freeze & 4K Quality",
  description: "Discover the powerful features of iflexiptv. From anti-freeze technology and 4K streaming to our massive VOD library and EPG support.",
  alternates: {
    canonical: "https://www.iflexiptv.com/features",
  },
};

const features = [
  {
    icon: <Zap className="h-8 w-8 text-brand" />,
    title: "Anti-Freeze Technology",
    description: "Our dedicated servers ensure minimal buffering and freezing. We route your traffic through the fastest available nodes for seamless streaming.",
  },
  {
    icon: <MonitorPlay className="h-8 w-8 text-brand" />,
    title: "4K, FHD & HD Quality",
    description: "Experience your favorite movies, TV shows, and live sports in breathtaking 4K and Full HD resolution. Standard HD and SD options are also available for slower connections.",
  },
  {
    icon: <Activity className="h-8 w-8 text-brand" />,
    title: "Premium Sports & PPV",
    description: "Never miss a game. Get full access to global sports networks, live matches, and major Pay-Per-View events without extra charges.",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-brand" />,
    title: "Electronic Program Guide (EPG)",
    description: "Navigate easily with our integrated EPG. See what is playing now and what is coming up next across all our live TV channels.",
  },
  {
    icon: <Shield className="h-8 w-8 text-brand" />,
    title: "Secure & Private",
    description: "Your streaming data is completely secure. We respect your privacy and provide safe, encrypted connections for all our users.",
  },
  {
    icon: <Wifi className="h-8 w-8 text-brand" />,
    title: "Multi-Device Support",
    description: "Watch on Smart TVs, smartphones, tablets, computers, and dedicated streaming boxes. Our service is compatible with almost everything.",
  },
];

export default function FeaturesPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Image
          src={premiumImages.featureHero}
          alt="Modern television in a dark premium room showing IPTV streaming quality"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,6,0.96),rgba(5,5,6,0.76)_52%,rgba(5,5,6,0.96)),radial-gradient(circle_at_78%_24%,rgba(244,199,107,0.22),transparent_32rem)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Premium engineering</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">Why We Are The Best</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We have built our infrastructure from the ground up to provide the ultimate viewing experience. Here is what you get with every iflexiptv subscription.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="luxury-surface group rounded-[1.5rem] p-8 transition duration-500 hover:-translate-y-1 hover:border-brand/40">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 shadow-lg shadow-brand/10">
                  {feature.icon}
                </div>
                <h2 className="text-xl font-bold mb-3">{feature.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/6 p-4 shadow-2xl shadow-black/30 backdrop-blur lg:grid-cols-2 lg:p-6">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem]">
              <Image
                src={premiumImages.featureSports}
                alt="Live sports action streaming through premium IPTV channels"
                fill
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/72 via-transparent to-transparent" />
            </div>
            <div className="p-4 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Built for peak time</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">Live matches, movie nights, and weekend marathons stay smooth.</h3>
              <p className="mt-5 text-muted-foreground leading-7">
                The feature set is designed around the moments when quality matters most: kickoff, premieres, PPV nights, and family viewing.
              </p>
              <Link
                href="/pricing"
                className="button-glow mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-bold text-background transition hover:-translate-y-0.5 hover:bg-brand-hover"
              >
                Start Your Premium Experience
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
