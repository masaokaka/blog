import { UserService } from '@blog-components/user/user.service';
import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule {}
