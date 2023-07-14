import { BadRequestException, Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { ConfigService } from '@nestjs/config';
import * as RestrictedWords from '../assets/restricted_words.json';

type ChatResponse = {
  question: string;
  answer: string;
};
@Injectable()
export class ChatbotService {
  private openai: OpenAIApi;

  constructor(private readonly configService: ConfigService) {
    const configuration = new Configuration({
      apiKey: this.configService.get<string>('openAi.apiKey'),
    //  organization: this.configService.get<string>('openAi.organization'),
      
    });
    this.openai = new OpenAIApi(configuration);
    console.log(configuration);
  }

  async sendMessage(message: string): Promise<ChatResponse> {
    let restricted: string[] = [];
    message.split(' ').forEach((word) => {
      if (RestrictedWords.includes(word.toLowerCase())) {
        restricted = [...restricted, word];
      }
    });
    if (restricted.length > 0) {
      throw new BadRequestException(
        restricted.map((word) => ({ word, error: 'restricted' })),
      );
    }
    try {
      const response = await this.openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        temperature: 0.8,
        max_tokens: 2000,
        messages: [{ role: 'user', content: message }],
      });
      return {
        question: message,
        answer: response.data.choices[0].message.content,
      };
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
