import { Button } from '@/components/ui/button'
import { Bell, Heart, Search, ShoppingCartIcon } from 'lucide-react'
import React from 'react'
import { DropDownCategories } from './DropDownCategories'
import { FaBell } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const BottomNavbar = () => {
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
            <div className="hidden lg:flex items-center gap-8">
                <div className="flex items-center gap-4 text-muted-foreground ml-20">
                    <FaBell size={25} />
                    <FaHeart size={25} />
                </div>

                <div className="flex items-center gap-2">
                    <FaShoppingCart size={25} className='text-muted-foreground' />
                    <div className='font-bold'>
                        $
                        <span>
                            0.00
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BottomNavbar