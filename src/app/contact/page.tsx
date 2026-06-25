import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MessageSquare, Send, MessageCircle } from "lucide-react";
import { premiumImages } from "@/lib/media";

export const metadata = {
  title: "Contact Support - I Flex IPTV",
  description: "Get in touch with the I Flex IPTV support team. We offer 24/7 customer service to assist you with your premium IPTV subscription.",
  alternates: {
    canonical: "https://www.iflexiptv.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <Image
          src={premiumImages.contactHero}
          alt="Premium living room streaming setup"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
              <Mail className="h-3 w-3" />
              Premium Care
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">Contact Our Support Team</h1>
            <p className="mt-6 text-lg leading-8 text-white/50">
              We are here to help you 24/7. Whether you have a pre-sale question or need technical assistance, drop us a message.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-1 space-y-6">
              <div className="glass rounded-[1.5rem] p-6 flex items-start gap-4 hover:border-[#F2C847]/20 transition-all duration-300">
                <div className="p-2.5 rounded-xl bg-[#F2C847]/10 border border-[#F2C847]/20">
                  <Mail className="h-5 w-5 text-[#F2C847]" />
                </div>
                <div>
                  <h2 className="font-bold text-white mb-1">Email Support</h2>
                  <p className="text-sm text-white/40 mb-2">We typically reply within 1-2 hours.</p>
                  <a href="mailto:support@iflexiptv.com" className="text-[#F2C847] font-medium hover:text-white transition-colors">support@iflexiptv.com</a>
                </div>
              </div>

              <div className="glass rounded-[1.5rem] p-6 flex items-start gap-4 hover:border-[#F2C847]/20 transition-all duration-300">
                <div className="p-2.5 rounded-xl bg-[#F2C847]/10 border border-[#F2C847]/20">
                  <Clock className="h-5 w-5 text-[#F2C847]" />
                </div>
                <div>
                  <h2 className="font-bold text-white mb-1">24/7 Availability</h2>
                  <p className="text-sm text-white/40">Our technical team works around the clock to ensure your streams are always online.</p>
                </div>
              </div>

              <div className="glass rounded-[1.5rem] p-6 flex items-start gap-4 hover:border-[#F2C847]/20 transition-all duration-300">
                <div className="p-2.5 rounded-xl bg-[#F2C847]/10 border border-[#F2C847]/20">
                  <MessageSquare className="h-5 w-5 text-[#F2C847]" />
                </div>
                <div>
                  <h2 className="font-bold text-white mb-1">WhatsApp</h2>
                  <p className="text-sm text-white/40 mb-2">Fastest response time.</p>
                  <Link
                    href="https://wa.me/447828714977"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#22C55E] hover:text-white transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message us on WhatsApp
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 glass rounded-[1.5rem] p-8 md:p-10 border border-white/[0.08]">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#F2C847]/40 focus:ring-2 focus:ring-[#F2C847]/10"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#F2C847]/40 focus:ring-2 focus:ring-[#F2C847]/10"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/70">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#F2C847]/40 focus:ring-2 focus:ring-[#F2C847]/10"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full resize-y rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#F2C847]/40 focus:ring-2 focus:ring-[#F2C847]/10"
                    placeholder="Provide details about your inquiry..."
                  />
                </div>

                <button
                  type="button"
                  className="btn-premium inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-8 text-base font-bold md:w-auto"
                >
                  <Send className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
