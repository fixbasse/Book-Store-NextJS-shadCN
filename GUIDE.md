Book-Store
1. Authentication
2. Buy & Filter product
3. Create blog page
4. Chat App
5. Language Switcher

** NOW
-Updated Address //
-Choose specific address // 
-add to cart

UI
-loading screen
-refresh modal when submit

<! **-- STEPS --**>
-Navbar 
    -Logo
    -Navigation
    -Filter by name or author
    -Liked by user
    -Cart item
    -User menu bar


<!*-- User -->
-Create account and login //
-Edit & Delete the profile data
-Send message 
-Select product and buying, editing or deleting //


<!-- shadCN -->
-DropdownContent p-0
-DropDownItem px-4 py-2


https://authjs.dev/guides/upgrade-to-v5

import getAddressById from "@/hooks/get-address-by-Id";
import prismaDb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export default async function PUT(req: Request, params: string) {

    try {
        const savedAddress = await getAddressById(params);

        const {
            firstname,
            lastname,
            mobile,
            address,
            district,
            postcode
        } = await req.json();

        const editAddress = await prismaDb.address.updateMany({
            where: {
                id: savedAddress?.id
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

        if (!editAddress) return null;

        return NextResponse.json(editAddress);
    } catch (error) {
        return NextResponse.json('Error at Edit route')
    }
};