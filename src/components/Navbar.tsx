"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MonitorPlay, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/pricing", label: "Pricing" },
    { href: "/features", label: "Features" },
    { href: "/channels", label: "Channels" },
    { href: "/devices", label: "Devices" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/72 shadow-2xl shadow-black/20 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/54">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand/25 bg-brand/10 shadow-lg shadow-brand/10">
                <MonitorPlay className="h-5 w-5 text-brand" />
              </span>
              <span className="text-xl font-bold tracking-tight">iflex<span className="text-brand">iptv</span></span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link 
              href="/pricing"
              className="button-glow inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 py-2 text-sm font-bold text-background transition hover:-translate-y-0.5 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              Get Started
            </Link>
          </div>

          <div className="flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/8 p-2 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-background/94 backdrop-blur-xl">
          <div className="space-y-1 px-4 pb-4 pt-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl px-3 py-3 text-base font-medium text-muted-foreground hover:bg-white/8 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="button-glow mt-4 block w-full rounded-full bg-brand px-4 py-3 text-center font-bold text-background shadow transition-colors hover:bg-brand-hover"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
