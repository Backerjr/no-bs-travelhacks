const DEFAULT_NUMBER = '971500000000';

export function getWhatsAppNumber() {
  return process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS || DEFAULT_NUMBER;
}

export function buildWhatsAppLink(message: string) {
  const number = getWhatsAppNumber();
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}
