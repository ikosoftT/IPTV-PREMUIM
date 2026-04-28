# iflexiptv - Premium IPTV Frontend Application

> **Notice for AI Agents & Developers:** This document serves as the central knowledge base for the iflexiptv web app. Read this carefully before proposing major architectural changes, styling updates, or SEO modifications.

## 📌 Project Overview
This project is a high-converting, SEO-optimized front-end website for a premium IPTV brand named **iflexiptv**. It is built with conversion rate optimization (CRO) and technical SEO in mind, drawing from advanced search engine guidelines. 

## 🛠 Tech Stack
* **Framework**: Next.js 14+ (App Router)
* **Styling**: Tailwind CSS v4
* **Components**: Server Components (default) & Client Components (where interactivity is strictly required)
* **Icons**: `lucide-react`
* **Package Manager**: npm

## 🏗 Architecture & Routing
The application strictly follows Next.js App Router conventions. Every marketing segment has its own dedicated page (no single-page scrolling architecture) to maximize SEO keyword indexing.

### Pages:
* `/` (`src/app/page.tsx`): **Home** - Main conversion funnel, broad "premium IPTV" keywords, Organization Schema.
* `/pricing` (`src/app/pricing/page.tsx`): **Pricing** - Subscription tiers (1, 3, 6, 12 months) with Product/Offer Schema.
* `/features` (`src/app/features/page.tsx`): **Features** - Details on Anti-freeze, 4K, EPG, etc.
* `/channels` (`src/app/channels/page.tsx`): **Channels** - Categorized breakdown of the 15,000+ channels.
* `/devices` (`src/app/devices/page.tsx`): **Devices** - Compatibility list for Smart TVs, Firestick, Android, PC.
* `/faq` (`src/app/faq/page.tsx`): **FAQ** - Common support questions injected with `FAQPage` JSON-LD schema.
* `/contact` (`src/app/contact/page.tsx`): **Contact** - Support desk and contact form.
* `/order` (`src/app/order/page.tsx`): **Order/Checkout** - Secure checkout UI. Has `robots: noindex` to prevent indexing of the checkout flow.

### Reusable Components (`src/components/`):
* `Navbar.tsx`: Responsive top navigation.
* `Footer.tsx`: Comprehensive bottom navigation with trust signals.
* `FAQAccordion.tsx`: Client-side interactive accordion.
* `SchemaMarkup.tsx`: Utility for injecting raw JSON-LD safely into the `<head>`.

## 🎨 Design System & Styling
The website uses a **Dark Modern Premium Layout** to emulate a high-end streaming service.
* **Colors (configured in `src/app/globals.css` via `@theme`)**:
  * `--background`: Zinc 950 (`#09090b`)
  * `--foreground`: Zinc 50 (`#fafafa`)
  * `--brand`: Sky 500 (`#0ea5e9`) - Primary action color
  * `--accent`: Emerald 500 (`#10b981`) - Trust signals (checkmarks, secure badges)
* **Typography**: Geist (Sans & Mono) configured in `layout.tsx`.

## 🔎 SEO Strategy Implemented
1. **Metadata API**: Global Open Graph and Twitter Card fallbacks are defined in `src/app/layout.tsx` using `metadataBase`.
2. **Page-Specific Metadata**: Every route exports a unique `metadata` object with an exact `title` and `canonical` URL.
3. **Structured Data**: JSON-LD is utilized heavily via the `<SchemaMarkup />` component.
4. **Static Generation (SSG)**: All marketing pages are prerendered as static HTML. 
5. **Crawlability**: `src/app/sitemap.ts` and `src/app/robots.ts` dynamically generate the sitemap and robots.txt.

---

## 🚀 Upgrade Paths (For Future AI Agents)

If you have been tasked with upgrading this codebase, **YOUR PRIMARY FOCUS MUST BE ON VISUAL DESIGN AND UX ENHANCEMENTS.** Do not focus on backend or API integrations right now. Prioritize the following visual upgrades to make the site look incredibly premium and dynamic:

1. **High-Impact Image Assets & Backgrounds**:
   * **Task**: The current design relies on basic icons and CSS gradients. We need photorealistic, premium imagery.
   * **Action**: Generate or source premium, royalty-free images (e.g., modern Smart TVs in dark rooms, high-energy sports moments, cinematic movie scenes). Implement these using the Next.js `<Image />` component with proper `alt` tags for SEO. Replace the `div` placeholders in the Hero and Devices sections with real, stunning visuals.

2. **Video Backgrounds & Interactive Elements**:
   * **Task**: Elevate the premium feel by introducing motion and dynamic energy.
   * **Action**: Add a subtle, dark-themed streaming video background to the hero section on the landing page. Implement micro-animations (e.g., using Framer Motion or Tailwind utilities) for hover effects, button pulses, and scroll-reveal animations.

3. **Sliders & Carousels**:
   * **Task**: Showcase the massive VOD library and channel categories dynamically.
   * **Action**: Implement smooth, auto-playing sliders or carousels (using libraries like Swiper.js or Embla Carousel) on the Home and Channels pages. Create a "Trending Movies" or "Live Sports Events" carousel to instantly grab the visitor's attention.

4. **UI Polish & Glassmorphism**:
   * **Task**: Evolve the layout from "clean" to a "Wow" factor.
   * **Action**: Enhance the styling by adding glassmorphism (frosted glass) effects to the Navbar and Cards. Refine shadows, glows around primary CTA buttons, and ensure spacing feels luxurious.

> **Final Rule for AI Agents**: DO NOT break the existing Server Components architecture or the perfectly tuned SEO metadata while adding these visual elements. Use `"use client"` ONLY where strictly necessary for interactive sliders, carousels, or complex animations to preserve the high Lighthouse/Core Web Vitals scores achieved so far.
