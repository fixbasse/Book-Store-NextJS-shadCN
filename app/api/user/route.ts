import getCurrentUser from "@/hooks/getCurrentUser";
import prismaDb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const user = await getCurrentUser();

    try {
        const { firstname, lastname, mobile, address, district, postcode } = await req.json();

        const addAddress = await prismaDb.user.update({
            where: {
                id: user?.id,
            },
            data: {
                firstname,
                lastname,
                mobile,
                address,
                district,
                postcode
            }
        })

        return NextResponse.json(addAddress)
    } catch (error) {
        return NextResponse.json('Internal Error')
    }
};