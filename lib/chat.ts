const COMPANY_FACTS = `Company facts (use when relevant):
- Desert Safari: pickup ~15:00–15:30; sharing up to 6 pax per 4x4; includes dune bashing, shows, buffet; quad/buggy extra.
- Hot Air Balloon: early morning only; bring passport/ID; age/weight limits; weather dependent; pilot may cancel for safety.
- Abu Dhabi Mosque: modest attire; shoulders & knees covered; some closures/variations by day.
- No-show: drivers wait 5–10 min, then no refund. Cancellations/refunds follow supplier policy; confirmation via support.
- Pro-Tip: “Remember to stay hydrated, especially during daytime excursions. It's the key to enjoying the UAE's climate to the fullest.”`;

export async function craftBoujeeReply(req: Request) {
  const body = await req.json().catch(() => ({}));
  const question = typeof body?.message === 'string' ? body.message : '';

  if (!process.env.OPENAI_API_KEY) {
    return {
      role: 'assistant',
      content: `Dubai. Detours. Done Differently.\n\n${COMPANY_FACTS}\n\nYou asked: "${question || 'No question provided'}".\n\nAhmed's reply: We pair poetic mosque mornings with comfort-first logistics. Ask Boujee for timings, modest attire tips, or how to chain safari + Louvre without breaking flow.`
    };
  }

  const completion = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are BoujeeBot, Ahmed\'s luxury travel concierge AI. Reply with poetic yet practical guidance, keep answers under 180 words.'
        },
        {
          role: 'system',
          content: COMPANY_FACTS
        },
        {
          role: 'user',
          content: question || 'Offer a signature welcome with a pro tip.'
        }
      ],
      temperature: 0.6
    })
  });

  if (!completion.ok) {
    return {
      role: 'assistant',
      content:
        'Our live AI is between adventures. Meanwhile, remember: modest attire for the Grand Mosque, hydrate often, and message Ahmed on WhatsApp for rapid support.'
    };
  }

  const json = await completion.json();
  const content = json?.choices?.[0]?.message?.content ?? '';
  return json?.choices?.[0]?.message ?? { role: 'assistant', content };
}
