'use client'


import Card from '@/components/homepage/Card';
import { PlanContext } from '@/PlanProvider';
import { TApp } from '@/types/app.types';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const {addPlans} = useContext(PlanContext);
    console.log(addPlans, 'addPlans data')

    const hasData = addPlans && addPlans.length > 0;

    return (
        <div className='container mx-auto my-20 '>
            <div className='m-10  '>
<h1 className='text-4xl font-bold'>MY PLAN</h1> 
           <p className='text-slate-400'>Cap of five lifts for today. Finish them, then load more.</p>
        <div className='flex gap-10 justify-around m-4 rounded shadow p-10 ' >
            <div >
                <span>Exercise</span>
                <span className='text-[#CCFF00]'></span>
            
            </div>
             <div>
                <span>Minutes</span>
                <span className='text-[#CCFF00]'></span>
            
            </div>
             <div>
                <span>Calories</span>
                <span className='text-[#CCFF00]'></span>
            
            </div>
        </div>
     </div>
     <div className='grid grid-cols-1 '>

   
           {/* main */}
         {hasData ? (   
       <div className='flex justify-between w-full rounded gap-16 shadow border-2'>
        {/* rightside */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {addPlans.map((workerdata : TApp, ind : number)=> {
                                return (
          <Card workerdata={workerdata} key={ind}/>
             );
              })}   
        </div>
        {/* leftside */}
            <div>
 <button className='btn btn-primary'></button>
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