const express = require('express')
const cors = require('cors')
const app = express()
const cloudinary = require('cloudinary').v2;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const db = require('./database/index')



const eventRoute = require('./routes/event.js')
app.use('/api/events', eventRoute)
cloudinary.config({ 
    cloud_name: 'dmyit8zek',
    api_key: '967367384323565',
    api_secret: '2o_RpxzLlmYbnS-hoPDxplCjPus'
  });

const userRoutes = require('./routes/Users')
app.use("/api/user",userRoutes)

cloudinary.config({
    secure: true
  });







const event_has_user_router = require('./routes/event_has_user route')
app.use('/api',event_has_user_router)



app.listen(4000,()=>{
    console.log('listenning on 4000');
})
