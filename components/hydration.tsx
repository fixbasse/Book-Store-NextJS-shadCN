'use client'

import { useCartStore } from '@/hooks/store/use-cart-store';
import React, { useEffect, useState } from 'react'

interface HydrationProps {
    children: React.ReactNode;
}

const Hydration = ({ children }: HydrationProps) => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        useCartStore.persist.rehydrate();
        setHydrated(true);
    }, []);

    if (!hydrated) return null;

    //! This hydration occur due to localstorage is client. 

    return (
        <>
            {children}
        </>
    )
};

export default Hydration;