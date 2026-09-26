import Image from 'next/image';
import React from 'react';
import bannerimg  from '@/assets/banner.png'

const Banner = () => {
    return (
        <div className='container my-10 mx-auto flex md:flex-row justify-between rounded bg-[#15171D]  shadow gap-6'>
            <div className='m-10 p-4 space-y-6'>
                <p className='font-bold text-[#CCFF00]'>WORKOUT LIBRARY</p>
                <h1 className='text-4xl font-bold'>TRAIN WITH INTENT. LOG
                    <br />
EVERY SET.</h1>
                <p className='text-slate-300'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it 
                    <br />
into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <button className='text-sm font-bold rounded-2xl p-2 text-black bg-[#CCFF00]'>BROWSE WORKOUTS</button>
            </div>
            <div className='m-10 p-4'>
                 <Image
                  src={bannerimg}
                  alt="logo"
                  width={300}
                  height={300}
                  className='font-bold'
                />
            </div>
            {/* <Image /> */}
        </div>
    );
};

export default Banner;