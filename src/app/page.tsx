import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  MonitorPlay,
  Play,
  Shield,
  Smartphone,
  Star,
  Tv,
  Zap,
} from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PremiumCarousel from "@/components/PremiumCarousel";
import { liveSports, premiumImages, premiumVideos, topChannels, trendingMovies } from "@/lib/media";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "iflexiptv",
    "url": "https://www.iflexiptv.com",
    "logo": "https://www.iflexiptv.com/logo.png",
    "description": "Premium IPTV subscription service offering 4K/FHD channels, sports, and VODs.",
  };

  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-brand" />,
      title: "Anti-Freeze Tech",
      description:
        "Dedicated streaming routes reduce buffering during peak nights, live matches, and blockbuster releases.",
    },
    {
      icon: <Globe className="h-6 w-6 text-brand" />,
      title: "Global Channels",
      description:
        "Unlock live entertainment from the USA, UK, Europe, Latino, Arabic, Asian regions, and more.",
    },
    {
      icon: <Shield className="h-6 w-6 text-brand" />,
      title: "Secure Access",
      description:
        "Fast activation, WhatsApp ordering, and a premium support experience from purchase to setup.",
    },
  ];

  return (
    <>
      <SchemaMarkup schema={schema} />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-42"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={premiumImages.heroPoster}
          aria-hidden="true"
        >
          <source
            src={premiumVideos.heroMovieClip}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,6,0.95),rgba(5,5,6,0.72)_48%,rgba(5,5,6,0.96)),radial-gradient(circle_at_68%_28%,rgba(244,199,107,0.18),transparent_34rem)]" />
        <div className="cinema-grid absolute inset-0 -z-10 opacity-30" />

        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="max-w-3xl reveal-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white/82 shadow-2xl shadow-black/30 backdrop-blur">
              <Star className="h-4 w-4 fill-brand text-brand" />
              Movie-led IPTV, cinematic quality, instant activation
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              The Ultimate <span className="text-brand">Premium IPTV</span> Experience
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Say goodbye to freezing and buffering. Join iflexiptv today and access thousands of live TV channels, premium sports, and blockbuster movies in stunning 4K and FHD.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/pricing"
                className="button-glow cta-pulse inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-bold text-background transition hover:-translate-y-0.5 hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Play className="h-5 w-5 fill-current" />
                Start Watching Now
              </Link>
              <Link
                href="/features"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-8 text-base font-semibold text-foreground backdrop-blur transition hover:border-brand/50 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                View Features
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {["99.9% Uptime", "Instant Activation", "24/7 Support"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-full border border-white/8 bg-white/6 px-4 py-3 backdrop-blur">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal-up">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(244,199,107,0.28),transparent_62%)] blur-2xl" />
            <div className="luxury-surface relative overflow-hidden rounded-[2rem] p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={premiumImages.heroPreview}
                  alt="Luxury dark living room with a premium streaming television screen"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/78 via-transparent to-transparent" />
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <div className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                    Live Now
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-background">
                    <span className="h-2 w-2 rounded-full bg-background" />
                    Stable
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/12 bg-black/42 p-5 backdrop-blur-xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">iflexiptv lounge</p>
                    <p className="mt-2 text-2xl font-bold text-white">4K sports, movies, and global channels in one polished experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Luxury reliability</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Why choose iflexiptv?</h2>
            <p className="mt-4 text-muted-foreground">We provide top-tier streaming quality with premium infrastructure, polished onboarding, and a support-first experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="luxury-surface group rounded-[1.5rem] p-8 transition duration-500 hover:-translate-y-1 hover:border-brand/40">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 shadow-lg shadow-brand/10">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Carousels */}
      <section className="border-y border-white/8 bg-black/24 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PremiumCarousel
            eyebrow="Trending movies"
            title="A cinematic VOD library"
            description="A premium streaming shelf for movie nights, new releases, and series marathons made for fast discovery on every screen."
            items={trendingMovies}
          />
          <PremiumCarousel
            eyebrow="Live sports"
            title="Big-match energy without cable friction"
            description="From weekly league games to PPV nights, iflexiptv keeps the live sports experience smooth, fast, and easy to browse."
            items={liveSports}
          />
          <PremiumCarousel
            eyebrow="Top channels"
            title="Premium networks for every screen"
            description="Entertainment, sports, movie, news, and international channel categories presented in a richer, more trustworthy experience."
            items={topChannels}
          />
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Every screen matters</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl mb-6">Watch on Any Device</h2>
              <p className="text-lg text-muted-foreground mb-8">
                iflexiptv is compatible with almost every device. Whether you are at home on your Smart TV or on the go with your smartphone, we have got you covered.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Tv className="h-6 w-6 text-brand" />
                  <span className="font-medium">Smart TVs (Samsung, LG, Android TV)</span>
                </li>
                <li className="flex items-center gap-3">
                  <MonitorPlay className="h-6 w-6 text-brand" />
                  <span className="font-medium">Streaming Devices (Firestick, Apple TV, Roku)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Smartphone className="h-6 w-6 text-brand" />
                  <span className="font-medium">Mobile and Tablets (iOS, Android)</span>
                </li>
              </ul>
              <Link href="/devices#setup-guidance" className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover">
                See all supported devices and setup guides
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="luxury-surface relative overflow-hidden rounded-[2rem] p-3">
              <div className="relative aspect-video overflow-hidden rounded-[1.5rem]">
                <Image
                  src={premiumImages.homeDevices}
                  alt="Person watching premium IPTV on a television in a modern living room"
                  fill
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/72 via-transparent to-brand/12" />
              </div>
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-xl">
                <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold text-white/80">
                  <span>Smart TV</span>
                  <span>Mobile</span>
                  <span>Firestick</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden py-20 sm:py-24">
        <Image
          src={premiumImages.homeCta}
          alt="Premium cinema audience watching a bright screen before choosing an IPTV plan"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,6,0.94),rgba(5,5,6,0.74)),radial-gradient(circle_at_74%_40%,rgba(244,199,107,0.28),transparent_30rem)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Instant premium access</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to upgrade your entertainment?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Join thousands of satisfied customers. Get instant access to premium IPTV channels, movies, sports, and support today.
            </p>
            <Link
              href="/pricing"
              className="button-glow mt-9 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-bold text-background transition hover:-translate-y-0.5 hover:bg-brand-hover"
            >
              Choose Your Plan
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
