const express = require('express');
const { getAllEvent, getOneEvent, addEvent, deleteOneEvent, updateOneEvent } = require('../controllers/event');
const router = express.Router();
router.get('/getAll',getAllEvent)
router.get('/:event_id',getOneEvent)
router.post('/add',addEvent)
router.delete('/:event_id',deleteOneEvent)
router.put('/upadate/:event_id',updateOneEvent)
module.exports = router