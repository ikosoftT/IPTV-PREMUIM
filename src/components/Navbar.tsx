"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MonitorPlay, MessageCircle } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] max-w-6xl rounded-2xl transition-all duration-500 ${
        scrolled
          ? "bg-[#050510]/90 border border-[#F2C847]/20 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(242,200,71,0.1)] backdrop-blur-2xl"
          : "bg-[#050510]/60 border border-white/[0.08] backdrop-blur-xl"
      }`}
    >
      <div className="px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#F2C847]/20 to-[#C9A020]/10 border border-[#F2C847]/30 group-hover:border-[#F2C847]/60 transition-all duration-300">
              <MonitorPlay className="h-4 w-4 text-[#F2C847]" />
            </div>
            <span className="text-white font-extrabold text-lg tracking-tight">
              I Flex <span className="gold-text">IPTV</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-semibold text-white/60 hover:text-[#F2C847] transition-colors duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-gradient-to-r after:from-[#F2C847] after:to-[#C9A020] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              href="https://wa.me/447828714977"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full font-bold text-sm bg-gradient-to-r from-[#F2C847] to-[#C9A020] text-black shadow-[0_4px_20px_rgba(242,200,71,0.35)] hover:shadow-[0_8px_30px_rgba(242,200,71,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Link>
          </div>
        </div>

        <div className="md:hidden pb-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex-none px-3.5 py-1.5 rounded-full text-xs font-bold text-white/70 bg-white/[0.04] border border-white/[0.06] hover:text-[#F2C847] hover:border-[#F2C847]/30 hover:bg-[#F2C847]/[0.06] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/447828714977"
              className="flex-none px-3.5 py-1.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-[#F2C847] to-[#C9A020]"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
