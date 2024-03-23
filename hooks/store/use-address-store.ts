import { Address } from '@prisma/client';
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

// interface AddressItem extends Address {
//     count: number;
// };

type AddressStore = {
    addressCart: Address[];
    add: (address: Address) => void;
    remove: (idAddress: string) => void;
    removeAll: () => void;
};

export const useAddressStore = create<AddressStore>()(
    persist(
        (set, get) => ({
            addressCart: [],
            add: (address: Address) => {
                const { addressCart } = get();
                const updatedAddressCart = updateAddressCart(address, addressCart)
                set({ addressCart: updatedAddressCart })
            },
            remove: (idAddress: string) => {
                const { addressCart } = get();
                const updatedAddressCart = removeAddressCart(idAddress, addressCart)
                set({ addressCart: updatedAddressCart });
            },
            removeAll: () => set({ addressCart: [] })
        }),
        { name: 'AddressItem' }
    )
);

function updateAddressCart(address: Address, addressCart: Address[]) {
    const addressCartItem = { ...address };
    const addressOnCart = addressCart.map(item => item.id).includes(address.id);

    if (!addressOnCart) {
        addressCart.push(addressCartItem);
    } else {
        return addressCart.map(item => {
            if (item.id === address.id)
                return { ...item };
            return item;
        })
    };

    return addressCart;
};

function removeAddressCart(idAddress: string, addressCart: Address[]) {
    return addressCart.map(item => {
        if (item.id === idAddress) return { ...item }
        return item;
    });
};