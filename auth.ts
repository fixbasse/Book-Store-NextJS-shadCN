import NextAuth from "next-auth"
import { PrismaAdapter } from '@auth/prisma-adapter'
import prismaDb from "./lib/prismadb"
import authConfig from "./auth.config"

export const {
    handlers: { GET, POST },
    auth,
}
    = NextAuth({
        adapter: PrismaAdapter(prismaDb),
        session: { strategy: 'jwt' },
        ...authConfig
    })

// Callback URI
// http://localhost:3000/api/auth/providers