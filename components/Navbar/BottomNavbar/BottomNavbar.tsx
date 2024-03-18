'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { DropDownCategories } from './DropDownCategories'

import { FaBell } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Search } from 'lucide-react'

import { useCurrentUser } from '@/hooks/use-current-user';
import { TriggerSignInModal } from '@/components/Modal/TriggerSignInModal'
import { TriggerSignInModalCart } from '@/components/Modal/TriggerSignInModal-Cart'
import { DropDownCart } from './Cart/DropDownCart';

const BottomNavbar = () => {
    const user = useCurrentUser();

    return (
        <>
            {/* LEFT */}
            <DropDownCategories />

            {/* CENTER */}
            <div className="flex items-center w-full">
                <input
                    type="text"
                    className="border p-2 w-full h-[40px] rounded-l-md pl-4 placeholder:italic placeholder:font-bold"
                    placeholder="Type name / author..."
                />
                <Button className="rounded-l-none h-[40px]">
                    <Search size={20} />
                </Button>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:flex items-center gap-8" >
                <div className="flex items-center gap-4 text-muted-foreground ml-20 cursor-pointer"
                >
                    {user ? (
                        <>
                            <FaBell size={25} />
                            <FaHeart size={25} />
                        </>
                    ) : (
                        <TriggerSignInModal />
                    )}

                </div>

                <span className='text-muted-foreground'>
                    |
                </span>

                <div className="flex items-center gap-2 cursor-pointer">
                    {user ? (
                        <div className='hidden lg:block'>
                            <DropDownCart />
                        </div>

                    ) : (
                        <TriggerSignInModalCart />
                    )}
                </div>

            </div>
        </>
    )
}

export default BottomNavbar