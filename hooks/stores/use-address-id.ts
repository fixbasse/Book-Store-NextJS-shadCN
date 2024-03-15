import { Address } from '@prisma/client'
import { create } from 'zustand'

type useAddressStoreProps = {
    items: Address[];
    selectedAddress: (address: Address) => void;
}

const useAddressStore = create<useAddressStoreProps>((set) => ({
    items: [],
    selectedAddress: (address: Address) => set((state) => ({ items: [...state.items, address] }))
}));

export default useAddressStore;