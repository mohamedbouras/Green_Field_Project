import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CoursCard = () => {
  return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="http://via.placeholder.com/640x360" />
          <Card.Body>
            <Card.Title>Cours Title Title</Card.Title>
            <Card.Text>
              Course descrition only the 200 first carracter
            </Card.Text>
            <Button variant="primary">View Course</Button>
          </Card.Body>
        </Card>
  )
}

export default CoursCard