import prismaDb from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

//* Only the logged in user
export async function getAllAddress() {
    try {
        const user = await getCurrentUser();

        if (!user) return console.log('No user!');

        const address = await prismaDb.address.findMany({
            where: {
                userId: user?.id
            }
        });

        return address;
    } catch (error) {
        console.log('Internal Error at getAllAddress!');
    }
};

export default getAllAddress;