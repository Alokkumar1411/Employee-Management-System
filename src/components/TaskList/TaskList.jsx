import React, { useContext } from 'react'
import Accept from './Accept'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ data }) => {

  const { UserData, setUserData } = useContext(AuthContext)

  const handleAccept = (taskTitle) => {

    const loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser')
    )

    const employees = JSON.parse(
      localStorage.getItem('employees')
    )

    employees.forEach((emp) => {

      if (emp.email === loggedInUser.email) {

        emp.tasks.forEach((task) => {

          if (task.taskTitle === taskTitle) {
            task.newTask = false
            task.active = true
          }

        })
      }
    })

    localStorage.setItem(
      'employees',
      JSON.stringify(employees)
    )

    setUserData({
      ...UserData,
      employees
    })
  }

  const handleComplete = (taskTitle) => {

    const loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser')
    )

    const employees = JSON.parse(
      localStorage.getItem('employees')
    )

    employees.forEach((emp) => {

      if (emp.email === loggedInUser.email) {

        emp.tasks.forEach((task) => {

          if (task.taskTitle === taskTitle) {
            task.active = false
            task.completed = true
          }

        })
      }
    })

    localStorage.setItem(
      'employees',
      JSON.stringify(employees)
    )

    setUserData({
      ...UserData,
      employees
    })
  }

  const handleFailed = (taskTitle) => {

    const loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser')
    )

    const employees = JSON.parse(
      localStorage.getItem('employees')
    )

    employees.forEach((emp) => {

      if (emp.email === loggedInUser.email) {

        emp.tasks.forEach((task) => {

          if (task.taskTitle === taskTitle) {
            task.active = false
            task.failed = true
          }

        })
      }
    })

    localStorage.setItem(
      'employees',
      JSON.stringify(employees)
    )

    setUserData({
      ...UserData,
      employees
    })
  }

  return (
    <>
      <div className='mt-13 w-50 text-3xl pb-3 border-b-3 border-b-blue-700 text-white'>
        Recent Tasks
      </div>

      <div
        id='tasklist'
        className='mt-4 h-[50%] flex overflow-x-auto items-center justify-start gap-5 flex-nowrap py-5 w-full'
      >
        {data.tasks.map((e, index) => {

          if (e.active) {
            return (
              <Accept
                key={index}
                data={e}
                handleComplete={handleComplete}
                handleFailed={handleFailed}
              />
            )
          }

          if (e.newTask) {
            return (
              <NewTask
                key={index}
                data={e}
                handleAccept={handleAccept}
              />
            )
          }

          if (e.completed) {
            return (
              <CompleteTask
                key={index}
                data={e}
              />
            )
          }

          if (e.failed) {
            return (
              <FailedTask
                key={index}
                data={e}
              />
            )
          }

          return null
        })}
      </div>
    </>
  )
}

export default TaskList