import Link from "next/link";
import Image from "next/image";
import { Activity, ArrowRight, MonitorPlay, RefreshCw, Shield, Sparkles, Wifi, Zap } from "lucide-react";
import { premiumImages } from "@/lib/media";

export const metadata = {
  title: "Premium IPTV Features - Anti-Freeze & 4K Quality | I Flex IPTV",
  description: "Discover the powerful features of I Flex IPTV. Anti-freeze technology, 4K streaming, massive VOD library, EPG support, and multi-device compatibility.",
  alternates: {
    canonical: "https://www.iflexiptv.com/features",
  },
};

const features = [
  {
    icon: <Zap className="h-8 w-8 text-[#F2C847]" />,
    title: "Anti-Freeze Technology",
    description: "Our dedicated load-balanced servers ensure minimal buffering and freezing. Traffic is routed through the fastest available nodes for seamless streaming.",
  },
  {
    icon: <MonitorPlay className="h-8 w-8 text-[#F2C847]" />,
    title: "4K, FHD & HD Quality",
    description: "Experience movies, TV shows, and live sports in breathtaking 4K and Full HD resolution. Standard HD and SD options are available for slower connections.",
  },
  {
    icon: <Activity className="h-8 w-8 text-[#F2C847]" />,
    title: "Premium Sports & PPV",
    description: "Never miss a game. Get full access to global sports networks, live matches, and major Pay-Per-View events without extra charges.",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-[#F2C847]" />,
    title: "Electronic Program Guide (EPG)",
    description: "Navigate easily with our integrated EPG. See what is playing now and what is coming up next across all our live TV channels.",
  },
  {
    icon: <Shield className="h-8 w-8 text-[#F2C847]" />,
    title: "Secure & Private",
    description: "Your streaming data is completely secure. We respect your privacy and provide safe, encrypted connections for all our users.",
  },
  {
    icon: <Wifi className="h-8 w-8 text-[#F2C847]" />,
    title: "Multi-Device Support",
    description: "Watch on Smart TVs, smartphones, tablets, computers, and dedicated streaming boxes. Our service works with virtually everything.",
  },
];

export default function FeaturesPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <Image
          src={premiumImages.featureHero}
          alt="Modern television showing IPTV streaming quality"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
              <Sparkles className="h-3 w-3" />
              Premium Engineering
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">Why We Are The Best</h1>
            <p className="mt-6 text-lg leading-8 text-white/50">
              Built from the ground up to provide the ultimate viewing experience. Here is what you get with every I Flex IPTV subscription.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="glass group rounded-[1.5rem] p-8 border border-white/[0.06] transition-all duration-500 hover:-translate-y-1 hover:border-[#F2C847]/30 hover:shadow-[0_0_50px_rgba(242,200,71,0.06)]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F2C847]/20 bg-[#F2C847]/10">
                  {feature.icon}
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{feature.title}</h2>
                <p className="text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid items-center gap-8 glass rounded-[2rem] p-4 lg:grid-cols-2 lg:p-6 border border-white/[0.06]">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem]">
              <Image
                src={premiumImages.featureSports}
                alt="Live sports action streaming through premium IPTV"
                fill
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
            <div className="p-4 lg:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-4">
                Built for Peak Time
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">Live matches, movie nights, and weekend marathons stay smooth.</h3>
              <p className="mt-5 text-white/50 leading-7">
                Every feature is designed around the moments when quality matters most: kickoff, premieres, PPV nights, and family viewing.
              </p>
              <Link
                href="/pricing"
                className="btn-premium mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-base font-bold"
              >
                <span className="relative z-10">Start Your Premium Experience</span>
                <ArrowRight className="h-5 w-5 relative z-10" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
