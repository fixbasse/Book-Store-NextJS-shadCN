'use server'

import { registerSchema } from "@/schemas/register-schema";
import { z } from "zod"
import bcrypt from 'bcryptjs'
import prismaDb from "@/lib/prismadb";
import { getUserByEmail } from "@/utils/user";

export const register = async (values: z.infer<typeof registerSchema>) => {
    console.log(values);

    const validatedFields = registerSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid Fields' }
    };

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: 'This email is already exist!' }
    };


    await prismaDb.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    });

    return { success: 'User created!' }

}