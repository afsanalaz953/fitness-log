import { TApp } from '@/types/app.types';
import Image from 'next/image';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { MdAccessTime } from 'react-icons/md';
import { TiThumbsOk } from 'react-icons/ti';


export default function Card  ({workerdata}: {workerdata: TApp}) {
    return (
        <div>
            <div className="card  bg-base-100 card-xs shadow-sm  ">
  <div className="card bg-base-100  shadow-sm">
  <figure className=' w-full h-65 '>
    <Image
      src={workerdata.image}
      alt="worker" 
      width={250}
      height={100}
        className=" w-full"
      />
  </figure>
  <div className="card-body">
     <div className="card-actions justify-start">
       {workerdata.muscleGroups.map((group, index) => (
    <button
      key={index}
      className="btn rounded-2xl bg-[#CCFF00] hover:bg-amber-200"
    >
      {group}
    </button>
  ))}
      
    </div>
    
    <h2 className="card-title font-bold text-2xl mt-4">
      {workerdata.name}
    </h2>
    <h3 className='text-lg'> {workerdata.equipment} </h3>
    <div>
        <div className="divider m-0"></div>
    </div>
<div className='flex gap-8 mb-4'>
  <div className='flex gap-2'>
    <span className='font-bold text-2xl'><MdAccessTime /></span>
    <span className='font-bold text-lg' > {workerdata.duration} min</span>
  </div>

  <div className='flex gap-2'>
    <span className='font-bold text-2xl'><TiThumbsOk /></span>
    <span className='font-bold text-lg' > {workerdata.caloriesBurned} </span>
  </div>

  <div className='flex gap-2'>
    <div className='font-bold text-2xl'><CiStar /></div>
    <div className='font-bold text-lg'> {workerdata.rating} </div>
  </div>
</div>
    
   
  </div>
</div>
</div>
            
        </div>
    );
};

