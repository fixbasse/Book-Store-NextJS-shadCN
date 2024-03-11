// import getCurrentUser from "@/hooks/getCurrentUser";
// import { useCurrentUser } from "@/hooks/use-current-user";
// import prismaDb from "@/lib/prismadb";
// import { getSession } from "next-auth/react";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//     const user = await getCurrentUser();

//     if (!user) {
//         return NextResponse.json('No User');
//     };

//     try {
//         const {
//             firstname,
//             lastname,
//             mobile,
//             address,
//             district,
//             postcode,
//         } = await req.json();

//         const newAddress = await prismaDb.address.create({
//             data: {
//                 firstname,
//                 lastname,
//                 mobile,
//                 address,
//                 district,
//                 postcode,
//                 userId: user.id
//             }
//         });

//         return NextResponse.json(newAddress);
//     } catch (error) {
//         return NextResponse.json('Internal Error at Account');
//     }
// };