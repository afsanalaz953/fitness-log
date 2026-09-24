import React from 'react';
import Link from 'next/link'
import logoimg from '@/assets/logo.png'
import Image from 'next/image'

const Navber = () => {
    return (
        
            <div className="navbar bg-base-100 shadow-sm container mx-auto rounded">
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
  <div className="navbar-end flex gap-3">
    <Link  href='/my-plan'   className="btn  font-bold  bg-[#CCFF00] hover:text-[#CCFF00] hover:bg-black   rounded-2xl">Plan</Link>
    <Link href='/my-plan'   className="btn bg-[#CCFF00] hover:text-[#CCFF00] hover:bg-black  rounded-2xl">Saved</Link>
  </div>
</div>
            
        
    );
};

export default Navber;