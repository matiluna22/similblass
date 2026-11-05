export type ExpeditionCategory = 'safari' | 'volunteering' | 'all';

export interface Expedition {
  id: string;
  title: string;
  subtitle: string;
  category: 'safari' | 'volunteering';
  destination: string;
  country: string;
  duration: string;
  dates: string;
  spotsTotal: number;
  spotsLeft: number;
  statusBadge: string;
  image: string;
  highlightPill: string;
  description: string;
  highlights: string[];
  includes: string[];
  whatsAppText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  expedition: string;
  avatar?: string;
}

