const { createAUserToEvent, getAllTheEvents, getEventbyId, deleteUserFromEvent} = require("../database/models/event_has_user")

module.exports={
    createUserEvent: (req,res)=>{
        const {event_id, user_id} = req.body
        getEventbyId((err,results)=>{
            if (err){
                console.log(err)
                res.status(500).json(err)
            }
          var e = results.filter((e,i)=>{
               return e.user_id===user_id
            })
            if (e.length > 0 ){
                res.send("user already exists")
            }
            else{
            createAUserToEvent((err,results)=>{
                if(err){
                    console.log(err)
                    res.status(500).send("there is an err")
                } 
                res.status(200).send("matching created")
            },event_id, user_id)}
        },event_id)   
    },
    getAllEvents:(req,res)=>{
        getAllTheEvents((err,results)=>{
            if (err){
                console.log(err)
                res.status(500).json(err)
            }
            res.status(200).json(results)
        })
    },
    getEvent:(req,res)=>{
        const event_id = req.params.id
        getEventbyId((err,results)=>{
            if (err){
                console.log(err)
                res.status(500).json(err)
            }
            res.status(200).json(results)
        },event_id)
    },
    deleteUserEvent : (req,res)=>{
        const event_id = req.params.id
        const {user_id} = req.body
        deleteUserFromEvent((err,results)=>{
            if (err){
                console.log(err)
                res.status(500).send(err)
            }
            res.status(200).send("user deleted")
        },event_id,user_id)
    }
}