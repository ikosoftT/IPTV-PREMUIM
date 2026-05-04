import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Info, ShieldCheck, MessageCircle, Star, Zap, Shield, Infinity } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import { createWhatsAppOrderUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "Premium IPTV Pricing | 3 to 12 Month Subscriptions",
  description: "Choose your premium iflexiptv subscription plan. 3 Months, 6 Months, or 12 Months. WhatsApp ordering and instant delivery.",
  alternates: {
    canonical: "https://www.iflexiptv.com/pricing",
  },
};

const plans = [
  {
    name: "3 Months",
    price: "€37",
    duration: "/3 mos",
    perMonth: "€12.33/mo",
    description: "Save more with our quarterly plan.",
    features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Servers", "All Devices Supported", "24/7 WhatsApp Support"],
    popular: false,
    bestValue: false,
    image: "/imgs/movies/movie_1.webp",
  },
  {
    name: "6 Months",
    price: "€49",
    duration: "/6 mos",
    perMonth: "€8.16/mo",
    description: "Our most popular long-term choice.",
    features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Servers", "All Devices Supported", "24/7 WhatsApp Support"],
    popular: true,
    bestValue: false,
    image: "/imgs/movies/movie_2.webp",
  },
  {
    name: "12 Months",
    price: "€67",
    duration: "/yr",
    perMonth: "€5.58/mo",
    description: "Best value. Stream all year uninterrupted.",
    features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Servers", "All Devices Supported", "24/7 WhatsApp Support", "Free Setup Assistance"],
    popular: false,
    bestValue: true,
    image: "/imgs/movies/movie_3.webp",
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
      "lowPrice": "37",
      "highPrice": "67",
      "priceCurrency": "EUR",
    },
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      
      <div className="bg-[#020617] min-h-screen">
        {/* Cinematic Header - UNCHANGED */}
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

        <section className="py-20 -mt-10 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-[75rem] mx-auto">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex flex-col overflow-hidden rounded-[2rem] transition-all duration-500 hover:-translate-y-3 group ${
                    plan.bestValue 
                      ? "border border-brand shadow-[0_0_60px_rgba(234,179,8,0.25)] lg:scale-105 " 
                      : plan.popular 
                        ? "border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)] " 
                        : "border border-white/10 shadow-2xl shadow-black/80 "
                  }`}
                >
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 -z-10 bg-black">
                    <Image 
                      src={plan.image} 
                      alt={plan.name} 
                      fill 
                      className="object-cover opacity-20 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-30" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                  </div>

                  {/* Animated Top Bar for Best Value */}
                  {plan.bestValue && (
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand via-yellow-200 to-brand z-30" />
                  )}
                  
                  {/* Badge */}
                  {(plan.popular || plan.bestValue) && (
                    <div className="absolute right-6 top-6 z-30">
                      {plan.bestValue ? (
                        <span className="bg-brand text-black rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                          ★ Best Value
                        </span>
                      ) : (
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <Zap size={12} className="text-brand" /> Popular
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-8 sm:p-10 relative z-20">
                    <p className="text-xs font-black uppercase tracking-[0.2em] mb-2" style={{ color: plan.bestValue ? '#EAB308' : 'rgba(255,255,255,0.4)' }}>
                      {plan.bestValue ? "— Premium —" : plan.popular ? "— Standard —" : "— Starter —"}
                    </p>
                    <h2 className={`text-3xl font-black mb-6 tracking-tight ${plan.bestValue ? 'text-brand' : 'text-white'}`}>{plan.name}</h2>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">{plan.price}</span>
                        <span className="text-white/40 font-bold">{plan.duration}</span>
                      </div>
                      <p className="text-sm font-semibold mt-1 text-white/40">{plan.perMonth}</p>
                    </div>

                    {/* Savings Pill */}
                    {(plan.popular || plan.bestValue) && (
                      <div className="mb-8 inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1 text-[11px] font-bold text-white/70 border border-white/10 uppercase tracking-wider">
                        <Shield size={10} className="text-brand" />
                        {plan.bestValue ? "Save 32% vs Monthly" : "Save 18% vs Monthly"}
                      </div>
                    )}

                    <div className="h-[1px] w-full bg-white/10 mb-8" />

                    <ul className="space-y-4 flex-1 text-sm text-white/90 font-medium mb-10">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className={`flex items-center justify-center shrink-0 h-5 w-5 rounded-full ${plan.bestValue ? 'bg-brand/10' : 'bg-white/5'}`}>
                            <CheckCircle className={`h-3.5 w-3.5 ${plan.bestValue ? 'text-brand' : 'text-success'}`} />
                          </div>
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
  href={createWhatsAppOrderUrl(plan.name, plan.price)}
  target="_blank"
  rel="noopener noreferrer"
  className={`relative overflow-hidden inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-5 text-center font-black text-lg uppercase tracking-widest transition-all duration-500 group ${
    plan.bestValue || plan.popular
      ? "bg-gradient-to-r from-[#F2C847] via-[#FFF3AD] to-[#D4A017] text-black shadow-[0_0_30px_rgba(242,200,71,0.4)] hover:shadow-[0_0_50px_rgba(242,200,71,0.6)]"
      : "bg-white/5 text-white border border-white/20 backdrop-blur-md hover:bg-white/10"
  } hover:scale-[1.03] active:scale-[0.98]`}
>
  {/* Luxury Shine/Sweep Animation */}
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />

  {/* Icon with subtle pulse */}
  <MessageCircle className={`h-6 w-6 relative z-10 ${plan.bestValue || plan.popular ? 'animate-pulse' : ''}`} />
  
  <span className="relative z-10 drop-shadow-sm">
    {plan.bestValue ? "Order Vip" : "Order Now"}
  </span>

  {/* Subtle Inner Glow for Premium look */}
  <span className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
</Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Trust Row - Updated to match new theme */}
            <div className="mt-20 flex flex-wrap justify-center items-center gap-6 md:gap-12 py-8 px-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-5xl mx-auto text-sm font-bold text-white/60">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-brand" /> Instant Activation
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand" /> Secure WhatsApp Order
                </div>
                <div className="flex items-center gap-2">
                  <Infinity size={16} className="text-brand" /> 24/7 Support
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-success" /> Start Watching in 3m
                </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}