import { NextResponse } from 'next/server';
import { findTour } from '@/lib/data';

interface Params {
  params: { slug: string };
}

export async function GET(_request: Request, { params }: Params) {
  const tour = findTour(params.slug);
  if (!tour) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(tour);
}
