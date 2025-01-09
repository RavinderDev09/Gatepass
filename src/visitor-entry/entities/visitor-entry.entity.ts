import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Prupose } from '../dto/create-visitor-entry.input';

@ObjectType()
export class VisitorEntry {
  @Field()
  @Prop({type:Date, required:true})
  inDateTime:Date
  @Field()
  @Prop({type:Date, required:true})
  outDateTime:Date
  @Field()
  @Prop({type:String, required:true})
  outRemark:String
  @Field()
  @Prop({type:Prupose, required:true})
  purpose:Prupose
}
export type VisitorDocument = VisitorEntry & Document;
export const VisitorSchema = SchemaFactory.createForClass(VisitorEntry);