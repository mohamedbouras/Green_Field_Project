import AddCours from "./components/addCours.jsx"
import Containerr from "./components/Containerr.jsx"
import { Route, Routes } from 'react-router-dom'
import Profile from "./components/Profile.jsx"
import MyCoursesList from './components/MyCoursesList.jsx'
import CourseView from './components/CourseView.jsx'
import ScrollToTopButton from "./components/ScrollToTopButton.jsx"
import LandingPage from "./components/LandingPage.jsx"

function App() {

  


  return (


    <div >
      <Routes>
        <Route path='/' element={<><Containerr/> <ScrollToTopButton/> </>} />
        <Route path='/addCours' element={<><AddCours /> <ScrollToTopButton/> </>}/>
        <Route path='/profile' element={<><Profile /> <ScrollToTopButton/> </> } />
        <Route path="/mylist" element ={<><MyCoursesList/> <ScrollToTopButton/> </>}/>
        <Route path = "/courseview" element = {<><CourseView/><ScrollToTopButton/> </>}/>
        <Route path = "/landingPage" element = {<><LandingPage/><ScrollToTopButton/> </>}/>
      </Routes>


    </div>





  )
}

export default App
