import { GetPostsArgs } from '@blog-components/posts/interfaces/get-post-connection.args';
import { PostResponse } from '@blog-components/posts/interfaces/post.model';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';

@Resolver((_of: any) => PostResponse)
export class PostResolver {
  constructor(
    // private configService: ConfigService,
    // private readonly blogEnv: BlogEnv,
    private readonly prisma: PrismaService,
  ) {}

  @Query(() => PostResponse, { name: 'getPosts' })
  async getPosts(@Args() args: GetPostsArgs) {
    const data = await this.prisma.$transaction([
      this.prisma.post.findMany({
        where: {
          category: args.category ? { in: args.category } : undefined,
          published: true,
        },
        orderBy: {
          publishDate: 'desc',
        },
        skip: (args.page - 1) * args.postsPerPage,
        take: args.postsPerPage,
      }),
      this.prisma.post.count({
        where: {
          category: args.category ? { in: args.category } : undefined,
          published: true,
        },
      }),
    ]);
    console.log({ posts: data[0], totalCount: data[1] });
    return { posts: data[0], totalCount: data[1] };
  }
}
