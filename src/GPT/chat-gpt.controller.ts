import { Controller, Post, Body } from '@nestjs/common';
import { ChatbotService } from './chat-gpt.service';


@Controller('chat')
export class ChatController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post()
  async sendMessage(@Body() { message }: { message: string }): Promise<any> {
    const reply = await this.chatbotService.sendMessage(message);
    return { reply };
  }
}