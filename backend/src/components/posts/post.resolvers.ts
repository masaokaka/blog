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

  @Query(() => [PostModel], { name: 'posts' })
  async getPosts(@Args() args: GetPostsArgs) {
    console.log(args);
    const data = await this.prisma.post.findMany({
      where: {
        category: args.category ? { in: args.category } : undefined,
        published: true,
      },
      orderBy: {
        publishDate: 'desc',
      },
      skip: (args.page - 1) * args.postsPerPage,
      take: args.postsPerPage,
    });
    return data;
  }
}
