const users = require("../database/models/Users");
const multer = require('multer')
const bcrypt = require("bcrypt")
const jwt = require ("jsonwebtoken")
require('dotenv').config();

    module.exports = {
  //method to fetch all users 
  getAllUsers: function (req, res) {
    users.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  //method to add a user to the database 
  addUser: async function (req, res) {
        try {       
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.user_password,salt)
        req.body.user_password =  hashedPassword 
    users.add(
      function (err, results) {
        if (err) res.status(500).send(err);
        else {
          var token =  jwt.sign(req.body,process.env.ACCESS_TOKEN_SECRET)
          delete req.body.user_password
          res.status(201).json({...req.body,token:token,user_id:results.insertId});}
      },
      req.body
     
    )}catch(err){
      console.log(err)
      res.status(500).send(err)    
    }
    }
  ,
  getOneUserLogin: function(req,res){
    users.getOneByEmail((err,results)=>{
      if (err){
        console.log(err)
        res.status(500).json(err)
      }
      res.status(200).json(results)
    },[req.params.email]) 
  },

  handleLogin: function(req,res){ 
    users.getOneByEmail((err,results)=>{
     if(err){
       console.log(err)
       res.status(500).json(err)
     }else{
      bcrypt.compare(req.body.user_password,results[0].user_password,(error,result)=>{
        if (error){
          console.log(error)
          res.status(500).json(error)
        }
        if(result){
          var token =  jwt.sign(results[0],process.env.ACCESS_TOKEN_SECRET)
           delete results[0].user_password
          res.status(200).json({success:true,message:{...results[0],token:token}})
          
        }else{
          res.status(400).json({success:false,message:"login failure"})
        }
      }) 

     }
    
    },[req.body.user_email])
  
 },

  //method to get one user by id.
  getOneUser: function (req, res) {
    const userId = req.params.id;
    users.getOne(userId, function (err, result) {
      if (err) res.status(500).send(err);
      else if (!result) res.status(404).send("User not found");
      else res.json(result);
    });
  },

  //method to delete a user by id. 
  deleteUser: function (req, res, next) {
    const userId = req.params.id;
    users.delete(userId, function (err, result) {
      if (err) next(err);
      else if (!result) res.status(404).send("User not found");
      else res.json(result);
    });
  },

  // a method to update a user by id.
  updateUser: function(req, res) {
    const userId = req.params.id;
   const user = req.body
    users.update(userId, user , function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else if (!result.affectedRows) {
        res.status(404).send("User not found");
      } else {
        res.json(result);
      }
    });
  },




  uploadFile : function  (req, res, next) {

    const storage = multer.diskStorage({
     destination: function(req, file, cb) {
       cb(null, 'uploads/')
     },
     filename: function(req, file, cb) {
       console.log(file)
       cb(null, file.originalname)
     }
   })


    const upload = multer({ storage }).single('profile-image')
    upload(req, res, function(err) {
      if (err) {
        return res.send(err)
      }
      console.log('file uploaded to server')
      console.log(req.file)
  
      // SEND FILE TO CLOUDINARY
      const cloudinary = require('cloudinary').v2
      cloudinary.config({
        cloud_name: 'dilwfvmbr',
        api_key: '443273299735126',
        api_secret: 'gv4yova2aVkz0IyYgwRcqAjV7EM'
      })
      
      const path = req.file.path
      const uniqueFilename = new Date().toISOString()
  
      cloudinary.uploader.upload(
        path,
        { public_id: `users/${uniqueFilename}`, tags: `users` }, 
        function(err, image) {
          if (err) return res.send(err)
          console.log('file uploaded to Cloudinary')
          
          const fs = require('fs')
          fs.unlinkSync(path)
          
          res.json(image)
        }
      )
    })
  }
  




}

