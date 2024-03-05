import React from 'react'
import AccoutHeroSidebar from './AccoutHeroSidebar'
import AccountHeroContext from './AccountHeroContent'

const AccountHero = () => {
    return (
        <div className='flex gap-8'>

            <section className='bg-background py-4 w-[30%] rounded-md'>
                <AccoutHeroSidebar />
            </section>
            <section className='bg-background py-4 w-[70%] rounded-md'>
                <AccountHeroContext />
            </section>

        </div>
    )
}

export default AccountHero