import NaveBaree from "./components/NaveBaree.jsx"
import CoursCard from "./components/CoursCard.jsx"
import { Container, Col, Row } from "react-bootstrap"
import SearchBar from "./components/searchBar.jsx"
import EFouuter from "./components/EFouuter.jsx"
import { useState } from "react"
import AddCours from "./components/addCours.jsx"
function App() {
const [rout,setRout] = useState('Home')
  return (
    <div >
      <NaveBaree />
      <Container className="mt-5">
        <button onClick={()=>{setRout('addCours')}}>Add New Course</button>
     {rout==='Home' ?

     
        <div>

        <Row lg={2}>
          <Col lg={3} >
            <SearchBar/>
          </Col>
          <Col lg={9} >
          <Row  lg={9}>

            {/* map return this */}
            <Col  className="mt-3">
            <CoursCard/>
            </Col>
            <Col  className="mt-3">
            <CoursCard/>
            </Col>
            <Col  className="mt-3">
            <CoursCard/>
            </Col>
            <Col  className="mt-3">
            <CoursCard/>
            </Col>
            <Col  className="mt-3">
            <CoursCard/>
            </Col>
            <Col  className="mt-3">
            <CoursCard/>
            </Col>
          
            
           
          
           
          </Row>
        </Col>

        </Row>
        </div>
: rout === 'addCours'?<div>
  <AddCours/>
</div> : <div></div>}

      </Container>

      <EFouuter/>
    </div>
  )
}

export default App
