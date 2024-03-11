import React from 'react'
import { EditAddressModal } from '../_components/EditAddressModal'
import getAddressById from '@/hooks/get-address-by-Id'

interface EditAddressPageProps {
    params: {
        id: string
    }
}

//* PAGE 
const EditAddressPage = async ({ params }: EditAddressPageProps) => {
    const address = await getAddressById(params.id);

    console.log(address);
    if (!address) return null;

    return (
        <div>

            <EditAddressModal address={address} />

        </div>
    )
}

export default EditAddressPage