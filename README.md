# Ahmed's Digital Concierge

Luxury travel concierge built with Next.js App Router, Tailwind CSS, and Framer Motion. The experience highlights signature UAE itineraries, BoujeeBot AI, and reusable guest communication flows.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the concierge.

## Available Scripts
- `npm run dev` – start the development server with hot reload.
- `npm run build` – generate an optimized production build.
- `npm run start` – serve the production build.
- `npm run lint` – run Next.js linting.

## Environment Variables
Set the following variables for full functionality:

- `OPENAI_API_KEY` – optional, used to proxy BoujeeBot to OpenAI. When omitted the API returns a curated response.
- `NEXT_PUBLIC_WHATSAPP_BUSINESS` – WhatsApp number used for CTA links (digits only).

Create a `.env.local` file and add the values:

```bash
OPENAI_API_KEY=sk-...
NEXT_PUBLIC_WHATSAPP_BUSINESS=9715XXXXXXX
```

## Content Sources
Structured JSON files under `/data` power tours, FAQs, and guest information. Update these files to refresh copy without touching components.

## Deployment Checklist
- Configure environment variables in Vercel.
- Upload hero and etiquette imagery to `/public/img`.
- Review analytics integrations as needed (Vercel Analytics, Plausible).
- Smoke test WhatsApp CTA links on mobile.
