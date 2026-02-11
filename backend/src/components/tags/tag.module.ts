import { TagService } from '@blog-components/tags/tag.service';
import { Module } from '@nestjs/common';
import { TagResolver } from './tag.resolver';

@Module({
  providers: [TagResolver, TagService],
})
export class TagModule {}
