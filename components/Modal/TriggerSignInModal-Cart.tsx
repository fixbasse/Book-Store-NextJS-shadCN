

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { GrGoogle } from "react-icons/gr";
import { FaGithub, FaShoppingCart } from "react-icons/fa";

import { signIn } from 'next-auth/react'
import { useState } from "react";

export function TriggerSignInModalCart() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = (provider: 'google' | 'github') => {
        setIsLoading(true);

        try {
            signIn(provider, {
                callbackUrl: '/',
            });
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        };
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                    <FaShoppingCart size={25} className='text-muted-foreground' />
                    <div className='font-bold'>
                        $
                        <span>
                            0.00
                        </span>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Welcome To The ActivePeople Book Center.
                    </DialogTitle>
                </DialogHeader>

                <section className="flex flex-col gap-2">
                    <Button
                        onClick={() => handleSignIn('google')}
                        className="flex items-center justify-center gap-4 borde">
                        <GrGoogle />
                        SignIn With Google
                    </Button>
                    <Button
                        onClick={() => handleSignIn('github')}
                        className="flex items-center justify-center gap-4 borde">
                        <FaGithub />
                        SignIn With Github
                    </Button>
                </section>
            </DialogContent>
        </Dialog>
    )
}
