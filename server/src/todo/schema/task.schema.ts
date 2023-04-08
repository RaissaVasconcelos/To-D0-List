import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop()
  task: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
