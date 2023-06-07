import { Module } from '@nestjs/common';
import { UserModel } from 'src/models/users.model';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModel],
  controllers: [AuthController],
  providers: [AuthRepository, AuthService],
  exports: [AuthRepository, AuthService],
})
export class AuthModule {}
