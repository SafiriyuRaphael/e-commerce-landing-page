import { X } from "lucide-react"

const NavBar = ({navBar, setNavBar}) => {
    
  return (
    <nav className={`fixed bg-yellow-400 h-full top-0 z-50 p-8 transition-transform duration-1000 ${navBar ? "translate-x-0" : "-translate-x-full"}`}>
        <div className='flex items-start relative'>
         <img src="/fashionlogo.png" alt="fashion logo" />
         <h2>Fashion</h2></div>
        <ul>
            <li className='text-2xl'>Catalogue</li>
            <li className='text-2xl'>Fashion</li>
            <li className='text-2xl'>Favorite</li>
            <li className='text-2xl'>LifeStyle</li>
            </ul>
            <button className='bg-black'>SIGN UP</button>
            <div className={`absolute -right-6 top-2 bg-red-700 rounded-full p-3 cursor-pointer hover:bg-red-950 ${!navBar ? "hidden" : "block"}`}onClick={(e)=>setNavBar(false)}> <X  className=""/></div>
    </nav>
  )
}

export default NavBar