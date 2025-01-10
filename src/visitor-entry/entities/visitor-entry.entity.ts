import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Purpose } from '../dto/create-visitor-entry.input';

export type VisitorDocument = VisitorEntry & Document;

@ObjectType()
export class VisitorEntry {
  @Field(() => ID) 
    id: string;
    @Field(() => Purpose) // Use the Purpose enum
    @Prop({ type: String, enum: Purpose, required: true }) // Mongoose schema enum
    purpose: Purpose;
  @Field()
  @Prop({ type: Date,  required:true})
  inDateTime:Date
  @Field()
  @Prop({ type: Date, required:false})
  outDateTime:Date
  @Field()
  @Prop({type:String, required:false})
  outRemark:String

}

export const VisitorEntrySchema  = SchemaFactory.createForClass(VisitorEntry);