import { NextResponse } from 'next/server';
import { getTours } from '@/lib/data';

export async function GET() {
  return NextResponse.json(getTours());
}
