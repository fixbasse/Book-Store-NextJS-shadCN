'use client'

import { useState, useTransition } from "react";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import axios from 'axios'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { addressSchema } from "@/schemas/address-schema";
import { Address } from "@prisma/client";

interface EditAddressModalProps {
    address: Address
};

export function EditAddressModal({
    address
}: EditAddressModalProps) {
    const [isLoading, setIsLoading] = useState(false);


    // 1. Define your form.
    const form = useForm<z.infer<typeof addressSchema>>({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            id: address.id,
            firstname: "",
            lastname: "",
            mobile: "",
            address: "",
            district: "",
            postcode: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof addressSchema>) {
        console.log(values);
        setIsLoading(true);

        try {
            const res = await axios.put('/api/address', values);
            console.log(res.data);

            window.location.replace('/account/address');
        } catch (error) {
            console.log(error);

        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
                    <section className="flex max-[425px]:flex-col gap-4 w-full">

                        {/* Firstname */}
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="font-bold">Firstname</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder={address?.firstname}
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Lastname */}
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="font-bold">Lastname</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            disabled={isLoading}
                                            placeholder={address?.lastname}
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </section>
                    {/* Address */}
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="font-bold">Address</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        disabled={isLoading}
                                        placeholder={address?.address}
                                        {...field} className="" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <section className="flex max-[425px]:flex-col min-[425px]:gap-4 w-full">
                        {/* Districe */}
                        <FormField
                            control={form.control}
                            name="district"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="font-bold">District</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder={address?.district}
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Lastname */}
                        <FormField
                            control={form.control}
                            name="postcode"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="font-bold">Postcode</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            disabled={isLoading}
                                            placeholder={address?.postcode}
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Mobile Phone */}
                        <FormField
                            control={form.control}
                            name="mobile"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="font-bold">Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            disabled={isLoading}
                                            placeholder={address?.mobile}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </section>

                    <Button
                        className=""
                        type="submit"
                        disabled={isLoading}
                    >
                        Update
                    </Button>
                </form>
            </Form>

        </div>
    )
}
