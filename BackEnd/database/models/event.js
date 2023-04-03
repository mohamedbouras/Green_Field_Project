const conn = require("../index.js")


module.exports = {
      getAll: function (callback) {
        const sql = 'SELECT * FROM Event'
        conn.query(sql, function (error, results) {
          callback(error, results)
        });
      },
      getOne: function(callback,idposts) {
        const sql = 'SELECT * FROM Event where event_id =?'
        conn.query(sql,idposts, function (error, results) {
          callback(error, results)
        })
      },
      add: function (callback,postInfo) {
        const sql = 'INSERT INTO Event set ?'
        conn.query(sql,postInfo,function (error, results) {
          callback(error, results)
        });
      }, 
      delete: function (callback,deltePost) {
        const sql = 'DELETE FROM Event WHERE event_id = ?'
        conn.query(sql,deltePost,function (error, results) {
          callback(error, results)
        });
      },
      upOne:function(callback,id) {
        const sql = 'update Event set ? where event_id = ?'
        conn.query(sql,id, function (error, results) {
          callback(error, results)
        })
      
      },

    };