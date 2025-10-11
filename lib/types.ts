export type TourCTA =
  | { type: 'whatsapp'; text: string }
  | { type: 'ai'; text: string };

export interface Tour {
  slug: string;
  title: string;
  duration: string;
  pickupWindow: string;
  highlights: string[];
  inclusions: string[];
  notes: string[];
  images: string[];
  cta: TourCTA;
  tags?: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface GuestInfo {
  contacts: {
    whatsappBusiness: string;
    emergency: string;
  };
  etiquetteImages: string[];
  pickupAreas: string[];
  sop: {
    cancellation: string;
    noShow: string;
  };
}

export interface GuestPortal {
  guestId: string;
  name: string;
  whatsapp: string;
  trip: {
    dates: string;
    pax: number;
    vibe: string;
  };
  itinerary: { day: number; title: string; notes: string }[];
}
