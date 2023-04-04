import React, { useState } from 'react';
import axios from 'axios';

function UpdateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     const imageUrl= await uploadImage();
      const data = {
        user_name: name,
        user_email: email,
        user_image: imageUrl,
      };
      const response = await axios.put(
        'http://localhost:4000/api/user/2',
        data
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="user_name"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          name="user_email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          name="user_photo"
          type="file"
          onChange={handleFileChange}
          required
        />
        <input type="submit" value="update" />
      </form>
    </>
  );
}

export default UpdateUser;
