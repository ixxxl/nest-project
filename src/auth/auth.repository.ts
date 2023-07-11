import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from 'src/models/users.model';

@Injectable()
export class AuthRepository {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userModel: typeof UserModel,
  ) {}
  public async createUser(user: Partial<UserModel>): Promise<any> {
    const userAccount = new this.userModel({
      name: user.name,
      password: user.password,
      lastname: user.lastname,
    });
    return userAccount.save();
  }

}
