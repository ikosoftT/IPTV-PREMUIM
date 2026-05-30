"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MonitorPlay, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/guides", label: "Guides" },
    { href: "/blog", label: "Blog" },
    { href: "/support", label: "Support" },
  ];

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          width: calc(100% - 24px);
          max-w: 1200px;
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(5, 5, 10, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }
        .nav-root.scrolled {
          top: 12px;
          background: rgba(5, 5, 10, 0.82);
          border-color: rgba(235, 182, 22, 0.3);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(235, 182, 22, 0.15);
          transform: translateX(-50%) scale(0.99);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }

        /* Scrollable mobile nav */
        .nav-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 2px 4px;
        }
        .nav-scroll::-webkit-scrollbar {
          display: none;
        }

        .nav-pill {
          flex: none;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.25s ease;
        }
        .nav-pill:hover {
          color: #EBB616;
          border-color: rgba(235, 182, 22, 0.4);
          background: rgba(235, 182, 22, 0.08);
        }

        /* Desktop link */
        .nav-link {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.2s ease;
          position: relative;
          padding: 4px 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background: linear-gradient(90deg, #EBB616, #F9D976);
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .nav-link:hover {
          color: #EBB616;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        /* CTA */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 38px;
          padding: 0 16px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 13px;
          color: black;
          background: linear-gradient(135deg, #EBB616, #F9D976, #C99800);
          box-shadow: 0 4px 20px rgba(235, 182, 22, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(235, 182, 22, 0.6);
        }
      `}</style>

      <header className={`nav-root ${scrolled ? "scrolled" : "top"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#EBB616]/40 bg-[#EBB616]/10">
                <MonitorPlay className="h-4 w-4 text-[#EBB616]" />
              </div>
              <span className="text-white font-extrabold text-lg">
                iflex<span className="bg-gradient-to-r from-[#EBB616] to-[#F9D976] bg-clip-text text-transparent">iptv</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Link href="https://wa.me/1234567890" className="nav-cta">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </Link>
            </div>

          </div>

          {/* Mobile Scrollable Nav (NO hamburger) */}
          <div className="md:hidden pb-3">
            <div className="nav-scroll">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="nav-pill">
                  {link.label}
                </Link>
              ))}

              <Link href="https://wa.me/1234567890" className="nav-pill bg-[#EBB616]/10 text-[#EBB616] border-[#EBB616]/40">
                WhatsApp
              </Link>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}