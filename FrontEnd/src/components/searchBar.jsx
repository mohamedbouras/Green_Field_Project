import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import {InputGroup} from 'react-bootstrap';
 
const SearchBar = () => {
  return (
    <Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Teacher</Accordion.Header>
      <Accordion.Body>
        <input type="text"/>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Courses</Accordion.Header>
      <Accordion.Body>
      <input type="text"/>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Course Dates</Accordion.Header>
      <Accordion.Body>
      <input type="date"/>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}

export default SearchBar