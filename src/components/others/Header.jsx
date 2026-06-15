import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-serif '>
        Hello, <br /> <span className='text-4xl font-semibold'>{data.firstName}👋</span>
        
      </h1><button className='py-2 text-lg font-medium px-3 rounded-sm bg-red-600 text-white'>Log Out</button>
    </div>
  )
}

export default Header
