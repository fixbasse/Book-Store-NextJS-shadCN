import Typography from '@/components/text/Typography'
import { Button } from '@/components/ui/button'
import React from 'react'


// interface AccountCartOrderProps {
//     cartData:  cartDataType;
// }

const AccountCartOrder = () => {
    return (
        <>
            <h2 className='font-bold'>Order Summary</h2>

            <Typography className='pt-2'>
                <div className='flex items-center justify-between'>
                    Product price
                    <h2 className='font-bold'>
                        $ 0
                    </h2>
                </div>
                <div className='flex items-center justify-between'>
                    Shipping fee
                    <span className='font-bold'>
                        $ 0.00
                    </span>
                </div>
            </Typography>

            {/* TOTAL PRICE */}
            <div className='flex items-center justify-between my-4 font-bold'>
                <h2>
                    Total
                </h2>

                <h1 className='text-primary text-xl'>
                    $ 0.00
                </h1>
            </div>

            <Button className='w-full font-bold'>
                Payment
            </Button>
        </>
    )
}

export default AccountCartOrder