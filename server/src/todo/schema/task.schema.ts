import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Task extends Document {
  @Prop({ required: true })
  task: string;

  @Prop({ required: true })
  completed: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
