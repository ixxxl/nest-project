import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { UserModel } from 'src/models/users.model';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}
  async createUser(user: Partial<UserModel>): Promise<any> {
    return this.authRepository.createUser(user);
  }
}
