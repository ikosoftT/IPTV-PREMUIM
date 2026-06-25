import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Settings, Wifi, Key, Tv, ShieldAlert, ArrowRight, Headphones } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "Contact & Support | I Flex IPTV",
  description: "Need help setting up your IPTV? Experiencing buffering? Contact our 24/7 WhatsApp support team for instant assistance.",
  alternates: {
    canonical: "https://www.iflexiptv.com/support",
  },
};

export default function SupportPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Support & Contact - I Flex IPTV",
    "url": "https://www.iflexiptv.com/support",
    "description": "Contact our 24/7 WhatsApp support team for instant assistance.",
  };

  const commonProblems = [
    {
      icon: <Wifi className="h-6 w-6 text-[#F2C847]" />,
      title: "Buffering & Freezing",
      solution: "Usually caused by weak Wi-Fi or ISP throttling. We recommend using an Ethernet cable or clearing your app's cache. If it persists, contact us."
    },
    {
      icon: <Key className="h-6 w-6 text-[#F2C847]" />,
      title: "Login Not Working",
      solution: "Double-check your username and password for typos (they are case-sensitive). Ensure your subscription hasn't expired."
    },
    {
      icon: <Settings className="h-6 w-6 text-[#F2C847]" />,
      title: "App Not Loading",
      solution: "Restart your device (Firestick, Smart TV). If that fails, uninstall and reinstall the IPTV app, then log in again."
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-[#F2C847]" />,
      title: "Channels Not Opening",
      solution: "Sometimes your ISP blocks IPTV. A VPN usually fixes this. Alternatively, try refreshing your playlist from the app settings."
    },
    {
      icon: <Tv className="h-6 w-6 text-[#F2C847]" />,
      title: "Smart TV MAC Issue",
      solution: "If using SIPTV or IBO Player, ensure you provided us with the correct MAC address so we can upload your playlist."
    }
  ];

  const faqItems = [
    { q: "How fast is activation?", a: "Activation is instant. As soon as you message us on WhatsApp and choose a plan, we generate your credentials and send them within minutes." },
    { q: "Can I use it on multiple devices?", a: "One subscription allows you to watch on one device at a time. For multiple simultaneous connections, choose a multi-device plan or ask our support team." },
    { q: "Do you offer a free trial?", a: "Yes, we offer a trial period so you can test the channels and VODs before purchasing. Contact us on WhatsApp for details." },
    { q: "What internet speed do I need?", a: "We recommend at least 20Mbps for HD streaming and 50Mbps for a smooth 4K streaming experience." }
  ];

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-white/[0.05]">
        <div className="absolute inset-0 -z-20 bg-black">
          <Image
            src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2000"
            alt="Cinematic background for support"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
              <Headphones className="h-3 w-3" />
              24/7 Support
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">Need Help Setting Up IPTV?</h1>
            <p className="mt-6 text-lg leading-8 text-white/50">
              Whether you are experiencing technical issues or just need help installing an app, we are here for you 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 sm:p-12 text-center border border-[#F2C847]/15 relative overflow-hidden z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/5 to-transparent pointer-events-none" />
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 mb-6">
              <MessageCircle className="h-10 w-10 text-[#22C55E]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Fastest Way to Get Help</h2>
            <p className="text-lg text-white/50 mb-8">
              Message us directly on WhatsApp. We typically reply within 5 minutes. Have your username or MAC address ready for faster service.
            </p>
            <Link
              href="https://wa.me/447828714977"
              className="btn-premium inline-flex h-16 items-center justify-center gap-3 rounded-full px-10 text-lg font-bold"
            >
              <MessageCircle className="h-6 w-6 relative z-10" />
              <span className="relative z-10">Chat with Support Now</span>
            </Link>
          </div>

          <div className="max-w-6xl mx-auto mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Troubleshooting Common Problems</h2>
              <p className="text-white/50 mt-4">Check these quick fixes before contacting support.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonProblems.map((prob, i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-white/[0.06] hover:border-[#F2C847]/20 transition-all duration-300">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-[#F2C847]/10 border border-[#F2C847]/20">
                    {prob.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{prob.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{prob.solution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16 glass rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left border border-white/[0.06]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Looking for Installation Instructions?</h3>
              <p className="text-white/50">We have step-by-step guides for Firestick, Smart TVs, Android, and Apple devices.</p>
            </div>
            <Link href="/guides" className="inline-flex h-12 whitespace-nowrap items-center justify-center gap-2 rounded-full border border-[#F2C847]/30 bg-[#F2C847]/10 px-6 text-sm font-bold text-[#F2C847] transition-all hover:bg-[#F2C847] hover:text-black">
              View Setup Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="max-w-3xl mx-auto mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion items={faqItems} />
          </div>

        </div>
      </section>
    </>
  );
}
