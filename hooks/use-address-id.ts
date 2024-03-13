import { create } from 'zustand'

type State = {
    addressId: string;
};

type Action = {
    setAddressId: (addressId: State['addressId']) => void;
}

export const useSelectAddressStore = create<State & Action>((set) => ({
    addressId: '',
    setAddressId: (addressId) => set(() => ({ addressId: addressId }))
}));