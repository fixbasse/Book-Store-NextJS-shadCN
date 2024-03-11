import React from 'react'
import { CreateNewAddressModal } from './_components/CreateNewAddressModal'
import SingleAddress from './_components/SingleAddress'
import Typography from '@/components/text/Typography'
import prismaDb from '@/lib/prismadb'
import { addressHeader } from '@/data'

//* PAGE 
const AddressPage = async () => {
  const address = await prismaDb.address.findMany();
  console.log(address);

  return (
    <div className='flex flex-col justify-between h-full'>

      <title>
        User | Address
      </title>

      <Typography className='text-xl font-bold'>
        Address
      </Typography>

      {/* HEAD */}
      <div className='border rounded-md my-4'>
        <section className='grid grid-cols-5 bg-primary-foreground dark:bg-muted p-4 rounded-t-md'>
          {addressHeader.map((item) => (
            <Typography key={item.id} className='font-semibold'>
              {item.label}
            </Typography>
          ))}
        </section>

        {address.map((item) => (
          <SingleAddress
            address={item}
            key={item.id} />
        ))}
      </div>

      {/* BUTTON */}
      <div className='ml-auto'>
        <CreateNewAddressModal />
      </div>
    </div>
  )
}

export default AddressPage