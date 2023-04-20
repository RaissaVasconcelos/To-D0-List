import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { SeederService } from './login.seders.service';
import { User, LoginSchema } from './schema/login.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: LoginSchema }]),
  ],
  controllers: [LoginController],
  providers: [LoginService, SeederService],
})
export class LoginModule {}
