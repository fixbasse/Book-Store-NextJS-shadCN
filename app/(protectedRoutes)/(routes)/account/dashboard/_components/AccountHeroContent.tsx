'use client'

import Typography from '@/components/text/Typography'
import React from 'react'
import { User } from '@prisma/client'
import Link from 'next/link';
import { useAddressStore } from '@/hooks/store/use-address-store';
interface AccountHeroContentProps {
    user: User | undefined | null;
};

const AccountHeroContent = ({
    user,
}: AccountHeroContentProps) => {
    const { addressCart } = useAddressStore()


    return (
        <>

            <section className='flex flex-col gap-4'>
                <Typography className='text-xl font-bold'>
                    Manage My account
                </Typography>

                {/* Content */}
                <main className='flex flex-col lg:flex-row justify-between gap-8'>

                    <section className='border p-4 rounded-md w-full'>
                        <div className='flex items-center justify-between pb-4'>
                            <Typography className='font-bold'>
                                My Profile
                            </Typography>
                            <button className='text-primary font-semibold'>
                                Edit
                            </button>
                        </div>

                        <article className='flex flex-col'>
                            <h2>
                                {user?.name}
                            </h2>
                            <span>
                                {user?.email}
                            </span>
                        </article>
                    </section>

                    {/* Address */}
                    <section className='border p-4 rounded-md w-full flex flex-col justify-between'>
                        <div className='flex items-center justify-between pb-4'>
                            <Typography className='font-bold'>
                                My Address
                            </Typography>
                            <Link href='/account/address' className='text-primary font-semibold'>
                                Edit
                            </Link>
                        </div>

                        {/* Default Address */}
                        <article>
                            <h3 className='font-bold'>
                                Default Address
                            </h3>

                            <div className='py-2'>
                                {addressCart.map((item) => (
                                    <div key={item.id} className='flex gap-1 flex-wrap'>
                                        <div className='flex gap-1'>
                                            <span>
                                                {item.firstname}
                                            </span>
                                            {item.lastname}
                                        </div>
                                        <div className='flex flex-wrap gap-1'>
                                            <span>
                                                {item.address}
                                            </span>
                                            <span>
                                                {item.district}
                                            </span>
                                            <span>
                                                {item.postcode}

                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>

                        {/* <AccountAddressModal /> */}
                    </section>
                </main>
            </section>
        </>
    )
}

export default AccountHeroContent