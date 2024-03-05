'use client'

import React from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { GrGoogle } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";

import { useState } from "react";
import { RegisterModal } from "./RegisterModal";
import { SignInModal } from './SignInModal';

export function TriggerSignInModalCart() {
    const [modalSwitch, setModalSwitch] = useState(false);

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

            <DialogContent>

                <SignInModal
                    modalSwitch={modalSwitch}
                    setModalSwitch={setModalSwitch}
                />
                <RegisterModal
                    modalSwitch={modalSwitch}
                    setModalSwitch={setModalSwitch}
                />

            </DialogContent>


        </Dialog>
    )
}
