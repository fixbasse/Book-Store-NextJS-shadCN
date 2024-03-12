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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { accountSchema } from "@/schemas/account-schema";
import { redirect } from "next/navigation";
import { addressSchema } from "@/schemas/address-schema";
import { PlusCircle } from "lucide-react";

export function CreateNewAddressModal() {
    const [isLoading, setIsLoading] = useState(false);


    // 1. Define your form.
    const form = useForm<z.infer<typeof addressSchema>>({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            mobile: "",
            address: "",
            district: "",
            postcode: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof addressSchema>) {
        console.log(values);
        setIsLoading(true);

        try {
            const res = await axios.post('/api/address', values);
            console.log(res.data);

            form.reset();
            redirect('/account/address');
        } catch (error) {
            console.log(error);

        } finally {
            setIsLoading(false);
        }
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="font-semibold flex items-center gap-2">
                 <PlusCircle /> Add Address
                </Button>
            </DialogTrigger>


            <DialogContent className="md:w-[800px]">

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
                                                placeholder="Thomas...."
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
                                                placeholder="Shelby"
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
                                            placeholder="Your address..." {...field} className="" />
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
                                                placeholder="Talingchan...."
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
                                                placeholder="10170"
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
                                                placeholder="081-909-1243" {...field} className="" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </section>

                        <Button
                            className="w-full"
                            type="submit"
                            disabled={isLoading}
                        >
                            Submit
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
