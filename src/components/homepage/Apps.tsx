import React from 'react';
import {TApp} from '@/types/app.types'
import Card from '@/components/homepage/Card';

const Apps = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    console.log (data, 'homefetchdata')
    return (
        <div className='container mx-auto'>
           <h1 className='font-bold mx-4'>THE LIBRARY</h1>
           <h2 className='mx-4'> Twelve lifts covering every major muscle group. </h2> 
           <div className='grid grid-cols-3 gap-4   my-6'>
            {
                data.map((workerdata : TApp, ind : number)=> {
                    return (
                       
<Card key={ind} workerdata={workerdata} />

 );
  })}
           </div>
        </div>
    );
};

export default Apps;