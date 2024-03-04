import { Book } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Typography from '../text/Typography'

const Logo = () => {
  return (
    <Link
      href='/'
      className='flex items-center gap-2'
    >

      <Book size={50} className='text-primary hidden lg:block' />
      <Book size={30} className='text-primary lg:hidden' />

      <Typography className='sm:text-xl lg:text-2xl'>
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