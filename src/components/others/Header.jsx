import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage';

const Header = ({ data }) => {
  const username = data ? data.firstName : 'Admin';
 const logOut=()=>{
  localStorage.setItem('loggedInUser','');
  window.location.reload()
 }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl text-white font-serif'>
        Hello, <br />
        <span className='text-4xl font-semibold'>
          {username} 👋
        </span>
      </h1>

      <button onClick={logOut} className='py-2 text-lg font-medium px-3 rounded-sm bg-red-600 text-white'>
        Log Out
      </button>
    </div>
  );
};

export default Header;