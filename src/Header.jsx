import { Menu } from "lucide-react"

const Header = ({setNavBar}) => {
  return (
    <header className='sticky top-0 sm:static flex justify-between items-center px-10 py-3 bg-white z-50' id="home">
        <div className='flex items-start'>
            <img src="/fashionlogo.png" alt="fashion logo" />
            <h4 className='flex mt-1'>Fashion</h4>
        </div>
        <div className='hidden sm:flex sm:gap-6 md:gap-10 justify-center'><ul className='flex items-end md:gap-16 sm:gap-8 md:text-lg lg:text-xl'>
            <li><a href="#arrivals" className="text-black hover:first:text-amber-400">Catalogue</a></li>
            <li><a href="#fashion" className="text-black hover:first:text-amber-400">Fashion</a></li>
            <li><a href="#favorite" className="text-black hover:first:text-amber-400">Favorite</a></li>
            <li><a href="#lifestyle" className="text-black hover:first:text-amber-400">Lifestyle</a></li>
            </ul>
            <a href="#login"> <button className='bg-black px-2 py-4'>SIGN UP</button></a>
           </div>
            <Menu className="sm:hidden cursor-pointer hover:text-yellow-500 size-8"
            onClick={(e)=> setNavBar(true)}/>
    </header>
  )
}

export default Header