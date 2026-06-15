import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='bg-red-500 rounded-xl w-[45%] py-6 px-9 ' >
            <h2 className='text-3xl font-semibold' >{data.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-3 font-medium'>New Task</h3>
        </div>
        <div className='bg-red-500 rounded-xl w-[45%] py-6 px-9 ' >
            <h2 className='text-3xl font-semibold' >{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-3 font-medium'>Completed Task</h3>
        </div>
        <div className='bg-red-500 rounded-xl w-[45%] py-6 px-9 ' >
            <h2 className='text-3xl font-semibold' >{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-3 font-medium'>Active Task</h3>
        </div>
        <div className='bg-red-500 rounded-xl w-[45%] py-6 px-9 ' >
            <h2 className='text-3xl font-semibold' >{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-3 font-medium'>Failed  Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumber
