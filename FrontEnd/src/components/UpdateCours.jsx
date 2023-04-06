import React, { useState , useRef } from 'react'
import NaveBaree from "./NaveBaree.jsx"
import { Editor } from '@tinymce/tinymce-react';
import EFouuter from "./EFouuter.jsx"
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function UpdateCours() {
const location = useLocation()
const {courseData} = location.state
console.log(courseData)
const [eventName, setEventName] = useState(courseData. event_name)
const [eventDescription, setEventDescription] = useState(courseData.event_description)
const [eventParticipants, setEventParticipants] = useState(courseData.event_participants)
const [eventStatus, setEventStatus] = useState(false)
const [file, setFile] = useState('')
const handleChoFile = (e) => {
        setFile(e.target.files[0])
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
  const upNew = async () => {
    try {
      const imageUrl = await uploadImage();
      const course = {
        event_name: eventName,
        event_description: eventDescription,
        event_participants: eventParticipants,
        event_image: imageUrl,
        event_status: eventStatus,
      };
      console.log(course);
      const response = await axios.put(
        `http://localhost:4000/api/events/upadate/${courseData.event_id}`,
        course
      )

    } catch (error) {
      console.log(error,'hioo')
    }
  };
const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setEventDescription(editorRef.current.getContent());
    }
  };

    return (<>
        < NaveBaree/>
        <br />
        <center><h1>Update Course</h1></center>
        <br />
        <div className="add-cours">
          <div>
            Course Name :{' '}
            <input
              type="text"
              defaultValue={eventName}
              onChange={(event) => setEventName(event.target.value)}
            /><br />
            Image :{' '}
            <input type="file"
            defaultValue= {file}
             onChange={(e) => handleChoFile(e)} /> <br />
            Participants :{' '}
            <input 
            defaultValue={eventParticipants}
              type="number" // changed to number type
              onChange={(event) => setEventParticipants(event.target.value)}
            />
            <Editor 
        apiKey='y7gdwwrri4u64ofxgie5lwhlqztg98xcfms0xjcuoyheon0i'
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={eventDescription}
          init={{
            height: 500,
            menubar: false,
            plugins: [
                'anchor', 'autolink' ,'charmap', 'codesample', 'emoticons', 'image', 'link' ,'lists', 'media' ,'searchreplace' ,'table', 'visualblocks', 'wordcount', 'checklist' ,'mediaembed', 'casechange', 'export', 'formatpainter' ,'pageembed', 'linkchecker', 'a11ychecker' ,'tinymcespellchecker' ,'permanentpen', 'powerpaste', 'advtable' ,'advcode' ,'editimage', 'tinycomments', 'tableofcontents' ,'footnotes' ,'mergetags', 'autocorrect', 'typography', 'inlinecss'
            ],
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <center><button onClick={log}>Confirm corse</button></center><br /><br />
            <button onClick={() => upNew()}>UpdateCourse</button>
          </div>
        </div>
        < EFouuter/>
        </>);
     
    
}

export default UpdateCours