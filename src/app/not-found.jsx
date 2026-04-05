import React from 'react'
import Link from 'next/link'
const notFound = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen bg-linear-to-tl from-black via-primary-700 to-primary-900'>
        <h1 className='text-4xl font-bold text-white'>404 Not Found !</h1>
        <p className='text-white'>The page you are looking for does not exist.</p>
        <Link href="/">
            <button className='bg-primary-600 hover:bg-primary-500 transition-all duration-300 text-white px-4 py-2 rounded-md cursor-pointer'>Go Back</button>
        </Link>
    </div>
  )
}

export default notFound