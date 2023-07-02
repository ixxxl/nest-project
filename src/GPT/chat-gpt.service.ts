import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ChatCompletionResponseMessage, CreateChatCompletionResponse, CreateCompletionResponse } from 'openai';
import {Configuration, OpenAIApi } from 'openai';
import { ConfigService } from '@nestjs/config';

const RestrictedWords = ["test", "maib"]

type ChatResponse = {
  question: string,
  answer: string
}
@Injectable()
export class ChatbotService {
  private openai: OpenAIApi;

  constructor(private readonly configService: ConfigService) {
    const configuration = new Configuration({
      apiKey:  this.configService.get<string>('openAi.apiKey'),
      // organization: this.configService.get<string>('openAi.organization'),
    });
    this.openai = new OpenAIApi(configuration);
  }

  async sendMessage(message: string): Promise<ChatResponse> {
    let restricted = [];
    message.split(" ").forEach(word => {
      if (RestrictedWords.includes(word.toLowerCase())) {
        restricted = [...restricted, word]
      }
    })
    if(restricted.length > 0) {
      console.log("restricted", restricted)
      throw new HttpException("RestrictedWords", HttpStatus.FORBIDDEN, {cause: "restricted", description: restricted.join(', ')});
      // throw({
      //   message: "RestrictedWords",
      //   words: restricted
      // })
    }
    try {
      const response = await this.openai.createChatCompletion ({
        model: 'gpt-3.5-turbo',
        temperature: 0.8,
        max_tokens: 2000,
        messages: [{role: "user", content: message}],
      });
      return {
        question: message,
        answer: response.data.choices[0].message.content
      }
    } catch(e) {
      throw(e);
    }
  }
}