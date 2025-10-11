import { NextResponse } from 'next/server';
import { findGuestPortal } from '@/lib/data';

interface Params {
  params: { guestId: string };
}

export async function GET(_request: Request, { params }: Params) {
  const portal = findGuestPortal(params.guestId);
  if (!portal) {
    return NextResponse.json({ message: 'Guest not found' }, { status: 404 });
  }
  return NextResponse.json(portal);
}
