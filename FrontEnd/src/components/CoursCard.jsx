import React, { useState  } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import CourseView from './CourseView';
import axios from 'axios';
const CoursCard = ({data}) => {
  const [courseData,setCourseData] = useState([])
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate()
  const handleAddFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  function handleCourseView (id){
     axios.get(`http://127.0.0.1:4000/api/events/${id}`)
     .then(res=>{
      setCourseData(res.data)
      navigate("/courseview",{state:{courseData:res.data}})
     }).catch(err=>{
      console.log(err)
     })
  }

  function handleCourseUp(){
   
     navigate("/UpCours",{state:{courseData:data}})
    
 }

  return (

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {data.event_image}/>
          <Card.Body>
            <Card.Title>{data.event_name}</Card.Title>
            <Card.Text>
              {data.event_description}
            </Card.Text>
            <Button variant="primary" onClick={handleCourseUp}>up Course</Button>
            <Button variant="primary" onClick={()=>{handleCourseView(data.event_id)}}>View Course</Button>
            <FontAwesomeIcon 
          icon={faStar} 
          onClick={handleAddFavorite} 
          style={{ color: isFavorited ? 'gold' : 'black', cursor: 'pointer' }} 
        />


          </Card.Body>
        </Card>
  )
}

export default CoursCard