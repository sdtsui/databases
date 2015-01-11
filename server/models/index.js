var db = require('../db').db;


//DEFINE THE STRINGS IN HERE

module.exports = {
  messages: {
    get: function (cb) {
      console.log('msg-get');
      var queryString = "select messages.id, messages.message, messages.roomname, users.username \
                        from messages \
                        left outer join users on (messages.u_id = users.id) \
                        order by messages.id desc";
                        //joining all the selected messages, with users, on user ID.
      db.query(queryString, function(err, data){
        if (err){console.log(err);}
        cb(err, data);
      });
      //this callback will serve up all users
    }, // a function which produces all the messages
    post: function (params, cb) {
      console.log('msg-post');
      //use subquery: finding first id that matches username
      var queryString = "insert into messages(message, u_id, roomname) \
                        values(?,(select id from users where username = ? limit 1),?); \
                        ";
      //this callback will be a "we posted" notification
      db.query(queryString, params, function(err, data){
        if (err){console.log(err);}
        cb(err, data);
      });
    }
  }, // a function which can be used to insert a message into the database
  users: {
    // Ditto as above.
    get: function (cb) {
      console.log('users-get');
      var queryString = "select * from users";
      db.query(queryString, function(err, data){
        if (err){throw err;};
        cb(err, data);
      });
      //this callback will serve up all users
    },
    post: function (params, cb) {
      console.log('users-post');
      var queryString = "insert into users(username) values(?)";
      //this callback will be a "we posted" notification
      db.query(queryString, params, function(err, data){
        if(err){console.log(err, "Error")};
        console.log('completed users-post'/*, data*/);
        cb(err, data);
      });
    }
  }
};

