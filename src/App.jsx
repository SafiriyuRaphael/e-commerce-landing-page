import Header from "./Header"
import Arrivals from "./Arrivals"
import Hero from "./Hero"
import PayDay from "./PayDay"
import Favorites from "./Favorites"
import FreeDownlod from "./FreeDownlod"
import FooterTop from "./FooterTop"
import FootDown from "./FootDown"
import NavBar from "./NavBar"
import { useState } from "react"

function App() {
  const [navBar,setNavBar]=useState(false)
  

  return (
    <div>
      <Header setNavBar={setNavBar}/>
      <NavBar navBar={navBar} setNavBar={setNavBar}/>
      <Hero/>
      <Arrivals/>
      <PayDay/>
      <Favorites/>
      <FreeDownlod/>
      <FooterTop/>
      <FootDown/>
    </div>
  )
}

export default App
