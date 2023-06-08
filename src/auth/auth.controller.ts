import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserModel } from 'src/models/users.model';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/create')
  @ApiOperation({ summary: 'createUser' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        lastname: { type: 'string' },
        password: { type: 'string' },
        
      },
    },
  })
  async createUser(@Body() body: any) {
    const user: Partial<UserModel> = {
      name: body.name,
      password: body.password,
      lastname: body.lastname,
    };

    await this.authService.createUser(user);
  }
}
