import React from 'react'
import Navbar from "./component/Navbar.jsx"
import Welcome from './component/Welcome.jsx'
import Popular from './component/Popular.jsx'
import Marvel from './component/Marvel.jsx'
import Tech from './component/Tech.jsx'
import Footer from './component/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Popular/>
      <Marvel/>
      <Tech/>
      <Footer/>
  </div>
  )
}

export default App
