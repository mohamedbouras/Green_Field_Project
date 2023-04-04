
import NaveBaree from "./components/NaveBaree.jsx"
import CoursCard from "./components/CoursCard.jsx"
import { Container, Col, Row } from "react-bootstrap"
import SearchBar from "./components/searchBar.jsx"
import EFouuter from "./components/EFouuter.jsx"
import { useState } from "react"
import AddCours from "./components/addCours.jsx"

import Containerr from './components/Containerr.jsx'
import {Link,Routes,Route} from 'react-router-dom'
import Profile from "./components/Profile.jsx"

function App() {

  return (



        <Routes>
          <Route path="/" element={<Container/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>

  )
}

export default App
