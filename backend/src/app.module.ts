import { BlogEnv } from '@blog-config/environments/blog-env.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'nestjs-prisma';
import { BlogEnvModule } from 'src/config/environments/blog-env.module';
import { PostModule } from './components/posts/post.module';

@Module({
  imports: [
    BlogEnvModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [BlogEnv],
      useFactory: (env: BlogEnv) => env.GqlModuleOptionsFactory,
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
