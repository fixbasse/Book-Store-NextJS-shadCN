
import Link from 'next/link'
import React from 'react'
import Typography from '../../text/Typography'
import { FaBook } from "react-icons/fa6";
// Left Navbar || Center for small screen
const Logo = () => {
  return (
    <Link
      href='/'
      className='flex items-center gap-2'
    >

      <FaBook size={50} className='text-primary hidden lg:block' />
      <FaBook size={30} className='text-primary lg:hidden' />

      <Typography className='text-xl lg:text-2xl'>
        <h2 className='font-bold'>
          Active
        </h2>
        <span>
          Book
        </span>
      </Typography>
    </Link>
  )
}

export default Logo