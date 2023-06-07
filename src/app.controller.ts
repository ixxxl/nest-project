import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user')
  getUser(): string {
    return `${this.appService.getHello()} from user`;
  }

  @Get('/admin')
  getAdmin(): string {
    return `${this.appService.getHello()} from admin`;
  }
  @Get('/all')
  getAll(): string {
    return `${this.appService.getHello()} from all`;
  }
}
