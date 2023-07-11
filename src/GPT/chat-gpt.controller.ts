import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ChatbotService } from './chat-gpt.service';
import { ApiBody } from '@nestjs/swagger';
import { validate } from 'class-validator';


//@UsePipes(new ValidationPipe())
@Controller('chat')
export class ChatController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  })
  async sendMessage(@Body() { message }: { message: string }): Promise<any> {
    // const errors = await validate(CreateWordDTO);
    // if (errors.length > 0) {
    //   // handle validation errors
    // } else {
    // }
    const reply = await this.chatbotService.sendMessage(message);
    return { reply };
    // continue with creating the user
  }
}
