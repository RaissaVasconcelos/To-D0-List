import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schema/task.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(task: Task): Promise<Task> {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }

  async getAll(): Promise<Task[]> {
    return this.taskModel.find();
  }

  async getById(id: string): Promise<Task | string> {
    const task = await this.taskModel.findById(id);
    if (!task) {
      return 'Não encontrado';
    }
    return this.taskModel.findById(id);
  }

  async update(id: string, task: Task): Promise<Task | string> {
    await this.taskModel.findByIdAndUpdate(id, task);
    return this.getById(id);
  }

  async remove(id: string) {
    return this.taskModel.findByIdAndRemove(id);
  }
}
