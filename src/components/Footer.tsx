import Link from "next/link";
import { Mail, MessageCircle, MonitorPlay, ShieldCheck, Smartphone, Tv, Monitor } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#F2C847]/20 to-[#C9A020]/10 border border-[#F2C847]/30">
                <MonitorPlay className="h-5 w-5 text-[#F2C847]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                I Flex <span className="gold-text">IPTV</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-md">
              Premium IPTV service delivering 26,000+ live channels, global sports, blockbuster movies, and series in stunning 4K & FHD quality. Anti-freeze technology for buffer-free streaming.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <ShieldCheck className="h-4 w-4 text-[#22C55E]" />
                <span>Instant Activation</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <MessageCircle className="h-4 w-4 text-[#F2C847]" />
                <span>WhatsApp Support</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-white/50 hover:text-[#F2C847] transition-colors">Home</Link></li>
              <li><Link href="/features" className="text-sm text-white/50 hover:text-[#F2C847] transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-white/50 hover:text-[#F2C847] transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-sm text-white/50 hover:text-[#F2C847] transition-colors">Blog</Link></li>
              <li><Link href="/guides" className="text-sm text-white/50 hover:text-[#F2C847] transition-colors">Setup Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-5">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/support" className="text-sm text-white/50 hover:text-[#F2C847] transition-colors">Help Center</Link></li>
              <li><Link href="/faq" className="text-sm text-white/50 hover:text-[#F2C847] transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-white/50 hover:text-[#F2C847] transition-colors">Contact Us</Link></li>
              <li><Link href="/devices" className="text-sm text-white/50 hover:text-[#F2C847] transition-colors">Compatible Devices</Link></li>
              <li><Link href="#" className="text-sm text-white/50 hover:text-[#F2C847] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-5">Devices</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/50"><Tv className="h-3.5 w-3.5 text-white/30" /> Smart TV</li>
              <li className="flex items-center gap-2 text-sm text-white/50"><Monitor className="h-3.5 w-3.5 text-white/30" /> Firestick</li>
              <li className="flex items-center gap-2 text-sm text-white/50"><Smartphone className="h-3.5 w-3.5 text-white/30" /> Mobile</li>
              <li className="flex items-center gap-2 text-sm text-white/50"><MonitorPlay className="h-3.5 w-3.5 text-white/30" /> Android TV</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-3">Contact</h4>
              <a href="mailto:support@iflexiptv.com" className="flex items-center gap-2 text-sm text-white/50 hover:text-[#F2C847] transition-colors">
                <Mail className="h-3.5 w-3.5" />
                support@iflexiptv.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 text-center md:text-left">
            &copy; {currentYear} I Flex IPTV. All rights reserved. This service does not host or transmit any copyrighted content.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Refund Policy</Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
