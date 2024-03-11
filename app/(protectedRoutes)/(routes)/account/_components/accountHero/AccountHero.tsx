import React from 'react'
import AccoutHeroSidebar from './AccoutHeroSidebar'
import AccountHeroContext from './AccountHeroContent'
import getCurrentUser from '@/hooks/getCurrentUser';


const AccountHero = async () => {
    const user = await getCurrentUser();

    return (
        <div className='flex flex-col lg:flex-row gap-8'>

            <section className='bg-background py-4 lg:w-[30%] rounded-md'>
                <AccoutHeroSidebar user={user} />
            </section>
            <section className='bg-background py-4 lg:w-[70%] rounded-md'>
                <AccountHeroContext user={user} />
            </section>

        </div>
    )
}

export default AccountHero