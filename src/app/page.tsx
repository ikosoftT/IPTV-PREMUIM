import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Star,
  MessageCircle,
  Trophy,
  Film,
  Calendar,
  Clock,
  Zap,
  Shield,
  Headphones,
  Sparkles,
  ChevronRight,
  Server,
} from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import EmblaSlider from "@/components/EmblaSlider";
import AnimatedLogos from "@/components/AnimatedLogos";
import { blogPosts } from "@/lib/blog-data";
import PricingSection from "@/components/PricingSection";

const HERO_IMAGES = {
  bg: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000&auto=format",
  heroCollage: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2000&auto=format",
  deviceShowcase: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const devices = [
  { name: "Android", icon: "/icons/android.svg", desc: "Phones & Tablets" },
  { name: "Android TV", icon: "/icons/androidtv.svg", desc: "Smart TVs & Boxes" },
  { name: "Google TV", icon: "/icons/googletv.svg", desc: "Latest UI" },
  { name: "Fire TV", icon: "/icons/firetv.svg", desc: "Firestick & Cube" },
  { name: "Apple TV", icon: "/icons/appletv.svg", desc: "tvOS" },
  { name: "Samsung TV", icon: "/icons/samsung.svg", desc: "Tizen OS" },
  { name: "LG TV", icon: "/icons/lg.svg", desc: "webOS" },
  { name: "Nvidia Shield", icon: "/icons/nvidia.svg", desc: "Android TV" },
  { name: "Chromecast", icon: "/icons/chromecast.svg", desc: "with Google TV" },
  { name: "Roku", icon: "/icons/roku.svg", desc: "Streaming Stick" },
  { name: "MAG Box", icon: "/icons/mag.svg", desc: "Set-top Box" },
  { name: "Smart TVs", icon: "/icons/smarttv.svg", desc: "All Brands" },
  { name: "Mobile", icon: "/icons/mobile.svg", desc: "iOS & Android" },
  { name: "Tablets", icon: "/icons/tablet.svg", desc: "iPad & Android" },
  { name: "PC", icon: "/icons/pc.svg", desc: "Windows & Mac" },
];

const benefitItems = [
  { icon: Zap, text: "Instant Setup in 3 Minutes" },
  { icon: Server, text: "Anti-Freeze Server 10.0" },
  { icon: Shield, text: "99.9% Uptime Guarantee" },
  { icon: Headphones, text: "24/7 Live Support" },
];

const testimonials = [
  {
    name: "Ahmed M.",
    role: "Premier League Fan",
    content: "I've been using I Flex IPTV for 6 months now. The 4K sports streams are incredible, and I never miss a match. Best decision I made for cord-cutting.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Movie Enthusiast",
    content: "The VOD library is massive. I replaced Netflix, Disney+, and Prime with one subscription. The quality is fantastic and the setup took 5 minutes.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Tech Setup Expert",
    content: "I've tried many IPTV providers and I Flex IPTV is by far the most reliable. Anti-freeze technology is real — zero buffering during Champions League finals.",
    rating: 5,
  },
];

const latestPosts = blogPosts.slice(0, 4);

const faqItems = [
  {
    q: "What is IPTV and how does it work?",
    a: "IPTV (Internet Protocol Television) delivers live TV channels and on-demand content over your internet connection instead of traditional cable or satellite. With I Flex IPTV, you get access to 26,000+ channels streamed directly to your device via a secure app."
  },
  {
    q: "What internet speed do I need for 4K streaming?",
    a: "For HD streaming we recommend at least 20 Mbps, and for 4K UHD we recommend 50 Mbps or higher. For the best experience, a wired Ethernet connection is preferred over Wi-Fi."
  },
  {
    q: "Which devices are compatible with I Flex IPTV?",
    a: "We support virtually all modern devices: Amazon Firestick, Android TV, Google TV, Apple TV, Samsung TV, LG TV, Nvidia Shield, Chromecast, Roku, MAG boxes, smartphones, tablets, and PC/Mac."
  },
  {
    q: "How do I get started with I Flex IPTV?",
    a: "Simply choose a plan that suits your needs, message us on WhatsApp, and we will set up your account within minutes. You will receive your login credentials and a step-by-step setup guide for your device."
  },
  {
    q: "Do you offer a trial or refund?",
    a: "We are confident in our service quality. Contact us on WhatsApp to discuss trial options based on your needs. Our support team is available 24/7 to assist you."
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "I Flex IPTV",
    url: "https://www.iflexiptv.net",
    logo: "https://www.iflexiptv.net/logo.png",
    description: "Premium IPTV service offering 4K/FHD channels, global sports, movies, and VOD.",
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      {/* ════════════════════════════ HERO ════════════════════════════ */}
      <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0 -z-30">
          <Image
            src={HERO_IMAGES.bg}
            alt="Premium streaming experience"
            fill
            className="object-cover opacity-25 sm:opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        <div className="absolute inset-0 -z-20">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#F2C847]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#6B5AFF]/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F2C847]/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6 lg:mb-8">
                <Sparkles className="h-3.5 w-3.5 text-[#F2C847]" />
                <span className="text-xs font-bold tracking-wider text-[#F2C847] uppercase">
                  Premium IPTV Since 2024
                </span>
              </div>

              <h1 className="hidden lg:block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
                I Flex IPTV: <br className="hidden sm:block" />
                <span className="gold-text">Premium IPTV </span>
                Experience
              </h1>

              <p className="hidden lg:block mt-6 text-base sm:text-lg leading-relaxed text-white/50 max-w-xl mx-auto lg:mx-0">
                Join 10,000+ cord-cutters experiencing premium IPTV with{' '}
                <span className="text-white/80 font-semibold">26,000+ live channels</span>,
                global sports in 4K, and an endless VOD library — delivered instantly via WhatsApp.
              </p>

              <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="https://wa.me/447828714977"
                  className="btn-premium inline-flex h-14 items-center justify-center gap-2.5 px-9 text-base font-bold"
                >
                  <MessageCircle className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Get Started Now</span>
                </Link>
                <Link
                  href="/pricing"
                  className="btn-outline inline-flex h-14 items-center justify-center gap-2 px-9 text-base"
                >
                  View Plans
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="hidden lg:flex mt-10 flex-wrap gap-3 justify-center lg:justify-start">
                {benefitItems.map((item) => (
                  <div
                    key={item.text}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass text-xs font-semibold text-white/60"
                  >
                    <item.icon className="h-3.5 w-3.5 text-[#F2C847]" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

          <div className="lg:block relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-strong p-2">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="relative w-full h-full">
                  <iframe
                    src="https://streamable.com/e/6ec9p3?autoplay=1"
                    title="I Flex IPTV Premium Streaming"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center">
                      <Play className="h-5 w-5 text-black fill-current" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Premium IPTV</p>
                      <p className="text-xs text-white/50">24/7 Live Streaming</p>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-white/10 flex items-center justify-center text-[9px] font-bold text-white">
                        {i === 1 ? "JD" : i === 2 ? "SK" : "AR"}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 glass rounded-lg px-3 py-2 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  <span className="text-[10px] font-bold text-white/80">Live Support</span>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </section>

      {/* ════════════════════════════ LOGOS STRIP ════════════════════════════ */}
      <div className="border-t border-b border-white/[0.05] bg-white/[0.01]">
        <AnimatedLogos />
      </div>

      {/* ════════════════════════════ WHY IFLEX IPTV ════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
              <Star className="h-3 w-3 fill-[#F2C847]" />
              Why I Flex IPTV
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              See What{' '}
              <span className="gold-text">Sets Us Apart</span>
            </h2>
            <p className="mt-4 text-white/40 text-lg">I Flex IPTV delivers a premium experience that outshines every alternative.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.06] glass">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="p-5 sm:p-6 text-sm font-bold text-white/40 uppercase tracking-wider">Feature</th>
                  <th className="p-5 sm:p-6 text-sm font-bold text-[#F2C847] uppercase tracking-wider">I Flex IPTV</th>
                  <th className="p-5 sm:p-6 text-sm font-bold text-white/20 uppercase tracking-wider">Cable TV</th>
                  <th className="p-5 sm:p-6 text-sm font-bold text-white/20 uppercase tracking-wider">Other IPTV</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Monthly Price", iflex: "€10 – €15", cable: "€80 – €150", other: "€15 – €30" },
                  { feature: "Live Channels", iflex: "26,000+", cable: "500 – 1,000", other: "10,000 – 20,000" },
                  { feature: "4K 50fps Sports", iflex: "Included", cable: "€20 add-on", other: "Limited" },
                  { feature: "VOD Library", iflex: "100,000+ Titles", cable: "None", other: "20,000 – 50,000" },
                  { feature: "PPV Events", iflex: "Included", cable: "€30 – €100 each", other: "Extra charge" },
                  { feature: "Device Support", iflex: "All Devices", cable: "1 box only", other: "Most devices" },
                  { feature: "Simultaneous Screens", iflex: "Unlimited", cable: "Per box fee", other: "1 – 4 screens" },
                  { feature: "Anti-Freeze Tech", iflex: "Yes 10.0", cable: "N/A", other: "Rarely" },
                  { feature: "EPG / Catch-Up", iflex: "Full + 72h", cable: "Basic", other: "Partial" },
                  { feature: "VPN Friendly", iflex: "Yes", cable: "N/A", other: "Blocked" },
                  { feature: "Setup Time", iflex: "3 Minutes", cable: "2 – 5 Days", other: "10 – 30 min" },
                  { feature: "Support", iflex: "24/7 WhatsApp", cable: "9–5 Phone", other: "Email only" },
                  { feature: "Contract", iflex: "None", cable: "12 – 24 months", other: "Monthly" },
                ].map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/[0.04] transition-colors hover:bg-white/[0.02] ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                  >
                    <td className="p-5 sm:p-6 text-sm font-semibold text-white/70">{row.feature}</td>
                    <td className="p-5 sm:p-6 text-sm font-bold text-[#F2C847]">{row.iflex}</td>
                    <td className="p-5 sm:p-6 text-sm text-white/30">{row.cable}</td>
                    <td className="p-5 sm:p-6 text-sm text-white/30">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/447828714977"
              className="btn-premium inline-flex h-14 items-center justify-center gap-2.5 px-9 text-base font-bold"
            >
              <MessageCircle className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Get Started Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ LIVE SPORTS SLIDER ════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.05]">
        <div className="absolute top-0 -left-32 w-[400px] h-[400px] bg-[#F2C847]/8 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-transparent to-[#F2C847]/40" />
              <Trophy className="h-4 w-4 text-[#F2C847]" />
              <div className="h-px flex-1 max-w-[40px] bg-gradient-to-l from-transparent to-[#F2C847]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
              <div className="p-3 rounded-2xl glass-gold">
                <Trophy className="h-5 w-5 text-[#F2C847]" />
              </div>
              Live <span className="gold-text">Sports Hub</span>
            </h2>
            <p className="mt-3 text-white/40">Never miss a kickoff, punch, or pole position.</p>
          </div>

          <EmblaSlider delay={3500}>
            {[
              { title: "World Cup", img: "/imgs/sports/bg1.webp" },
              { title: "Champions League", img: "/imgs/sports/bg2.jpg" },
              { title: "La Liga", img: "/imgs/sports/bg3.jpg" },
              { title: "Premier League", img: "/imgs/sports/bg4.jpg" },
              { title: "UFC & Boxing", img: "/imgs/sports/bg5.jpg" },
            ].map((card, i) => (
              <div
                key={i}
                className="relative aspect-video overflow-hidden rounded-2xl group border border-white/[0.06] transition-all duration-500 hover:border-[#F2C847]/30 hover:shadow-[0_0_50px_rgba(242,200,71,0.12)]"
              >
                <div className="absolute inset-0 bg-black/20 z-10 transition-all duration-500 group-hover:bg-transparent" />
                <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div className="absolute left-4 right-4 bottom-4 z-20 glass rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full gold-gradient-bg flex items-center justify-center shadow-[0_0_18px_rgba(242,200,71,0.6)]">
                      <Play className="h-4 w-4 text-black fill-current" />
                    </div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider">{card.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </EmblaSlider>
        </div>
      </section>

      {/* ════════════════════════════ CINEMA SLIDER ════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-b border-white/[0.05]">
        <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-[#6B5AFF]/8 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-transparent to-[#F2C847]/40" />
              <Film className="h-4 w-4 text-[#F2C847]" />
              <div className="h-px flex-1 max-w-[40px] bg-gradient-to-l from-transparent to-[#F2C847]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
              <div className="p-3 rounded-2xl glass-gold">
                <Film className="h-5 w-5 text-[#F2C847]" />
              </div>
              Premium <span className="gold-text">Cinema</span>
            </h2>
            <p className="mt-3 text-white/40">100,000+ VODs updated daily. Your home theater awaits.</p>
          </div>

          <EmblaSlider delay={4000}>
            {[
              { title: "Blockbuster Action", img: "/imgs/movies/movie_1.webp", badge: "4K UHD" },
              { title: "Crime & Drama", img: "/imgs/movies/movie_2.webp", badge: "HDR" },
              { title: "Arabic Series", img: "/imgs/movies/movie_3.webp", badge: "NEW" },
              { title: "Sci-Fi Fantasy", img: "/imgs/movies/movie_4.webp", badge: "4K UHD" },
              { title: "Family & Kids", img: "/imgs/movies/movie_5.webp", badge: "HD" },
            ].map((card, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl group border border-white/[0.06] transition-all duration-500 hover:border-[#F2C847]/30 hover:shadow-[0_0_50px_rgba(242,200,71,0.12)]"
              >
                <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest glass-gold text-[#F2C847]">
                    {card.badge}
                  </span>
                </div>
                <div className="absolute left-4 right-4 bottom-4 z-10 glass rounded-xl p-4">
                  <h3 className="text-sm font-bold text-white">{card.title}</h3>
                </div>
              </div>
            ))}
          </EmblaSlider>
        </div>
      </section>

      {/* ════════════════════════════ WHATSAPP SCREENSHOT CAROUSEL ════════════════════════════ */}
      <section className="py-24 sm:py-32 overflow-hidden bg-white/[0.01] border-t border-white/[0.05]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
              <MessageCircle className="h-3 w-3" />
              Real Conversations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              What Our{' '}
              <span className="gold-text">Clients Say</span>
            </h2>
            <p className="mt-4 text-white/40 text-lg">
              Real WhatsApp conversations from our satisfied IPTV customers.
            </p>
          </div>

          <EmblaSlider delay={5000} align="center">
            {[
              {
                src: "https://iptvespanabox.es/modules/iptvtheme/views/img/theme/banners4/iptv-review-reddit.webp",
                caption: "Reliable service during Champions League final",
              },
              {
                src: "https://iptvespanabox.es/modules/iptvtheme/views/img/theme/banners4/iptv-reviews-reddit.webp",
                caption: "Multi-device family entertainment setup",
              },
              {
                src: "https://iptvespanabox.es/modules/iptvtheme/views/img/theme/banners4/iptv-service-4k.webp",
                caption: "Premium 4K streaming quality",
              },
              {
                src: "https://iptvespanabox.es/modules/iptvtheme/views/img/theme/banners4/iptv-service-subscription-.webp",
                caption: "Quick setup assistance via WhatsApp",
              },
            ].map((screenshot, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl group border border-white/[0.08] transition-all duration-500 hover:border-[#F2C847]/30 hover:shadow-[0_0_50px_rgba(242,200,71,0.12)]"
              >
                <div className="aspect-[9/16] sm:aspect-[3/4] relative bg-black/40">
                  <img
                    src={screenshot.src}
                    alt={`WhatsApp customer support screenshot ${idx + 1}`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="glass inline-block rounded-full px-3 py-1 text-[10px] font-bold text-white/80 tracking-wider backdrop-blur">
                      {screenshot.caption}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </EmblaSlider>
        </div>
      </section>

      {/* ════════════════════════════ PRICING ════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
              <Zap className="h-3 w-3" />
              Simple Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Choose Your{' '}
              <span className="gold-text">Premium Plan</span>
            </h2>
            <p className="mt-4 text-white/40 text-lg">
              Instant activation via WhatsApp. No hidden fees.
            </p>
          </div>
          <PricingSection />
        </div>
      </section>

      {/* ════════════════════════════ FAQ ════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Frequently Asked{' '}
              <span className="gold-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group glass rounded-2xl border border-white/[0.06] open:border-[#F2C847]/20 transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none">
                  <span className="text-sm sm:text-base font-bold text-white pr-4">{item.q}</span>
                  <ChevronRight className="h-4 w-4 text-[#F2C847] shrink-0 transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-sm text-white/50 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-[#F2C847] transition-all"
            >
              View all FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ BLOG PREVIEW ════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
                <Calendar className="h-3 w-3" />
                Blog & Guides
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Latest IPTV{' '}
                <span className="gold-text">Guides</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F2C847] hover:gap-3 transition-all"
            >
              Read all articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl glass border border-white/[0.04] hover:border-[#F2C847]/20 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest glass-gold text-[#F2C847]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col bg-white/[0.02]">
                  <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug mb-3 group-hover:text-[#F2C847] transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-xs pt-4 border-t border-white/[0.06] text-white/35">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ FINAL CTA ════════════════════════════ */}
      <section className="relative isolate overflow-hidden py-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Cinematic streaming experience"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>

        <div className="absolute inset-0 -z-20">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F2C847]/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto glass-strong rounded-3xl p-12 sm:p-16 border border-white/[0.08]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
              <Sparkles className="h-3 w-3" />
              Get Started Today
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Start Watching{' '}
              <span className="gold-text">Tonight.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/50 mb-10 max-w-md mx-auto">
              Get your login credentials delivered instantly via WhatsApp. Join the future of television.
            </p>

            <Link
              href="https://wa.me/447828714977"
              className="btn-premium inline-flex h-16 items-center justify-center gap-3 px-14 text-lg font-bold"
            >
              <MessageCircle className="h-6 w-6 relative z-10" />
              <span className="relative z-10">Get Your Pass Now</span>
            </Link>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass text-xs font-semibold text-white/50">
                <CheckCircle className="h-3.5 w-3.5 text-[#22C55E]" />
                Instant Activation
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass text-xs font-semibold text-white/50">
                <CheckCircle className="h-3.5 w-3.5 text-[#22C55E]" />
                24/7 Support
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass text-xs font-semibold text-white/50">
                <CheckCircle className="h-3.5 w-3.5 text-[#22C55E]" />
                No Contract
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
