import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-10 py-3'>
        <div className='flex items-start'>
            <img src="/fashionlogo.png" alt="fashion logo" />
            <h4 className='flex mt-1'>Fashion</h4>
        </div>
        <div className='hidden sm:flex sm:gap-6 md:gap-10 justify-center'><ul className='flex items-end md:gap-16 sm:gap-8 md:text-lg lg:text-xl'>
            <li>Catalogue</li>
            <li>Fashion</li>
            <li>Favorite</li>
            <li>Lifestyle</li>
            </ul>
            <button className='bg-black px-2 py-4'>SIGN UP</button></div>
    </header>
  )
}

export default Header