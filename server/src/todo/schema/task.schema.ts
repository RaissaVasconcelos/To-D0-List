import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop({ required: true })
  task: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
