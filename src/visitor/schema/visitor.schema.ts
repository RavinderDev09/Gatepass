

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsIP, IsOptional, IsString, MinLength, ArrayNotEmpty } from 'class-validator';

@Schema({ timestamps: true })
export class Visitor  {
  @Prop({ required: true, trim: true })
  name: string;
  @Prop({ required: true, unique: true, trim: true, lowercase: true })
  email: string;
  @Prop({type:String, required:false})
  profileImg:string
  @Prop({required:true, type:Number})
  mobileNO:String
}

export const VisitorSchema = SchemaFactory.createForClass(Visitor);
