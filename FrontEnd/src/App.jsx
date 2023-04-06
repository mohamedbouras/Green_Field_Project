import Containerr from "./components/Containerr.jsx"
import Login from './components/Login'
import ScrollToTopButton from './components/ScrollToTopButton'
import AddCours from "./components/AddCours.jsx"
import { Route, Routes } from 'react-router-dom'
import Profile from "./components/Profile.jsx"
import MyCoursesList from './components/MyCoursesList.jsx'
import CourseView from './components/CourseView.jsx'
import { useState,useEffect } from 'react'
import LandingPage from './components/LandingPage'
import UpdateCours from "./components/UpdateCours.jsx"
import UpdateUser  from './components/UpdateUser'
import Register from './components/Register'
function App() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  console.log(user);
  return ( 
   <div>
   
      <Routes>
       <Route path='/addCours' element={<><AddCours /> <ScrollToTopButton/> </>}/>
       <Route path='/profile' element={<><Profile  user={user}/> <ScrollToTopButton/> </> } />
       <Route path='/Updateprofile' element={<><UpdateUser user={user}/> <ScrollToTopButton/> </> } />
        <Route path="/mylist" element ={<><MyCoursesList user={user}/> <ScrollToTopButton/> </>}/>
        <Route path='/UpCours' element={<><UpdateCours/> <ScrollToTopButton/> </>} />
        <Route path = "/courseview" element = {<><CourseView/><ScrollToTopButton/> </>}/>
        <Route path='/container' element={<><Containerr/> <ScrollToTopButton/></>} />
        <Route path = "/landingPage" element = {<><LandingPage /><ScrollToTopButton/> </>}/>
        <Route path = "/register" element ={<><Register getuser = {setuser}/><ScrollToTopButton/></>}></Route>

        <Route path = "/" element = {<Login setuser={setuser}/>}  />
      </Routes>
   
    </div> 
  )
}

export default App
