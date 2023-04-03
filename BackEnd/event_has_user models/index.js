const mysql = require("mysql2")
const connection = require("./database");


module.exports={
    createAUserToEvent:(callback,event_id, user_id)=>{
        let sql = "insert into event_has_user(event_id,user_id) values (?,?);"
        connection.query(sql,[event_id,user_id],callback)
    },
    getAllTheEvents : (callback)=>{
        let sql = "select * from event_has_user;"
        connection.query(sql,callback)
    },
    getEventbyId: (callback,event_id)=>{
        let sql = `select v.* , u.* from event_has_user e
        inner join user u on e.user_id = u.user_id
        inner join event v on v.event_id = e.event_id
        where e.event_id =?;`
        connection.query(sql,[event_id],callback)
    },
    deleteUserFromEvent: (callback,event_id,user_id)=>{
        let sql = `delete from event_has_user where event_id = ? and user_id=?;`
        connection.query(sql,[event_id , user_id],callback)
    }
} 