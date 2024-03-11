import React from 'react'
import AccoutHeroSidebar from './accountHero/AccoutHeroSidebar'
import AccountHeroContext from './accountHero/AccountHeroContent'
import getCurrentUser from '@/hooks/getCurrentUser';

interface AccountHeroProps {
    params?: {
        id: string
    }
}


const AccountHero = async ({ params }: AccountHeroProps) => {
    const user = await getCurrentUser();


    return (
        <>

            <AccountHeroContext
                user={user}
            // address={address}
            />

        </>
    )
}

export default AccountHero