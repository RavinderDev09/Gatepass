import { CreateVisitorInput } from './create-visitor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVisitorInput extends PartialType(CreateVisitorInput) {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  mobileNo: string;

}