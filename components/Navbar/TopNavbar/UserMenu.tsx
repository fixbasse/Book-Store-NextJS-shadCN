import React from 'react'
import { DropdownNavbar } from '../BottomNavbar/DropDownNavbar'
import { ThemeToggle } from '../../ThemeToggle'

const UserMenu = () => {
  return (
    <div className='flex items-center gap-4 cursor-pointer'>
      <ThemeToggle />
      <DropdownNavbar />
    </div>
  )
}

export default UserMenu