import { Injectable } from '@nestjs/common';
import { openai } from './openai.client';


@Injectable()
export class ChatbotService {
  async sendMessage(message: string): Promise<string> {
    const response = await openai.completions.create({
      engine: 'gpt-3.5',
      prompt: message,
      max_tokens: 100,
    });

    return response.choices[0].text.trim();
  }
}