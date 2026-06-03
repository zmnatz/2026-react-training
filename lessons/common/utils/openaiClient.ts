import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai',
  dangerouslyAllowBrowser: true,
});

export default openai;
