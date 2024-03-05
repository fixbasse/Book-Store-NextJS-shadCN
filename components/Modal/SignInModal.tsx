'use client'

import { GrGoogle } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import { useState, useTransition } from "react";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { signInSchema } from "@/schemas/signin-schema";
import { login } from "@/actions/signin";
import { toast } from "../ui/use-toast";


interface SignInModalProps {
    modalSwitch: boolean;
    setModalSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SignInModal({
    modalSwitch,
    setModalSwitch
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
    function onSubmit(values: z.infer<typeof signInSchema>) {

        startTransition(() => {
            login(values)
                .then(() => {
                    toast({
                        title: "Login Success!",
                    })
                })
        });


        console.log(values)
    }


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
                                        placeholder="fix@gmail.com...." {...field} className=" placeholder:font-bold italic" />
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
                    // onClick={() => handleSignIn('google')}
                    className="flex items-center justify-center gap-4 w-full">
                    <GrGoogle />
                    SignIn with Google
                </Button>
                <Button
                    disabled={isPending}
                    variant='outline'
                    // onClick={() => handleSignIn('github')}
                    className="flex items-center justify-center gap-4 w-full">
                    <FaGithub />
                    SignIn with Github
                </Button>
            </section>

            <section className="mt-2 text-sm text-center">
                <span>
                    Don&apos;t have any account?
                </span>
                <button
                    onClick={() => setModalSwitch(!modalSwitch)}
                    className="underline hover:no-underline ml-1 font-bold"
                >
                    Register
                </button>
            </section>
        </div>
    )
}
