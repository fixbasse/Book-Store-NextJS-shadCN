import NextAuth from "next-auth"
import { PrismaAdapter } from '@auth/prisma-adapter'
import prismaDb from "./lib/prismadb"
import authConfig from "./auth.config"

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
}
    = NextAuth({
        callbacks: {
            async session({ token, session }) {
                if (token.sub && session.user) {
                    session.user.id = token.sub;
                }

                console.log(session);
                
                return session;
            },
            async jwt({ token, user, profile }) {
                return token;

            }
        },
        adapter: PrismaAdapter(prismaDb),
        session: { strategy: 'jwt' },
        ...authConfig
    })

// Callback URI
// http://localhost:3000/api/auth/providers