import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 md:px-24 shadow-lg items-center sticky top-0 z-10 bg-white'>
      <div className="md:text-3xl text-2xl font-bold">
        <h1>PixelParade</h1>
      </div>
      <div className="">
        <ul className='md:flex gap-8 font-semibold hidden'>
          <li><a href="" className='hover:text-red-600 transition duration-200'>Home</a></li>
          <li><a href="" className='hover:text-red-600 transition duration-200'>Gallery</a></li>
          <li><a href="" className='hover:text-red-600 transition duration-200'>Collections</a></li>
          <li><a href="" className='hover:text-red-600 transition duration-200'>About</a></li>
          <li><a href="" className='hover:text-red-600 transition duration-200'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
