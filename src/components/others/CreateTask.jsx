import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignto, setassignto] = useState('')
  const [taskCategory, settaskCategory] = useState('')

  const { UserData, setUserData } = useContext(AuthContext)

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      taskCategory,
      assignto,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    const data = JSON.parse(localStorage.getItem('employees'))

    data.forEach((emp) => {
      if (assignto === emp.firstName) {
        emp.tasks.push(newTask)

        // optional task count update
        emp.taskCounts.newTask += 1
      }
    })

    localStorage.setItem('employees', JSON.stringify(data))

    // Context update
    setUserData({
      ...UserData,
      employees: data
    })

    settaskTitle('')
    settaskDescription('')
    settaskDate('')
    setassignto('')
    settaskCategory('')
  }

  return (
    <div className="p-5 bg-[#141A26] mt-7 rounded-xl">

      <div className='mb-7 w-50 text-3xl pb-3 border-b-3 border-b-blue-700 text-white'>
        Create Tasks
      </div>
      <form
        onSubmit={submitHandler}
        className="flex items-start w-full flex-wrap justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="font-medium text-lg  text-gray-200 mb-1">
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
              className="font-mono placeholder:text-gray-400 text-gray-300 py-2 px-2 w-4/5 rounded bg-transparent border outline-none border-gray-400 mb-5"
              type="text"
              placeholder="Enter Title"
            />
          </div>

          <div>
            <h3 className="font-medium text-lg  text-gray-200 mb-1">
              Date
            </h3>
            <input
              value={taskDate}
              onChange={(e) => settaskDate(e.target.value)}
              className=" placeholder:text-gray-400 text-gray-300 py-2 px-2 w-4/5 rounded bg-transparent border outline-none border-gray-400 mb-5"
              type="date"
              placeholder='Date'
            />
          </div>

          <div>
            <h3 className="font-medium text-lg  text-gray-200 mb-1">
              Assign To
            </h3>
            <input
              value={assignto}
              onChange={(e) => setassignto(e.target.value)}
               className=" font-mono placeholder:text-gray-400 text-gray-300 py-2 px-2 w-4/5 rounded bg-transparent border outline-none border-gray-400 mb-5"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="font-medium text-lg  text-gray-200 mb-1">
              Category
            </h3>
            <input
              value={taskCategory}
              onChange={(e) => settaskCategory(e.target.value)}
               className="font-mono placeholder:text-gray-400 text-gray-300 py-2 px-2 w-4/5 rounded bg-transparent border outline-none border-gray-400 mb-5"
              type="text"
              placeholder="Design, Dev etc."
            />
          </div>
        </div>

        <div className="w-2/5">
          <h3 className="font-medium text-lg  text-gray-200 mb-1">
            Description
          </h3>

          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            className="w-full h-44 font-mono  placeholder:text-gray-400 text-gray-300 py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
          />

          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-lg text-xl text-white mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask