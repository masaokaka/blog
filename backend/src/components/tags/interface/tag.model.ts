import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TagModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;
}
