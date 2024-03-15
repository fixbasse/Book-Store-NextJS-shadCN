import getCurrentUser from "@/hooks/getCurrentUser";
import prismaDb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const user = await getCurrentUser();

    if (!user) {
        return NextResponse.json('No User');
    };

    try {
        const {
            firstname,
            lastname,
            mobile,
            address,
            district,
            postcode,
        } = await req.json();

        const newAddress = await prismaDb.address.create({
            data: {
                firstname,
                lastname,
                mobile,
                address,
                district,
                postcode,
                userId: user.id
            }
        });

        return NextResponse.json(newAddress);
    } catch (error) {
        return NextResponse.json('Internal Error at [AddAddress]');
    }
};

//* Don't forget to send ID from client
export async function PUT(req: Request) {

    const {
        id,
        firstname,
        lastname,
        mobile,
        address,
        district,
        postcode
    } = await req.json();

    try {
        const updatedAddress = await prismaDb.address.update({
            where: {
                id: id
            },
            data: {
                firstname,
                lastname,
                mobile,
                address,
                district,
                postcode
            }
        });

        if (!updatedAddress) return null;

        return NextResponse.json(updatedAddress);
    } catch (error: any) {
        return NextResponse.json(`Internal Error at [EditAddress]`, error);
    }
};