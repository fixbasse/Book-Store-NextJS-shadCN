'use client'

import React from "react";
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
