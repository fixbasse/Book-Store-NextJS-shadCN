import prismaDb from "@/lib/prismadb";
import { auth } from "@/auth";

export async function getSession() {
    return await auth(); // replace getServerSession()
};

export async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        };

        const currentUser = await prismaDb.user.findUnique({
            where: {
                email: session.user.email
            }
        });

        if (!currentUser) {
            return null;
        };

        return currentUser;
    } catch (error) {
        console.log(error);
    }
};

export default getCurrentUser;