import React from 'react'
import { CreateNewAddressModal } from './_components/CreateNewAddressModal'
import SingleAddress from './_components/SingleAddress'
import Typography from '@/components/text/Typography'
import prismaDb from '@/lib/prismadb'
import { addressHeader } from '@/data'
import getCurrentUser from '@/hooks/getCurrentUser'

//* PAGE 
const AddressPage = async () => {
  const user = await getCurrentUser();
  const address = await prismaDb.address.findMany({
    where: {
      userId: user?.id
    }
  });


  return (
    <div className='flex flex-col justify-between h-full'>

      <title>
        User | Address
      </title>

      <Typography className='text-xl font-bold'>
        Address
      </Typography>

      {/* HEADER */}
      <div className='rounded-lg my-4'>
        <section className='grid grid-cols-5 bg-primary-foreground dark:bg-muted p-4 rounded-t-md'>
          {addressHeader.map((item) => (
            <Typography key={item.id} className='font-bold'>
              {item.label}
            </Typography>
          ))}
        </section>

        {/* Single Address Content */}
        {address.map((item) => (
          <SingleAddress
            address={item}
            key={item.id}
          />
        ))}
      </div>

      {/* Add Address BTN */}
      <div className='ml-auto'>
        <CreateNewAddressModal />
      </div>
    </div>
  )
}

export default AddressPage