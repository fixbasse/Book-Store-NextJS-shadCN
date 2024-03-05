'use client'

import {
    User,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowDown } from "react-icons/io";
import { useCurrentUser } from "@/hooks/use-current-user";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { userMenuData } from "@/data";

import { signOut } from "next-auth/react";

import Link from "next/link";
import { LayoutModal } from "@/components/Modal/LayoutModal";

export function DropdownNavbar() {
    const user = useCurrentUser();
    
    return (
        <DropdownMenu>

            <div className={user && 'hidden'}>
                <LayoutModal />
            </div>

            {user && (
                // User Icon & Name
                <DropdownMenuTrigger asChild>
                    <span className="flex items-center gap-4">
                        <User />
                        <span className="font-bold hover:text-primary hidden lg:block">
                            {user?.name}
                        </span>
                        <IoIosArrowDown className="text-primary hidden lg:block" />
                    </span>
                </DropdownMenuTrigger>
            )}

            <DropdownMenuContent className="w-56 p-0 font-bold">
                {userMenuData.map((item) => (
                    <Link href={item.href}
                        key={item.href}
                        className="px-4 py-2 flex gap-2"
                    >
                        <span className="text-xl text-primary">
                            {item.icon}
                        </span>
                        {item.label}
                    </Link>
                ))}

                {/* LOGOUT */}
                {user &&
                    <DropdownMenuItem
                        onClick={() => signOut()}
                        className="px-4 py-2 flex gap-2 cursor-pointer"
                    >
                        <RiLogoutBoxRFill className="text-xl text-primary" />
                        Logout
                    </DropdownMenuItem>
                }

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
