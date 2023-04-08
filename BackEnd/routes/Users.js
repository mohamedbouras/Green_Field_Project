const express = require('express');
const router = express.Router();
const authorization = require('../middleware/auth.js')
const { getAllUsers, addUser, getOneUser, deleteUser,updateUser, uploadFile, getOneUserLogin, handleLogin, clearCookies} = require('../controllers/Users');

router.get("/getuserbyemail/:email",getOneUserLogin)

// GET request to fetch all users
router.get('/getAll',authorization, getAllUsers);

// GET request for one user
router.get('/:id',authorization, getOneUser);

// POST request for creating a user
router.post('/add', addUser);

// DELETE request for deleting a user
router.delete('/:id',authorization, deleteUser);

// PUT request for updating a user
router.put('/:id',authorization, updateUser);


router.post('/upload',authorization,uploadFile)

router.post('/login',handleLogin)
  

module.exports = router;
