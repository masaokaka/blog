import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetPostsArgs {
  @Field(() => [String], { nullable: true })
  category?: string[];

  @Field(() => Int, { nullable: true })
  postsPerPage: number;

  @Field(() => Int, { nullable: true })
  page: number;
}
