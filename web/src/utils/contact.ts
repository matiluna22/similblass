const WHATSAPP_NUMBER = '5493425237932';

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/vickyrosso_' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@vickyrosso_' },
];
