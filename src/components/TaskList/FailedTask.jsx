import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 rounded-xl bg-gray-400'>
        <div className='flex justify-between text-center' >
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded-lg'>{data.taskCategory}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='mt-3 text-base' > {data.taskDescription}</p>
        <div className='mt-2'>
<button>Failed Task</button>
        </div>
      </div>
  )
}

export default FailedTask
