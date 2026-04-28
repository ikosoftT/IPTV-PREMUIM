import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Info, ShieldCheck } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import { premiumImages } from "@/lib/media";
import { createWhatsAppOrderUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "Pricing Plans",
  description: "Choose your premium iflexiptv subscription plan. 1 Month, 3 Months, 6 Months, or 12 Months. WhatsApp ordering and instant delivery.",
  alternates: {
    canonical: "https://www.iflexiptv.com/pricing",
  },
};

const plans = [
  {
    name: "1 Month",
    price: "$14.99",
    duration: "/mo",
    description: "Perfect for testing our premium service.",
    features: ["+15,000 Live Channels", "VODs (Movies & TV Shows)", "4K & FHD Quality", "Anti-Freeze Technology", "1 Connection", "24/7 Support"],
    popular: false,
    image: premiumImages.planMonthly,
  },
  {
    name: "3 Months",
    price: "$34.99",
    duration: "/3 mos",
    description: "Save more with our quarterly plan.",
    features: ["+15,000 Live Channels", "VODs (Movies & TV Shows)", "4K & FHD Quality", "Anti-Freeze Technology", "1 Connection", "24/7 Support"],
    popular: false,
    image: premiumImages.planQuarterly,
  },
  {
    name: "6 Months",
    price: "$49.99",
    duration: "/6 mos",
    description: "Our most popular long-term choice.",
    features: ["+15,000 Live Channels", "VODs (Movies & TV Shows)", "4K & FHD Quality", "Anti-Freeze Technology", "1 Connection", "24/7 Support"],
    popular: true,
    image: premiumImages.planSemiAnnual,
  },
  {
    name: "12 Months",
    price: "$79.99",
    duration: "/yr",
    description: "Best value. Stream all year uninterrupted.",
    features: ["+15,000 Live Channels", "VODs (Movies & TV Shows)", "4K & FHD Quality", "Anti-Freeze Technology", "1 Connection", "24/7 Support"],
    popular: false,
    image: premiumImages.planAnnual,
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
      "priceCurrency": "USD",
    },
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      <div>
        <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
          <Image
            src={premiumImages.pricingHero}
            alt="Premium cinema seats representing iflexiptv subscription pricing"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,6,0.97),rgba(5,5,6,0.76)_58%,rgba(5,5,6,0.96)),radial-gradient(circle_at_76%_18%,rgba(244,199,107,0.25),transparent_32rem)]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Transparent premium access</p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">Choose Your Premium Plan</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Simple, transparent pricing. No hidden fees or contracts. Enjoy global entertainment in top quality today.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex flex-col overflow-hidden rounded-[1.5rem] border shadow-2xl shadow-black/24 transition duration-500 hover:-translate-y-1 ${
                    plan.popular ? "border-brand/70 bg-card" : "border-white/10 bg-card"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute right-5 top-5 z-10">
                      <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-background shadow-lg shadow-brand/25">Most Popular</span>
                    </div>
                  )}
                  <div className="relative h-36">
                    <Image
                      src={plan.image}
                      alt={`${plan.name} iflexiptv plan premium entertainment background`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 92vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-extrabold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.duration}</span>
                    </div>

                    <Link
                      href={createWhatsAppOrderUrl(plan.name, plan.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-center font-bold transition ${
                        plan.popular
                          ? "button-glow bg-brand text-background hover:bg-brand-hover"
                          : "border border-white/10 bg-white/8 text-foreground hover:border-brand/40 hover:text-brand"
                      }`}
                    >
                      Order on WhatsApp
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <div className="mt-8 space-y-4 flex-1">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 luxury-surface max-w-4xl mx-auto rounded-[1.5rem] p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-brand/10 text-brand">
                  <Info className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">7-Day Money-Back Guarantee</h3>
                  <p className="text-muted-foreground text-sm leading-6">
                    We are confident in our service. If you face technical issues that our support cannot fix within the first 7 days, we offer a full refund. Fast WhatsApp ordering and guided activation included.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-accent md:ml-auto">
                  <ShieldCheck className="h-4 w-4" />
                  WhatsApp ordering
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
