import React from 'react'
import Accept from './Accept'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  // console.log(data.tasks[2])
  return (

    <>
    <div className='mt-13 w-50 text-3xl pb-3 border-b-3 border-b-blue-700 text-white' >
      Recent Tasks
    </div>
    <div id='tasklist' className=' mt-4 h-[50%] flex overflow-x-auto items-center justify-start gap-5 flex-nowrap py-5 w-full'>
    {data.tasks.map((e, index) => {
  if (e.active) {
    return <Accept key={index} data={e} />;
  }

  if (e.newTask) {
    return <NewTask key={index} data={e} />;
  }

  if (e.completed) {
    return <CompleteTask key={index} data={e} />;
  }

  if (e.failed) {
    return <FailedTask key={index} data={e} />;
  }

  return null;
})}
    </div>
    </>
    
  )
}

export default TaskList
