import { GetUserArgs } from '@blog-components/user/interfaces/get-user-connection.args';
import { GetUserResponse } from '@blog-components/user/interfaces/user.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async getUser(args: GetUserArgs): Promise<GetUserResponse> {
    const user = await this.prisma.user.findFirst({
      where: {
        githubId: args.githubId,
      },
    });
    return {
      user: user || null,
    };
  }
}
