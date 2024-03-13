'use client'

import { Button } from '@/components/ui/button';
import { useSelectAddressStore } from '@/hooks/use-address-id';
import { Address } from '@prisma/client'
import Link from 'next/link';
import React from 'react'
import { Form, SubmitHandler, useForm } from 'react-hook-form';


interface SingleAddressProps {
    address: Address;
};

// export type Inputs = {
//     addressId: string | Address;
// };

const SingleAddress = ({
    address
}: SingleAddressProps) => {
    const { addressId, setAddressId } = useSelectAddressStore();


    console.log(addressId);


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

                <div className='flex items-center gap-12'>
                    <Button variant='secondary' className='w-[50px] p-2'>
                        <Link
                            className='text-center'
                            href={`/account/address/edit-address/${address?.id}`}
                        >
                            Edit
                        </Link>
                    </Button>

                    {/* Select */}
                    <form className='flex flex-col'>
                        <input
                            type="radio"
                            value={address.address}
                            onChange={(e) => setAddressId(e.currentTarget.value)}
                            // {...register('addressId')}
                        />
                        <button type='submit'>
                            Save
                        </button>
                    </form>

                    {addressId}


                </div>
            </section>

        </div>
    )
}

export default SingleAddress