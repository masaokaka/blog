import { PrismaService } from 'nestjs-prisma';

// @Resolver((_of: any) => TagResponse)
export class TagService {
  constructor(
    // private configService: ConfigService,
    // private readonly blogEnv: BlogEnv,
    private readonly prisma: PrismaService,
  ) {}

  // @Query(() => PostResponse, { name: 'getPosts' })
  // async getTags(@Args() args: GetPostsArgs) {
  //   const data = await this.prisma.$transaction([
  //     this.prisma.post.findMany({
  //       where: {
  //         category: args.category ? { in: args.category } : undefined,
  //         published: true,
  //       },
  //       orderBy: {
  //         publishDate: 'desc',
  //       },
  //       skip: (args.page - 1) * args.postsPerPage,
  //       take: args.postsPerPage,
  //     }),
  //     this.prisma.post.count({
  //       where: {
  //         category: args.category ? { in: args.category } : undefined,
  //         published: true,
  //       },
  //     }),
  //   ]);
  //   return {
  //     posts: data[0],
  //     totalPageCount: Math.ceil(data[1] / args.postsPerPage),
  //   };
  // }
}
