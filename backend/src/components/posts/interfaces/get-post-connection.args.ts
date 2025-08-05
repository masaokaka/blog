import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetPostsArgs {
  @Field(() => [String], { nullable: true })
  category?: string[];

  @Field(() => Int, { nullable: true, defaultValue: 9 })
  postsPerPage: number;

  @Field(() => Int, { nullable: true, defaultValue: 1 })
  page: number;
}
