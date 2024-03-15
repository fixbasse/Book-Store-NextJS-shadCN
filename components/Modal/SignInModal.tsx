'use client'

import { useTransition } from "react";

import { GrGoogle } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

import { login } from "@/actions/signin";
import { signInSchema } from "@/schemas/signin-schema";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

interface SignInModalProps {
    modalSwitch: boolean;
    handleClose: () => void;
};

export function SignInModal({
    modalSwitch,
    handleClose
}: SignInModalProps) {
    const [isPending, startTransition] = useTransition();


    // 1. Define your form.
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof signInSchema>) {
        console.log(values);


        startTransition(() => {
            login(values)
                .then(() => {
                    toast({
                        title: "Login Success!",
                    })
                })

            form.reset();
            redirect('/');
        });


    };

    const handleSignIn = (provider: 'google' | 'github') => {
        signIn(provider, {
            callbackUrl: '/'
        })
    };

    return (
        <div className={modalSwitch
            ? 'hidden'
            : 'block'
        }>
            <h2 className="font-bold text-xl mb-2">
                SignIn
            </h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    {/* Email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isPending}
                                        placeholder="fix@gmail.com...."
                                        {...field}
                                        className=" placeholder:font-bold italic"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Password */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        disabled={isPending}
                                        placeholder="****" {...field} className=" placeholder:font-bold italic" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        className="w-full"
                        type="submit"
                        disabled={isPending}
                    >
                        SignIn
                    </Button>
                </form>
            </Form>

            <section className="flex gap-2 mt-2 w-full">
                <Button
                    disabled={isPending}
                    variant='outline'
                    onClick={() => handleSignIn('google')}
                    className="flex items-center justify-center gap-4 w-full"
                >
                    <GrGoogle />
                    SignIn with Google
                </Button>
                <Button
                    disabled={isPending}
                    variant='outline'
                    onClick={() => handleSignIn('github')}
                    className="flex items-center justify-center gap-4 w-full"
                >
                    <FaGithub />
                    SignIn with Github
                </Button>
            </section>

            <section className="mt-2 text-sm text-center">
                <span>
                    Don&apos;t have any account?
                </span>
                <button
                    onClick={handleClose}
                    className="underline hover:no-underline ml-1 font-bold"
                >
                    Register
                </button>
            </section>
        </div>
    )
}
