'use client'


// import Card from '@/components/homepage/Card';
import PlanCard from '@/components/PlanCard';
import { PlanContext } from '@/PlanProvider';
import { TApp } from '@/types/app.types';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

type TTab = 'add' | 'saved';

const MyPlanPage = () => {
    const {addPlans, savedPlans, setAddPlans, setSavedPlans} = useContext(PlanContext);
    console.log(addPlans, savedPlans, 'addPlans data')
 const [activeTab, setActiveTab] = useState<TTab>('add');
 const [sortBy, setSortBy] = useState<'rating'| 'calories'| 'duration'>('duration');
console.log(sortBy, 'sortby')

// create function for sorted data and array
const sortAddPlans = (plans: TApp[]) => {
const sortedPlans = [...plans]
if(sortBy === "duration"){
  sortedPlans.sort((a,b) => b.duration - a.duration);
} else if(sortBy === 'calories'){
   sortedPlans.sort((a,b) => b.caloriesBurned - a.caloriesBurned);
}else if(sortBy === 'rating'){
  sortedPlans.sort((a,b) => b.rating - a.rating);
}
 return sortedPlans;
}

// variable creation for addPlans, savedPlans
const sortedAddPlans = sortAddPlans(addPlans)
const sortedSavedPlans =  sortAddPlans(savedPlans)

// remove button

const handleremovePlan = (plansdata: TApp) => {
  if (activeTab === 'add') {
    setAddPlans((prev: TApp[]) =>
      prev.filter((item: TApp) => item.id !== plansdata.id)
    );
  } else {
    setSavedPlans((prev: TApp[]) =>
      prev.filter((item: TApp) => item.id !== plansdata.id)
    );
  }
   toast.success(`plan removed ✅`, {
      position: "top-right",
      autoClose: 2000,
  })


};


    const hasData = addPlans && addPlans.length > 0;
    const hasSavedData = savedPlans && savedPlans.length > 0;

 // 👇 active tab অনুযায়ী source বেছে নাও
  const currentPlans = activeTab === 'add' ? addPlans : savedPlans;


     // 🔽 Total calculations
  const totalMinutes = currentPlans?.reduce(
    (sum, plan) => sum + (plan. duration || 0),
    0
  );

  const totalCalories = currentPlans?.reduce(
    (sum, plan) => sum + (plan.caloriesBurned || 0),
    0
  );

  

    return (
        <div className='container mx-auto my-20 '>
            <div className='m-10  '>
<h1 className='text-4xl font-bold'>MY PLAN</h1> 
           <p className='text-slate-400 m-2 mb-6'>Cap of five lifts for today. Finish them, then load more.</p>
        <div className='flex gap-10 justify-around  bg-[#15171D] border-0 rounded shadow p-10 ' >
            <div className='flex flex-col' >
                <span className='font-bold'>Exercise</span>
                <span className='text-[#CCFF00]'> {currentPlans.length} </span>
            
            </div>
             <div className='font-bold flex flex-col'>
                <span>Minutes</span>
                <span className='text-[#CCFF00]'> {totalMinutes}   </span>
            
            </div>
             <div className='font-bold flex flex-col'>
                <span>Calories</span>
                <span className='text-[#CCFF00]'> { totalCalories} </span>
            
            </div>
        </div>
     </div>
{/* toggle */}
<div className='togglemain bg-[#15171D] flex justify-between rounded-2xl container  mx-auto '>
{/* toggleleft */}
<div className="tabs tabs-border  w-full m-4">
  
<input 
  type="radio" name="my_tabs_2" 
  className="tab" 
  aria-label="Today's Plan" 
   defaultChecked
    onChange={() => setActiveTab('add')}
  />
 
  
  <div className="tab-content border-base-300 bg-base-100 w-full mt-6 ">
    {/* tab for plan */}
    <div className='grid grid-cols-1 '>

   
           {/* main */}
         {hasData ? (   
       <div className='flex justify-between border-0 m-4  rounded  '>
        {/* rightside */}
        <div className="flex-1 w-full ga-20">
            {sortedAddPlans.map((plansdata : TApp, ind : number)=> {
                                return (
          // <PlanCard plansdata={plansdata} key={ind} />
           <div key={ind} className='w-full rounded  border-0 shadow mb-4 flex justify-between'>
                                <PlanCard plansdata={plansdata} />
        {/* leftside */}
           <div className="flex items-center gap-3 m-4">
        <Link  href={`/apps/${plansdata.id}`} className="btn btn-outline rounded-2xl btn-sm">View Details</Link>
        <button className="btn rounded-2xl bg-[#CCFF00] btn-sm text-black">✔ Mark as Done</button>
        <button onClick={() => handleremovePlan(plansdata)} className="text-slate-500 font-bold hover:text-red-800">✕</button>
      </div>

                            </div>
                            // bothside end div
             );
              })}   
        </div>
  
      </div> 
          ) : (
         // No data state
        <div className="flex flex-col items-center justify-center  py-10">
          <h2 className="text-2xl font-semibold text-slate-500">No Data</h2>
          <p className="text-slate-400 mt-2">
            You don&apos;t have any plans yet. Add one to get started.
          </p>
          {/* <button className="btn btn-primary mt-6">Add Plan</button> */}
          <Link href="/" className="btn btn-primary mt-6">Add Plan</Link>
        </div>
      )}
        </div>
    
    </div>

  
{/* saved tab */}
  <input 
  type="radio" 
  name="my_tabs_2" 
  className="tab" 
  aria-label="Saved" 
  onChange={() => setActiveTab('saved')}
  />
  <div className="tab-content border-base-300 bg-base-100 p-10">
     <div className='grid grid-cols-1 '>

   
           {/* main */}
         {hasSavedData ? (   
       <div className='flex justify-between border-0 m-4  rounded  '>
        {/* rightside */}
        <div className="flex-1 w-full gap-20">
            {sortedSavedPlans.map((plansdata : TApp, ind : number)=> {
                                return (
          // <PlanCard plansdata={plansdata} key={ind} />
           <div key={ind} className='w-full rounded  border-0 shadow mb-4 flex justify-between'>
                                <PlanCard plansdata={plansdata} />
        {/* leftside */}
           <div className="flex items-center gap-3 m-4">
        <Link  href={`/apps/${plansdata.id}`} className="btn btn-outline rounded-2xl btn-sm">View Details</Link>
        <button className="btn rounded-2xl bg-[#CCFF00] btn-sm text-black">✔ Mark as Done</button>
        <button  onClick={() => handleremovePlan(plansdata)} className="text-slate-500 font-bold hover:text-red-800">✕</button>
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
            You don&apos;t have any plans yet. Add one to get started.
          </p>
        <Link href="/" className="btn btn-primary mt-6">Add Plan</Link>
        </div>
      )}
        </div>
    
    </div>

  
    
    
   </div>

{/* toggle right for sort */}
  {/* <div className='sort border-2 m-2'> */}
  <select 
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value as 'rating' | 'calories' | 'duration')}
  defaultValue="Sort By" 
  className="select select-success"
  
  >
  <option disabled={true}>Sort By</option>
  <option value={'durtion'}>duration</option>
  <option value={'calories'}>calories</option>
  <option value={'rating'}>rating</option>
 
</select>
  {/* </div> */}
  {/* rightend */}
</div>
{/* toggle main end */}
{/* name of each tab group should be unique */}







{/* plan data start */}

  {/* end */}
        
          </div>
    );
};

export default MyPlanPage;