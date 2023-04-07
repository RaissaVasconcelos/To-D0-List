import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Task, TaskSchema } from './schema/task.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
