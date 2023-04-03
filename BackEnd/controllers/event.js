const event = require('../database/models/event.js')
const cloudinary = require('cloudinary').v2;
module.exports = {
    getAllEvent: function(req, res) {
        event.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },
    getOneEvent: function(req, res) {
        event.getOne(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        },[req.params.event_id])
    },
    deleteOneEvent: function(req, res) {
        event.delete(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        },[req.params.event_id])
    },
    addEvent: function(req, res) {
        let yourDate = new Date()
        req.body.event_time = yourDate.toISOString().split('T')[0]

        event.add(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        },req.body)
    },
    updateOneEvent:function(req, res) {
        event.upOne(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        },[req.body,req.params.event_id])
    },

}