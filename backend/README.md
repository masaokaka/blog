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
