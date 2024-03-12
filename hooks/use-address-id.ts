import { create } from 'zustand'

type State = {
    addressId: string;
    setAddressId: (addressId: string) => void;
};

export const useSelectAddressStore = create<State>((set) => ({
    addressId: '',
    setAddressId: (addressId) => set(() => ({ addressId: addressId }))
}));