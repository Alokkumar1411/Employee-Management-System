import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const { UserData } = useContext(AuthContext)

  if (!UserData) {
    return <div>Loading...</div>
  }

  return (
    <div
      id='task'
      className='bg-[#141A26] p-4 rounded-xl mt-5'
    >
      <div className='mb-7 w-50 text-3xl pb-3 border-b-3 border-b-blue-700 text-white'>
        Task Summary
      </div>
      <div className='border-gray-600 border rounded-xl overflow-hidden' >
        <div className=' text-white  bg-[#202c42] text-lg font-medium py-2 px-4 flex  justify-between'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>

      <div id='task' className='overflow-y-scroll'>

        {UserData.employees.map((e, ind) => {

          const newTaskCount =
            e.tasks.filter(task => task.newTask).length

          const activeTaskCount =
            e.tasks.filter(task => task.active).length

          const completedTaskCount =
            e.tasks.filter(task => task.completed).length

          const failedTaskCount =
            e.tasks.filter(task => task.failed).length

          return (
            <div
              key={ind}
              className='border border-gray-600 text-gray-300 py-2 px-4 flex   justify-between'
            >
              <h2 className='w-1/5 text-lg '>
                {e.firstName}
              </h2>

              <h3 className='w-1/5 text-lg '>
                {newTaskCount}
              </h3>

              <h5 className='w-1/5 text-lg'>
                {activeTaskCount}
              </h5>

              <h5 className='w-1/5 text-lg'>
                {completedTaskCount}
              </h5>

              <h5 className='w-1/5 text-lg'>
                {failedTaskCount}
              </h5>
            </div>
          )
        })}

      </div>
      </div>

      

    </div>
  )
}

export default AllTask