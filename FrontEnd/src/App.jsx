import { useState } from "react"
import AddCours from "./components/addCours.jsx"
import Containerr from "./components/Containerr.jsx"
import { Route, Routes } from 'react-router-dom'
import Profile from "./components/Profile.jsx"
function App() {
  const [rout, setRout] = useState('Home')
  return (

    <div >
      <Routes>

        <Route path='/' element={<Containerr/>} />
        <Route path='/addCours' element={<AddCours />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>


    </div>




  )
}

export default App
