import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import UserMenu from './UserMenu'
import { Sidebar } from '../Sidebar'

const TopNavbar = () => {
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='lg:hidden'>
                <Sidebar />
            </div>

            <Logo />
            <Navigation />
            <UserMenu />
        </>
    )
}

export default TopNavbar