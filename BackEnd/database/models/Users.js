const conn = require("../index");

module.exports = {
  //a function which fetches all the users.
  getAll: function (callback) {
    const sql = "SELECT * FROM `User`";
    conn.query(sql, function (error, results) {
      callback(error, results);
    });
  },
  getOneByEmail:function(callback, user_email){
     const sql = "select * from user where user_email=? "
     conn.query(sql ,user_email,function (error, results) {
      callback(error, results);
    })},

  //a function that retrieves one user record based on the provided id.
  getOne: function (id, callback) {
    const sql = "SELECT * FROM `User` WHERE `user_id` = ?;"
    conn.query(sql, [id], function (error, results) {
      callback(error, results);  
    });
  },

  // a function that can be used to add a user to the users table.
  add: function (callback, user) {
    
    const sql = "INSERT INTO User SET ? ";
    conn.query(sql, user, function (error, results) {
      callback(error, results);
    });
  },

  // a function that deletes a user from the users table based on id.
  delete: function (id, callback) {
    const sql = "DELETE FROM User WHERE user_id = ?";
    conn.query(sql, [id], function (error, results) {
      callback(error, results);
    });
  },
// a function that update a user by id.
update: function(id, userData, callback) {
  const sql = "UPDATE User SET ? WHERE user_id = ?";
  conn.query(sql, [userData, id], function(error, results) {
    callback(error, results);
  });
}
};
