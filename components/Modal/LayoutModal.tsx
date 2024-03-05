'use client'

import React from "react";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import { RegisterModal } from "./RegisterModal";
import { SignInModal } from './SignInModal';

export function LayoutModal() {
    const [modalSwitch, setModalSwitch] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="font-bold">
                    SignIn
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
