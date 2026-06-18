import React from 'react'
import Accept from './Accept'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data.tasks[2])
  return (
    <div id='tasklist' className='mt-10 h-[55%] flex overflow-x-auto items-center justify-start gap-5 flex-nowrap py-5 w-full'>
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
  )
}

export default TaskList
