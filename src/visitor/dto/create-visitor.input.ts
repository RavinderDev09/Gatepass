import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVisitorInput {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  profileImg:string
  @Field()
  mobileNo:string
}
