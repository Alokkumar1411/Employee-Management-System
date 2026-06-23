import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage';
import { CiCircleCheck } from "react-icons/ci";

const Header = (props) => {
  const username = props.data ? props.data.firstName : 'Admin';
 const logOut=()=>{
  localStorage.setItem('loggedInUser','');
  // window.location.reload()
props.changeUser('')
 }
  return (
    <div className='flex items-end justify-between'>
      <div>
        <h1 className='text-4xl text-white '>
        Good Morning, {username}! 👋
      </h1>
      <h4 className='text-[#C4CCD5] text-lg mt-4 mb-5 ' >Here's what happening with your task today.</h4>

      </div>
      

      <button onClick={logOut} className='py-2 text-lg font-medium px-3 rounded-sm bg-red-600 text-white'>
        Log Out
      </button>
    </div>
  );
};

export default Header;