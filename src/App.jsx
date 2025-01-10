import React, { useState } from 'react'
// import  "./CSS/style.css"
import pic from "./assets/profile.jpg"
import NavBar from './Components/NavBar'
import Flex from './Components/Flex'
import Main from './Components/Main'
import Step from './Components/Step'
import Features from './Components/Features'
import Footer from './Components/Footer'

const App = () => {
  const [isMobile,setisMobile] = useState(false)
  return (
    <div className=''> 

      <NavBar/>
   
      <Main/>

      <Flex/>

      <Step/>

      <Features/>
      <Footer/>


    </div>
  )
}

export default App
