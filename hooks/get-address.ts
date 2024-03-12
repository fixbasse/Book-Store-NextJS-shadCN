import prismaDb from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export async function getAddress() {
    const user = await getCurrentUser();

    if (!user) return null;

    try {
        const address = await prismaDb.address.findFirst({
            where: {
                userId: user.id
            }
        });

        return address;
    } catch (error) {
        console.log('Internal Error at get single address');

    }
};

export default getAddress;