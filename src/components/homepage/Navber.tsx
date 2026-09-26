'use client'

import React, { useContext } from 'react';
import Link from 'next/link'
import logoimg from '@/assets/logo.png'
import Image from 'next/image'
import { PlanContext } from '@/PlanProvider';

const Navber = () => {
   const {addPlans, savedPlans} = useContext(PlanContext);
      console.log(addPlans, savedPlans, 'addPlans data in nav')
    return (
        
<div className="navbar  shadow-sm container mx-auto bg-black rounded">
              {/* // Mobile (dropdown) */}
  <div className="navbar-start">
    <div className="dropdown">
    
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='font-bold'><Link href='/'>Workouts</Link></li>
        <li className='font-bold'>
          <Link href='/my-plan'>My Plan</Link>
        
        </li>
        
      </ul>
    </div>
  <Image
  src={logoimg}
  alt="logo"
  width={30}
  height={30}
  className='font-bold'
/>
<span className='ml-4 font-bold'>FITLOG</span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li className='font-bold hover:text-[#CCFF00] hover:bg-black rounded'><Link href='/'>Workouts</Link></li>
     <li className='font-bold hover:text-[#CCFF00] hover:bg-black rounded '><Link href='/my-plan'>My Plan</Link></li>
    
     
    </ul>
  </div>
  <div className=" navbar-end flex gap-4  ">
    <Link href='/my-plan'  className=" font-bold  rounded-2xl">
    <span className='hover:text-[#CCFF00] hover:bg-black p-2 ml-2 rounded'>Plan </span>
    <span className='bg-[#CCFF00] hover:text-[#CCFF00] w-10 h-10 text-black rounded '>{addPlans?.length}</span>
    
    </Link>
    <Link href='/my-plan'   className=" font-bold  rounded-2xl  ">
    <span className='hover:text-[#CCFF00] hover:bg-black rounded ml-2 p-2'>Saved</span>
    <span className='bg-[#CCFF00] w-8 h-8 ml-2 text-black rounded-full hover:text-[#CCFF00]'>{savedPlans?.length}</span>
    
    </Link>
  </div>
</div>
            
        
    );
};

export default Navber;