import Typography from '@/components/text/Typography'
import React from 'react'
import { AccountAddressModal } from '../../_components/AccountAddressModal'
import { User } from '@prisma/client'
import Link from 'next/link';
interface AccountHeroContentProps {
    user: User | undefined | null;
}

const AccountHeroContent = ({
    user,
}: AccountHeroContentProps) => {
    console.log(user?.address);

    return (
        <>

            <section className='flex flex-col gap-4'>
                <Typography className='text-xl font-bold'>
                    Manage My account
                </Typography>

                {/* Content */}
                <div className='flex flex-col lg:flex-row justify-between gap-8'>

                    <div className='border p-4 rounded-md w-full'>
                        <div className='flex items-center gap-2 pb-4'>
                            <h2 className='font-semibold'>
                                My Profile
                            </h2>
                            <button className='text-primary'>
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
                    </div>

                    {/* Address */}
                    <div className='border p-4 rounded-md w-full flex flex-col justify-between'>
                        <div className='flex items-center gap-2 pb-4'>
                            <h2 className='font-semibold'>
                                My Address
                            </h2>
                            <Link href='/account/address' className='text-primary'>
                                Edit
                            </Link>
                        </div>

                        {/* Default Address */}
                        <article>
                            <h3 className='font-medium'>
                                Default Address
                            </h3>

                            <div className='py-2'>
                                <div className='flex gap-2'>
                                    <span>{user?.firstname}</span>
                                    <span>{user?.lastname}</span>
                                    <span>{user?.mobile}</span>
                                </div>
                                <div>
                                    {user?.address}
                                    {user?.district}
                                </div>
                                <div>
                                    {user?.postcode}
                                </div>
                            </div>
                        </article>

                        <AccountAddressModal />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AccountHeroContent