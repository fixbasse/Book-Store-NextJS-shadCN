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
            {children}
        </>
    );
}
