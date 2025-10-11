import { NextResponse } from 'next/server';
import { craftBoujeeReply } from '@/lib/chat';

export async function POST(request: Request) {
  const message = await craftBoujeeReply(request as any);
  return NextResponse.json({ ...message, message: message.content });
}
