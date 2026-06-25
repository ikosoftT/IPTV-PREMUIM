"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, MessageCircle, Zap, Shield, Infinity, Monitor, Tablet, Smartphone } from "lucide-react";
import { createWhatsAppOrderUrl } from "@/lib/whatsapp";

const pricingPlans = [
  {
    name: "3 Months",
    basePrice: 37,
    monthsCount: 3,
    durationText: "/3 mos",
    description: "Entry plan for testing.",
    popular: false,
    bestValue: false,
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs & Series",
      "4K & FHD Quality Streams",
      "Anti-Freeze Servers 10.0",
      "All Devices Supported",
      "24/7 WhatsApp Support",
    ],
    cta: "Subscribe",
    savingsText: "Save 82% vs Monthly",
  },
  {
    name: "6 Months",
    basePrice: 49,
    monthsCount: 6,
    durationText: "/6 mos",
    description: "Most popular long-term plan.",
    popular: true,
    bestValue: false,
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs & Series",
      "4K & FHD Quality Streams",
      "Anti-Freeze Servers 10.0",
      "All Devices Supported",
      "24/7 WhatsApp Support",
    ],
    cta: "Subscribe",
    savingsText: "Save 92% vs Monthly",
  },
  {
    name: "12 Months",
    basePrice: 67,
    monthsCount: 12,
    durationText: "/yr",
    description: "Ultimate premium access.",
    popular: false,
    bestValue: true,
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs & Series",
      "4K & FHD Quality Streams",
      "Anti-Freeze Servers 10.0",
      "All Devices Supported",
      "24/7 WhatsApp Support",
      "VIP Setup Assistance",
    ],
    cta: "Get VIP",
    savingsText: "Save 98% vs Monthly",
  },
];

export default function PricingSection() {
  const [connections, setConnections] = useState<1 | 2 | 3>(1);

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

  const getCalculatedPerMonth = (basePrice: number, conn: number, months: number) => {
    const finalPrice = getCalculatedPriceVal(basePrice, conn);
    const perMonth = finalPrice / months;
    return `€${perMonth.toFixed(2)}/mo`;
  };

  const connectionIcon = (num: number) => {
    if (num === 1) return <Monitor className="h-4 w-4" />;
    if (num === 2) return <Tablet className="h-4 w-4" />;
    return <Smartphone className="h-4 w-4" />;
  };

  return (
    <>
      <style>{`
        @keyframes goldPulse {
          0%, 100% { border-color: rgba(242, 200, 71, 0.25); box-shadow: 0 0 20px rgba(242, 200, 71, 0.08); }
          50% { border-color: rgba(242, 200, 71, 0.5); box-shadow: 0 0 40px rgba(242, 200, 71, 0.15); }
        }
        .animate-gold-pulse {
          animation: goldPulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Connections Switcher */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
          {([1, 2, 3] as const).map((num) => (
            <button
              key={num}
              onClick={() => setConnections(num)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                connections === num
                  ? "bg-[#F2C847] text-black shadow-[0_0_20px_rgba(242,200,71,0.35)]"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {connectionIcon(num)}
              {num} {num === 1 ? "Device" : "Devices"}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-[72rem] mx-auto items-stretch">
        {pricingPlans.map((plan) => {
          const finalPriceStr = getCalculatedPriceStr(plan.basePrice, connections);
          const finalPerMonthStr = getCalculatedPerMonth(plan.basePrice, connections, plan.monthsCount);

          const connLabel = connections === 1 ? "1 connection" : `${connections} connections`;
          const planDetail = `${plan.name} (${connLabel})`;
          const whatsappUrl = createWhatsAppOrderUrl(planDetail, finalPriceStr);

          return (
            <article
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all duration-300 group ${
                plan.bestValue
                  ? "bg-gradient-to-b from-slate-950 to-slate-900/90 border border-[#F2C847]/30 animate-gold-pulse md:scale-105 z-10"
                  : plan.popular
                  ? "bg-gradient-to-b from-slate-950/90 to-slate-900/70 border border-white/[0.12]"
                  : "bg-gradient-to-b from-slate-950/80 to-slate-900/60 border border-white/[0.08]"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${plan.bestValue ? "text-[#F2C847]" : "text-white/30"}`}>
                    {plan.bestValue ? "Premium VIP" : plan.popular ? "Standard" : "Starter"}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{plan.name}</h3>
                </div>
                {plan.bestValue && (
                  <span className="bg-[#F2C847] text-black text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
                    Best Value
                  </span>
                )}
                {plan.popular && (
                  <span className="flex items-center gap-1 bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    <Zap size={10} className="text-[#F2C847]" /> Popular
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black tracking-tight ${plan.bestValue ? "gold-text" : "text-white"}`}>
                    {finalPriceStr}
                  </span>
                  <span className="text-white/30 font-semibold text-sm">{plan.durationText}</span>
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs font-semibold text-white/40">{finalPerMonthStr}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[10px] font-bold text-[#F2C847] uppercase tracking-wider">{plan.savingsText}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-white/50 mb-6 leading-relaxed">{plan.description}</p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-white/[0.08] to-transparent mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className={`h-4 w-4 mt-0.5 shrink-0 ${plan.bestValue ? "text-[#F2C847]" : "text-[#22c55e]"}`} />
                    <span className="text-sm text-white/80 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  plan.bestValue || plan.popular
                    ? "bg-gradient-to-r from-[#F2C847] to-[#D4A017] text-black hover:shadow-[0_8px_30px_rgba(242,200,71,0.4)] hover:-translate-y-0.5"
                    : "bg-white/10 text-white border border-white/10 hover:bg-white/15 hover:border-white/20"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                {plan.bestValue ? "Get VIP" : "Subscribe"}
              </Link>
            </article>
          );
        })}
      </div>

      {/* Trust Badges */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-10 py-5 px-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40">
          <Zap size={12} className="text-[#F2C847]" /> Instant Setup
        </div>
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40">
          <Shield size={12} className="text-[#F2C847]" /> Safe Order
        </div>
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40">
          <Infinity size={12} className="text-[#F2C847]" /> 99.9% Uptime
        </div>
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40">
          <MessageCircle size={12} className="text-[#22c55e]" /> Activation 3 min
        </div>
      </div>
    </>
  );
}
