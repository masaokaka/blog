import { Module } from '@nestjs/common';
import { TagResolver } from './tag.resolvers';

@Module({
  providers: [TagResolver],
})
export class TagModule {}
