import { TApp } from '@/types/app.types';
import Image from 'next/image';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { MdAccessTime } from 'react-icons/md';
import { TiThumbsOk } from 'react-icons/ti';

const PlanCard = ({plansdata}: {plansdata: TApp}) => {
    return (
        <div>
             <div className="card  bg-base-100 card-xs m-6  ">
             <div className="card bg-base-100  flex flex-row  gap-4">
                <div >

 <figure className="w-45 aspect-4/2 shrink-0 relative">
  <Image
    src={plansdata.image}
    alt="worker"
    fill
    className="rounded-lg object-cover"
  />
</figure>

                </div>
             
             <div className="card-body">
                
               
               <h2 className="card-title font-bold text-lg ">
                 {plansdata.name}
               </h2>
               <h3 className='text-sm'> {plansdata.equipment} </h3>
             
           <div className='flex gap-2 '>
             <div className='flex gap-2'>
               <span className='font-bold text-2xl w-5 h-5 rounded-full text-black bg-[#CCFF00]'><MdAccessTime /></span>
               <span className='font-bold text-sm' > {plansdata.duration} min</span>
             </div>
           
             <div className='flex gap-2'>
               <span className='font-bold text-2xl w-5 h-5 rounded-full text-black bg-[#CCFF00] '><TiThumbsOk /></span>
               <span className='font-bold text-sm' > {(plansdata.caloriesBurned)} </span>
             </div>
           
             <div className='flex gap-2'>
               <div className='font-bold text-2xl w-5 h-5 rounded-full text-black bg-[#CCFF00]'><CiStar /></div>
               <div className='font-bold text-sm'> {plansdata.rating} </div>
             </div>
           </div>
               
              
             </div>
           </div>
           </div> 
        </div>
    );
};

export default PlanCard;