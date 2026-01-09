import { TagModel } from '@blog-components/tags/interface/tag.model';
import {
  Field,
  GraphQLISODateTime,
  ID,
  Int,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  emoji: string | null;

  @Field(() => String)
  category: string;

  @Field(() => [TagModel])
  tags: TagModel[];

  @Field(() => String, { nullable: true })
  thumbNailUrl: string | null;

  @Field(() => String, { nullable: true })
  excerpt: string | null;

  @Field(() => String)
  contentPath: string;

  @Field(() => Boolean, { nullable: true })
  published: boolean | null;

  @Field(() => GraphQLISODateTime, { nullable: true })
  publishDate: Date | null;
}

@ObjectType()
export class PostResponse {
  @Field(() => Int)
  totalPageCount: number;
  @Field(() => [PostModel])
  posts: PostModel[];
}
