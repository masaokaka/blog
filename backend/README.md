## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Prisma Clientの生成

`npx prisma generate`

### migration

`npx prisma migrate dev --name init`

#### スキーマ変更

`npx prisma generate`

#### データのシード

`npx prisma db seed`

### log into DB(in container)

`psql -h localhost -p 5432 -U root -d blog_db`

## ディレクトリ構成

- components以下に機能ごとのフォルダ
- 各フォルダ内には以下の通りファイルを配置

```
/interface
    〇〇.model.ts　# モデルの定義
/
〇〇.module.ts # モジュール内部をまとめてNestJSへ登録する
〇〇.resolver.ts # 処理へのルーティング
〇〇.service.ts # 処理
```
