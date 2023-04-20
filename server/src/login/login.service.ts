import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { User } from './schema/login.schema';

@Injectable()
export class LoginService {
  constructor(@InjectModel(User.name) private loginModel: Model<User>) {}

  async login(user: User): Promise<any | null> {
    const userLogeed = await this.loginModel.find(
      { name: user.name },
      { password: user.password },
    );
    return userLogeed;
  }
}
