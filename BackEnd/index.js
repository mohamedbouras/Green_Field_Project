const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// user Aymen 




//event mohamed Bouras





//Event Has User  Saif




app.listen(4000,()=>{
    console.log('listenning on 4000');
})
