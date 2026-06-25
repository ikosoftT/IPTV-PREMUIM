const encode = encodeURIComponent;

export function createWhatsAppOrderUrl(planName: string, price: string) {
  const messages: { [key: string]: string } = {
    "3 Months": `Hi, I'd like the 3 Months plan at €37. Please send details.`, 
    "6 Months": `Hi, I'd like the 6 Months plan at €49. Please send details.`, 
    "12 Months": `Hi, I'd like the 12 Months VIP plan at €67. Please send details.`, 
  };

  const customMessage = messages[planName] || `Hi, I'd like the ${planName} plan at ${price}. Please send details.`;

  return `https://wa.me/447828714977?text=${encode(customMessage)}`;
}

export const whatsappSetupGuidanceUrl = `https://wa.me/447828714977?text=${encode(
  "Hi, I'm interested in I Flex IPTV. Please help me setup my device."
)}`;