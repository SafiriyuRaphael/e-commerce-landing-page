import { ArrowRight } from "lucide-react"

const Favorites = () => {
    const fashion=[
        {img:"/fav1.png", trends:"Trending on Instagram", link:"Explore Now"},
        {img:"/fav2.png", trends:"All Under $40", link:"Explore Now"},
    ]

  return (
    <section className="mx-3 md:mx-9 my-6" id="favorite">
        <h4 className='mb-10'>Young's Favorite</h4>

        <div className='flex gap-9 flex-col sm:flex-row'>
            {fashion.map((fig)=>
                (<figure>
                    <img src={fig.img} alt="" />
                    <figcaption className="flex  flex-col">
                        <div className="flex justify-between">
                        <h4 className="m-0">{fig.trends}</h4>
                        <ArrowRight/></div>
                        <p>{fig.link}</p>
                    </figcaption>
                </figure>)
            )}
        </div>


    </section>
  )
}

export default Favorites