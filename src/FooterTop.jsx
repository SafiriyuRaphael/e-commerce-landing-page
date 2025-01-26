import React from 'react'

const FooterTop = () => {
  return (
    <section className='py-10 lg:py-20 flex flex-col items-center justify-center bg-yellow-400 mt-12 gap-1 text-white'>
        <h1 className='text-center lg:text-4xl'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
        <p>Type your email down below and be young wild generation</p>
        <div className='bg-white px-2'>
        <input type="text" placeholder='Add your email here'/>
        <button className='bg-black'>SEND</button>
        </div>
    </section>
  )
}

export default FooterTop