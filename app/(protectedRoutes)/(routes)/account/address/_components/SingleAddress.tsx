'use client'

import React from 'react'
import Link from 'next/link';
import { Address } from '@prisma/client'

import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Form, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import { Inputs } from './AddressContent';


interface SingleAddressProps {
    address: Address;
    edit: boolean;
    register: UseFormRegister<Inputs>;
};



const SingleAddress = ({
    address,
    edit,
    register
}: SingleAddressProps) => {

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
                    <RadioGroup className={edit ? 'block' : 'hidden'}>
                        <RadioGroupItem
                            value={address.address}
                            {...register('address')}
                        />
                    </RadioGroup>
                </div>
            </section>

        </div>
    )
}

export default SingleAddress