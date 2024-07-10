import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { EnvValidator } from 'src/config/environments/env-validator';

/**
 * 環境変数を取得できる関数を定義
 */
@Injectable()
export class BlogEnv {
  constructor(private configService: ConfigService<EnvValidator, true>) {}

  isProduction(): boolean {
    return this.configService.get('NODE_ENV') === 'production';
  }

  get GqlModuleOptionsFactory(): ApolloDriverConfig {
    const devOptions: ApolloDriverConfig = {
      autoSchemaFile: join(process.cwd(), 'src/generated/graphql/schema.gql'),
      sortSchema: true,
      playground: true,
    };

    // 本番環境：実行だけ
    const prdOptions: ApolloDriverConfig = {
      autoSchemaFile: true,
      playground: false,
    };
    if (this.isProduction()) {
      return prdOptions;
    } else {
      return devOptions;
    }
  }

  get service() {
    return this.configService;
  }

  get NodeEnv(): string {
    return this.configService.get('NODE_ENV');
  }

  get Port(): number {
    return this.configService.get('PORT');
  }

  get DatabaseUrl(): string {
    return this.configService.get('DATABASE_URL');
  }
}
