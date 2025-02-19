import React from 'react'

export default function About() {
  return (
    <div className='h-[400px] md:h-[550px] flex flex-col justify-center'>
      <div className='flex flex-col justify-around h-[310px] md:h-[400px] items-center  md:px-20'>
      <div>
        <h3 className='text-xl md:text-3xl text-[#F56E0F]'>
          ABOUT US
        </h3>
        
      </div>
      <div>
        <h1 className='text-2xl md:text-5xl text-center leading-snug'>
        Your dreams skyrocket to <br /> reality here!
        </h1>
      </div>
      <div className=''>
        <p className='text-sm md:text-lg text-[#5E5E5E] text-center'>
        At <span className='text-[#F56E0F]'>Startup School</span> , we believe in the power of every idea and the potential within every individual. Our <br /> mission is to bridge the gap between aspiring entrepreneurs and their dreams. With a focus on <br /> mentorship and practical learning, we are here to guide beginners on a transformative journey to <br /> become successful founders.
        </p>
      </div>
    </div>
    </div>
    
  )
}
