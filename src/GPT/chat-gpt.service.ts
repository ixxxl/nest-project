import { Injectable } from '@nestjs/common';
import { OpenAi } from 'openai-node';

@Injectable()
export class ChatbotService {
  private openai: OpenAi;

  constructor() {
    // Initialize OpenAI API client
    this.openai = new OpenAi({
      apiKey: process.env.REACT_APP_API_KEY,
      oraginzation: process.env.REACT_APP_API_ORGANIZATION
    });
  }

  async sendMessage(message: string): Promise<string> {
    const response = await this.openai.complete({
      engine: 'gpt-3.5',
      prompt: message,
      maxTokens: 100,
    });

    return response.choices[0].text.trim();
  }
}