import React from 'react'
import NaveBaree from './NaveBaree';
import EFouuter from './EFouuter';
import { useLocation } from 'react-router-dom';

function CourseView() {
    const location = useLocation()
    const {courseData} = location.state
    console.log(courseData)
  return (
    <>
    <NaveBaree/>
 {  courseData.length>0 && <> <h1>{courseData[0].event_name}</h1>
    <p>{courseData[0].event_time}</p>
    <img src ={courseData[0].event_image} />
    <p>{courseData[0].description}</p>
    <h2>Number of participants : {courseData[0].event_participants}</h2></>}
    <EFouuter/>
    </>
  )
}

export default CourseView