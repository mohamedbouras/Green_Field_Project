import Container from './components/Containerr.jsx'
import {Link,Routes,Route} from 'react-router-dom'
import Profile from "./components/Profile.jsx"
import { useState,useEffect } from 'react'
import axios from "axios"
import MyCoursesList from './components/MyCoursesList.jsx'
import CourseView from './components/CourseView.jsx'
function App() {

  

  return (
        <Routes>
          <Route path = "/courseview" element = {<CourseView/>}/>
          <Route path="/" element={<Container/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/mylist" element ={<MyCoursesList/>}/>
        </Routes>
  )
}

export default App
