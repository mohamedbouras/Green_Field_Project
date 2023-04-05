const express = require("express")
const { createUserEvent, getAllEvents, getEvent, deleteUserEvent, getEventsWithUserId } = require("../controllers/event_has_user controller")
const event_has_user_router = express.Router()

event_has_user_router.post("/events_users",createUserEvent)
event_has_user_router.get("/events_users",getAllEvents)
event_has_user_router.get("/events_users/event/:id",getEvent)
event_has_user_router.delete("/events_users/:id",deleteUserEvent)
event_has_user_router.get("/events_users/user/:id",getEventsWithUserId)

module.exports=event_has_user_router