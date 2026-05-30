import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PricingSection from "@/components/PricingSection";

export const metadata = {
  title: "Premium IPTV Pricing | 3 to 12 Month Subscriptions",
  description: "Choose your premium iflexiptv subscription plan. 3 Months, 6 Months, or 12 Months. WhatsApp ordering and instant delivery.",
  alternates: {
    canonical: "https://www.iflexiptv.com/pricing",
  },
};

export default function Pricing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "iflexiptv Premium Subscription",
    "description": "Premium IPTV subscription with 4K/FHD channels.",
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
      
      <div className="bg-[#020617] min-h-screen">
        {/* Cinematic Header */}
        <section className="relative isolate pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-white/5">
          <div className="absolute inset-0 -z-20 bg-black">
             <Image
                src="/imgs/bg_sliders/bg_slider_2.webp"
                alt="Cinematic premium entertainment"
                fill
                priority
                className="object-cover opacity-20 grayscale"
              />
          </div>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.15),transparent_50rem)]" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-3xl mx-auto reveal-up">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F2C847] mb-4 flex items-center justify-center gap-2">
                <Star className="h-4 w-4 fill-[#F2C847]" /> VIP Access
              </p>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-white mb-6">Choose Your IPTV Plan</h1>
              <p className="text-xl leading-8 text-white/80 font-medium">
                Instant activation. Premium channels. WhatsApp support.
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Pricing Section */}
        <section className="py-20 -mt-10 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PricingSection />
          </div>
        </section>
      </div>
    </>
  );
}