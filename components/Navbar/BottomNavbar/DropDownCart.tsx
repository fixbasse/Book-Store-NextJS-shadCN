'use client'

import React, { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/store/use-cart-store";
import Link from "next/link";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { FaShoppingCart } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Typography from "@/components/text/Typography";
import { GrDocument } from "react-icons/gr";

export function DropDownCart() {
    const { cart, remove, count } = useCartStore((state) => ({
        cart: state.cart,
        remove: state.remove,
        count: state.count
    }));
    const [price] = useState(cart.map(item => item.price));


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 relative">
                    {/* Count */}
                    <span className="absolute top-[-6px] left-3 bg-primary rounded-full w-5 h-5 text-sm flex items-center justify-center text-background">
                        {count()}
                    </span>
                    <FaShoppingCart size={25} className='text-muted-foreground' />

                    <div className='font-bold hover:text-primary'>
                        $

                        <span>
                            0.00

                        </span>

                    </div>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="overflow-scroll w-[320px] p-2 font-medium flex flex-col gap-4">
                {cart.length ? (
                    cart.map((item) => (
                        <div key={item.id}>
                            <div className="flex gap-2">
                                <div className="relative min-w-[80px] w-[80px] h-[100px]">
                                    <Image
                                        src={item.img}
                                        alt="book"
                                        fill
                                        className="rounded-md"
                                    />
                                </div>

                                {/* PRICE & Delete */}
                                <div className="flex flex-col">
                                    <Typography className="flex flex-col gap-2">
                                        <h3 className="font-semibold">
                                            {item.label}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold">
                                                {item.count} x ${item.price}
                                            </span>
                                        </div>
                                    </Typography>

                                    <IoTrashBin
                                        onClick={() => remove(item.id)}
                                        size={20} className="text-muted-foreground cursor-pointer"
                                    />
                                </div>
                            </div>

                        </div>
                    ))
                ) : (
                    <div>
                        <h2 className="p-4 text-center">
                            <GrDocument size={30} className="mx-auto" />
                            Your cart is empty.
                        </h2>
                    </div>
                )}


                {cart.length > 0 && (
                    <>
                        <Typography className="text-center font-bold">
                            Total Price: $0.00
                        </Typography>

                        <Link href='/account/cart'>
                            <Button
                                className="w-full font-bold">
                                Cart ({count()})
                            </Button>
                        </Link>
                    </>
                )}


            </DropdownMenuContent>
        </DropdownMenu>
    )
}
