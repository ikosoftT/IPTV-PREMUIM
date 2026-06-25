import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import SchemaMarkup from "@/components/SchemaMarkup";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | I Flex IPTV Blog`,
    description: post.description,
    alternates: {
      canonical: `https://www.iflexiptv.com/blog/${post.slug}`,
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function renderContent(content: string) {
  const blocks = content.trim().split("\n\n");
  
  return blocks.map((block, index) => {
    if (block.startsWith("### ")) {
      return <h3 key={index} className="text-xl font-bold mt-8 mb-3 text-white">{block.replace("### ", "")}</h3>;
    }

    if (block.startsWith("## ")) {
      return <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-white">{block.replace("## ", "")}</h2>;
    }
    
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter(i => i.startsWith("- "));
      return (
        <ul key={index} className="list-disc pl-6 space-y-2 mb-6 text-white/50 leading-relaxed">
          {items.map((item, i) => {
            const text = item.replace("- ", "");
            const parts = text.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={i}>
                {parts.map((part, j) => (j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{part}</strong> : part))}
              </li>
            );
          })}
        </ul>
      );
    }
    
    if (/^\d+\./.test(block)) {
      const items = block.split("\n").filter(i => /^\d+\./.test(i));
      return (
        <ol key={index} className="list-decimal pl-6 space-y-2 mb-6 text-white/50 leading-relaxed">
           {items.map((item, i) => {
            const text = item.replace(/^\d+\.\s/, "");
            const parts = text.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={i}>
                {parts.map((part, j) => (j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{part}</strong> : part))}
              </li>
            );
          })}
        </ol>
      );
    }

    if (block.includes("|") && block.split("\n").length >= 3) {
      const rows = block.split("\n").filter(r => r.trim());
      if (rows.length >= 2 && rows[1]?.includes("---")) {
        const headers = rows[0].split("|").map(h => h.trim()).filter(Boolean);
        const dataRows = rows.slice(2);
        return (
          <div key={index} className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-white/5">
                  {headers.map((h, i) => (
                    <th key={i} className="px-4 py-3 text-left font-bold text-white border-b border-white/10">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, i) => {
                  const cells = row.split("|").map(c => c.trim()).filter(Boolean);
                  return (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/3">
                      {cells.map((cell, j) => {
                        const parts = cell.split(/\*\*(.*?)\*\*/g);
                        return (
                          <td key={j} className="px-4 py-3 text-white/50">
                            {parts.map((part, k) => (k % 2 === 1 ? <strong key={k} className="text-white font-semibold">{part}</strong> : part))}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
    }

    const lines = block.split("\n");
    return (
      <p key={index} className="mb-6 text-white/50 leading-relaxed">
        {lines.map((line, i) => {
           const parts = line.split(/\*\*(.*?)\*\*/g);
           return (
             <span key={i}>
               {parts.map((part, j) => (j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{part}</strong> : part))}
               {i < lines.length - 1 && <br />}
             </span>
           );
        })}
      </p>
    );
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "url": `https://www.iflexiptv.com/blog/${post.slug}`,
    "image": `https://www.iflexiptv.com${post.image}`,
    "author": {
      "@type": "Organization",
      "name": "I Flex IPTV"
    }
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <article className="pb-20">
        <section className="relative isolate pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-white/[0.05]">
          <div className="absolute inset-0 -z-20 bg-black">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover opacity-20 blur-sm"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/90 to-black/60" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#F2C847] hover:text-white mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-[#F2C847] mb-4">
              <span className="inline-flex items-center rounded-full px-3 py-1 glass-gold">{post.category}</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-white/40">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
              <span>•</span>
              <span>By I Flex IPTV Team</span>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>

              <div className="max-w-none">
                <p className="text-xl text-white/80 leading-relaxed mb-10 font-medium border-l-4 border-[#F2C847] pl-6">
                  {post.description}
                </p>
                {renderContent(post.content)}
              </div>

              <div className="mt-16 glass rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#F2C847]/20">
                <div>
                  <h3 className="text-xl font-bold text-[#F2C847] mb-2">Ready to cut the cord?</h3>
                  <p className="text-white/50 text-sm">Join thousands of users enjoying zero-buffering IPTV.</p>
                </div>
                <Link
                  href="https://wa.me/447828714977"
                  className="btn-premium whitespace-nowrap inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold"
                >
                  <MessageCircle className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">Start Free Trial</span>
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="glass rounded-2xl p-6 border border-white/[0.06] border-t-4 border-t-[#22C55E]">
                  <h3 className="text-lg font-bold text-white mb-3">Need Setup Help?</h3>
                  <p className="text-sm text-white/50 mb-6">Our WhatsApp support team is online 24/7. We can help you install apps on any device.</p>
                  <Link
                    href="https://wa.me/447828714977"
                    className="flex w-full h-12 items-center justify-center gap-2 rounded-xl bg-[#22C55E]/10 text-[#22C55E] font-bold transition-all border border-[#22C55E]/20 hover:bg-[#22C55E] hover:text-black"
                  >
                    <MessageCircle className="h-4 w-4" /> Message Support
                  </Link>
                </div>

                <div className="glass rounded-2xl p-6 border border-white/[0.06]">
                  <h3 className="text-lg font-bold text-white mb-4">Related Guides</h3>
                  <ul className="space-y-4">
                    {blogPosts.filter(p => p.slug !== post.slug).slice(0, 4).map((p) => (
                      <li key={p.slug} className="group">
                        <Link href={`/blog/${p.slug}`} className="flex gap-4 items-center">
                          <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md">
                            <Image src={p.image} alt={p.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white line-clamp-2 group-hover:text-[#F2C847] transition-colors">{p.title}</h4>
                            <p className="text-xs text-white/40 mt-1">{p.readTime}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
            
          </div>
        </div>
      </article>
    </>
  );
}
