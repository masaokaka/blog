import { PostService } from '@blog-components/posts/post.service';
import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';

@Module({
  providers: [PostResolver, PostService],
})
export class PostModule {}
