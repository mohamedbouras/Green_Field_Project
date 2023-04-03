const mysql = require ("mysql2")

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "Saif1234",
    database:"e-education"
})

connection.connect((err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("connected to e-education")
    }
})

module.exports = connection