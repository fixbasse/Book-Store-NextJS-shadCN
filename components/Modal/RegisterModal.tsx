'use client'

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
import { registerSchema } from "@/schemas/register-schema";
import { register } from "@/actions/register";
import { toast } from "../ui/use-toast";

interface RegisterModalProps {
    modalSwitch: boolean;
    setModalSwitch: React.Dispatch<React.SetStateAction<boolean>>;
};

export function RegisterModal({
    modalSwitch,
    setModalSwitch
}: RegisterModalProps) {
    const [isPending, startTransition] = useTransition();

    // 1. Define your form.
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof registerSchema>) {
        try {
            startTransition(() => {
                register(values)
                    .then(() => {
                        toast({
                            title: "Register Success!",
                        })
                    })
            });
        } catch (error) {
            console.log(error);
            toast({
                title: "Something went wrong!",
            });
        }
        console.log(values)
    }

    return (
        <div className={modalSwitch
            ? 'block'
            : 'hidden'
        }>
            <h2 className="font-bold text-xl mb-2">
                Register
            </h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    {/* Name */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isPending}
                                        placeholder="Thomas...." {...field} className=" placeholder:font-bold italic" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                        disabled={isPending}
                        className="w-full"
                        type="submit"
                    >
                        Register
                    </Button>
                </form>
            </Form>


            <section className="text-sm mt-2 text-center">
                <span>
                    Already have an account?
                </span>
                <button
                    onClick={() => setModalSwitch(!modalSwitch)}
                    className="underline hover:no-underline ml-1 font-bold"
                >
                    SignIn
                </button>
            </section>
        </div>
    )
}
