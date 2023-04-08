const express = require('express');
const authorization = require('../middleware/auth.js')
const { getAllEvent, getOneEvent, addEvent, deleteOneEvent, updateOneEvent } = require('../controllers/event');
const router = express.Router();
router.get('/getAll',authorization,getAllEvent)
router.get('/:event_id',authorization,getOneEvent)
router.post('/add',authorization,addEvent)
router.delete('/:event_id',authorization,deleteOneEvent)
router.put('/upadate/:event_id',authorization,updateOneEvent)
module.exports = router