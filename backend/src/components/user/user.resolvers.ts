import { GetUserArgs } from '@blog-components/user/interfaces/get-user-connection.args';
import { GetUserResponse } from '@blog-components/user/interfaces/user.model';
import { UserService } from '@blog-components/user/user.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver((_of: any) => GetUserResponse)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => GetUserResponse, { name: 'getUser' })
  async getUser(args: GetUserArgs): Promise<GetUserResponse> {
    return await this.userService.getUser(args);
  }
}
