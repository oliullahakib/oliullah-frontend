'use client'

import React from 'react'

const error = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen bg-linear-to-tr from-black via-primary-800 to-primary-900'>
        <h1 className='text-4xl font-bold text-white'>Something went wrong !</h1>
        <p className='text-white'>Please try again later.</p>
        <button onClick={() => window.location.reload()} className='bg-primary-600 hover:bg-primary-500 transition-all duration-300 text-white px-4 py-2 rounded-md cursor-pointer'>Try Again</button>
    </div>
  )
}

export default error