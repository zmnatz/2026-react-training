import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  // Routed through the Vite dev server proxy (see vite.config.ts) since the
  // provider doesn't return CORS headers for direct browser requests.
  // The SDK requires an absolute URL, so resolve the proxy path against the
  // current origin rather than passing it as a bare relative path.
  baseURL: new URL('/api/openai', window.location.origin).toString(),
  dangerouslyAllowBrowser: true,
});

export default openai;
