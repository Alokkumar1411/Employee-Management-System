import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium '>
        Hello <br /> <span className='text-3xl font-semibold'>Alok</span>
        
      </h1><button className='py-2 text-lg font-medium px-3 rounded-sm bg-red-600 text-white'>Log Out</button>
    </div>
  )
}

export default Header
