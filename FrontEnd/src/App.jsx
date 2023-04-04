
import NaveBaree from "./components/NaveBaree.jsx"
import CoursCard from "./components/CoursCard.jsx"
import { Container, Col, Row } from "react-bootstrap"
import SearchBar from "./components/searchBar.jsx"
import EFouuter from "./components/EFouuter.jsx"
import { useState } from "react"
import AddCours from "./components/addCours.jsx"

import Container from './components/Containerr.jsx'
import {Link,Routes,Route} from 'react-router-dom'
import Profile from "./components/Profile.jsx"

function App() {
const [rout,setRout] = useState('Home')
  return (

    <div >
      <NaveBaree />
      <Container className="mt-5">
        <button onClick={()=>{setRout('addCours')}}>Add New Course</button>
     {rout==='Home' ?

     
       
: rout === 'addCours'?<div>
  <AddCours/>
</div> : <div></div>}

      </Container>

      <EFouuter/>
    </div>


        <Routes>
          <Route path="/" element={<Container/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>

  )
}

export default App
