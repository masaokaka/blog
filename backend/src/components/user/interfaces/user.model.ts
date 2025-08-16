import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  githubId: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  role: string;
}

@ObjectType()
export class GetUserResponse {
  @Field(() => UserModel, { nullable: true })
  user: UserModel | null;
}
