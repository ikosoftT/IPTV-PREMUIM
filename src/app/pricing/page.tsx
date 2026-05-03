import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Info, ShieldCheck, MessageCircle, Star } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import { createWhatsAppOrderUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "Premium IPTV Pricing | 1 to 12 Month Subscriptions",
  description: "Choose your premium iflexiptv subscription plan. 1 Month, 3 Months, 6 Months, or 12 Months. WhatsApp ordering and instant delivery.",
  alternates: {
    canonical: "https://www.iflexiptv.com/pricing",
  },
};

const plans = [
  {
    name: "1 Month",
    price: "€14.99",
    duration: "/mo",
    description: "Perfect for testing our premium service.",
    features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Servers", "All Devices Supported", "24/7 WhatsApp Support"],
    popular: false,
    bestValue: false,
    image: "https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=800", // TV streaming
  },
  {
    name: "3 Months",
    price: "€34.99",
    duration: "/3 mos",
    description: "Save more with our quarterly plan.",
    features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Servers", "All Devices Supported", "24/7 WhatsApp Support"],
    popular: false,
    bestValue: false,
    image: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=800", // Movies
  },
  {
    name: "6 Months",
    price: "€49.99",
    duration: "/6 mos",
    description: "Our most popular long-term choice.",
    features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Servers", "All Devices Supported", "24/7 WhatsApp Support"],
    popular: true,
    bestValue: false,
    image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800", // Sports stadium
  },
  {
    name: "12 Months",
    price: "€79.99",
    duration: "/yr",
    description: "Best value. Stream all year uninterrupted.",
    features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Servers", "All Devices Supported", "24/7 WhatsApp Support", "Free Setup Assistance"],
    popular: false,
    bestValue: true,
    image: "https://images.unsplash.com/photo-1600181516264-3cdca0bf2aca?q=80&w=800", // Big match viewing
  },
];

export default function Pricing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "iflexiptv Premium Subscription",
    "description": "Premium IPTV subscription with 4K/FHD channels.",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "14.99",
      "highPrice": "79.99",
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
                src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=2000"
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand mb-4 flex items-center justify-center gap-2">
                <Star className="h-4 w-4 fill-brand" /> VIP Access
              </p>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-white mb-6">Choose Your IPTV Plan</h1>
              <p className="text-xl leading-8 text-white/80 font-medium">
                Instant activation. Premium channels. WhatsApp support.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 -mt-10 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[90rem] mx-auto">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex flex-col overflow-hidden rounded-[2rem] transition-all duration-500 hover:-translate-y-3 group ${
                    plan.bestValue 
                      ? "border border-brand shadow-[0_0_60px_rgba(234,179,8,0.25)] lg:scale-105 z-10" 
                      : plan.popular 
                        ? "border border-accent shadow-[0_0_40px_rgba(59,130,246,0.2)] bg-[#0f172a]" 
                        : "border border-white/10 shadow-2xl shadow-black/80 bg-[#0a0a0a]"
                  }`}
                >
                  {/* Card Background Image with heavy glass overlay */}
                  <div className="absolute inset-0 -z-20 bg-black">
                    <Image 
                      src={plan.image} 
                      alt={`${plan.name} plan background`} 
                      fill 
                      className="object-cover opacity-30 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40" 
                    />
                  </div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-[2px]" />
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_50%)]" />
                  
                  {/* Badges */}
                  {plan.popular && (
                    <div className="absolute right-6 top-6 z-10">
                      <span className="rounded-full bg-accent/20 border border-accent/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent shadow-[0_0_15px_rgba(59,130,246,0.5)]">Most Popular</span>
                    </div>
                  )}
                  {plan.bestValue && (
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand via-yellow-200 to-brand" />
                  )}
                  {plan.bestValue && (
                    <div className="absolute right-6 top-6 z-10">
                      <span className="rounded-full bg-brand px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-[0_0_20px_rgba(234,179,8,0.6)]">Best Value</span>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-8 sm:p-10 relative z-20">
                    <h2 className={`text-2xl font-black mb-2 tracking-tight ${plan.bestValue ? 'text-brand' : 'text-white'}`}>{plan.name}</h2>
                    <p className="text-sm text-white/60 mb-6 font-medium h-10">{plan.description}</p>
                    
                    <div className="mb-8 flex items-baseline gap-2 border-b border-white/10 pb-8">
                      <span className="text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">{plan.price}</span>
                      <span className="text-white/50 font-bold mb-1">{plan.duration}</span>
                    </div>

                    <ul className="space-y-5 flex-1 text-sm text-white/90 font-medium mb-10">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className={`h-6 w-6 shrink-0 ${plan.bestValue ? 'text-brand' : 'text-success'}`} />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={createWhatsAppOrderUrl(plan.name, plan.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-5 text-center font-extrabold text-lg transition-all duration-300 ${
                        plan.bestValue || plan.popular
                          ? "button-glow-success shadow-[0_0_25px_rgba(22,163,74,0.5)] transform hover:scale-[1.02]"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40 transform hover:scale-[1.02]"
                      }`}
                    >
                      <MessageCircle className="h-6 w-6" />
                      Order Now
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Trust Row */}
            <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="luxury-surface rounded-2xl p-6 flex items-center gap-4 border border-white/10 bg-black/40 backdrop-blur">
                  <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center shrink-0 border border-success/30">
                     <ShieldCheck className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Secure WhatsApp Order</h4>
                    <p className="text-sm text-white/60">No credit card required upfront.</p>
                  </div>
               </div>
               <div className="luxury-surface rounded-2xl p-6 flex items-center gap-4 border border-white/10 bg-black/40 backdrop-blur">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
                     <Info className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Setup Help Included</h4>
                    <p className="text-sm text-white/60">We guide you step by step.</p>
                  </div>
               </div>
               <div className="luxury-surface rounded-2xl p-6 flex items-center gap-4 border border-white/10 bg-black/40 backdrop-blur">
                  <div className="h-12 w-12 rounded-full bg-brand/20 flex items-center justify-center shrink-0 border border-brand/30">
                     <CheckCircle className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Fast Activation</h4>
                    <p className="text-sm text-white/60">Start watching in 3 minutes.</p>
                  </div>
               </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
