
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { categoriesData, lifestylesData } from "@/data";
import { IoMdMenu } from "react-icons/io";

export function DropDownCategories() {
    return (
        <Tabs defaultValue="Book" className="hidden lg:block">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center justify-center gap-2 border h-[40px] p-2 rounded-md w-[250px] cursor-pointer">
                        <IoMdMenu className="text-primary" size={30} />
                        <span className="font-bold">
                            Categories
                        </span>
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-[300px] duration-500 p-0">
                    {/* TAB */}
                    <TabsList className="w-full p-0 h-0">
                        <TabsTrigger value="Book" className="w-full font-bold">
                            Book
                        </TabsTrigger>
                        <TabsTrigger value="Life Styles" className="w-full font-bold">
                            Life Styles
                        </TabsTrigger>
                    </TabsList>

                    {/* 1st tap */}
                    <TabsContent value="Book" className="flex flex-col font-bold">
                        {categoriesData.map((item) => (
                            <div key={item.label} className="px-4 py-2 flex items-center gap-2 hover:bg-accent">
                                <span className="text-primary">
                                    {item.icon}
                                </span>
                                {item.label}
                            </div>
                        ))}
                    </TabsContent>

                    {/* 2nd tap */}
                    <TabsContent value="Life Styles">
                        {/* 2nd tap */}
                        <TabsContent value="Life Styles" className="flex flex-col font-bold">
                            {lifestylesData.map((item) => (
                                <div key={item.label} className="px-4 py-2 flex items-center gap-2 hover:bg-accent">
                                    <span className="text-primary">
                                        {item.icon}
                                    </span>
                                    {item.label}
                                </div>
                            ))}
                        </TabsContent>
                    </TabsContent>
                </DropdownMenuContent>
                
            </DropdownMenu>
        </Tabs>
    )
}
