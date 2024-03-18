'use client'

import Typography from "@/components/text/Typography";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useCartStore } from "@/hooks/store/use-cart-store";
import { cartDataType } from "@/types"
import { useSession } from "next-auth/react";
import Image from "next/image"

interface SinglBookCardProps {
    item: cartDataType;
}

const SingleBookCard = ({
    item
}: SinglBookCardProps) => {
    const user = useSession();
    const { add, cart } = useCartStore();


    return (
        <div className="flex flex-col items-center p-2 border rounded-sm">

            <div className="bg-muted w-full p-4 rounded-sm">
                <Image
                    src={item.img}
                    width={150}
                    height={150}
                    alt="book"
                    className="mx-auto shadow-lg"
                />
            </div>

            <Typography className="pt-2 py-3 px-2">
                <h2 className="font-bold text-xl max-sm:text-base leading-[1.5rem]">
                    {item.label}
                </h2>
                <h3 className="pb-1">
                    Author: {item.author}
                </h3>
                <span className=" text-primary text-xl max-sm:text-base font-bold">
                    $ {item.price}
                </span>
            </Typography>

            {user ? (
                <Button
                    onClick={() => {
                        add(item),
                            toast({
                                title: `Add to cart!`,
                            })
                    }}
                    className="w-full font-bold">
                    Add to cart
                </Button>
            ) : (
                <Button
                    className="w-full font-bold">
                    Add to cart
                </Button>
            )}



        </div>
    )
}

export default SingleBookCard