import { InputType, Int, Field } from '@nestjs/graphql';



export enum Prupose{
  TakeAStudent='TakeAStudent',
  official='official', 
  other='other'
}

@InputType()
export class CreateVisitorEntryInput {
  @Field()
  inDateTime:string
  @Field()
  outDateTime:String
  @Field()
  outRemark:String
  @Field()
  purpose:Prupose
}
