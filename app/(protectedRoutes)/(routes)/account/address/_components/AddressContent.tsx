'use client'

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Address } from "@prisma/client"
import SingleAddress from "./SingleAddress";
import { addressHeader } from "@/data";
import { CreateNewAddressModal } from "./CreateNewAddressModal";
import Typography from "@/components/text/Typography";
import { Button } from "@/components/ui/button";

interface AddressContentProps {
    address: Address[] | null | void;
};

export type Inputs = {
    address: Address[];
}

const AddressContent = ({
    address
}: AddressContentProps) => {
    const [edit, setEdit] = useState(false);
    const { register, handleSubmit } = useForm<Inputs>();



    const onSubmit: SubmitHandler<Inputs> = (values) => {
        //  console.log(values);
        // selectedAddress(values)
       // localStorage.setItem('address', JSON.stringify(values.address));
    };

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

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* TH */}
                <section className='rounded-lg my-4'>
                    <div className='grid grid-cols-5 bg-primary-foreground dark:bg-muted p-4 rounded-t-md'>
                        {addressHeader.map((item) => (
                            <Typography key={item.id} className='font-bold'>
                                {item.label}
                            </Typography>
                        ))}
                    </div>

                    {address?.map((item) => (
                        <SingleAddress
                            key={item.id}
                            address={item}
                            edit={edit}
                            register={register}
                        />
                    ))}
                </section>


                {/* BTN */}
                <section className="flex items-center justify-end gap-2">
                    <CreateNewAddressModal />

                    <Button
                        type="submit"
                        className={edit ? 'block' : 'hidden'}>
                        Save
                    </Button>
                </section>
            </form>

        </div>
    )
}

export default AddressContent