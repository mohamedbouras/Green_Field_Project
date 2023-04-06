import React from 'react';
import NaveBaree from './NaveBaree';
import EFouuter from './EFouuter';
import {Container,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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

const Profile = ({user}) => {
  const navigate = useNavigate()
  return (
    <div>
      <NaveBaree />
      <Container>
      <div style={{background: "linear-gradient(to bottom right, #1c1c1c, #222222)", color: "#fff", padding: "20px",height:"100%"}} className='mt-5'>


      <section className="section about-section gray-bg mt-5" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">{user.user_name}</h3>
                            <h4 className="theme-color lead">{user.user_type }</h4>
                            <h5>{user.user_email }</h5>
                            <p>{user.user_description }</p>
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src={user.user_image} width="250px" className='my-5' style={{borderRadius:"50%",marginLeft:"15%"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="d-grid">
          <Button variant="dark" onClick={() => navigate('/Updateprofile',{state:{UserP:user}})}>
            Update My Profile
          </Button>
        </div>
        </div>
      </Container>
      
      <EFouuter/>
      
    </div>
  );
};

export default Profile;
