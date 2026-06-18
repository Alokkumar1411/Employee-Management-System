import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 rounded-xl bg-gray-400'>
        <div className='flex justify-between text-center' >
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded-lg'>High</h3>
          <h4 className='text-sm'>08 June 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Good Portfolio</h2>
        <p className='mt-3 text-base' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut placeat in laudantium optio quod est!</p>
        <div className='mt-4'>
            <button  className='bg-green-500 px-2 py-1 text-sm' >Accept</button>
          
        </div>
      </div>
  )
}

export default NewTask
