import { Controller, Post, Body } from '@nestjs/common';
import { ChatbotService } from './chat-gpt.service';
import { ApiBody } from '@nestjs/swagger';


@Controller('chat')
export class ChatController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' }
      },
    },
  })
  async sendMessage(@Body() { message }: { message: string }): Promise<any> {
    const reply = await this.chatbotService.sendMessage(message);
    return { reply };
  }
}