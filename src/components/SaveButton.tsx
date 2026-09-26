'use client'

import { TApp } from '@/types/app.types';
import React, { useContext } from 'react';
import { RiInboxArchiveLine, RiSaveLine } from 'react-icons/ri';
import Link from 'next/link';
import { PlanContext } from '@/PlanProvider';
import { toast } from 'react-toastify';


const SaveButton = ({data}: {data: TApp}) => {
    // last:context data paoa
const {savedPlans, setSavedPlans} = useContext(PlanContext)
// destructure kora sharedData 
// const contextData = {addPlans, setAddPlans} 
console.log(PlanContext, savedPlans, setSavedPlans, 'savedcontext data ')

    const handlePlan = () =>{
        console.log( 'Added Plan button', data, 'currentData')
        setSavedPlans([...savedPlans, data])

           toast.success(`plan saved ✅`, {
              position: "top-right",
              autoClose: 2000,
          })
    }


    return (
        <div>
             
<Link
  href="/my-plan"
  onClick={() => handlePlan()}
  className="btn rounded-2xl hover:bg-[#CCFF00] inline-flex items-center gap-2 cursor-pointer"
>
 <span><RiSaveLine /></span>
      <span>Save for later</span>
</Link>
        </div>
    );
};

export default SaveButton;