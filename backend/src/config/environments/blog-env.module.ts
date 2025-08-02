import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BlogEnv } from './blog-env.service';
import { validate } from './env-validator';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
      validate,
      isGlobal: true,
    }),
  ],
  providers: [BlogEnv],
  exports: [BlogEnv],
})
export class BlogEnvModule {}
