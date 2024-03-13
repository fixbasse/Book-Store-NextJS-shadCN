'use client'

import { useState } from "react";

import { Address } from "@prisma/client"
import SingleAddress from "./SingleAddress";
import { addressHeader } from "@/data";
import Typography from "@/components/text/Typography";
import { CreateNewAddressModal } from "./CreateNewAddressModal";
import { Button } from "@/components/ui/button";


interface AddressContentProps {
    address: Address[];
};

const AddressContent = ({
    address
}: AddressContentProps) => {
    const [edit, setEdit] = useState(false);

    return (
        <div>
            <section className="flex justify-between items-center">
                <Typography className='text-xl font-bold'>
                    Address
                </Typography>

                <button
                    onClick={() => setEdit(!edit)}
                    className="text-primary font-bold">
                    Select
                </button>
            </section>

            <form>
                {/* HEADER */}
                <div className='rounded-lg my-4'>
                    <section className='grid grid-cols-5 bg-primary-foreground dark:bg-muted p-4 rounded-t-md'>
                        {addressHeader.map((item) => (
                            <Typography key={item.id} className='font-bold'>
                                {item.label}
                            </Typography>
                        ))}
                    </section>



                    {address.map((item) => (
                        <SingleAddress
                            key={item.id}
                            address={item}
                        />
                    ))}

                </div>


                {/* Add Address BTN */}
                <section className="flex items-center justify-end gap-2">
                    <CreateNewAddressModal />

                    <Button className={edit ? 'block' : 'hidden'}>
                        Save
                    </Button>
                </section>
            </form>

        </div>
    )
}

export default AddressContent