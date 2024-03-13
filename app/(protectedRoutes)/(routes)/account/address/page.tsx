import React from 'react'
import getAllAddress from '@/hooks/get-all-address'
import AddressContent from './_components/AddressContent'

//* PAGE 
const AddressPage = async () => {
  const address = await getAllAddress();

  return (
    <div className='flex flex-col justify-between h-full'>

      <title>
        User | Address
      </title>

      <AddressContent address={address} />
      
    </div>
  )
}

export default AddressPage