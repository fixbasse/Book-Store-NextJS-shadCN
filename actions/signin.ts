'use server'

import { signInSchema } from "@/schemas/signin-schema"
import { z } from "zod"
import { signIn } from '@/auth'

export const login = async (values: z.infer<typeof signInSchema>) => {
    console.log(values);

    const validatedFields = signInSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid Fields' }
    }

    const { email, password } = validatedFields.data;

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: '/'
        })
    } catch (error) {
        console.log(error);

    }
}