import React from 'react';
import NaveBaree from './NaveBaree';
import EFouuter from './EFouuter';
import UpdateUser from './UpdateUser.jsx';
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  h1: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  p: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
  }
};

const Profile = () => {
  const user = {
    user_name: "John Doe",
    user_email: "john.doe@example.com",
    user_type : "teacher" ,
    user_image: "http://via.placeholder.com/640x360",
  };

  return (
    <div>
      <NaveBaree />
      <div style={styles.container}>
        <h1 style={styles.h1}> Name : {user.user_name}</h1>
        <p style={styles.p}> Email :   {user.user_email}</p>
        <p style={styles.p}> Type :   {user.user_type }</p>
        <img src={user.user_image} style={styles.img} />
      </div>
      <UpdateUser/>
      <EFouuter/>
      
    </div>
  );
};

export default Profile;
