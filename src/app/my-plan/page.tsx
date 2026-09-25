import React from 'react';

const page = () => {
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
           
        
        </div>
    );
};

export default page;