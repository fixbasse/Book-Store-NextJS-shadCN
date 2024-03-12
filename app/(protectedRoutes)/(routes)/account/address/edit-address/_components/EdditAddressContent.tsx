// 'use client'

// import { Address } from '@prisma/client'
// import axios from 'axios'
// import { useSession } from 'next-auth/react'
// import React, { useEffect, useState } from 'react'


// const EdditAddressContent = () => {
//     const [address, setAddress] = useState<Address>([]);

//     useEffect(() => {
//         const getAddress = async () => {
//             const res = await axios.get(`/api/address`);
//             console.log(res.data);
//             setAddress(res.data);
//         }

//         getAddress();
//     }, [])

//     return (
//         <div>

//             {address.map((item) => (
//                 <div key={item.id}>
//                     {item.address}
//                 </div>
//             ))}
//             Edit
//         </div>
//     )
// }

// export default EdditAddressContent