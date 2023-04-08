import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schema/task.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(task: string): Promise<Task> {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }

  async getAll(): Promise<Task[]> {
    return this.taskModel.find();
  }

  getById(id: string): string {
    console.log(id);
    return 'ok';
  }

  update(id: string, task: string): string {
    console.log(id);
    console.log(task);
    return 'ok';
  }

  remove(id: string) {
    console.log(id);
    return 'remove';
  }
}
