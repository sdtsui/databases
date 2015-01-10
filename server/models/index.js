var db = require('../db');




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
    post: function () {
      console.log('Models users GET');

    }
  }
};

