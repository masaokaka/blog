import { urqlClient } from '@/lib/urql';
import { GetUserDocument } from '@/src/graphql/generated/types';
import NextAuth, { type AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  session: { strategy: 'jwt' },
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async signIn({ account }) {
      if (!account?.providerAccountId) {
        console.error('Provider account ID is missing');
        return false;
      }
      try {
        const client = await urqlClient();
        const result = await client.query(GetUserDocument, {
          githubId: account.providerAccountId,
        });

        // データベースにユーザーが存在するかを確認
        if (result.data?.getUser.user) {
          return true; // ユーザーが存在するので認証を許可
        }

        console.error('User is not registered in the database');
        return false; // ユーザーが存在しないので認証を拒否
      } catch (error) {
        console.error('Database query failed:', error);
        return false; // エラー発生時も認証を拒否
      }
    },

    async jwt({ token, account }) {
      // 認証後、DBから取得したユーザー情報をJWTに格納
      if (account?.providerAccountId) {
        console.log('jwt');
        const client = await urqlClient();
        const result = await client.query(GetUserDocument, {
          githubId: account.providerAccountId,
        });

        if (result.data?.getUser.user) {
          // DBのidをJWTに格納
          token.name = result.data.getUser.user.githubId;
          token.email = result.data.getUser.user.email;
        }
      }

      return token;
    },

    session({ session, token }) {
      // sessionオブジェクトとsession.userが存在するかを確認
      if (!session || !session.user) {
        return session;
      }
      console.log('session', token);
      if (token.name) {
        session.user.name = token.name as string;
      }
      if (token.email) {
        session.user.email = token.email as string;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
