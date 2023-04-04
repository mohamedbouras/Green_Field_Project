import { useState } from "react"
import AddCours from "./components/addCours.jsx"

import Containerr from "./components/Containerr.jsx"
import { Route, Routes } from 'react-router-dom'
import Profile from "./components/Profile.jsx"
import ScrollToTopButton from "./components/ScrollToTopButton.jsx"
function App() {

  return (


    <div >
      <Routes>
        <Route path='/' element={<><Containerr/> <ScrollToTopButton/> </>} />
        <Route path='/addCours' element={<><AddCours /> <ScrollToTopButton/> </>}/>
        <Route path='/profile' element={<><Profile /> <ScrollToTopButton/> </> } />
       
      </Routes>


    </div>




  )
}

export default App
