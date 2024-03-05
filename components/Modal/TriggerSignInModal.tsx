'use client'

import React from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { GrGoogle } from "react-icons/gr";
import { FaBell, FaGithub, FaHeart } from "react-icons/fa";

import { signIn } from 'next-auth/react'
import { useState } from "react";
import { RegisterModal } from "./RegisterModal";
import { SignInModal } from './SignInModal';

interface TriggerSignInProps {
    title?: string;
    trigger?: string
    body?: React.ReactElement
}

export function TriggerSignInModal({
    title,
    trigger,
    body
}: TriggerSignInProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [modalSwitch, setModalSwitch] = useState(false);
    const [modalSwitch2, setModalSwitch2] = useState(false);



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
