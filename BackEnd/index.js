const express = require('express')
const cors = require('cors')
const app = express()




const cloudinary = require('cloudinary').v2;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const userRoutes = require('./routes/Users')

// user Aymen 
app.use("/api/user",userRoutes)

cloudinary.config({
    secure: true
  });


  console.log(cloudinary.config());

//event mohamed Bouras






//Event Has User  Saif




app.listen(4000,()=>{
    console.log('listenning on 4000');
})
