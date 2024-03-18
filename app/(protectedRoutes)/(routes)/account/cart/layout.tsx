import getCurrentUser from "@/hooks/getCurrentUser";
import AccoutCartSidebar from "./_components/AccountCartSidebar";
import AccountCartOrder from "./_components/AccountCartOrder";

export default async function CartLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getCurrentUser();

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4">
                <section className='bg-background py-4 px-4 lg:w-[70%] rounded-md'>
                    {children}
                </section>

            <div className="flex flex-col gap-4 lg:w-[30%] ">
                <aside className='bg-background p-4 rounded-md' >
                    <AccoutCartSidebar />

                </aside>

                <aside className="bg-background p-4 rounded-md">
                    <AccountCartOrder />

                </aside>
            </div>

                    </div>
        </>
    );
}
