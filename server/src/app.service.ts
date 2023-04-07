import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schema/task.schema';

// tes
@Injectable()
export class AppService {
  constructor(@InjectModel(Task.name) private taskModel: string) {}

  create(task: string): string {
    return task;
  }

  getAll(): string[] {
    return ['todos', 'as', 'tasks'];
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
