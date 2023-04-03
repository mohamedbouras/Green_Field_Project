const express = require("express")
const { createUserEvent, getAllEvents, getEvent, deleteUserEvent } = require("../event_has_user controllers/event_has_user controller")
const event_has_user_router = express.Router()

event_has_user_router.post("/events_users",createUserEvent)
event_has_user_router.get("/events_users",getAllEvents)
event_has_user_router.get("/events_users/:id",getEvent)
event_has_user_router.delete("/events_users/:id",deleteUserEvent)

module.exports=event_has_user_router