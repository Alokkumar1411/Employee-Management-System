import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData= useContext(AuthContext)
  return (
    <div id='task' className='bg-[#1c1c1c] p-4 rounded mt-5  ' >
          <div  className='bg-red-400 text-white text-lg font-medium py-2 px-4 flex rounded mb-3 justify-between ' >
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5  className='w-1/5'>Active Task</h5>
        <h5  className='w-1/5'>Completed</h5>
        <h5  className='w-1/5'>failed</h5>
      </div>
      <div className=' overflow-auto' >
        {authData.employees.map(function(e,ind){
         return <div key={ind} className=' border border-emerald-300 py-2 px-4 flex rounded mb-3 justify-between ' >
        <h2 className='w-1/5 text-lg font-medium'>{e.firstName}</h2>
        <h3 className='w-1/5 text-lg font-medium'>{e.taskCounts.newTask}</h3>
        <h5  className='w-1/5 text-lg font-medium'>{e.taskCounts.active}</h5>
        <h5  className='w-1/5 text-lg font-medium'>{e.taskCounts.completed}</h5>
        <h5  className='w-1/5 text-lg font-medium'>{e.taskCounts.failed}</h5>
      </div>
      })}
      </div>
      
    </div>
  )
}

export default AllTask
