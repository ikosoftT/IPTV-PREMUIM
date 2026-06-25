import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, HelpCircle } from "lucide-react";
import { premiumImages } from "@/lib/media";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Have questions about I Flex IPTV? Read our FAQ for answers on setup, buffering, channels, supported devices, and subscriptions.",
  alternates: {
    canonical: "https://www.iflexiptv.com/faq",
  },
};

const faqs = [
  {
    q: "What is I Flex IPTV?",
    a: "I Flex IPTV is a premium IPTV subscription service that provides access to over 26,000 live TV channels, global sports, movies, and VODs directly over the internet. No dish or cable box required.",
  },
  {
    q: "What devices do you support?",
    a: "We support virtually all devices including Smart TVs (Samsung Tizen, LG webOS, Android TV), Amazon Firestick/Fire TV, Google TV, NVIDIA Shield, Apple TV, MAG boxes, Chromecast, Roku, iOS and Android smartphones, tablets, and Windows/Mac computers.",
  },
  {
    q: "Will I experience freezing or buffering?",
    a: "We use advanced Anti-Freeze technology and load-balanced servers to ensure 99.9% uptime. With a stable internet connection (at least 20 Mbps for HD, 50 Mbps for 4K), your streams will be smooth and buffer-free.",
  },
  {
    q: "How long does it take to get my account?",
    a: "Accounts are activated instantly after payment is confirmed via WhatsApp. You will receive your login credentials and setup instructions within minutes.",
  },
  {
    q: "Can I use my subscription on multiple devices?",
    a: "Yes. You can choose 1, 2, or 3 simultaneous connections during checkout. Your subscription works on unlimited devices, but the number of concurrent streams depends on your plan.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "We are confident in our service quality. Contact our 24/7 support team if you experience any issues, and we will work with you to resolve them. We offer flexible options based on your situation.",
  },
  {
    q: "What channels and content do you offer?",
    a: "Our service includes 26,000+ live channels covering sports (Premier League, Champions League, La Liga, UFC, F1, NBA, NFL), entertainment, movies, news, documentaries, and kids programming. Plus 100,000+ VOD titles.",
  },
  {
    q: "Do I need a VPN for IPTV?",
    a: "While not required, using a VPN is recommended for privacy and to prevent ISP throttling, especially during major live events like the World Cup or Champions League finals.",
  },
];

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      <div>
        <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
          <Image
            src={premiumImages.faqHero}
            alt="Premium television room"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover opacity-40"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
                <HelpCircle className="h-3 w-3" />
                Clear Answers
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
                Frequently Asked <span className="gold-text">Questions</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/50">
                Find answers to common questions about our premium IPTV service.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqs} />

              <div className="mt-16 glass rounded-[1.5rem] p-8 sm:p-10 text-center border border-white/[0.06]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
                  <MessageCircle className="h-3 w-3" />
                  24/7 Support
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
                <p className="text-white/50 mb-6">Our dedicated support team is available 24/7 to help you with any issues.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="https://wa.me/447828714977"
                    className="btn-premium inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold"
                  >
                    <MessageCircle className="h-4 w-4 relative z-10" />
                    <span className="relative z-10">WhatsApp Us</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-outline inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm"
                  >
                    Contact Support
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
