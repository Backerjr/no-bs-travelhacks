import tours from '@/data/tours.json';
import faqs from '@/data/faqs.json';
import guestInfo from '@/data/guestinfo.json';
import guestPortals from '@/data/guest-portals.json';
import type { FAQItem, GuestInfo, GuestPortal, Tour } from './types';

export function getTours(): Tour[] {
  return tours as Tour[];
}

export function findTour(slug: string): Tour | undefined {
  return getTours().find((tour) => tour.slug === slug);
}

export function getFAQs(): FAQItem[] {
  return faqs as FAQItem[];
}

export function getGuestInfo(): GuestInfo {
  return guestInfo as GuestInfo;
}

export function findGuestPortal(guestId: string): GuestPortal | undefined {
  return (guestPortals as GuestPortal[]).find((guest) => guest.guestId === guestId);
}
