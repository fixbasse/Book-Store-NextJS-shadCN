// 'use client'

import Typography from "@/components/text/Typography";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import { userMenuData } from "@/data";
import { User } from "@prisma/client";

interface AccountHeroSidebarProps {
    user: User | undefined | null;
}

const AccoutHeroSidebar = ({
    user
}: AccountHeroSidebarProps) => {
    console.log(user?.email);
    


    return (
        <>
            <section className="flex gap-4 px-4">
                <FaCircleUser size={50} />

                <Typography className="flex flex-col font-bold">
                    <h2 className="text-xl">
                        {user?.name}
                    </h2>
                    <Link
                        href='/account/dashboard'
                        className="text-muted-foreground">
                        Edit profile
                    </Link>
                </Typography>
            </section>

            <Separator className="my-4" />

            <section className="flex flex-col gap-4 px-4">
                {userMenuData.map((item) => (
                    <Link href={item.href}
                        key={item.href}
                        className="flex gap-2"
                    >
                        <span className="text-2xl text-primary">
                            {item.icon}
                        </span>
                        <h2 className="font-medium hover:text-primary">
                            {item.label}
                        </h2>
                    </Link>
                ))}
            </section>

        </>
    )
}

export default AccoutHeroSidebar