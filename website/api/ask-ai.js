const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const VECTOR_STORE_ID = process.env.OPENAI_VECTOR_STORE_ID;

const SYSTEM_PROMPT = `You are the Appsmith documentation assistant. Answer questions using only the provided documentation files. If the answer is not found in the documentation, say so. Be concise and include relevant code examples when helpful.`;

const ALLOWED_ORIGINS = [
  'https://docs.appsmith.com',
  'http://localhost:3000',
];

// In-memory rate limiting (per serverless instance)
const rateLimit = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;

function isRateLimited(ip) {
  const now = Date.now();

  // Evict stale entries
  for (const [key, entry] of rateLimit) {
    if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
      rateLimit.delete(key);
    }
  }

  const entry = rateLimit.get(ip);
  if (!entry) {
    rateLimit.set(ip, { count: 1, start: now });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function getCorsHeaders(origin) {
  const headers = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  if (ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function stripCitations(text) {
  return text.replace(/【\d+[:\d]*†[^】]*】/g, '');
}

module.exports = async function handler(req, res) {
  const origin = req.headers.origin || '';
  const corsHeaders = getCorsHeaders(origin);
  for (const [key, value] of Object.entries(corsHeaders)) {
    res.setHeader(key, value);
  }

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Rate limit exceeded. Please try again in a minute.' });
  }

  const { query } = req.body || {};
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid "query" field.' });
  }

  const trimmed = query.trim();
  if (trimmed.length === 0) {
    return res.status(400).json({ error: 'Query cannot be empty.' });
  }
  if (trimmed.length > 1000) {
    return res.status(400).json({ error: 'Query exceeds 1000 character limit.' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        instructions: SYSTEM_PROMPT,
        input: trimmed,
        tools: [{
          type: 'file_search',
          vector_store_ids: [VECTOR_STORE_ID],
        }],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('OpenAI API error:', response.status, text);
      return res.status(502).json({ error: 'Failed to get response from AI.' });
    }

    const data = await response.json();

    // Extract text from output messages
    const message = data.output?.find((o) => o.type === 'message');
    const textContent = message?.content?.find((c) => c.type === 'output_text');
    let answer = textContent?.text || 'No response generated.';

    answer = stripCitations(answer) || 'No response generated.';

    return res.status(200).json({ answer });
  } catch (err) {
    console.error('Ask AI error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
