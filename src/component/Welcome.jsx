import React from 'react'
import img from "../assest/painting-mountain-lake.avif"

const Welcome = () => {
  return (
    <div className='flex justify-between items-center w-full md:p-24 p-5 md:gap-3'>
      <div className="w-[50%]">
        <h1 className='md:text-4xl text-[12px] font-bold md:mb-4'>Discover the World Through Our Lens!</h1>
        <p className='font-semibold md:text-xl text-[7px] w-[80%]'>Immerse yourself in stunning images that capture the essence of life’s beauty, diversity, and wonder. From landscapes to portraits, each photo tells a unique story. Explore, admire, and be inspired by the art of photography.</p>
      </div>
      <div className="w-[50%]">
        <img src={img} alt="" className="rounded-lg" />
      </div>
    </div>
  )
}

export default Welcome
