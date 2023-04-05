import Login from './components/Login'
import Containerr from './components/Containerr'
import ScrollToTopButton from './components/ScrollToTopButton'
import AddCours from "./components/addCours.jsx"
import { Route, Routes } from 'react-router-dom'
import Profile from "./components/Profile.jsx"
import MyCoursesList from './components/MyCoursesList.jsx'
import CourseView from './components/CourseView.jsx'


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
        <Route path='/profile' element={<><Profile /> <ScrollToTopButton/> </> } />
        <Route path="/mylist" element ={<><MyCoursesList/> <ScrollToTopButton/> </>}/>
        <Route path = "/courseview" element = {<><CourseView/><ScrollToTopButton/> </>}/>
        <Route path='/container' element={<><Containerr/> <ScrollToTopButton/></>} />
        <Route path = "/landingPage" element = {<><LandingPage /><ScrollToTopButton/> </>}/>
        <Route path = "/" element = {<Login setuser={setuser}/>}  />
      </Routes>
   
    </div> 
  )
}

export default App
