import {
    ArrowDown,
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    Menu,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowDown } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { categoriesData } from "@/data";
import { IoMdMenu } from "react-icons/io";

export function DropDownCategories() {
    return (
        <Tabs defaultValue="Book" className="hidden lg:block">
            <DropdownMenu>


                <DropdownMenuTrigger asChild className="">
                    <div className="flex items-center justify-center gap-2 border h-[40px] p-2 rounded-md w-[250px] cursor-pointer">
                        <IoMdMenu className="text-primary" size={30} />
                        <span className="font-bold">
                            Categories
                        </span>
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-[300px] duration-500 p-0">
                    {/* TAB */}
                    <TabsList className="w-full p-0">
                        <TabsTrigger value="Book" className="w-full font-bold">
                            Book
                        </TabsTrigger>
                        <TabsTrigger value="Life Styles" className="w-full font-bold">
                            Life Styles
                        </TabsTrigger>
                    </TabsList>

                    {/* 1st tap */}
                    <TabsContent value="Book">
                        <TabsContent value="Book" className="flex flex-col m-0 font-bold">
                            {categoriesData.map((item) => (
                                <span key={item.label} className="px-4 py-2 flex items-center gap-2">
                                    {item.icon}
                                    {item.label}
                                </span>
                            ))}
                        </TabsContent>
                    </TabsContent>

                    {/* 2nd tap */}
                    <TabsContent value="Life Styles">
                        {/* 2nd tap */}
                        <TabsContent value="Life Styles" className="flex flex-col m-0 font-bold">
                            {categoriesData.map((item) => (
                                <span key={item.label} className="px-4 py-2 flex items-center gap-2">
                                    {item.icon}
                                    {item.label}
                                </span>
                            ))}
                        </TabsContent>
                    </TabsContent>


                </DropdownMenuContent>
            </DropdownMenu>
        </Tabs>
    )
}
