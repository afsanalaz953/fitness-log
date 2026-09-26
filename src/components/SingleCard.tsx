import { TApp } from '@/types/app.types';
import Image from 'next/image';
import React from 'react';
// import { RiInboxArchiveLine, RiSaveLine } from 'react-icons/ri';
import PlanButton from './PlanButton';
import SaveButton from './SaveButton';




const SingleCard = ({data}: {data: TApp}) => {
    return (
       <div className='container mx-auto  '>
            <div className="card card-side  bg-[#15171D]  shadow-sm container flex gap-10 mx- my-10">
  <figure >
    <Image
      src={data.image}
      alt="fitness"
      width={500} 
      height={700}
      className='rounded-2xl'
      />
  </figure>
  <div className="card-body">
    <h1 className="card-title text-5xl font-bold">{data.name}</h1>
    <p className='text-slate-400'>{data.description}</p>
    {/* badge start */}
    <div className="flex justify-start m-2 gap-4">
       {data.muscleGroups.map((loggroup, index) => (
    <button
      key={index}
      className="btn rounded-2xl bg-[#CCFF00]  text-black hover:bg-amber-200"
    >
      {loggroup}
    </button>
  ))}
 </div>
 {/* badge end */}
 {/* big card start */}
<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 m-4 shadow">
  <table className="table">
   
    <tbody>
      {/* row 1 */}
      <tr>
     
        <td>EQUIPMENT</td>
      
        <td>{data.equipment}</td>
      </tr>
      {/* row 2 */}
      <tr>
       
        <td>DIFFICULTY  </td>
      
        <td> {data.difficulty} </td>
      </tr>
      {/* row 3 */}
      <tr>
       <td> SETS </td>
        <td> {data.sets}  </td>
      </tr>
      {/* ROW-4 */}
         <tr>
       <td> REPS </td>
        <td> {data.reps}  </td>
      </tr>
      {/* ROW-5 */}
         <tr>
       <td> DURATION </td>
        <td> {data.duration}  </td>
      </tr>
      {/* ROW-6 */}
         <tr>
       <td> CALORIES </td>
        <td> {data.caloriesBurned}  </td>
      </tr>
      {/* ROW-7 */}
         <tr>
       <td> RATING</td>
        <td> {data.rating}  </td>
      </tr>
    </tbody>
  </table>
</div>




 {/* bigcard end */}
 {/* instruction */}
<table className="table mt-6 ">
  {/* head */}
  <thead>
    <tr className='text-2xl font-bold text-white'>
      <th>INSTRUCTIONS</th>
     
    </tr>
  </thead>
  <tbody>
    {data.instructions.map((instruction, index) => (
      <tr key={index} className='flex gap-2'>
       

        <th>{index + 1}</th>
        <td>{instruction}</td>
      </tr>
      
    ))}
  </tbody>
</table>



    <div className="card-actions justify-start gap-4 mt-4">
      <PlanButton data={data} />
      <SaveButton data = {data} />
    </div>
  </div>
</div>
     </div>  
    );
};

export default SingleCard;