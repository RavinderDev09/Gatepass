import { InputType, Int, Field, registerEnumType, GraphQLISODateTime } from '@nestjs/graphql';
import { Date } from 'mongoose';
import { IsEnum } from 'class-validator';



export enum Purpose {
  TakeAStudent = 'TakeAStudent',
  Official = 'official',
  Other = 'other',
}

// Register the enum with GraphQL
registerEnumType(Purpose, {
  name: 'Purpose',
  description: 'The purpose of the visitor entry',
});

@InputType()
export class CreateVisitorEntryInput {
  @Field(() => GraphQLISODateTime) // Non-nullable field
  inDateTime: Date;
  @Field(() => GraphQLISODateTime, { nullable: true }) // Optional field
  outDateTime?: Date;
  @Field()
  outRemark:String
  @Field(() => Purpose) // Use the Purpose enum
  purpose: Purpose;
}




