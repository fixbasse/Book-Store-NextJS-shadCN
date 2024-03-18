import React from 'react'
import { DropdownNavbar } from '../BottomNavbar/DropDownNavbar'
import { ThemeToggle } from '../../ThemeToggle'
import { DropDownCart } from '../BottomNavbar/Cart/DropDownCart'
import getCurrentUser from '@/hooks/getCurrentUser'
import { TriggerSignInModalCart } from '@/components/Modal/TriggerSignInModal-Cart'

const UserMenu = async () => {
  const user = await getCurrentUser();

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
        <TriggerSignInModalCart />
      )}


      <DropdownNavbar />
    </div>
  )
}

export default UserMenu