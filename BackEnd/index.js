const express = require('express')
const cors = require('cors')
const event_has_user_router = require('./event_has_user routes/event_has_user route')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const db = require('./database/index')
const eventRoute = require('./routes/event.js')
app.use('/api/events', eventRoute)
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dmyit8zek',
    api_key: '967367384323565',
    api_secret: '2o_RpxzLlmYbnS-hoPDxplCjPus'
  });
// user Aymen 




//event mohamed Bouras





//Event Has User  Saif
app.use('/api',event_has_user_router)



app.listen(4000,()=>{
    console.log('listenning on 4000');
})
