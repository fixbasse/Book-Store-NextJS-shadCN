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

export function DropDownCart() {

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


            <DropdownMenuContent className="w-[300px] p-2 absolute right-[-3rem] font-medium">
                <div className="flex gap-2">
                    <Image
                        src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg'
                        alt="book"
                        height={120}
                        width={120}
                    />

                    {/* PRICE & Delete */}
                    <Typography className="flex flex-col gap-2">
                        <div>
                            <h3>
                                Harry Potter and the order of pheonix
                            </h3>
                            <span className="font-bold">
                                1 x $20
                            </span>
                        </div>

                        <IoTrashBin size={30} className="text-muted-foreground" />
                    </Typography>
                </div>

                <Typography className="border- text-center font-bold my-2">
                    Total Price : $20.00
                </Typography>

                <Link href='/account/cart'>
                    <Button className="w-full text-base font-bold">
                        Cart (1)
                    </Button>
                </Link>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
