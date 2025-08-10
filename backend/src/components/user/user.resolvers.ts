import { GetUserArgs } from '@blog-components/user/interfaces/get-user-connection.args';
import { GetUserResponse } from '@blog-components/user/interfaces/user.model';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';

@Resolver((_of: any) => GetUserResponse)
export class UserResolver {
  constructor(
    // private configService: ConfigService,
    // private readonly blogEnv: BlogEnv,
    private readonly prisma: PrismaService,
  ) {}

  @Query(() => GetUserResponse, { name: 'getUser' })
  async getPosts(@Args() args: GetUserArgs) {
    const data = await this.prisma.$transaction([
      this.prisma.user.findFirst({
        where: {
          githubId: args.githubId,
        },
      }),
    ]);
    return {
      user: data[0] || null,
    };
  }
}
