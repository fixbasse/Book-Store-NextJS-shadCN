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

export function TriggerSignInModalCart() {
    const [modalSwitch, setModalSwitch] = useState(false);

    const handleClose = useCallback(() => {
        setModalSwitch(!modalSwitch);
    }, [modalSwitch]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="flex items-center gap-4">
                    <FaShoppingCart size={25} className='text-muted-foreground' />
                    <div className='font-bold'>
                        $
                        <span>
                            0.00
                        </span>
                    </div>
                </button>
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
