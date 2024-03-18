'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { FaShoppingCart } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Typography from "@/components/text/Typography";
import Link from "next/link";
import { useCartStore } from "@/hooks/store/use-cart-store";

export function DropDownCart() {
    const { cart, remove } = useCartStore((state) => ({
        cart: state.cart,
        remove: state.remove,
    }))

    const { count } = useCartStore()

    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2">
                    <FaShoppingCart size={25} className='text-muted-foreground' />

                    <div className='font-bold hover:text-primary'>
                        $
                        <span>
                            0.00
                        </span>
                    </div>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="overflow-scroll w-full md:w-[300px] max-md:h-screen md:max-h-[300px] p-4 md:absolute md:top-4 md:right-[-3rem] font-medium flex flex-col gap-4">
                {cart.length ? (
                    cart.map((item) => (
                        <div key={item.id} className="w-full">
                            <div className="flex gap-2 w-full">
                                <Image
                                    src={item.img}
                                    alt="book"
                                    height={100}
                                    width={100}
                                />

                                {/* PRICE & Delete */}
                                <div className="flex flex-col justify-between w-full">
                                    <Typography className="flex flex-col gap-2">
                                        <h3 className="font-bold">
                                            {item.label}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <span className="font-bol">
                                                {item.count} x $ {item.price}
                                            </span>
                                        </div>
                                    </Typography>

                                    <IoTrashBin
                                        onClick={() => remove(item.id)}
                                        size={30} className="text-muted-foreground cursor-pointer"
                                    />
                                </div>
                            </div>

                        </div>
                    ))
                ) : (
                    <div>
                        <h2 className="text-center font-bold p-4 text-xl text-primary">
                            &quot;Your cart is empty.&quot;
                        </h2>
                    </div>
                )}


                {cart.length > 0 && (
                    <>
                        <Typography className="text-center font-bold">
                            Total Price : $ 0.00
                        </Typography>

                        <Link href='/account/cart'>
                            <Button className="w-full font-bold">
                                Cart (0)
                            </Button>
                        </Link>
                    </>
                )}


            </DropdownMenuContent>
        </DropdownMenu>
    )
}
