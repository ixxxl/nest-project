// chat.module.ts
import { Module } from '@nestjs/common';
import { ChatController } from './chat-gpt.controller';
import { ChatbotService } from './chat-gpt.service';

@Module({
  imports: [],
  controllers: [ChatController],
  providers: [ChatbotService],
})
export class ChatModule {}
