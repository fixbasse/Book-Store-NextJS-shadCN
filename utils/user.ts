import prismaDb from "@/lib/prismadb"

export const getUserByEmail = async (email: string) => {
    try {
        const user = await prismaDb.user.findUnique({
            where: {
                email
            }
        });

        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getUserById = async (id: string) => {
    try {
        const user = await prismaDb.user.findUnique({
            where: {
                id
            }
        });

        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
};