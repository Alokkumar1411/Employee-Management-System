import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { BsLightningFill } from "react-icons/bs";
import { TfiNotepad } from "react-icons/tfi";

const TaskListNumber = ({ data }) => {
  const newTaskCount = data.tasks.filter(task => task.newTask).length
const activeTaskCount = data.tasks.filter(task => task.active).length
const completedTaskCount = data.tasks.filter(task => task.completed).length
const failedTaskCount = data.tasks.filter(task => task.failed).length
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="bg-[#0D1A2E] border-2 text-white border-[#134778] rounded-xl flex justify-baseline pl-9 gap-10 items-center w-[45%] py-6  ">
        <div className="p-5 rounded-lg flex justify-center items-center bg-[#1D76D6]  text-white text-5xl font-extrabold">
          <TfiNotepad />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">{newTaskCount}</h2>
          <h3 className="text-xl mt-3 font-medium">New Task</h3>
        </div>
      </div>
      <div className="bg-[#0C1D1F] border-2 text-white border-[#164633] rounded-xl flex justify-baseline pl-9 gap-10 items-center w-[45%] py-6  ">
        <div className=" p-5 rounded-lg flex justify-center items-center  font-extrabold bg-[#28AF60] text-white text-5xl">
          <CiCircleCheck />
        </div>

        <div>
          <h2 className="text-3xl font-semibold">
            {completedTaskCount}
          </h2>
          <h3 className="text-xl mt-1 font-medium">Completed Task</h3>
        </div>
      </div>
      <div className="bg-[#1F1B14] border-2 text-white border-[#543D13] rounded-xl flex justify-baseline pl-9 gap-10 items-center w-[45%] py-6 pr-9  ">
        <div className="p-5 rounded-lg flex justify-center items-center text-white bg-amber-300 text-5xl  font-extrabold">
          <BsLightningFill />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">{activeTaskCount}</h2>
          <h3 className="text-xl mt-3 font-medium">Active Task</h3>
        </div>
      </div>
      <div className="bg-[#1E151C] border-2 text-white border-[#631C1F] rounded-xl flex justify-baseline pl-9 gap-10 items-center w-[45%] py-6 pr-9  ">
        <div className=" p-5 rounded-lg flex justify-center items-center  font-extrabold bg-[#DC3735] text-white text-5xl">
          <RxCrossCircled />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">{failedTaskCount}</h2>
          <h3 className="text-xl mt-1 font-medium">Failed Task</h3>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumber;
