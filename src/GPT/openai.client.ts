import { OpenAi } from 'openai-node';

export const openai = new OpenAi({
  apiKey: process.env.REACT_APP_API_KEY,
  oraginzation: process.env.REACT_APP_API_ORGANIZATION
});