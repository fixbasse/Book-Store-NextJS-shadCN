import React from 'react'
import AccountHeroContent from './_components/AccountHeroContent'
import getCurrentUser from '@/hooks/getCurrentUser'
import prismaDb from '@/lib/prismadb';

const DashboardPage = async () => {
    const user = await getCurrentUser();
    

    return (
        <>

            <title>
                User | Dashboard
            </title>

            <AccountHeroContent
                user={user}
            />
        </>
    )
}

export default DashboardPage