import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType() 
@Schema({timestamps:true}) 
export class Visitor {
  @Field(() => ID) 
  id: string;
  @Field() 
  @Prop({ required: true, type: String }) 
  name: string;
  @Field() 
  @Prop({ required: true, type: String })
  email: string;
  @Field() 
  @Prop({ required: false, type: String }) 
  profileImg:string
  @Field()
  @Prop({required:true, type:String})
  mobileNo:string
}

// Mongoose schema factory
export type VisitorDocument = Visitor & Document;
export const VisitorEntrySchema = SchemaFactory.createForClass(Visitor);
