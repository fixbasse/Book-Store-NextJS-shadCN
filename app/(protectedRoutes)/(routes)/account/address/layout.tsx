import getCurrentUser from "@/hooks/getCurrentUser";
import prismaDb from "@/lib/prismadb";


export default async function AddressLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getCurrentUser();
    const address = await prismaDb.address.findMany({
        where: {
            userId: user?.id
        }
    });

    return (
        <div>
            {children}
        </div>
    );
}
