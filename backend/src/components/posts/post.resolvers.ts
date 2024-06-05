import { ConfigService } from '@nestjs/config';
import { Query, Resolver } from '@nestjs/graphql';
import { BlogEnv } from 'src/config/environments/blog-env.service';
import { PostModel } from './interfaces/post.model';

@Resolver(() => PostModel)
export class PostsResolver {
  constructor(
    private configService: ConfigService,
    private blogEnv: BlogEnv,
  ) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }
  @Query(() => String)
  getDBURL(): string {
    return this.blogEnv.DatabaseUrl;
  }
}
