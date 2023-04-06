import React, { useState } from 'react';
import axios from 'axios';
import {Container,Button} from "react-bootstrap"
import EFouuter from './EFouuter';
import NaveBaree from './NaveBaree';
import { useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function UpdateUser() {
  const location = useLocation()
  const {UserP} = location.state
  const [name, setName] = useState(UserP.user_name);
  const [email, setEmail] = useState(UserP.user_email);
  const [description, setDescription] = useState(UserP.user_description);
  const [file, setFile] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'aymenbibiknil');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dilwfvmbr/image/upload',
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
  
    try {
     const imageUrl= await uploadImage();
      const data = {
        user_name: name,
        user_email: email,
        user_image: imageUrl,
        user_description:description
      };
      console.log(data,"befor put");
      const response = await axios.put(
        'http://localhost:4000/api/user/'+UserP.user_id,
        data
      );
      const newUser =JSON.parse(localStorage.getItem('user'))
      localStorage.setItem('user', JSON.stringify({...newUser,...data}));
    } catch (error) {
      console.log(error);
    } 
  };

  return (<>
    <NaveBaree/>
    <Container className='mt-5'>
       <>
       <center><h1>Update Your Profile </h1></center>
      <InputGroup className="mb-3 mt-5">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          defaultValue={name}
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleNameChange}
          required
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          defaultValue={email}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleEmailChange}
          required
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor="basic-url">Your New Image</Form.Label>
      <InputGroup className="mb-3">
      <input
          name="user_photo"
          type="file"
          onChange={handleFileChange}
          required
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>You Description Here</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea"  defaultValue={UserP.user_description} 
       onChange={(e)=>{
        setDescription(e.target.value)
       }}
        
        />
      </InputGroup>
 
      <Button variant="primary" className='mt-5 w-50 mx-auto' onClick={() =>handleSubmit() }>
        Update
      </Button>
    </>
      </Container> 
      <EFouuter/></>
  );
}

export default UpdateUser;
