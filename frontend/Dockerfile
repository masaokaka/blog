# Node.js公式イメージを使用
FROM node:24-alpine

# 作業ディレクトリ作成
WORKDIR /app

# 依存関係インストール
COPY package*.json ./
RUN npm ci

# アプリケーションのソースをコピー
COPY . .

# 開発サーバー起動
CMD ["npm", "run", "dev"]