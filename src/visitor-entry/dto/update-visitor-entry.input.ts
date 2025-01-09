import { CreateVisitorEntryInput } from './create-visitor-entry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVisitorEntryInput extends PartialType(CreateVisitorEntryInput) {
  @Field(() => Int)
  id: number;
}
