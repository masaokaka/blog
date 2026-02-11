import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// 認証が必要なページ配下へのパス
const protectedRoutes = ['/admin/:path*', '/admin'];

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXT_AUTH_SECRET,
  });
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );
  // 認証済みで、保護されたルートにアクセスしている場合
  if (token && isProtectedRoute) {
    return NextResponse.next();
  }

  // 認証情報がなく、保護されたルートにアクセスしようとしている場合
  if (!token && isProtectedRoute) {
    // ログインページにリダイレクト
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// ミドルウェアを適用するパスを指定
export const config = {
  matcher: ['/admin/:path*', '/admin'],
};
