import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(props)
  return (
    <div className='p-10 bg-[#080E1A] h-screen'>
     <Header changeUser={props.changeUser}  data={props.data}  />
     <TaskListNumber data={props.data} />
     <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
