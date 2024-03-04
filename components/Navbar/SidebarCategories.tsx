import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { categoriesData } from "@/data"

export function SidebarCategories() {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <span
                        className='lg:hidden flex items-center justify-between cursor-pointer'
                    >
                        Categories
                        <IoIosArrowForward className="text-primary" />
                    </span>
                </SheetTrigger>

                <SheetContent side='right' className="w-full lg:hidden flex flex-col p-0 gap-0 outline-none focus:ring-0">
                    <SheetClose className="py-2 outline-none focus:ring-0">
                        <IoIosArrowBack
                            size={30}
                            className="text-primary"
                        />
                    </SheetClose>
                    <Tabs defaultValue="Book" className="font-bold">
                        {/* TAB */}
                        <TabsList className="w-full p-0">
                            <TabsTrigger value="Book" className="w-full py-2 outline-none focus:ring-0 sm:text-xl font-bold">
                                Book
                            </TabsTrigger>
                            <TabsTrigger value="Life Styles" className="w-full py-2 outline-none focus:ring-0 sm:text-xl font-bold">
                                Life Styles
                            </TabsTrigger>
                        </TabsList>

                        {/* 1st tap */}
                        <TabsContent value="Book" className="flex flex-col gap-4">
                            {categoriesData.map((item) => (
                                <span key={item.label} className="px-4 py-2 flex gap-4 items-center">
                                    {item.icon}
                                    {item.label}
                                </span>
                            ))}
                        </TabsContent>
                        
                        {/* 2nd tap */}
                        <TabsContent value="Life Styles" className="flex flex-col m-0 gap-4">
                            {categoriesData.map((item) => (
                                <span key={item.label} className="px-4 py-2 flex gap-4 items-center">
                                    {item.icon}
                                    {item.label}
                                </span>
                            ))}
                        </TabsContent>
                    </Tabs>

                </SheetContent>
            </Sheet>
        </>
    )
}
