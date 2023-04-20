import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/login.schema';

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async onModuleInit() {
    await this.userModel.deleteMany({}); // remove todos os usuários existentes

    // cria alguns usuários
    const users = [
      {
        name: 'Toretto',
        password: 'acelera123',
      },
      {
        name: 'Letty',
        password: 'nitro123',
      },
    ];

    // insere os usuários no banco de dados
    await this.userModel.insertMany(users);
  }
}
