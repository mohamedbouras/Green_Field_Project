import React, { useEffect, useState } from 'react'
import NaveBaree from './NaveBaree';
import EFouuter from './EFouuter';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Container,  Button } from "react-bootstrap"
import { Image, List } from 'semantic-ui-react'
import axios from 'axios';
import './courseView.css'
function CourseView() {
  console.log("rerendred");
  const user = JSON.parse(localStorage.getItem('user'))
  const {token} =JSON.parse(localStorage.getItem('user'))
  
  const [infoCourse, setinfoCourse] = useState([]);
  const [userExist, setUserExist] = useState(false);
  const location = useLocation()
  const { courseData } = location.state
  const [msg,setMsg] = useState('')
  const alreadyExist =(arr)=>{
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].user_id === user.user_id) {
        return true;
      }
    }
    return false;
  }
 
  useEffect(() => {

    axios.get(`http://localhost:4000/api/events_users/event/${courseData[0].event_id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setinfoCourse(res.data)
      setUserExist(alreadyExist(res.data))
    })
      .catch((err) => { console.log(err) })
  }, [])
 


  
  return (
    <>
      <NaveBaree />

      <Container>

        {/* -------------------------------------------------------------- */}
        <Carousel className='mt-5'>
          <Carousel.Item interval={4000}  >
            <img
              className="d-block w-100"
              src="https://img.freepik.com/photos-gratuite/vacances-hiver-concept-personnes-joyeuse-rousse-chandail-pointant-doigts-vers-bas-regardant_1258-146419.jpg?w=1380&t=st=1680799753~exp=1680800353~hmac=0f42851d5c9dc15045358275ffd91f94c6466bc5207532c7cfd2c5f31fa0cb07"
              alt="First slide"

            />
            <Carousel.Caption>
              <h3 style={{ color: "black", fontFamily: "-moz-initial" }}>Scroll Down</h3>
              <p style={{ color: "black", fontFamily: "-moz-initial", fontSize: "20px" }}>and see the Content</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000} >
            <img
              className="d-block w-100"
              src={courseData[0].event_image}
              alt="Second slide"

            />
            <Carousel.Caption>
              <h3>{courseData[0].event_name}</h3>
              <p>Welcome to the Course</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        {/* -------------------------------------------------------------- */}
        <hr className='mt-5' />
        {(infoCourse.length > 0 ? infoCourse[0].event_participants >= infoCourse.length - 1 ? true : false
          : true) && <h3>Are you interested in participating in this course  Press the button and learn ?</h3>}

        <List horizontal ordered className='mt-5'>

          {infoCourse.map((e) => {
            return (
              <List.Item>
                <Image avatar src={e.user_image} />
                <List.Content>
                  <List.Header>{e.user_name}</List.Header>
                  {e.user_type}
                </List.Content>
              </List.Item>
            )
          })}
          {infoCourse.length === 0 && <h3>'No one aplayed Yet'</h3>}

        </List>


        <hr className='mt-5' />

        {!(infoCourse.length > 0 ? infoCourse[0].event_participants >= infoCourse.length -1 ? true : false
          : true) ? 
          <Button variant="primary" disabled={infoCourse.length > 0 ? infoCourse[0].event_participants >= infoCourse.length - 1 ? true : false
            : true} className='w-100'> Course Available</Button> 
            :user.user_type==="student"&& <Button variant="primary" className='w-100' disabled={userExist?true:false} onClick={()=>{
              // axios to apply              
              console.log(courseData[0].event_id)
              console.log(user.user_id)
              axios.post("http://localhost:4000/api/events_users",{event_id:courseData[0].event_id,
              user_id:user.user_id,
              action_type:'Student'},{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }).then(res=>{setMsg("Succes Inscription"); window.location.reload();})
              .catch(err=>setMsg("Field"))
            }
            }
              
              >{userExist?"You are already Saved":"apply to the Cours"} </Button>
        }



        {!(infoCourse.length > 0 ? infoCourse[0].event_participants >= infoCourse.length - 1 ? true : false
          : true) && <>
            <hr className='mt-5' />
            <div dangerouslySetInnerHTML={{ __html: courseData[0].event_description }} />  </>}
            {msg}
      </Container>

      <EFouuter />
    </>
  )
}

export default CourseView