import React from 'react'
import { CiCalendarDate } from "react-icons/ci";

const Accept = ({data}) => {
  // console.log(data.taskDescription)
  // localStorage.clear()
 return (
    <div className='shrink-0 h-full w-85 p-5 rounded-xl  border-2 border-[#212836] bg-[#121926]'>
        <div>
            <div className='flex justify-between text-center'>
            
            <h3 className='bg-[#0F306E] text-sm px-3 text-gray-300 py-1 rounded-full'>{data.taskCategory}</h3>
            
            <h4 className='text-sm flex justify-center  items-center  text-gray-300'>{data.taskDate} 
                <div className='text-lg pl-1  text-gray-200'>
                    <CiCalendarDate />
                    
                </div>
                </h4>
                
        </div>
        
        <h2 className='mt-5 text-2xl text-white font-semibold'>{data.taskTitle}</h2>
        
        <p className='mt-3 text-gray-300 text-base pb-5 border-b border-b-blue-950'>{data.taskDescription}</p>
      
        </div>
        
        <div className='flex justify-between mt-10'>
            <button className='bg-[] px-3 py-1 text-green-500 border border-green-500 text-sm rounded-full'>Mark as Completed</button>
            <button className='bg-[] px-3 py-1 border border-red-600 text-red-600 rounded-full'>Mark as Failed</button>
        </div>
    </div>
)
}

export default Accept
