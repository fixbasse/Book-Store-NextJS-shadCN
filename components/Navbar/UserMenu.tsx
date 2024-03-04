import { User } from 'lucide-react'
import React from 'react'
import { DropdownNavbar } from './DropDownNavbar'
import { ThemeToggle } from '../ThemeToggle'

const UserMenu = () => {
  return (
    <div className='flex items-center gap-4 cursor-pointer'>
      <ThemeToggle />
      <DropdownNavbar />
    </div>
  )
}

export default UserMenu