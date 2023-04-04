const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'lybov123', 
    database: 'E-education' 
  });



connection.connect((err)=>{
  if (err) {
   console.log(err)
  }
  else {
      console.log("connected to db")
  }
})
module.exports= connection