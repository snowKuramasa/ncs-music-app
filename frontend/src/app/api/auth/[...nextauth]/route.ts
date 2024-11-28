import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { NextAuthOptions } from 'next-auth'

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // session: {
  //   strategy: 'jwt', // セッションをクッキーで管理
  // },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async signIn({ user, account, profile, email, credentials }) {
      // サインインが成功したらtrueを返します
      return true
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async redirect({ url, baseUrl }) {
      // ログイン成功後にリダイレクトするURLを指定
      return '/profile'
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
