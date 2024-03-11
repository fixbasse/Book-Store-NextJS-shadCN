'use client'

import React, { useCallback } from "react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaBell, FaHeart } from "react-icons/fa";

import { useState } from "react";
import { RegisterModal } from "./RegisterModal";
import { SignInModal } from './SignInModal';

export function TriggerSignInModal() {
    const [modalSwitch, setModalSwitch] = useState(false);

    const handleClose = useCallback(() => {
        setModalSwitch(!modalSwitch);
    }, [modalSwitch]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="flex items-center gap-4">
                    <FaBell size={25} />
                    <FaHeart size={25} />
                </button>
            </DialogTrigger>

            <DialogContent>

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
