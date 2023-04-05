import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const NaveBaree = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">E-education</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/profile'>Profile</Nav.Link>
            <Nav.Link href="/addCours">Add Course </Nav.Link>
            <Nav.Link href="/">Courses</Nav.Link>
         
          </Nav>
          <Nav>
          <NavDropdown title="My learning" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/mylist">My List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Wish List
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NaveBaree