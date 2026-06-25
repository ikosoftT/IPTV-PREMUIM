import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iflexiptv.net'),
  title: {
    default: "I Flex IPTV — Premium IPTV Subscription Service | 4K Live TV & Sports",
    template: "%s | I Flex IPTV",
  },
  description: "Experience premium IPTV with I Flex IPTV. 26,000+ live channels in 4K & FHD, global sports, movies & VOD, anti-freeze technology. Instant WhatsApp activation.",
  keywords: ["I Flex IPTV", "premium iptv", "iptv subscription", "4k iptv", "best iptv service", "live sports streaming", "iptv 2026", "cord cutting"],
  openGraph: {
    title: "I Flex IPTV — Premium IPTV Subscription Service",
    description: "Premium IPTV with 26,000+ channels, global sports, movies, and 4K streaming. Instant activation via WhatsApp.",
    url: "https://www.iflexiptv.net",
    siteName: "I Flex IPTV",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "I Flex IPTV Premium Streaming Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I Flex IPTV — Premium IPTV Subscription Service",
    description: "Premium IPTV with 26,000+ channels, global sports, movies, and 4K streaming.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.iflexiptv.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-brand/30 selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
