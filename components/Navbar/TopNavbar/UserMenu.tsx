'use client'

import React from 'react'
import { DropdownNavbar } from '../BottomNavbar/DropDownNavbar'
import { ThemeToggle } from '../../ThemeToggle'
import getCurrentUser from '@/hooks/getCurrentUser'
import { TriggerSignInModalCart } from '@/components/Modal/TriggerSignInModal-Cart'
import { DropDownCart } from '../BottomNavbar/DropDownCart'
import { useCurrentUser } from '@/hooks/use-current-user'

const UserMenu = () => {
  const user = useCurrentUser(); // use this due to the main userMenu is client

  return (
    <div className='flex items-center gap-4 cursor-pointer'>
      <div className='max-md:hidden'>
        <ThemeToggle />
      </div>


      {user ? (
        <div className='lg:hidden'>
          <DropDownCart />
        </div>
      ) : (
        <div className='lg:hidden'>
          <TriggerSignInModalCart />
        </div>
      )}


      <DropdownNavbar />
    </div>
  )
}

export default UserMenu