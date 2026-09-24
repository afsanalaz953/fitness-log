import Card from '@/components/homepage/Card';
import { TApp } from '@/types/app.types';
import React from 'react';

const AllAppsPage = async() => {

     const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    console.log (data, 'AllAppsfetchdata')
    return (
        <div className='container mx-auto'>
   <div className='grid grid-cols-3 gap-4   my-10'>
            {
                data.map((app : TApp, ind : number)=> {
                    return (
                       
<Card key={ind} app={app} />

 );
  })}
           </div>

         </div>  
    );
};

export default AllAppsPage;