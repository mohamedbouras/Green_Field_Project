import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Register({getuser}) {
  const navigate = useNavigate()
  const [user, setUser] = useState({user_name:"",user_email:"", user_password:"",user_type:""})
  const [file ,setFile] = useState("")

  const handleFile=(event)=>{
    setFile(event.target.files[0])
  }
 
  
  const uploadImage = async () => {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'mohamed');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dmyit8zek/image/upload',
        form
      );
      return response.data.secure_url;
    } catch (error) {
      console.log(error);
    }
  };
  
  const handlePosting=async(event)=>{
    event.preventDefault()
    console.log('clicked')
       try{ 
       const userRegister = {...user,user_image: await uploadImage()}
        const post = await axios.post("http://127.0.0.1:4000/api/user/add",userRegister)
        console.log(post)
        getuser(userRegister)
        navigate('/landingPage')
       }catch(err){
         console.log(err)
       }
  }
    


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
    <form name="Register Form" onSubmit={handlePosting}>
      <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Sign up here</h3>
      <label style={{ fontSize: '18px', marginTop: '20px' }}>Name</label>
      <input type="text" placeholder="name" name="user_name" onChange={(e) => setUser({ ...user, user_name: e.target.value })} style={{ fontSize: '18px', padding: '10px', marginTop: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#f4f4f4', width: '100%', maxWidth: '400px', boxSizing: 'border-box' }} />
      <label style={{ fontSize: '18px', marginTop: '20px' }}>E-mail</label>
      <input type="email" placeholder="email" name="user_email" onChange={(e) => setUser({ ...user, user_email: e.target.value })} style={{ fontSize: '18px', padding: '10px', marginTop: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#f4f4f4', width: '100%', maxWidth: '400px', boxSizing: 'border-box' }} />
      <label style={{ fontSize: '18px', marginTop: '20px' }}>Password</label>
      <input type="password" name="user_password" onChange={(e) => setUser({ ...user, user_password: e.target.value })} style={{ fontSize: '18px', padding: '10px', marginTop: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#f4f4f4', width: '100%', maxWidth: '400px', boxSizing: 'border-box' }} />
      <label style={{ fontSize: '18px', marginTop: '20px' }}>Specify your Role</label>
      <select name="user_type" value={user.user_type} onChange={(e) => { setUser({ ...user, user_type: e.target.value }) }} style={{ fontSize: '18px', padding: '10px', marginTop: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#f4f4f4', width: '100%', maxWidth: '400px', boxSizing: 'border-box' }}>
<option value="">Sign Up As ?</option>
<option value="teacher">Teacher</option>
<option value="student">Student</option>
</select>
<label style={{ fontSize: '18px', marginTop: '20px' }}>Upload your image</label>
<input type="file" onChange={handleFile} style={{ fontSize: '18px', padding: '10px', marginTop: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#f4f4f4', width: '100%', maxWidth: '400px', boxSizing: 'border-box' }} />
<input type="submit" value="Sign Up" style={{ fontSize: '18px', padding: '10px', marginTop: '20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', width: '100%', maxWidth: '400px', cursor: 'pointer', boxSizing: 'border-box' }} />

  </form>
</div>
  
  )
}
export default Register