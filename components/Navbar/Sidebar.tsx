import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { navData } from "./TopNavbar/Navigation"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { SidebarCategories } from "./SidebarCategories"
import { IoMdMenu } from "react-icons/io";

export function Sidebar() {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <IoMdMenu
                        className='lg:hidden text-primary cursor-pointer outline-none focus:ring-0'
                        size={30}
                    />
                </SheetTrigger>
                <SheetContent side='top' className="mt-[58px] font-bold sm:text-xl w-full h-full lg:hidden flex flex-col gap-8">
                    <SidebarCategories />
                    {navData.map((item) => (
                        <Link
                            href={item.href}
                            key={item.href}
                            className="flex items-center justify-between"
                        >
                            {item.label}
                            <IoIosArrowForward className="text-primary" />
                        </Link>
                    ))}
                </SheetContent>
            </Sheet>
        </>
    )
}
