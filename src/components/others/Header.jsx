import React, { useState } from 'react'

const Header = (props) => {

  const username = props.data ? props.data.firstName : 'Admin'

  const [showModal, setShowModal] = useState(false)

  const logOut = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <>
      <div className='flex items-end justify-between'>
        <div>
          <h1 className='text-4xl text-white'>
            Good Morning, {username}! 👋
          </h1>

          <h4 className='text-[#C4CCD5] text-lg mt-4 mb-5'>
            Here's what happening with your task today.
          </h4>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className='py-2 text-lg font-medium px-3 rounded-sm bg-red-600 text-white'
        >
          Log Out
        </button>
      </div>

      {showModal && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>

          <div className='bg-[#1c1c1c] p-6 rounded-xl w-100 text-center'>

            <h2 className='text-white text-2xl font-semibold mb-4'>
              Confirm Logout
            </h2>

            <p className='text-gray-300 mb-6'>
              Are you sure you want to logout?
            </p>

            <div className='flex justify-center gap-4'>

              <button
                onClick={logOut}
                className='px-4 py-2 bg-red-600 text-white rounded'
              >
                Yes, Logout
              </button>

              <button
                onClick={() => setShowModal(false)}
                className='px-4 py-2 bg-gray-600 text-white rounded'
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  )
}

export default Header