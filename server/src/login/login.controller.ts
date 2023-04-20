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
    try {
      await this.loginService.login(user);
    } catch (error) {
      throw new HttpException(
        'User or Password incorrects',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
