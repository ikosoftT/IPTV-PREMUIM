import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  MonitorPlay,
  Play,
  Star,
  Tv,
  MessageCircle,
  Trophy,
  Film,
  Smartphone,
  Calendar,
  Clock,
  Zap,
  Shield,
  Infinity,
} from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import EmblaSlider from "@/components/EmblaSlider";
import AnimatedLogos from "@/components/AnimatedLogos";
import { blogPosts } from "@/lib/blog-data";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iflexiptv",
    url: "https://www.iflexiptv.net",
    logo: "https://www.iflexiptv.net/logo.png",
    description: "Premium IPTV subscription service offering 4K/FHD channels, sports, and VODs.",
  };

  const featureCards = [
    {
      badge: "Live 24/7",
      title: "Every Big Match. Zero Miss.",
      description:
        "Premier League, Champions League, UFC, F1, NBA — all in crystal-clear 4K UHD with anti-freeze servers.",
      image:
        "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Watch Live Sports",
    },
    {
      badge: "100K+ Titles",
      title: "Movies & Series Every Night.",
      description:
        "An endless cinema of blockbusters, award-winning series, Arabic dramas, and kids shows. Updated daily.",
      image:
        "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Browse VOD Library",
    },
    {
      badge: "5-Min Setup",
      title: "Works on Every Screen.",
      description:
        "Smart TV, Firestick, iPhone, Android, PC, MAG box — one subscription, unlimited screens.",
      image:
        "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "See All Devices",
    },
  ];

  const devices = [
    {
      name: "Smart TV",
      difficulty: "Easy",
      icon: <Tv className="h-8 w-8" style={{ color: "#F2C847" }} />,
      image: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Firestick",
      difficulty: "Easy",
      icon: <MonitorPlay className="h-8 w-8" style={{ color: "#F2C847" }} />,
      image: "https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Apple TV",
      difficulty: "Easy",
      icon: <Tv className="h-8 w-8" style={{ color: "#F2C847" }} />,
      image: "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Smartphones",
      difficulty: "Very Easy",
      icon: <Smartphone className="h-8 w-8" style={{ color: "#F2C847" }} />,
      image: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const latestPosts = blogPosts.slice(0, 4);

  return (
    <>
      <SchemaMarkup schema={schema} />

      {/* ═══════════════════════════════════════════════════
          GLASSMORPHISM DESIGN SYSTEM
      ═══════════════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Root aurora palette ── */
        :root {
          --g1: #C9A020;
          --g2: #F2C847;
          --g3: #F9E08A;
          --ink: #010110;
          --deep: #02020E;
          --mid:  #06061A;
          /* Glass layers */
          --glass-white:     rgba(255,255,255,0.05);
          --glass-white-md:  rgba(255,255,255,0.09);
          --glass-white-hi:  rgba(255,255,255,0.14);
          --glass-gold:      rgba(242,200,71,0.07);
          --glass-gold-md:   rgba(242,200,71,0.12);
          --glass-gold-hi:   rgba(242,200,71,0.18);
          --border-white:    rgba(255,255,255,0.10);
          --border-gold:     rgba(242,200,71,0.22);
          --border-gold-hi:  rgba(242,200,71,0.45);
          --blur-sm:  blur(12px);
          --blur-md:  blur(20px);
          --blur-lg:  blur(32px);
        }

        * { font-family: 'DM Sans', sans-serif; }
        h1,h2,h3,h4 { font-family: 'Syne', sans-serif; }

        /* ── Aurora background (shared across sections) ── */
        .aurora-bg {
          background: radial-gradient(ellipse 110% 80% at 60% -10%, rgba(242,200,71,0.13) 0%, transparent 55%),
                      radial-gradient(ellipse 80% 60% at 10% 40%, rgba(120,60,220,0.12) 0%, transparent 55%),
                      radial-gradient(ellipse 70% 50% at 90% 60%, rgba(200,120,20,0.10) 0%, transparent 50%),
                      radial-gradient(ellipse 100% 70% at 50% 100%, rgba(242,200,71,0.07) 0%, transparent 60%),
                      #02020E;
        }

        /* ── Noise grain overlay ── */
        .grain::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 128px 128px;
        }

        /* ══════════════════════════════
           GLASS CARD SYSTEM
        ══════════════════════════════ */

        /* ── Base glass card ── */
        .glass-card {
          background: var(--glass-white);
          backdrop-filter: var(--blur-md) saturate(160%);
          -webkit-backdrop-filter: var(--blur-md) saturate(160%);
          border: 1px solid var(--border-white);
          box-shadow:
            0 8px 32px rgba(0,0,0,0.45),
            0 2px 8px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.2);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .glass-card:hover {
          background: var(--glass-white-md);
          border-color: var(--border-gold);
          box-shadow:
            0 20px 60px rgba(0,0,0,0.55),
            0 0 40px rgba(242,200,71,0.10),
            inset 0 1px 0 rgba(255,255,255,0.12),
            inset 0 -1px 0 rgba(242,200,71,0.05);
          transform: translateY(-6px);
        }

        /* ── Gold glass card ── */
        .glass-card-gold {
          background: var(--glass-gold);
          backdrop-filter: var(--blur-md) saturate(180%);
          -webkit-backdrop-filter: var(--blur-md) saturate(180%);
          border: 1px solid var(--border-gold);
          box-shadow:
            0 8px 40px rgba(0,0,0,0.5),
            0 0 30px rgba(242,200,71,0.08),
            inset 0 1px 0 rgba(242,200,71,0.10),
            inset 0 -1px 0 rgba(0,0,0,0.15);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .glass-card-gold:hover {
          background: var(--glass-gold-md);
          border-color: var(--border-gold-hi);
          box-shadow:
            0 24px 70px rgba(0,0,0,0.6),
            0 0 55px rgba(242,200,71,0.20),
            inset 0 1px 0 rgba(242,200,71,0.14),
            inset 0 -1px 0 rgba(242,200,71,0.04);
          transform: translateY(-8px);
        }

        /* ── Feature image card (with full-bleed image) ── */
        .glass-feat-card {
          backdrop-filter: var(--blur-sm);
          -webkit-backdrop-filter: var(--blur-sm);
          border: 1px solid rgba(255,255,255,0.10);
          transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
        }
        .glass-feat-card:hover {
          border-color: var(--border-gold);
          box-shadow:
            0 0 0 1px rgba(242,200,71,0.25),
            0 32px 80px rgba(0,0,0,0.7),
            0 0 60px rgba(242,200,71,0.15);
          transform: translateY(-8px) scale(1.01);
        }

        /* ─────────────────────────────────
           INSET GLASS PANEL (inside cards)
        ───────────────────────────────── */
        .glass-inset {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border-radius: 14px;
        }

        /* ══════════════════════════════
           BUTTONS
        ══════════════════════════════ */

        /* ── Gold button ── */
        .btn-gold {
          background: linear-gradient(130deg, #F2C847 0%, #F9E08A 45%, #C9A020 100%);
          color: #07070D;
          font-weight: 800;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.02em;
          box-shadow:
            0 4px 22px rgba(242,200,71,0.45),
            0 1px 0 rgba(255,255,255,0.2) inset,
            0 -1px 0 rgba(0,0,0,0.3) inset;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-gold::before {
          content:"";
          position:absolute;
          inset:0;
          border-radius:inherit;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%);
          background-size: 250% 100%;
          background-position: 200% 0;
          animation: sheen 3.5s ease-in-out infinite;
        }
        @keyframes sheen {
          0%,55%  { background-position: 200% 0; }
          100%    { background-position: -200% 0; }
        }
        .btn-gold:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 36px rgba(242,200,71,0.6), inset 0 1px 0 rgba(255,255,255,0.3);
        }

        /* ── Ghost glass button ── */
        .btn-glass {
          background: rgba(255,255,255,0.06);
          backdrop-filter: var(--blur-sm);
          -webkit-backdrop-filter: var(--blur-sm);
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.88);
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-glass:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.10);
          border-color: rgba(242,200,71,0.45);
          color: #F2C847;
          box-shadow: 0 0 28px rgba(242,200,71,0.18), 0 8px 30px rgba(0,0,0,0.4);
        }

        /* ── Gold ghost button ── */
        .btn-ghost-gold {
          background: rgba(242,200,71,0.07);
          backdrop-filter: var(--blur-sm);
          -webkit-backdrop-filter: var(--blur-sm);
          border: 1px solid rgba(242,200,71,0.28);
          color: #F2C847;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-ghost-gold:hover {
          transform: translateY(-3px);
          background: rgba(242,200,71,0.14);
          border-color: rgba(242,200,71,0.55);
          box-shadow: 0 0 32px rgba(242,200,71,0.25), 0 8px 30px rgba(0,0,0,0.4);
        }

        /* ══════════════════════════════
           TYPOGRAPHY HELPERS
        ══════════════════════════════ */
        .tg {
          background: linear-gradient(130deg, #C9A020 0%, #F2C847 40%, #F9E08A 65%, #C9A020 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gold-badge {
          background: linear-gradient(130deg, rgba(242,200,71,0.2) 0%, rgba(249,224,138,0.25) 50%, rgba(201,160,32,0.18) 100%);
          border: 1px solid rgba(242,200,71,0.4);
          color: #F2C847;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 0 14px rgba(242,200,71,0.2), inset 0 1px 0 rgba(242,200,71,0.15);
          font-family: 'Syne', sans-serif;
          font-weight: 800;
        }

        /* ══════════════════════════════
           SECTION DIVIDERS & ORBS
        ══════════════════════════════ */
        .gold-line {
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(242,200,71,0.35) 25%,
            rgba(249,224,138,0.6) 50%,
            rgba(242,200,71,0.35) 75%,
            transparent 100%);
        }

        .g-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: blur(80px);
        }

        /* ── Section heading ornament ── */
        .orn { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }
        .orn-line { flex:1; max-width:48px; height:1px; }
        .orn-line-l { background: linear-gradient(90deg, transparent, rgba(242,200,71,0.55)); }
        .orn-line-r { background: linear-gradient(90deg, rgba(242,200,71,0.55), transparent); }

        /* ══════════════════════════════
           PRICING CARDS
        ══════════════════════════════ */
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .pricing-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }

        .p-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease;
        }
        .p-card:hover { transform: translateY(-10px); }

        /* Standard glass pricing card */
        .p-card-std {
          background: rgba(255,255,255,0.04);
          backdrop-filter: var(--blur-md);
          -webkit-backdrop-filter: var(--blur-md);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07);
        }
        .p-card-std:hover {
          border-color: rgba(242,200,71,0.3);
          box-shadow: 0 24px 70px rgba(0,0,0,0.65), 0 0 45px rgba(242,200,71,0.12),
                      inset 0 1px 0 rgba(255,255,255,0.10);
        }

        /* Popular gold-tinted glass */
        .p-card-pop {
          background: rgba(242,200,71,0.06);
          backdrop-filter: var(--blur-lg);
          -webkit-backdrop-filter: var(--blur-lg);
          border: 1px solid rgba(242,200,71,0.25);
          box-shadow: 0 12px 50px rgba(0,0,0,0.55), 0 0 35px rgba(242,200,71,0.12),
                      inset 0 1px 0 rgba(242,200,71,0.10);
        }
        .p-card-pop::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 28px;
          padding: 1.5px;
          background: linear-gradient(155deg, rgba(242,200,71,0.65), rgba(249,224,138,0.3) 50%, rgba(201,160,32,0.55));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 10;
        }
        .p-card-pop:hover {
          box-shadow: 0 28px 80px rgba(0,0,0,0.7), 0 0 60px rgba(242,200,71,0.22),
                      inset 0 1px 0 rgba(242,200,71,0.15);
        }

        /* Best value — vivid gold glass */
        .p-card-best {
          background: rgba(242,200,71,0.09);
          backdrop-filter: var(--blur-lg) saturate(200%);
          -webkit-backdrop-filter: var(--blur-lg) saturate(200%);
          border: 1px solid rgba(242,200,71,0.35);
          box-shadow: 0 0 90px rgba(242,200,71,0.25), 0 24px 80px rgba(0,0,0,0.65),
                      inset 0 1px 0 rgba(242,200,71,0.12);
        }
        .p-card-best::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 28px;
          padding: 2px;
          background: linear-gradient(135deg, #F2C847 0%, #F9E08A 30%, #C9A020 60%, #F2C847 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 10;
        }
        .p-card-best:hover {
          box-shadow: 0 0 110px rgba(242,200,71,0.38), 0 32px 100px rgba(0,0,0,0.75),
                      inset 0 1px 0 rgba(242,200,71,0.18);
        }
        /* Animated gold scanning line */
        .p-card-best .p-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #C9A020, #F2C847 25%, #F9E08A 50%, #F2C847 75%, #C9A020);
          background-size: 200% 100%;
          animation: topbar-move 3s linear infinite;
          z-index: 11;
        }
        @keyframes topbar-move {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        /* Pricing body / inner */
        .p-body {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 36px 30px 30px;
        }
        .p-price-num {
          font-size: 3.25rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.03em;
          color: white;
          font-family: 'Syne', sans-serif;
        }
        .p-card-best .p-price-num {
          background: linear-gradient(135deg, #F2C847, #F9E08A 50%, #C9A020);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .p-savings {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: rgba(242,200,71,0.1);
          border: 1px solid rgba(242,200,71,0.28);
          color: #F2C847;
          backdrop-filter: blur(6px);
          width: fit-content;
          font-family: 'Syne', sans-serif;
        }
        .p-card-best .p-savings {
          background: rgba(242,200,71,0.18);
          border-color: rgba(242,200,71,0.5);
          box-shadow: 0 0 14px rgba(242,200,71,0.22);
        }
        .p-feat {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255,255,255,0.78);
          padding: 5px 0;
        }
        .p-feat-icon {
          width: 20px; height: 20px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          background: rgba(242,200,71,0.10);
          border: 1px solid rgba(242,200,71,0.28);
        }
        .p-card-best .p-feat-icon {
          background: rgba(242,200,71,0.22);
          border-color: rgba(242,200,71,0.5);
          box-shadow: 0 0 8px rgba(242,200,71,0.25);
        }
        .p-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 50%, transparent);
          margin: 22px 0;
        }
        .p-card-best .p-divider {
          background: linear-gradient(90deg, transparent, rgba(242,200,71,0.4) 50%, transparent);
        }
        .pricing-note {
          text-align: center;
          margin-top: 36px;
          font-size: 0.8125rem;
          color: rgba(255,255,255,0.32);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .pricing-note span {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-family: 'Syne', sans-serif;
        }

        /* ══════════════════════════════
           SLIDER CARDS
        ══════════════════════════════ */
        .slider-card-hover {
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1);
        }
        .slider-card-hover:hover {
          border-color: rgba(242,200,71,0.45) !important;
          box-shadow: 0 0 50px rgba(242,200,71,0.18), 0 24px 60px rgba(0,0,0,0.7) !important;
          transform: translateY(-6px) scale(1.01);
        }

        /* ══════════════════════════════
           HERO GLASS PANEL
        ══════════════════════════════ */
        .hero-glass-pill {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.10), 0 4px 20px rgba(0,0,0,0.3);
        }

        /* ══════════════════════════════
           FLOATING GLASS BADGE
        ══════════════════════════════ */
        .glass-stat-pill {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        /* ══════════════════════════════
           BLOG GLASS CARDS
        ══════════════════════════════ */
        .blog-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow: 0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .blog-card:hover {
          border-color: rgba(242,200,71,0.35);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(242,200,71,0.12),
                      inset 0 1px 0 rgba(242,200,71,0.08);
          transform: translateY(-6px);
        }

        /* ══════════════════════════════
           CTA GLASS PANEL
        ══════════════════════════════ */
        .cta-glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 16px 60px rgba(0,0,0,0.5), 0 0 80px rgba(242,200,71,0.10),
                      inset 0 1px 0 rgba(255,255,255,0.08);
        }

        /* ══════════════════════════════
           DEVICE ICON BUBBLE
        ══════════════════════════════ */
        .device-icon-glass {
          background: rgba(242,200,71,0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(242,200,71,0.25);
          box-shadow: 0 0 24px rgba(242,200,71,0.12), inset 0 1px 0 rgba(242,200,71,0.12);
          transition: all 0.35s ease;
        }
        .device-icon-glass:hover {
          background: rgba(242,200,71,0.15);
          box-shadow: 0 0 40px rgba(242,200,71,0.25), inset 0 1px 0 rgba(242,200,71,0.18);
        }

        /* ══════════════════════════════
           ANIMATED GLASS RING (hero)
        ══════════════════════════════ */
        @keyframes ring-pulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%       { opacity: 0.65; transform: scale(1.03); }
        }
        .ring-pulse { animation: ring-pulse 4s ease-in-out infinite; }

        /* ══════════════════════════════
           CHECK STAT ROW (hero bottom)
        ══════════════════════════════ */
        .stat-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .stat-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 100px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.11);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          font-family: 'Syne', sans-serif;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.07);
        }

        /* ══════════════════════════════
           SECTION BG VARIANTS
        ══════════════════════════════ */
        .section-bg-1 {
          background:
            radial-gradient(ellipse 100% 70% at 80% -20%, rgba(242,200,71,0.10) 0%, transparent 55%),
            radial-gradient(ellipse 70% 50% at 10% 60%, rgba(100,50,200,0.09) 0%, transparent 55%),
            #020210;
        }
        .section-bg-2 {
          background:
            radial-gradient(ellipse 80% 60% at 20% -10%, rgba(200,120,20,0.09) 0%, transparent 50%),
            radial-gradient(ellipse 90% 60% at 80% 80%, rgba(242,200,71,0.08) 0%, transparent 55%),
            #010108;
        }
        .section-bg-3 {
          background:
            radial-gradient(ellipse 100% 70% at 50% -10%, rgba(242,200,71,0.09) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 0% 50%, rgba(80,40,180,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 100% 70%, rgba(180,100,10,0.08) 0%, transparent 50%),
            #03030F;
        }

        /* ══════════════════════════════
           RESPONSIVE TWEAKS
        ══════════════════════════════ */
        @media (max-width: 768px) {
          .p-body { padding: 28px 22px 22px; }
          .p-price-num { font-size: 2.5rem; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════
          1 · HERO — Deep aurora + glass panels
      ══════════════════════════════════════════════════ */}
      <section
        className="grain relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28 min-h-[92vh] flex items-center"
        style={{ background: "#01010C" }}
      >
        {/* Aurora background orbs */}
        <div className="g-orb" style={{ width: 900, height: 700, top: "-20%", right: "-12%",
          background: "radial-gradient(circle, rgba(242,200,71,0.18) 0%, transparent 70%)", opacity: 0.9 }} />
        <div className="g-orb" style={{ width: 600, height: 600, top: "10%", left: "-10%",
          background: "radial-gradient(circle, rgba(120,60,220,0.20) 0%, transparent 70%)", opacity: 0.8 }} />
        <div className="g-orb" style={{ width: 500, height: 400, bottom: "-10%", left: "30%",
          background: "radial-gradient(circle, rgba(200,100,20,0.15) 0%, transparent 70%)", opacity: 0.7 }} />

        {/* Video BG */}
        <div className="absolute inset-0 -z-20 bg-black">
          <video autoPlay muted loop playsInline preload="metadata"
            poster="https://images.unsplash.com/photo-1508344928928-7137b29de216?q=80&w=2000"
            className="object-cover w-full h-full opacity-20">
            <source src="/imgs/bg_sport.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(to top, #01010C 0%, rgba(1,1,12,0.5) 55%, rgba(1,1,12,0.2) 100%)" }} />

        <div className="gold-line absolute top-0 left-0 right-0" style={{ zIndex: 5 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left"
          style={{ position: "relative", zIndex: 5 }}>
          <div className="max-w-4xl mx-auto md:mx-0">

            {/* Glass pill badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-bold hero-glass-pill"
              style={{ color: "#F2C847", fontFamily: "'Syne', sans-serif", letterSpacing: "0.04em" }}>
              <Star className="h-4 w-4 fill-[#F2C847] text-[#F2C847]" />
              The Ultimate IPTV Experience
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ lineHeight: 1.06, fontFamily: "'Syne', sans-serif" }}>
              Every Match.{" "}<br className="hidden sm:block" />
              Every Movie.{" "}
              <span className="tg">Zero Buffering.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 sm:text-xl mx-auto md:mx-0"
              style={{ color: "rgba(255,255,255,0.62)", fontWeight: 400 }}>
              Join thousands of cord-cutters. Get instant access to{" "}
              <span style={{ color: "#F2C847", fontWeight: 600 }}>26,000+ live premium channels</span>,
              live sports in 4K, and a massive VOD library.
            </p>

            {/* CTA row */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link href="https://wa.me/1234567890"
                className="btn-gold relative inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full px-9 text-base tracking-wide">
                <MessageCircle className="h-5 w-5" style={{ position: "relative", zIndex: 1 }} />
                <span style={{ position: "relative", zIndex: 1 }}>Start Free Trial Now</span>
              </Link>
              <Link href="/channels"
                className="btn-glass inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-9 text-base">
                View Channel List
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Glass stat chips */}
            <div className="mt-10 stat-row justify-center md:justify-start">
              <div className="stat-chip">
                <CheckCircle className="h-4 w-4" style={{ color: "#F2C847" }} />
                Anti-Freeze Servers
              </div>
              <div className="stat-chip">
                <CheckCircle className="h-4 w-4" style={{ color: "#F2C847" }} />
                4K &amp; FHD Quality
              </div>
              <div className="stat-chip">
                <CheckCircle className="h-4 w-4" style={{ color: "#F2C847" }} />
                26,000+ Channels
              </div>
            </div>

          </div>
        </div>

        <div className="gold-line absolute bottom-0 left-0 right-0" style={{ zIndex: 5 }} />
      </section>

      {/* ══════════════════════════════════════════════════
          2 · ANIMATED LOGOS
      ══════════════════════════════════════════════════ */}
      <div style={{
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)"
      }}>
        <AnimatedLogos />
      </div>

      {/* ══════════════════════════════════════════════════
          3 · LIVE SPORTS SLIDER
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-20 sm:py-28 overflow-hidden section-bg-1">
        <div className="g-orb" style={{ width: 700, height: 500, top: "-20%", right: "-10%",
          background: "radial-gradient(circle, rgba(242,200,71,0.16) 0%, transparent 70%)", opacity: 0.7 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" style={{ position: "relative", zIndex: 5 }}>
          <div className="mb-14">
            <div className="orn">
              <div className="orn-line orn-line-l" />
              <Trophy style={{ width: 14, height: 14, color: "#F2C847" }} />
              <div className="orn-line orn-line-r" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl text-white flex items-center gap-3"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              <div className="p-3 rounded-2xl device-icon-glass">
                <Trophy className="h-6 w-6" style={{ color: "#F2C847" }} />
              </div>
              Live <span className="tg" style={{ marginLeft: 8 }}>Sports Hub</span>
            </h2>
            <p className="mt-3" style={{ color: "rgba(255,255,255,0.45)" }}>
              Never miss a kickoff, punch, or pole position.
            </p>
          </div>

          <EmblaSlider delay={3500}>
            {[
              { title: "World Cup 2030", img: "/imgs/sports/bg1.webp" },
              { title: "Champions League", img: "/imgs/sports/bg2.jpg" },
              { title: "La Liga", img: "/imgs/sports/bg3.jpg" },
              { title: "Premier League", img: "/imgs/sports/bg4.jpg" },
              { title: "UFC & Boxing", img: "/imgs/sports/bg5.jpg" },
            ].map((card, i) => (
              <div key={i}
                className="slider-card-hover relative aspect-video overflow-hidden rounded-2xl group glass-feat-card"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.55)" }}>
                {/* Glass top layer */}
                <div className="absolute inset-0 bg-black/25 z-10 transition-colors duration-500 group-hover:bg-transparent" />
                <Image src={card.img} alt={card.title} fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                {/* Bottom glass panel */}
                <div className="absolute left-4 right-4 bottom-4 z-20 rounded-xl p-4 glass-inset"
                  style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg,#F2C847,#C9A020)", boxShadow: "0 0 18px rgba(242,200,71,0.6)" }}>
                      <Play className="h-4 w-4 text-black fill-current" />
                    </div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider"
                      style={{ fontFamily: "'Syne', sans-serif" }}>{card.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </EmblaSlider>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4 · MOVIES & SERIES SLIDER
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-20 overflow-hidden section-bg-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="g-orb" style={{ width: 500, height: 500, bottom: "-20%", left: "-5%",
          background: "radial-gradient(circle, rgba(242,200,71,0.14) 0%, transparent 70%)", opacity: 0.55 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" style={{ position: "relative", zIndex: 5 }}>
          <div className="mb-14">
            <div className="orn">
              <div className="orn-line orn-line-l" />
              <Film style={{ width: 14, height: 14, color: "#F2C847" }} />
              <div className="orn-line orn-line-r" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl text-white flex items-center gap-3"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              <div className="p-3 rounded-2xl device-icon-glass">
                <Film className="h-6 w-6" style={{ color: "#F2C847" }} />
              </div>
              Premium <span className="tg" style={{ marginLeft: 8 }}>Cinema</span>
            </h2>
            <p className="mt-3" style={{ color: "rgba(255,255,255,0.45)" }}>
              100,000+ VODs updated daily. Your home theater awaits.
            </p>
          </div>

          <EmblaSlider delay={4000}>
            {[
              { title: "Blockbuster Action", img: "/imgs/movies/movie_1.webp", badge: "4K UHD" },
              { title: "Crime & Drama", img: "/imgs/movies/movie_2.webp", badge: "HDR" },
              { title: "Arabic Series", img: "/imgs/movies/movie_3.webp", badge: "NEW" },
              { title: "Sci-Fi Fantasy", img: "/imgs/movies/movie_4.webp", badge: "4K UHD" },
              { title: "Family & Kids", img: "/imgs/movies/movie_5.webp", badge: "HD" },
            ].map((card, i) => (
              <div key={i}
                className="slider-card-hover relative aspect-[3/4] overflow-hidden rounded-2xl group glass-feat-card"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.55)" }}>
                <Image src={card.img} alt={card.title} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(1,1,12,0.92), rgba(1,1,12,0.35) 50%, transparent)" }} />
                {/* Glass badge */}
                <div className="absolute top-4 right-4" style={{ zIndex: 10 }}>
                  <span className="gold-badge text-xs font-black px-3 py-1.5 rounded-full tracking-wider">
                    {card.badge}
                  </span>
                </div>
                {/* Bottom glass content */}
                <div className="absolute left-4 right-4 bottom-4 z-10 rounded-xl p-4"
                  style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.08)" }}>
                  <h3 className="text-base font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </EmblaSlider>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5 · FEATURE CARDS — Full glass overlay
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-20 sm:py-28 overflow-hidden section-bg-3">
        <div className="g-orb" style={{ width: 800, height: 400, top: 0, left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(242,200,71,0.12) 0%, transparent 70%)", opacity: 0.5 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 5 }}>
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: "4rem" }}>
            <div className="orn" style={{ justifyContent: "center" }}>
              <div className="orn-line orn-line-l" />
              <Star style={{ width: 14, height: 14, color: "#F2C847" }} />
              <div className="orn-line orn-line-r" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              Why Thousands <span className="tg">Choose Us</span>
            </h2>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.48)" }}>Premium entertainment. Zero compromise.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((card) => (
              <div key={card.title}
                className="glass-feat-card group relative overflow-hidden rounded-[2rem] aspect-[3/4]"
                style={{ boxShadow: "0 0 50px rgba(242,200,71,0.10), 0 20px 60px rgba(0,0,0,0.65)" }}>

                {/* BG image */}
                <div className="absolute inset-0" style={{ zIndex: 0 }}>
                  <Image src={card.image} alt={card.title} fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>

                {/* Multi-layer glass overlay */}
                <div className="absolute inset-0" style={{ zIndex: 1,
                  background: "linear-gradient(to top, rgba(1,1,12,0.96) 0%, rgba(1,1,12,0.7) 40%, rgba(1,1,12,0.15) 100%)" }} />

                {/* Top shimmer */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{ zIndex: 4,
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25) 50%, transparent)" }} />

                {/* Content glass panel */}
                <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ zIndex: 5 }}>
                  {/* Glass inner card */}
                  <div className="rounded-2xl p-6"
                    style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.10)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)" }}>
                    <span className="gold-badge mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest">
                      {card.badge}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mb-3 leading-tight"
                      style={{ fontFamily: "'Syne', sans-serif" }}>{card.title}</h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.58)" }}>
                      {card.description}
                    </p>
                    <Link href="https://wa.me/1234567890"
                      className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm tracking-wide">
                      <MessageCircle className="h-4 w-4" style={{ position: "relative", zIndex: 1 }} />
                      <span style={{ position: "relative", zIndex: 1 }}>{card.cta}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6 · DEVICES — Glass icon cards
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-20 sm:py-28 overflow-hidden section-bg-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="g-orb" style={{ width: 600, height: 600, bottom: "-20%", right: "-5%",
          background: "radial-gradient(circle, rgba(242,200,71,0.14) 0%, transparent 70%)", opacity: 0.55 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 5 }}>
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: "4rem" }}>
            <div className="orn" style={{ justifyContent: "center" }}>
              <div className="orn-line orn-line-l" />
              <Tv style={{ width: 14, height: 14, color: "#F2C847" }} />
              <div className="orn-line orn-line-r" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Watch on <span className="tg">Any Screen</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)" }}>
              Setup takes less than 5 minutes on any of these devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, i) => (
              <div key={i}
                className="glass-card group relative overflow-hidden rounded-2xl aspect-[4/3]"
                style={{ borderRadius: "20px" }}>
                {/* Background image with glass overlay */}
                <Image src={device.image} alt={device.name} fill
                  className="object-cover opacity-15 transition-all duration-700 group-hover:scale-105 group-hover:opacity-10" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)" }} />

                {/* Hover top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, transparent, #F2C847 50%, transparent)" }} />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 gap-4"
                  style={{ zIndex: 5 }}>
                  {/* Glass icon bubble */}
                  <div className="p-5 rounded-full device-icon-glass">
                    {device.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {device.name}
                    </h3>
                    <span className="text-xs font-black uppercase tracking-wider mt-2 block"
                      style={{ color: "#F2C847", fontFamily: "'Syne', sans-serif" }}>
                      Setup: {device.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/guides"
              className="inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
              style={{ color: "#F2C847", fontFamily: "'Syne', sans-serif" }}>
              View Installation Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7 · PRICING — Tiered glass cards
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-24 sm:py-32 overflow-hidden section-bg-1"
        id="pricing">
        {/* Atmospheric orbs */}
        <div className="g-orb" style={{ width: 1000, height: 600, top: "-15%", left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(242,200,71,0.12) 0%, transparent 70%)", opacity: 0.4 }} />
        <div className="g-orb" style={{ width: 500, height: 500, bottom: "-10%", left: "10%",
          background: "radial-gradient(circle, rgba(120,60,220,0.14) 0%, transparent 70%)", opacity: 0.3 }} />
        <div className="g-orb" style={{ width: 400, height: 400, bottom: "-10%", right: "10%",
          background: "radial-gradient(circle, rgba(200,100,20,0.14) 0%, transparent 70%)", opacity: 0.3 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 5 }}>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: "56px" }}>
            <div className="orn" style={{ justifyContent: "center" }}>
              <div className="orn-line orn-line-l" />
              <Star style={{ width: 14, height: 14, color: "#F2C847" }} />
              <div className="orn-line orn-line-r" />
            </div>
            <h2 className="text-4xl font-extrabold sm:text-5xl text-white tracking-tight mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Choose Your <span className="tg">Access Pass</span>
            </h2>
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.50)" }}>
              Instant activation · Premium content · WhatsApp delivery
            </p>
          </div>

          {/* Dynamic Pricing Component */}
          <PricingSection />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8 · BLOG PREVIEW — Glass article cards
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-20 sm:py-28 overflow-hidden section-bg-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="g-orb" style={{ width: 600, height: 400, top: 0, left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(242,200,71,0.10) 0%, transparent 70%)", opacity: 0.4 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 5 }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" style={{ marginBottom: "3.5rem" }}>
            <div className="max-w-2xl">
              <div className="orn">
                <div className="orn-line orn-line-l" />
                <Calendar style={{ width: 14, height: 14, color: "#F2C847" }} />
                <div className="orn-line orn-line-r" />
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Latest IPTV <span className="tg">Guides</span>
              </h2>
            </div>
            <Link href="/blog"
              className="font-bold inline-flex items-center gap-2 whitespace-nowrap transition-all hover:gap-3"
              style={{ color: "#F2C847", fontFamily: "'Syne', sans-serif" }}>
              Read all articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="blog-card group flex flex-col overflow-hidden rounded-2xl">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))" }} />
                  {/* Glass category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-black gold-badge"
                      style={{ fontFamily: "'Syne', sans-serif" }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                {/* Glass content panel */}
                <div className="p-5 flex-1 flex flex-col"
                  style={{ background: "rgba(255,255,255,0.03)" }}>
                  <h3 className="text-sm font-bold mb-3 text-white line-clamp-2 leading-snug transition-colors group-hover:text-[#F2C847]"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-xs pt-4"
                    style={{ color: "rgba(255,255,255,0.38)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9 · FINAL CTA — Dramatic glass panel
      ══════════════════════════════════════════════════ */}
      <section className="grain relative isolate overflow-hidden py-32 section-bg-1"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        {/* BG image */}
        <div className="absolute inset-0" style={{ zIndex: -2 }}>
          <Image
            src="https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Cinematic TV Glow" fill className="object-cover opacity-10" />
        </div>
        <div className="absolute inset-0" style={{ zIndex: -1,
          background: "linear-gradient(to top, #02020E 0%, rgba(2,2,14,0.7) 60%, transparent 100%)" }} />

        {/* Large aurora orbs */}
        <div className="g-orb" style={{ width: 800, height: 500, bottom: "-10%", left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(242,200,71,0.16) 0%, transparent 70%)", opacity: 0.7 }} />
        <div className="g-orb" style={{ width: 500, height: 400, top: "10%", left: "10%",
          background: "radial-gradient(circle, rgba(120,60,220,0.14) 0%, transparent 70%)", opacity: 0.5 }} />

        <div className="gold-line absolute top-0 left-0 right-0" style={{ zIndex: 5 }} />

        <div className="container mx-auto px-4 text-center" style={{ position: "relative", zIndex: 5 }}>
          {/* Centered glass content panel */}
          <div className="max-w-3xl mx-auto cta-glass rounded-3xl p-12 sm:p-16"
            style={{ borderRadius: "32px" }}>

            <div className="orn" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
              <div className="orn-line orn-line-l" />
              <Star style={{ width: 18, height: 18, color: "#F2C847" }} />
              <div className="orn-line orn-line-r" />
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6"
              style={{ fontFamily: "'Syne', sans-serif", lineHeight: 1.08 }}>
              Start Watching <span className="tg">Tonight.</span>
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.52)" }}>
              Get your login credentials delivered instantly via WhatsApp. Join the future of television.
            </p>

            <Link href="https://wa.me/1234567890"
              className="btn-gold inline-flex h-16 items-center justify-center gap-3 rounded-full px-14 text-lg">
              <MessageCircle className="h-6 w-6" style={{ position: "relative", zIndex: 1 }} />
              <span style={{ position: "relative", zIndex: 1 }}>Get Your Pass Now</span>
            </Link>

            {/* Glass stat chips row */}
            <div className="mt-10 stat-row justify-center">
              <div className="stat-chip">
                <CheckCircle className="h-4 w-4" style={{ color: "#F2C847" }} />
                Instant Activation
              </div>
              <div className="stat-chip">
                <CheckCircle className="h-4 w-4" style={{ color: "#F2C847" }} />
                24/7 Support
              </div>
              <div className="stat-chip">
                <CheckCircle className="h-4 w-4" style={{ color: "#F2C847" }} />
                No Contract
              </div>
            </div>
          </div>
        </div>

        <div className="gold-line absolute bottom-0 left-0 right-0" style={{ zIndex: 5 }} />
      </section>
    </>
  );
}