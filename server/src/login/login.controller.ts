import {
  Controller,
  Get,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async registerUser(@Body() user: any) {
    const userLogged = await this.loginService.login(user);
    console.log(userLogged);
    if (userLogged.length == 0) {
      throw new HttpException(
        'User or Password incorrects',
        HttpStatus.NOT_FOUND,
      );
    }
    return userLogged;
  }
}
