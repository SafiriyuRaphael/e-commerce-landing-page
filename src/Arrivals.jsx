import React from 'react'

const Arrivals = () => {
    const Arrivals=[
        {img:"/Rectangle 1.png", head:"Hooding", about:"Explore Now"},
        {img:"/Rectangle 2.png", head:"Coats & Pekos", about:"Explore Now"},
        {img:"/Rectangle 3.png", head:"Tees & T-Shirt", about:"Explore Now"},
    ]
  return (
    <section className='mx-3 md:mx-9 my-6' id='arrivals'>
        <h1 className='mb-10 '>NEW ARRIVALS</h1>
        <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-2'>
            {Arrivals.map((pic)=>(
                <figure>
                    <img src={pic.img} alt="" className='w-full'/>
                    <figcaption>
                        <h4 className='m-0'>{pic.head}</h4>
                        <p>{pic.about}</p>
                    </figcaption>
                </figure>
            ))}
        </div>
    </section>
  )
}

export default Arrivals