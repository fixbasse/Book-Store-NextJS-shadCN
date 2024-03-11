// import getAddressById from "@/hooks/get-address-by-Id";
// import prismaDb from "@/lib/prismadb";
// import { NextResponse } from "next/server";

// export default async function PUT(req: Request, params: string) {

//     try {
//         const savedAddress = await getAddressById(params);

//         const {
//             firstname,
//             lastname,
//             mobile,
//             address,
//             district,
//             postcode
//         } = await req.json();

//         const editAddress = await prismaDb.address.updateMany({
//             where: {
//                 id: savedAddress?.id
//             },
//             data: {
//                 firstname,
//                 lastname,
//                 mobile,
//                 address,
//                 district,
//                 postcode
//             }
//         });

//         if (!editAddress) return null;

//         return NextResponse.json(editAddress);
//     } catch (error) {
//         return NextResponse.json('Error at Edit route')
//     }
// };