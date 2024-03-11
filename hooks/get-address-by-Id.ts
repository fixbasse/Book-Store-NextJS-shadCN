import prismaDb from "@/lib/prismadb";

export default async function getAddressById(id: string) {
    try {
        const address = await prismaDb.address.findUnique({
            where: {
                id: id
            }
        });

        if (!address) return null;

        return address;
    } catch (error) {
        console.log(error);

    }
};