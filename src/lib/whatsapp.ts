const encode = encodeURIComponent;

export function createWhatsAppOrderUrl(planName: string, price: string) {
  const message = `Hi iflexiptv, I want to order the ${planName} plan (${price}). Please send me the activation details.`;

  return `https://wa.me/?text=${encode(message)}`;
}

export const whatsappSetupGuidanceUrl = `https://wa.me/?text=${encode(
  "Hi iflexiptv, I need setup guidance for my device."
)}`;
