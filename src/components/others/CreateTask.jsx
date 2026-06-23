import React, { useState } from 'react'

const CreateTask = () => {

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignto, setassignto] = useState('')
  const [taskCategory, settaskCategory] = useState('')

  const [task, settask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask ={taskTitle,taskDescription,taskDate,taskCategory,assignto,active:false,newTask:true,failed:false,completed:false}
    settask(newTask)

    const data = JSON.parse(localStorage.getItem('employees'))

    data.forEach(function(e){
      if(assignto==e.firstName){
        e.tasks.push(task)
        console.log(e)
      }
    })
    localStorage.setItem('employees',JSON.stringify(data))

    // console.log(newTask)
   settaskTitle('');
  settaskDescription('');
  settaskDate('');
  setassignto('');
  settaskCategory('');

}
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded" >
        <form onSubmit={(e)=>{
          submitHandler(e)
        }
        } className="flex items-start w-full flex-wrap justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input value={taskTitle} onChange={(e)=>{
                settaskTitle(e.target.value)
              }} className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border  outline-none border-gray-400 mb-4" type="text" placeholder="Enter TItle" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5" >Date</h3>
              <input value={taskDate} onChange={(e)=>{
                settaskDate(e.target.value)
              }} className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border  outline-none border-gray-400 mb-4" type="date" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5" >Assign to</h3>
              <input  value={assignto}
  onChange={(e)=>{
    setassignto(e.target.value)
  }} className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border  outline-none border-gray-400 mb-4" type="text" placeholder="Assign" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input value={taskCategory} onChange={(e)=>{
                settaskCategory(e.target.value)
              }} className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border  outline-none border-gray-400 mb-4" type="text" placeholder="design ,dev ,etc" />
            </div>
          </div>

          <div className="w-2/5" >
            <h3 className="text-sm text-gray-300 mb-0.5" >Description</h3>
            <textarea value={taskDescription}
  onChange={(e)=>{
    settaskDescription(e.target.value)
  }} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400" name="" id=""></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full" >Create Task</button>
          </div>

          
        </form>
      </div>
  )
}

export default CreateTask
