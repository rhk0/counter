import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'

import Footer from './pages/Footer'
import Homepage from './pages/Homepage'
import Navigation from './pages/Navigation'
 



const App = () => {
  return (
    <>
  <BrowserRouter>
  <Routes>
  {/* <Route path = "/footer" element ={<Footer/>}></Route> */}
      <Route path = "/" element={<Homepage/>}></Route>
      {/* <Route path = "/navigation" element={<Navigation/>}></Route> */}
   
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App

