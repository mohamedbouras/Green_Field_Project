import React from 'react'
import NaveBaree from "./NaveBaree.jsx"
import CoursCard from "./CoursCard.jsx"
import { Container, Col, Row } from "react-bootstrap"
import SearchBar from "./searchBar.jsx"
import EFouuter from "./EFouuter.jsx"
const Containerr = () => {
  return (
    <div>
        <NaveBaree />
      <Container className="mt-5">
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

      </Container>
      <EFouuter/>

    </div>
  )
}

export default Containerr