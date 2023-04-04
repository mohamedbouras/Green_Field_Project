import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CoursCard = ({data}) => {
  return (

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {data.event_image}/>
          <Card.Body>
            <Card.Title>{data.event_name}</Card.Title>
            <Card.Text>
              {data.event_description}
            </Card.Text>
            <Button variant="primary">View Course</Button>
          </Card.Body>
        </Card>
  )
}

export default CoursCard