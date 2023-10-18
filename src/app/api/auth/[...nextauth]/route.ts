import { firestore } from '@/utils/config/firebase-admin.config'
import { FirestoreAdapter } from '@auth/firebase-adapter'
import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  adapter: FirestoreAdapter(firestore),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ''
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      return session
    }
  },
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  }
})

export { handler as GET, handler as POST, handler }
