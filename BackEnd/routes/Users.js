const express = require('express');
const router = express.Router();

const { getAllUsers, addUser, getOneUser, deleteUser,updateUser, uploadFile, getOneUserLogin, handleLogin} = require('../controllers/Users');

router.get("/getuserbyemail/:email",getOneUserLogin)

// GET request to fetch all users
router.get('/getAll', getAllUsers);

// GET request for one user
router.get('/:id', getOneUser);

// POST request for creating a user
router.post('/add', addUser);

// DELETE request for deleting a user
router.delete('/:id', deleteUser);

// PUT request for updating a user
router.put('/:id', updateUser);


router.post('/upload',uploadFile)

router.post('/login',handleLogin)
  

module.exports = router;
