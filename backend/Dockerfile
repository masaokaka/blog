FROM node:22-alpine3.22

# nodeのalpine3.21以降はlibssl.so.3の場所が変わったため、シンボリックリンクを作成
# 参考:
# https://github.com/nodejs/docker-node/issues/2175

RUN ln -s /usr/lib/libssl.so.3 /lib/libssl.so.3

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# Prismaのマイグレーションを実行
RUN npx prisma migrate dev --name init

CMD ["npm", "run", "start:dev"]