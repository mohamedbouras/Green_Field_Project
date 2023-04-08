import React, { useState , useRef} from 'react';
import axios from 'axios';
import './AddCours.css'
import { Editor } from '@tinymce/tinymce-react';
import NaveBaree from "./NaveBaree.jsx"
import EFouuter from "./EFouuter.jsx"
import { Alert } from 'react-bootstrap';
function AddCours() {
  const {token} =JSON.parse(localStorage.getItem('user'))
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [msg, setMsg] = useState('');
  const [eventParticipants, setEventParticipants] = useState(1);
  const [eventStatus, setEventStatus] = useState(false);
  const [file, setFile] = useState('');
  const user =JSON.parse(localStorage.getItem('user'))
  const handleChoFile = (e) => {
    setFile(e.target.files[0]);
  };
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

  const addNew = async () => {
    try {
      setMsg('1')
      const imageUrl = await uploadImage();
      const course = {
        event_name: eventName,
        event_description: eventDescription,
        event_participants: eventParticipants,
        event_image: imageUrl,
        event_status: eventStatus,
      };
      console.log(course);
      const response = await axios.post(
        'http://localhost:4000/api/events/add',
        course,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log(response.data.insertId,user.user_id);
      axios.post("http://localhost:4000/api/events_users",{event_id:response.data.insertId,
      user_id:user.user_id,
      action_type:"Teacher"},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res)=>{setMsg("Course Inserted")})
      .catch((err)=>{})
    } catch (error) {
      console.log(error);
    }
  };
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setEventDescription(editorRef.current.getContent());
    }
  };
console.log(user.user_id)
  return (<>
    < NaveBaree/>
    <br />
    <center><h1>Add Course</h1></center>
    <br />
    <div className="add-cours">
      <div>
        Course Name :{' '}
        <input
          type="text"
          value={eventName}
          onChange={(event) => setEventName(event.target.value)}
        /><br />
        Image :{' '}
        <input type="file" onChange={(e) => handleChoFile(e)} /> <br />
        Participants :{' '}
        <input
          min={1}
          type="number" // changed to number type
          value={eventParticipants}
          onChange={(event) => setEventParticipants(event.target.value)}
        />
        <Editor 
    apiKey='y7gdwwrri4u64ofxgie5lwhlqztg98xcfms0xjcuoyheon0i'
      onInit={(evt, editor) => editorRef.current = editor}
      initialValue="<p>This is the initial content of the editor.</p>"
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
    {msg.length===1 ?   <center><h3>Looding ... </h3></center> : ""}
    <Alert  variant={"success"} show={msg.length>1}>
          <center><h3>{msg}</h3></center>
        </Alert> <br />
        <button onClick={() => addNew()}>Submit</button>
      </div>
    </div>
    < EFouuter/>
    </>);
}

export default AddCours;
