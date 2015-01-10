var db = require('../db').db;




module.exports = {
  messages: {
    get: function () {
      console.log('Models messages GET');

    }, // a function which produces all the messages
    post: function () {
      console.log('Models messages GET');

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('Models users GET');

    },
    post: function (query) {
      console.log('Models users GET');
      console.log('query : ',query);
      var result = db.query(query, function(err){
        db.query('SELECT * FROM usernames', function(err, data){
            console.log("DATADATADATADATADATADATA  :", data);
            console.log("DATADATADATADATADATADATA  :", err);

        });
      });
      // console.log('result: ', result);
      return result;
      //insert ignore into...
      //
    }
  }
};

