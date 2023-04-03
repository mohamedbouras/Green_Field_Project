import Container from './components/Containerr.jsx'
import {Link,Routes,Route} from 'react-router-dom'
import Profile from "./components/Profile.jsx"
function App() {

  return (

        <Routes>
          <Route path="/" element={<Container/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>

  )
}

export default App
