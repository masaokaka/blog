import { GetPostsArgs } from '@blog-components/posts/interfaces/get-post-connection.args';
import { PostResponse } from '@blog-components/posts/interfaces/post.model';
import { PostService } from '@blog-components/posts/post.service';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver((_of: any) => PostResponse)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => PostResponse, { name: 'getPosts' })
  async getPosts(@Args() args: GetPostsArgs): Promise<PostResponse> {
    return await this.postService.getPosts(args);
  }
}
