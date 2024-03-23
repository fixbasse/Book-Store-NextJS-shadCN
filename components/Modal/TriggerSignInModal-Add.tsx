'use client'

import React, { useCallback } from "react";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import { FaShoppingCart } from "react-icons/fa";
import { RegisterModal } from "./RegisterModal";
import { SignInModal } from './SignInModal';
import { Button } from "../ui/button";

export function TriggerSignInModalAddToCart() {
    const [modalSwitch, setModalSwitch] = useState(false);

    const handleClose = useCallback(() => {
        setModalSwitch(!modalSwitch);
    }, [modalSwitch]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                 <Button className="w-full font-bold">
                    Add to cart
                 </Button>
            </DialogTrigger>

            <DialogContent className="lg:w-[800px]">

                <SignInModal
                    modalSwitch={modalSwitch}
                    handleClose={handleClose}
                />
                <RegisterModal
                    modalSwitch={modalSwitch}
                    handleClose={handleClose}
                />

            </DialogContent>


        </Dialog>
    )
}
