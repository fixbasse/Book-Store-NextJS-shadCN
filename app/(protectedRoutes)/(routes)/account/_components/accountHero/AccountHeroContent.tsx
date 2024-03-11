import Typography from '@/components/text/Typography'
import React from 'react'
import { AccountAddressModal } from '../AccountAddressModal'
import { User } from '@prisma/client'
interface AccountHeroContentProps {
    user: User | undefined | null;
}

const AccountHeroContent = ({
    user
}: AccountHeroContentProps) => {
    console.log(user?.email);
    
    return (
        <>

            <section className='flex flex-col gap-4 px-4'>
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
                            <button className='text-primary'>
                                Edit
                            </button>
                        </div>

                        <AccountAddressModal />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AccountHeroContent