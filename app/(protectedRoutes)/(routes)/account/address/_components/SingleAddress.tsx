import { Button } from '@/components/ui/button';
import { Address } from '@prisma/client'
import Link from 'next/link';
import React from 'react'

interface SingleAddressProps {
    address: Address | null | undefined;
}

const SingleAddress = ({
    address
}: SingleAddressProps) => {

    console.log(address);
    
    return (
        <div>

            {/* Show Address */}
            <section className='grid grid-cols-5 p-4'>
                <div className='flex gap-1'>
                    <span>
                        {address?.firstname}
                    </span>
                    {address?.lastname}
                </div>

                <h2>
                    {address?.address}
                </h2>
                <h2>
                    {address?.postcode}
                </h2>
                <h2>
                    {address?.mobile}
                </h2>

                <Link
                    className='text-center'
                    href={`/account/address/edit-address/${address?.id}`}
                >
                    <Button variant='secondary'>
                        Edit
                    </Button>
                </Link>
            </section>

        </div>
    )
}

export default SingleAddress