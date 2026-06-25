import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Sparkles, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "IPTV Setup Guides & Streaming Tips | I Flex IPTV Blog",
  description: "Read expert guides on how to install IPTV, fix buffering, choose the best apps, and get the most out of your premium streaming subscription.",
  alternates: {
    canonical: "https://www.iflexiptv.com/blog",
  },
};

export default function BlogIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "I Flex IPTV Blog",
    "url": "https://www.iflexiptv.com/blog",
    "description": "Expert guides on how to install IPTV, fix buffering, choose the best apps, and get the most out of your premium streaming subscription.",
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "url": `https://www.iflexiptv.com/blog/${post.slug}`,
      "image": `https://www.iflexiptv.com${post.image}`
    }))
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-white/[0.05]">
        <div className="absolute inset-0 -z-20 bg-black">
          <Image
            src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2000"
            alt="Cinematic background for blog"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs font-bold text-[#F2C847] tracking-wider uppercase mb-6">
              <Sparkles className="h-3 w-3" />
              Resources & Guides
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">IPTV Support Blog</h1>
            <p className="mt-6 text-lg leading-8 text-white/50">
              Everything you need to know about setting up IPTV, fixing buffering, and finding the best channels.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="glass group flex flex-col overflow-hidden rounded-2xl border border-white/[0.04] hover:border-[#F2C847]/20 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              >
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest glass-gold text-[#F2C847]">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col justify-between p-5 bg-white/[0.02]">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-white/35 mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                      <span>•</span>
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-base font-bold text-white mb-3 group-hover:text-[#F2C847] transition-colors line-clamp-2">{post.title}</h2>
                    </Link>
                    <p className="text-white/40 text-sm line-clamp-3 mb-6 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-[#F2C847] transition-colors"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 glass rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-[#F2C847]/15">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Still need help setting up?</h3>
            <p className="text-white/50 mb-8">Our support team is available 24/7 on WhatsApp to help you install and configure your IPTV app in minutes.</p>
            <Link
              href="https://wa.me/447828714977"
              className="btn-premium inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-bold"
            >
              <MessageCircle className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Chat with Support</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
