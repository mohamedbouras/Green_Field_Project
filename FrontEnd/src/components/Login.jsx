import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Container, Tabs, Tab, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



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
  return (         <form onSubmit={(e)=>handleSubmit(e)}>
    <h3>Login Page</h3>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
         required
        onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        required
        onChange={(e)=>setPasword(e.target.value)}/>
    </div>
    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </div>
    <p className="forgot-password text-right">
      Forgot <a href="#">password?</a>
    </p>
    <button onClick={()=>{navigate("/register")}}>
  <FontAwesomeIcon icon={faPlus} />
  Sign Up
</button>
  </form>)
    


    
    


   
  
}
export default Login 

