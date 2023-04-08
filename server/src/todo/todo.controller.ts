import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { AppService } from './todo.service';
import { Task } from './schema/task.schema';

@Controller('task')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() task: Task) {
    return this.appService.create(task);
  }

  @Get()
  async getAll() {
    return this.appService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    try {
      return await this.appService.getById(id);
    } catch (error) {
      throw new HttpException(
        `Task with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() task: Task) {
    try {
      return await this.appService.update(id, task);
    } catch (error) {
      throw new HttpException(
        `Task with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    try {
      return await this.appService.remove(id);
    } catch (error) {
      throw new HttpException(
        `Task with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
