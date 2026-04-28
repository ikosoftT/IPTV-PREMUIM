import Image from "next/image";
import { Clock, Mail, MessageSquare, Send } from "lucide-react";
import { premiumImages } from "@/lib/media";

export const metadata = {
  title: "Contact Support - iflexiptv",
  description: "Get in touch with the iflexiptv support team. We offer 24/7 customer service to assist you with your premium IPTV subscription.",
  alternates: {
    canonical: "https://www.iflexiptv.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Image
          src={premiumImages.contactHero}
          alt="Premium living room streaming setup behind iflexiptv contact support"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,6,0.96),rgba(5,5,6,0.72)_55%,rgba(5,5,6,0.96)),radial-gradient(circle_at_78%_20%,rgba(244,199,107,0.22),transparent_32rem)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Premium care</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">Contact Our Support Team</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We are here to help you 24/7. Whether you have a pre-sale question or need technical assistance, drop us a message.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="luxury-surface rounded-[1.5rem] p-6 flex items-start gap-4">
                <Mail className="h-6 w-6 text-brand shrink-0" />
                <div>
                  <h2 className="font-bold mb-1">Email Support</h2>
                  <p className="text-sm text-muted-foreground mb-2">We typically reply within 1-2 hours.</p>
                  <a href="mailto:support@iflexiptv.com" className="text-brand font-medium hover:text-brand-hover">support@iflexiptv.com</a>
                </div>
              </div>

              <div className="luxury-surface rounded-[1.5rem] p-6 flex items-start gap-4">
                <Clock className="h-6 w-6 text-brand shrink-0" />
                <div>
                  <h2 className="font-bold mb-1">24/7 Availability</h2>
                  <p className="text-sm text-muted-foreground">Our technical team works around the clock to ensure your streams are always online.</p>
                </div>
              </div>

              <div className="luxury-surface rounded-[1.5rem] p-6 flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-brand shrink-0" />
                <div>
                  <h2 className="font-bold mb-1">Live Chat</h2>
                  <p className="text-sm text-muted-foreground">Available for active subscribers via the customer dashboard.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 luxury-surface rounded-[1.5rem] p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-2xl border border-white/10 bg-black/34 px-4 py-3 text-foreground outline-none transition focus:border-brand/60 focus:ring-2 focus:ring-brand/25"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-2xl border border-white/10 bg-black/34 px-4 py-3 text-foreground outline-none transition focus:border-brand/60 focus:ring-2 focus:ring-brand/25"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-2xl border border-white/10 bg-black/34 px-4 py-3 text-foreground outline-none transition focus:border-brand/60 focus:ring-2 focus:ring-brand/25"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full resize-y rounded-2xl border border-white/10 bg-black/34 px-4 py-3 text-foreground outline-none transition focus:border-brand/60 focus:ring-2 focus:ring-brand/25"
                    placeholder="Provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="button-glow inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-bold text-background transition hover:-translate-y-0.5 hover:bg-brand-hover md:w-auto"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
