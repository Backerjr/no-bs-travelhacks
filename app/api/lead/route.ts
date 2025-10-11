import { NextResponse } from 'next/server';

const submissions: Record<string, unknown>[] = [];

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  submissions.push({ ...body, receivedAt: new Date().toISOString() });
  return NextResponse.json({ status: 'ok' });
}
