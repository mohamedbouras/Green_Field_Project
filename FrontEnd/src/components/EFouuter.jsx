import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
const EFouuter = () => {
  return (
    <MDBFooter className='text-center mt-5' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4' disabled='true'>
                  Green Field Project
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Aymen</h5>
                    <img src="http://via.placeholder.com/640x360" alt=""  style={{borderRadius:'50%',width:"150px",height:"150px"}}/>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Bouras</h5>

              <img src="http://via.placeholder.com/640x360" alt=""  style={{borderRadius:'50%',width:"150px",height:"150px"}}/>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Saief</h5>

              <img src="http://via.placeholder.com/640x360" alt=""  style={{borderRadius:'50%',width:"150px",height:"150px"}}/>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Zrelli</h5>

              <img src="http://via.placeholder.com/640x360" alt=""  style={{borderRadius:'50%',width:"150px",height:"150px"}}/>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Cohort 8  &nbsp;
        <a className='text-white' href='https://github.com/RBK-TN'>
         RBK TUNISIA
        </a>
      </div>
    </MDBFooter>
  )
}

export default EFouuter