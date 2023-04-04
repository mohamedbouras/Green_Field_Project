import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import CourseView from './CourseView';
import axios from 'axios';
const CoursCard = ({data}) => {
  const [courseData,setCourseData] = useState([])
  const navigate = useNavigate()

  function handleCourseView (){
     axios.get(`http://127.0.0.1:4000/api/events_users/event/1`)
     .then(res=>{
      setCourseData(res.data)
      navigate("/courseview",{state:{courseData:res.data}})
     }).catch(err=>{
      console.log(err)
     })
  }
  return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="http://via.placeholder.com/640x360" />
          <Card.Body>
            <Card.Title>{data.event_name}</Card.Title>
            <Card.Text>
              {data.event_description}
            </Card.Text>
            <Button variant="primary" onClick={handleCourseView}>View Course</Button>
          </Card.Body>
        </Card>
  )
}

export default CoursCard