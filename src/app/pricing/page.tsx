import Image from "next/image";
import { Sparkles } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PricingSection from "@/components/PricingSection";

export const metadata = {
  title: "Premium IPTV Pricing | 3 to 12 Month Subscriptions",
  description: "Choose your I Flex IPTV subscription plan. 3 Months, 6 Months, or 12 Months. WhatsApp ordering and instant delivery.",
  alternates: {
    canonical: "https://www.iflexiptv.com/pricing",
  },
};

export default function Pricing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "I Flex IPTV Premium Subscription",
    "description": "Premium IPTV subscription with 4K/FHD channels, global sports, and VOD.",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "37",
      "highPrice": "67",
      "priceCurrency": "EUR",
    },
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      
      <div className="bg-black min-h-screen">
        <section className="relative isolate pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-white/[0.05]">
          <div className="absolute inset-0 -z-20 bg-black">
            <Image
              src="/imgs/bg_sliders/bg_slider_2.webp"
              alt="Cinematic premium entertainment"
              fill
              priority
              className="object-cover opacity-20 grayscale"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F2C847]/8 rounded-full blur-[120px] -z-10" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
                <Sparkles className="h-3 w-3" />
                VIP Access
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-white mb-6">
                Choose Your <span className="gold-text">IPTV Plan</span>
              </h1>
              <p className="text-xl leading-8 text-white/50 font-medium">
                Instant activation. Premium channels. WhatsApp support.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 -mt-10 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PricingSection />
          </div>
        </section>
      </div>
    </>
  );
}
