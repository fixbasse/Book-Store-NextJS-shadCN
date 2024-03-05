import { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"

import { signInSchema } from "./schemas/signin-schema";
import { getUserByEmail } from "./utils/user";
import bcrypt from 'bcryptjs'

export default {
    providers: [
        Credentials({
            async authorize(crendentials) {
                const validatedFields = signInSchema.safeParse(crendentials)
                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password,
                    );

                    if (passwordMatch) return user;
                }

                return null;
            }
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
    ]
} satisfies NextAuthConfig;