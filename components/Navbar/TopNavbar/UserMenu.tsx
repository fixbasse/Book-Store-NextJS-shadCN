import React from 'react'
import { DropdownNavbar } from '../BottomNavbar/DropDownNavbar'
import { ThemeToggle } from '../../ThemeToggle'
import { DropDownCart } from '../BottomNavbar/Cart/DropDownCart'

const UserMenu = () => {
  return (
    <div className='flex items-center gap-4 cursor-pointer'>
      <div className='max-md:hidden'>
        <ThemeToggle />
      </div>

      <div className='md:hidden'>
        <DropDownCart />
      </div>

      <DropdownNavbar />
    </div>
  )
}

export default UserMenu