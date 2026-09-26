'use client'

import React, { createContext, ReactNode, useState } from 'react';
import { TApp } from '@/types/app.types';

// context type create
type TPlanContext={
    addPlans : TApp[];
    setAddPlans : React.Dispatch<React.SetStateAction<TApp[]>>;
    savedPlans: TApp[]; 
    setSavedPlans : React.Dispatch<React.SetStateAction<TApp[]>>;
}

// contexttypes pass kora contextr modhe
export const PlanContext = createContext<TPlanContext>({
addPlans: [],
setAddPlans: () => {},
savedPlans: [],
setSavedPlans: () => {},
});


// 1)provider create and children/full body pass
const PlanProvider = ({children}: {children: ReactNode}) => {
    // state r type TApp array
    const [addPlans, setAddPlans] = useState<TApp[]>([])
    const [savedPlans, setSavedPlans] = useState<TApp[]>([])

    // const sharedData = {
    //     addPlans,
    //     setAddPlans,
    // }
    return (
        <PlanContext.Provider value={{ addPlans,
        setAddPlans, savedPlans, setSavedPlans}}>
            {children}
        </PlanContext.Provider>
    );
};

export default PlanProvider;