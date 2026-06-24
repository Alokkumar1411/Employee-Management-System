import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-full bg-[#080E1A] w-full p-7">
      <Header changeUser={props.changeUser} />
      <div>
        <div>
         
        </div>
        <div>
          <CreateTask/>
        </div>
      </div>
      
      <AllTask data={props.data}  />

      
    </div>
  );
};

export default AdminDashboard;
