import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, MessageCircle, Monitor, Smartphone, Sparkles, Tv } from "lucide-react";
import { premiumImages } from "@/lib/media";
import { whatsappSetupGuidanceUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "Supported Devices & Setup - I Flex IPTV",
  description: "Learn how to set up I Flex IPTV on your Smart TV, Android box, Firestick, Apple TV, MAG, smartphone, or PC.",
  alternates: {
    canonical: "https://www.iflexiptv.com/devices",
  },
};

const devices = [
  {
    category: "Smart TVs",
    icon: <Tv className="h-9 w-9 text-[#F2C847]" />,
    items: ["Samsung Smart TV (Tizen)", "LG Smart TV (WebOS)", "Android TV", "Sony & Philips Smart TVs"],
    image: premiumImages.deviceSmartTv,
    alt: "Premium smart television displaying IPTV content",
  },
  {
    category: "Streaming Devices",
    icon: <Monitor className="h-9 w-9 text-[#F2C847]" />,
    items: ["Amazon Firestick & Fire TV", "Apple TV", "Roku (via Web Player)", "Chromecast with Google TV"],
    image: premiumImages.deviceStreaming,
    alt: "Modern streaming devices setup",
  },
  {
    category: "Mobile & Tablets",
    icon: <Smartphone className="h-9 w-9 text-[#F2C847]" />,
    items: ["iPhone & iPad (iOS)", "Android Phones & Tablets"],
    image: premiumImages.deviceMobile,
    alt: "Mobile and laptop devices for IPTV streaming",
  },
  {
    category: "Other Devices",
    icon: <Tv className="h-9 w-9 text-[#F2C847]" />,
    items: ["Windows PC & Mac", "MAG Boxes", "Enigma2", "Formuler (MYTVOnline)"],
    image: premiumImages.deviceOther,
    alt: "Cross-device IPTV compatibility",
  },
];

const setupSteps = [
  "Choose your device and plan.",
  "Open WhatsApp and send your setup request.",
  "Receive your app, playlist details, and guided activation steps.",
];

export default function DevicesPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <Image
          src={premiumImages.devicesHero}
          alt="Premium IPTV streaming on a living room television"
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
              Setup in Minutes
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">Supported Devices</h1>
            <p className="mt-6 text-lg leading-8 text-white/50">
              I Flex IPTV is designed to work seamlessly across all your favorite devices. Setup is fast and simple.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {devices.map((device) => (
              <article key={device.category} className="glass group overflow-hidden rounded-[1.5rem] border border-white/[0.06] transition-all duration-500 hover:-translate-y-1 hover:border-[#F2C847]/30 hover:shadow-[0_0_50px_rgba(242,200,71,0.06)]">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={device.image}
                    alt={device.alt}
                    fill
                    sizes="(min-width: 768px) 46vw, 92vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-black/40 backdrop-blur">
                    {device.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-5">{device.category}</h2>
                  <ul className="space-y-3">
                    {device.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/50">
                        <CheckCircle className="h-4 w-4 shrink-0 text-[#22C55E]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div id="setup-guidance" className="relative isolate scroll-mt-28 overflow-hidden rounded-[2rem] glass p-8 text-center md:p-12 border border-white/[0.06]">
            <Image
              src={premiumImages.setupGuidance}
              alt="Dark premium television room behind device setup support"
              fill
              sizes="(min-width: 1024px) 64rem, 92vw"
              className="-z-20 object-cover opacity-30"
            />
            <div className="absolute inset-0 -z-10 bg-black/70 backdrop-blur-sm" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
                Guided Setup
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Need help setting up your device?</h3>
              <p className="text-white/50 mb-8 max-w-2xl mx-auto">
                Once you purchase a subscription, you will receive a comprehensive setup guide tailored to your specific device. Our support team is available 24/7.
              </p>
              <div className="mx-auto mb-8 grid max-w-3xl gap-4 text-left md:grid-cols-3">
                {setupSteps.map((step, index) => (
                  <div key={step} className="border-t border-white/15 pt-4">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full gold-gradient-bg text-sm font-bold text-black">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-white/70">{step}</p>
                  </div>
                ))}
              </div>
              <Link
                href={whatsappSetupGuidanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-base font-bold"
              >
                <MessageCircle className="h-5 w-5 relative z-10" />
                <span className="relative z-10">Get Setup Guidance on WhatsApp</span>
                <ArrowRight className="h-5 w-5 relative z-10" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
