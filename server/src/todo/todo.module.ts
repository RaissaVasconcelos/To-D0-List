import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './todo.controller';
import { AppService } from './todo.service';
import { Task, TaskSchema } from './schema/task.schema';

// mongodb://localhost:27017/CarShop
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class TodoModule {}
