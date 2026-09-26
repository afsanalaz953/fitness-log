'use client'

import { TApp } from '@/types/app.types';
import React, { useContext } from 'react';
import { RiInboxArchiveLine } from 'react-icons/ri';
import Link from 'next/link';
import { PlanContext } from '@/PlanProvider';
import { toast } from 'react-toastify';


const PlanButton = ({data}: {data: TApp}) => {
    // last:context data paoa
const {addPlans, setAddPlans} = useContext(PlanContext)
// destructure kora sharedData 
// const contextData = {addPlans, setAddPlans} 
console.log(PlanContext, addPlans, setAddPlans, 'context data for plan')

    const handlePlan = () =>{
        console.log( 'Added Plan button', data, 'currentData')
        setAddPlans([...addPlans, data])

        toast.success(`plan added ✅`, {
      position: "top-right",
      autoClose: 2000,
  })
    }


    return (
        <div>
            {/* <button className="btn rounded-2xl bg-[#CCFF00] hover:bg-amber-200">
                    <span> <RiInboxArchiveLine /> </span> */}
                    {/* context a onClick avabei likhte hobe with arrow() */}
                    {/* <span onClick={()=>handlePlan()}>Add to today&apos;s plan </span>
                    </button> */}
<Link
  href="/my-plan"
  onClick={() => handlePlan()}
  className="btn text-black rounded-2xl bg-[#CCFF00] hover:bg-amber-200 inline-flex items-center gap-2 cursor-pointer"
>
  <RiInboxArchiveLine />
  <span>Add to today&apos;s plan</span>
</Link>

        </div>
    );
};

export default PlanButton;