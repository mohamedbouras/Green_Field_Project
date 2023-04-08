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









// handleLogin: function(req,res){ 
//   const jwtSecret = 'yAjT0x5cV6meqgMI8CfJl5Cef2sEGAESmMBpl7QkFBeQyIQnZO' 
//     const {token} =req.cookies
//     console.log(token)
//      if (token){
//         jwt.verify(token,jwtSecret,(err,result)=>{
//            if(err){
//             console.log(err)
//             res.status(403).send("invalid access token")
//            }
//            res.status(200).json({...result,success:true})
//          })
//      }
//     else{
//     users.getOneByEmail((err,results)=>{
//      if(err){
//        console.log(err)
//        res.status(500).json(err)
//      }
//      if (results.length){
//        bcrypt.compare(req.body.user_password,results[0].user_password,(error,result)=>{
//          if (error){
//            console.log(error)
//            res.status(500).json(error)
//          }
//          if(result){
//            var token =  jwt.sign(results[0],jwtSecret)
//            res.cookie('token',token,{httpOnly:true}) 
//            res.status(200).json({success:true,message:{...results[0],token:token}})
           
//          }else{
//            res.status(400).json({success:false,message:"login failure"})
//          }
//        }) 
//      }
//     },[req.body.user_email])
//   }  
//  }