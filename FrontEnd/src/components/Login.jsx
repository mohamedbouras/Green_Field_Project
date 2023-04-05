import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login({setuser}) {
    const navigate = useNavigate()
    const [email ,setEmail] = useState("")
    const [password,setPasword] = useState("")
    const [data,setData] = useState([])
    console.log(email,password)
    console.log(data)
    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post(`http://127.0.0.1:4000/api/user/login`,{
        user_email: email,
        user_password: password
      })
      .then(res=>{
        console.log(res)
          if(res.data.success){
            setData(res.data.message)
            navigate("/landingPage",{state:{data:res.data.message}})
            setuser(res.data.message)
          }
          else{
            alert("check Email or Password")
          }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  return (
    <div>
        <form name = "login form" onSubmit={(e)=>handleSubmit(e)}>
        <label >Email</label>
        <input type = "email" placeholder="E-mail" name = "email" required onChange={(e)=>setEmail(e.target.value)}/>
        <label >password</label>
        <input type = "password" placeholder="password" name = "password" required onChange={(e)=>setPasword(e.target.value)}/>
        <button type = "submit">Login</button>
        <p>You don'have an account? Sign Up</p>
        <button>Sign Up</button>
         </form>
    </div>
  )
}

export default Login