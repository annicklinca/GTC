import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { FrontEndEnums } from './components/utils/enum'
// import About from './components/pages/About'
// import Team from './components/pages/Team'
// import Teamview from './components/pages/teamview'
// import TeamCategory from './components/pages/teamcategory'
// import Community from './components/pages/community'
// import Gallery from './components/pages/gallery'
// import Addservice from './components/pages/addservice'

// // dashboard routes
import WelcomeHome from './components/pages/index'
function App () {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<WelcomeHome/>} />
        {/* <Route path="/about" element={<About/>} /> */}
    
        
    </Routes>
    </BrowserRouter>

  )
}

export default App
