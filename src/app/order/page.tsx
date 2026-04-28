import { redirect } from "next/navigation";
import { createWhatsAppOrderUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "WhatsApp Order - iflexiptv",
  description: "Continue your premium IPTV subscription order on WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function OrderPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const plan = (resolvedSearchParams?.plan as string) || "6m";

  const selectedPlan = (() => {
    switch (plan) {
      case "1m":
        return { name: "1 Month", price: "$14.99" };
      case "3m":
        return { name: "3 Months", price: "$34.99" };
      case "12m":
        return { name: "12 Months", price: "$79.99" };
      case "6m":
      default:
        return { name: "6 Months", price: "$49.99" };
    }
  })();

  redirect(createWhatsAppOrderUrl(selectedPlan.name, selectedPlan.price));
}
