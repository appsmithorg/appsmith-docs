const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID;

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

async function openaiRequest(path, options = {}) {
  const headers = {
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'OpenAI-Beta': 'assistants=v2',
    ...options.headers,
  };
  if (options.body) {
    headers['Content-Type'] = 'application/json';
  }
  const res = await fetch(`https://api.openai.com/v1${path}`, {
    ...options,
    headers,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI API error ${res.status}: ${text}`);
  }
  return res.json();
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
    // Create thread + message + run in a single API call
    const run = await openaiRequest('/threads/runs', {
      method: 'POST',
      body: JSON.stringify({
        assistant_id: ASSISTANT_ID,
        thread: { messages: [{ role: 'user', content: trimmed }] },
      }),
    });

    // Poll for completion (55s cap)
    const deadline = Date.now() + 55_000;
    let status = run.status;
    const threadId = run.thread_id;
    while (status === 'queued' || status === 'in_progress') {
      if (Date.now() > deadline) {
        // Best-effort cancel the orphaned run
        openaiRequest(`/threads/${threadId}/runs/${run.id}/cancel`, { method: 'POST' }).catch(() => {});
        return res.status(504).json({ error: 'Request timed out. Please try again.' });
      }
      await new Promise((r) => setTimeout(r, 1000));
      const updated = await openaiRequest(`/threads/${threadId}/runs/${run.id}`, { method: 'GET' });
      status = updated.status;
    }

    if (status !== 'completed') {
      return res.status(500).json({ error: `Run ended with status: ${status}` });
    }

    // Get the assistant's response
    const messages = await openaiRequest(`/threads/${threadId}/messages?order=desc&limit=1`, { method: 'GET' });
    const assistantMessage = messages.data?.[0];
    const textContent = assistantMessage?.content?.find((c) => c.type === 'text');
    const answer = textContent ? stripCitations(textContent.text.value) : 'No response generated.';

    return res.status(200).json({ answer, threadId });
  } catch (err) {
    console.error('Ask AI error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
