import React from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import UserMenu from '../UserMenu'
import { Menu } from 'lucide-react'

const TopNavbar = () => {
    return (
        <>
            <Menu
                className='lg:hidden text-primary cursor-pointer'
                size={30}
            />
            
            <Logo />
            <Navigation />
            <UserMenu />
        </>
    )
}

export default TopNavbar