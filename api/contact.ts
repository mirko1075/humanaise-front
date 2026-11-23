// Contact form relay: the browser posts here, never to n8n directly, so the
// webhook URL stays server-side and n8n only accepts calls carrying the secret.
const N8N_WEBHOOK = 'https://n8n.humanaise.com/webhook/netlify-form-submission';
const FIELDS = ['name', 'email', 'company', 'phone', 'message'] as const;
const MAX_LEN = 5000;

type Data = Record<(typeof FIELDS)[number], string>;

export function validate(body: unknown): { spam: true } | { error: string } | { data: Data } {
  const raw = (body && typeof body === 'object' ? body : {}) as Record<string, unknown>;
  // Honeypot: real users never see this field. Pretend success so bots learn nothing.
  if (typeof raw['bot-field'] === 'string' && raw['bot-field'].trim() !== '') return { spam: true };

  const data = {} as Data;
  for (const f of FIELDS) {
    const v = typeof raw[f] === 'string' ? (raw[f] as string).trim() : '';
    if (v.length > MAX_LEN) return { error: `${f} too long` };
    data[f] = v;
  }
  if (data.name.length < 3) return { error: 'name' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return { error: 'email' };
  if (data.company.length < 2) return { error: 'company' };
  if (data.message.length < 20) return { error: 'message' };
  return { data };
}

// ponytail: no rate limit / captcha; honeypot + validation + secret only. Add Turnstile if spam gets through.
export async function POST(request: Request): Promise<Response> {
  const secret = process.env.FORM_WEBHOOK_SECRET;
  if (!secret) return Response.json({ ok: false }, { status: 500 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'invalid json' }, { status: 400 });
  }

  const result = validate(body);
  if ('spam' in result) return Response.json({ ok: true });
  if ('error' in result) return Response.json({ ok: false, error: result.error }, { status: 400 });

  const upstream = await fetch(N8N_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-humanaise-form-secret': secret },
    body: JSON.stringify({
      form_name: 'contact',
      site_url: request.headers.get('origin') ?? 'https://www.humanaise.com',
      created_at: new Date().toISOString(),
      data: result.data,
    }),
  });
  // Surface n8n failures as 502 so the form shows an error instead of a fake "sent".
  if (!upstream.ok) return Response.json({ ok: false }, { status: 502 });
  return Response.json({ ok: true });
}
