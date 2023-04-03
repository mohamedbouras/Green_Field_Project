const express = require('express')
const cors = require('cors')
const event_has_user_router = require('./event_has_user routes/event_has_user route')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// user Aymen 




//event mohamed Bouras





//Event Has User  Saif
app.use('/api',event_has_user_router)



app.listen(4000,()=>{
    console.log('listenning on 4000');
})
