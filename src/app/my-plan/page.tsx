'use client'


import Card from '@/components/homepage/Card';
import PlanCard from '@/components/PlanCard';
import { PlanContext } from '@/PlanProvider';
import { TApp } from '@/types/app.types';
import Link from 'next/link';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const {addPlans} = useContext(PlanContext);
    console.log(addPlans, 'addPlans data')

    const hasData = addPlans && addPlans.length > 0;

    return (
        <div className='container mx-auto my-20 '>
            <div className='m-10  '>
<h1 className='text-4xl font-bold'>MY PLAN</h1> 
           <p className='text-slate-400 m-2 mb-6'>Cap of five lifts for today. Finish them, then load more.</p>
        <div className='flex gap-10 justify-around m-2 border-0 rounded shadow p-10 ' >
            <div className='flex flex-col' >
                <span className='font-bold'>Exercise</span>
                <span className='bg-[#CCFF00]'> {addPlans.length} </span>
            
            </div>
             <div className='font-bold flex flex-col'>
                <span>Minutes</span>
                <span className='text-[#CCFF00]'> {addPlans.length}   </span>
            
            </div>
             <div className='font-bold flex flex-col'>
                <span>Calories</span>
                <span className='text-[#CCFF00]'> {addPlans.caloriesBurned} </span>
            
            </div>
        </div>
     </div>
     <div className='grid grid-cols-1 '>

   
           {/* main */}
         {hasData ? (   
       <div className='flex justify-between border-0 m-4  rounded  '>
        {/* rightside */}
        <div className="flex-1 w-full ga-20">
            {addPlans.map((plansdata : TApp, ind : number)=> {
                                return (
          // <PlanCard plansdata={plansdata} key={ind} />
           <div key={ind} className='w-full rounded  border-0 shadow mb-4 flex justify-between'>
                                <PlanCard plansdata={plansdata} />
        {/* leftside */}
           <div className="flex items-center gap-3 m-4">
        <Link  href={`/apps/${plansdata.id}`} className="btn btn-outline rounded-2xl btn-sm">View Details</Link>
        <button className="btn rounded-2xl bg-[#CCFF00] btn-sm text-black">✔ Mark as Done</button>
        <button className="text-slate-500 font-bold hover:text-red-800">✕</button>
      </div>

                            </div>
                            // bothside end div
             );
              })}   
        </div>
  
      </div> 
          ) : (
         // No data state
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-2xl font-semibold text-slate-500">No Data</h2>
          <p className="text-slate-400 mt-2">
            You don't have any plans yet. Add one to get started.
          </p>
          <button className="btn btn-primary mt-6">Add Plan</button>
        </div>
      )}
        </div>
          </div>
    );
};

export default MyPlanPage;