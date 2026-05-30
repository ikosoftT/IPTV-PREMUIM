"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Zap, Shield, Infinity, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { createWhatsAppOrderUrl } from "@/lib/whatsapp";

const pricingPlans = [
  {
    name: "3 Months",
    basePrice: 37,
    monthsCount: 3,
    durationText: "/3 mos",
    description: "Perfect for testing our premium quality streams.",
    popular: false,
    bestValue: false,
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs & Series",
      "4K & FHD Quality Streams",
      "Anti-Freeze Servers 10.0",
      "All Devices Supported",
      "24/7 Live WhatsApp Support",
    ],
    cta: "Order Now",
    savingsText: "Save 18% vs Monthly",
  },
  {
    name: "6 Months",
    basePrice: 49,
    monthsCount: 6,
    durationText: "/6 mos",
    description: "Our most popular long-term entertainment choice.",
    popular: true,
    bestValue: false,
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs & Series",
      "4K & FHD Quality Streams",
      "Anti-Freeze Servers 10.0",
      "All Devices Supported",
      "24/7 Live WhatsApp Support",
    ],
    cta: "Order Now",
    savingsText: "Save 25% vs Monthly",
  },
  {
    name: "12 Months",
    basePrice: 67,
    monthsCount: 12,
    durationText: "/yr",
    description: "Ultimate cinema & sports experience all year round.",
    popular: false,
    bestValue: true,
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs & Series",
      "4K & FHD Quality Streams",
      "Anti-Freeze Servers 10.0",
      "All Devices Supported",
      "24/7 Live WhatsApp Support",
      "Free VIP Setup Assistance",
    ],
    cta: "Order VIP Pass",
    savingsText: "Save 32% vs Monthly",
  },
];

export default function PricingSection() {
  const [connections, setConnections] = useState<1 | 2 | 3>(1);

  // Connection Price Math: basePrice * multiplier, then rounded to neat whole integers
  const getCalculatedPriceVal = (basePrice: number, conn: number) => {
    let multiplier = 1.0;
    if (conn === 2) multiplier = 1.05;
    if (conn === 3) multiplier = 1.10;
    return Math.round(basePrice * multiplier);
  };

  const getCalculatedPriceStr = (basePrice: number, conn: number) => {
    const finalPrice = getCalculatedPriceVal(basePrice, conn);
    return `€${finalPrice}`;
  };

  // Format per-month rate cleanly to 2 decimals for accuracy, or integers if they divide perfectly
  const getCalculatedPerMonth = (basePrice: number, conn: number, months: number) => {
    const finalPrice = getCalculatedPriceVal(basePrice, conn);
    const perMonth = finalPrice / months;
    return `€${perMonth.toFixed(2)}/mo`;
  };

  return (
    <>
      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-sweep {
          animation: sweep 2.5s infinite linear;
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(242, 200, 71, 0.2); }
          50% { border-color: rgba(242, 200, 71, 0.55); }
        }
        .animate-border-glow {
          animation: borderGlow 4s infinite ease-in-out;
        }
      `}</style>

      {/* Dynamic Connections Switcher */}
      <div className="flex flex-col items-center justify-center mb-16 relative z-10">
        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F2C847] mb-5 flex items-center gap-2">
          <Star className="h-3 w-3 fill-[#F2C847]" /> Configure Active Devices
        </span>
        
        {/* Modern Pill Switcher Container */}
        <div className="flex flex-wrap justify-center gap-3 p-2 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-lg shadow-2xl">
          {[1, 2, 3].map((num) => {
            const isActive = connections === num;
            return (
              <button
                key={num}
                onClick={() => setConnections(num as 1 | 2 | 3)}
                className={`px-6 sm:px-9 py-4 rounded-2xl text-xs sm:text-sm font-black transition-all duration-500 uppercase tracking-widest flex items-center gap-2 border ${
                  isActive
                    ? "bg-gradient-to-r from-[#F2C847] via-[#FFF3AD] to-[#D4A017] text-black border-transparent shadow-[0_0_30px_rgba(242,200,71,0.45)] scale-[1.03]"
                    : "bg-white/5 text-white/70 border-white/5 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{num} {num === 1 ? "Device" : "Devices"}</span>
                {num === 2 && (
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-md font-bold transition-colors ${
                      isActive ? "bg-black/15 text-black" : "bg-white/10 text-white/60"
                    }`}
                  >
                    +5%
                  </span>
                )}
                {num === 3 && (
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-md font-bold transition-colors ${
                      isActive ? "bg-black/15 text-black" : "bg-white/10 text-white/60"
                    }`}
                  >
                    +10%
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-xs font-semibold text-white/40 tracking-wide text-center">
          Stream simultaneously on separate Smart TVs, phones, or boxes inside your household.
        </p>
      </div>

      {/* Pricing Cards Grid - Ultra-Modern Glassmorphism Rebuild */}
      <div className="grid md:grid-cols-3 gap-8 max-w-[75rem] mx-auto items-stretch relative z-10">
        {pricingPlans.map((plan) => {
          const finalPriceStr = getCalculatedPriceStr(plan.basePrice, connections);
          const finalPerMonthStr = getCalculatedPerMonth(plan.basePrice, connections, plan.monthsCount);
          
          // Pre-filled Custom WhatsApp Order Message
          const connLabel = connections === 1 ? "1 connection" : `${connections} connections`;
          const planDetail = `${plan.name} (${connLabel})`;
          const whatsappUrl = createWhatsAppOrderUrl(planDetail, finalPriceStr);

          return (
            <article
              key={plan.name}
              className={`relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] group ${
                plan.bestValue
                  ? "bg-slate-950/80 border border-[#F2C847]/30 shadow-[0_0_50px_rgba(234,179,8,0.15)] md:scale-105 z-10 animate-border-glow"
                  : plan.popular
                  ? "bg-slate-950/70 border border-white/15 shadow-2xl"
                  : "bg-slate-950/65 border border-white/10 shadow-xl"
              }`}
            >
              {/* Backlight Ambient Glow Overlay */}
              <div 
                className={`absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full blur-3xl pointer-events-none z-0 transition-opacity duration-700 ${
                  plan.bestValue
                    ? "bg-[radial-gradient(circle,rgba(242,200,71,0.08),transparent_70%)] group-hover:opacity-100"
                    : plan.popular
                    ? "bg-[radial-gradient(circle,rgba(147,51,234,0.06),transparent_70%)] group-hover:opacity-100"
                    : "bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_70%)] group-hover:opacity-100"
                }`} 
              />
              <div 
                className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(242,200,71,0.03),transparent_70%)] pointer-events-none z-0" 
              />

              {/* Gold Gradient Outline Border Shimmer Effect (Modern CSS) */}
              <div 
                className={`absolute inset-0 rounded-[2.5rem] p-[1.5px] -z-10 transition-all duration-700 ${
                  plan.bestValue
                    ? "bg-gradient-to-b from-[#F2C847]/45 via-white/5 to-[#D4A017]/30 group-hover:from-[#F2C847]/80 group-hover:to-[#D4A017]/60"
                    : plan.popular
                    ? "bg-gradient-to-b from-white/10 via-white/5 to-white/5 group-hover:from-[#F2C847]/40 group-hover:to-purple-500/30"
                    : "bg-gradient-to-b from-white/5 via-transparent to-transparent group-hover:from-white/20 group-hover:to-white/10"
                }`}
              />

              {/* Shimmer top line for best value */}
              {plan.bestValue && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F2C847] to-transparent z-30" />
              )}

              {/* Upper Section */}
              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span 
                      className="text-[11px] font-black uppercase tracking-[0.25em] block mb-1"
                      style={{ color: plan.bestValue ? "#F2C847" : "rgba(255,255,255,0.4)" }}
                    >
                      {plan.bestValue ? "— Premium VIP —" : plan.popular ? "— Standard Pack —" : "— Starter Pack —"}
                    </span>
                    <h3 className="text-3xl font-black tracking-tight text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Badge */}
                  {plan.bestValue ? (
                    <span className="bg-gradient-to-r from-[#F2C847] to-[#D4A017] text-black rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                      ★ Best
                    </span>
                  ) : plan.popular ? (
                    <span className="bg-white/10 border border-white/20 text-white rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Zap size={12} className="text-[#F2C847] fill-[#F2C847]" /> Popular
                    </span>
                  ) : null}
                </div>

                <p className="text-white/60 text-sm font-semibold mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price block */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-black tracking-tighter drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 transition-all duration-300">
                      {finalPriceStr}
                    </span>
                    <span className="text-white/40 font-extrabold text-sm ml-1">{plan.durationText}</span>
                  </div>
                  <div className="flex items-center gap-2.5 mt-2">
                    <p className="text-xs font-black text-white/50 tracking-wider uppercase">{finalPerMonthStr}</p>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <div className="inline-flex items-center gap-1 text-[10px] font-black text-[#F2C847] uppercase tracking-wider">
                      <Shield size={9} />
                      {plan.savingsText}
                    </div>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/5 mb-8" />

                {/* Features List */}
                <ul className="space-y-4 text-sm text-white/80 font-medium mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3.5">
                      <div
                        className={`flex items-center justify-center shrink-0 h-5 w-5 rounded-full mt-0.5 ${
                          plan.bestValue ? "bg-[#F2C847]/10" : "bg-white/5"
                        }`}
                      >
                        <CheckCircle
                          className={`h-3.5 w-3.5 ${plan.bestValue ? "text-[#F2C847]" : "text-[#22c55e]"}`}
                        />
                      </div>
                      <span className="text-[15px] leading-tight font-semibold text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic WhatsApp Button */}
              <div className="relative z-10">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative overflow-hidden inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-5.5 text-center font-black text-base uppercase tracking-widest transition-all duration-500 group/btn ${
                    plan.bestValue || plan.popular
                      ? "bg-gradient-to-r from-[#F2C847] via-[#FFF3AD] to-[#D4A017] text-black shadow-[0_4px_30px_rgba(242,200,71,0.25)] hover:shadow-[0_4px_45px_rgba(242,200,71,0.45)] hover:scale-[1.02]"
                      : "bg-white/5 text-white border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
                  } active:scale-[0.98]`}
                >
                  {/* Luxury Shine/Sweep Animation */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-sweep transition-transform" />

                  {/* Icon */}
                  <MessageCircle
                    className={`h-5 w-5 relative z-10 transition-transform duration-300 group-hover/btn:scale-110 ${
                      plan.bestValue || plan.popular ? "animate-pulse" : ""
                    }`}
                  />

                  <span className="relative z-10 drop-shadow-sm">
                    {plan.bestValue ? "Order VIP Access" : "Order Pack"}
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Re-designed Bottom Trust Badges */}
      <div className="mt-24 flex flex-wrap justify-center items-center gap-8 md:gap-14 py-7 px-8 rounded-3xl bg-slate-950/60 border border-white/5 backdrop-blur-lg max-w-4xl mx-auto text-xs font-black uppercase tracking-widest text-white/50 relative z-10">
        <div className="flex items-center gap-2 hover:text-[#F2C847] transition-colors">
          <Zap size={14} className="text-[#F2C847]" /> Instant Setup
        </div>
        <div className="flex items-center gap-2 hover:text-[#F2C847] transition-colors">
          <ShieldCheck size={14} className="text-[#F2C847]" /> Safe WhatsApp Order
        </div>
        <div className="flex items-center gap-2 hover:text-[#F2C847] transition-colors">
          <Infinity size={14} className="text-[#F2C847]" /> 99.9% Server Uptime
        </div>
        <div className="flex items-center gap-2 hover:text-[#F2C847] transition-colors">
          <MessageCircle size={14} className="text-[#22c55e]" /> Activated in 3 min
        </div>
      </div>
    </>
  );
}
