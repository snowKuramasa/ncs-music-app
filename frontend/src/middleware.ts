import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  // `getToken`関数を使用してセッションを取得
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const isLoginPage = req.nextUrl.pathname.startsWith('/login')
  const isApiAuth = req.nextUrl.pathname.startsWith('/api/auth')

  // ログインページおよびNextAuth APIエンドポイントはミドルウェアの対象外
  if (isLoginPage || isApiAuth) {
    return NextResponse.next()
  }

  // セッションがない場合はログインページにリダイレクト
  if (!token) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // セッションが存在する場合はリクエストを次のミドルウェアまたはルートに渡す
  return NextResponse.next()
}

//ミドルウェアを使って遷移できないように制御するパスを指定
export const config = {
  matcher: [
    '/', // ダッシュボード関連のパス
    '/profile/:path*', // プロフィール関連のパス
  ],
}
