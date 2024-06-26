'use client'

import React, { useState, useCallback } from "react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { RegisterModal } from "./RegisterModal";
import { SignInModal } from './SignInModal';

export function LayoutModal() {
    const [modalSwitch, setModalSwitch] = useState(false);

    const handleClose = useCallback(() => {
        setModalSwitch(!modalSwitch);
    }, [modalSwitch]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="font-bold">
                    SignIn
                </button>
            </DialogTrigger>

            <DialogContent className="lg:w-[500px]">
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
