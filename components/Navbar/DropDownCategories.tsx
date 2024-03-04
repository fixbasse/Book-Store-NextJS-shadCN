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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function DropDownCategories() {
    return (
        <Tabs defaultValue="account" className="hidden lg:block">
            <DropdownMenu>

                <DropdownMenuTrigger asChild>
                    <div className="flex items-center justify-center gap-2 border p-2 rounded-md w-[250px] cursor-pointer">
                        <Menu className="text-primary" />
                        <span className="font-bold">
                            Categories
                        </span>
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-[300px]">
                    {/* TAB */}
                    <TabsList className="w-full">
                        <TabsTrigger value="account" className="w-full">
                            Account
                        </TabsTrigger>
                        <TabsTrigger value="password" className="w-full">
                            Password
                        </TabsTrigger>
                    </TabsList>
                    {/* 1st tap */}
                    <TabsContent value="account">
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Keyboard className="mr-2 h-4 w-4" />
                                <span>Keyboard shortcuts</span>
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </TabsContent>
                    {/* 2nd tap */}
                    <TabsContent value="password">
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Keyboard className="mr-2 h-4 w-4" />
                                <span>Keyboard shortcuts</span>
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </TabsContent>


                </DropdownMenuContent>
            </DropdownMenu>
        </Tabs>
    )
}
