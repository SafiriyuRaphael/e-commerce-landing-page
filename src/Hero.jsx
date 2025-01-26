import React from 'react'

const Hero = () => {
  return (
    <section className='  flex mx-3 md:mx-9  rounded-3xl   bg-gray-300/30'>
        <div className='flex flex-col justify-between p-8 w-full sm:w-1/2 h-full b bg-[url("/hero-img.png")]  bg-cover sm:bg-none rounded-3xl'>
        <div>
            <h1 className=' text-[3rem] lg:text-[3.8rem] font-serif bg-yellow-800/20 rounded-xl px-1 sm:bg-transparent'>
               <span className='clip bg-white block w-fit pr-9'>LET'S</span>  EXPLORE <span className='clip block w-fit bg-yellow-300 pr-10'>UNIQUE</span> CLOTHES.
            </h1>
            <p className='font-serif bg-transparent'>Live for Influential and Innovative fashion!</p>
            <button className='self-start bg-black'>Shop Now</button>
        </div></div>
        <div className=' bg-[url("/hero-img.png")] bg-cover w-1/2 sm:block hidden'>
            
        </div>
    </section>
  )
}

export default Hero