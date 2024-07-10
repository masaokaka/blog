import { GetPostsArgs } from '@blog-components/posts/interfaces/get-post-connection.args';
import { PostModel } from '@blog-components/posts/interfaces/post.model';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';

@Resolver((_of: any) => PostModel)
export class PostResolver {
  constructor(
    // private configService: ConfigService,
    // private readonly blogEnv: BlogEnv,
    private readonly prisma: PrismaService,
  ) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts(@Args() args: GetPostsArgs) {
    return this.prisma.post.findMany({
      where: {
        type: args.type ? { in: args.type } : undefined,
        published: true,
      },
      orderBy: {
        publishDate: 'desc',
      },
    });
  }
}
