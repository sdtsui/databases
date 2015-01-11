var models = require('../models');
var bluebird = require('bluebird');
//maybe modify data;
//try out json later


//(!!) express methods will work because you'll pass in the entire express obj

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, data){
        if (err){console.log(err);} else {
          res.send(data);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var keys = [];
      keys.push(req.body['message']);
      keys.push(req.body['username']);
      keys.push(req.body['roomname']);

      models.messages.post( keys , function(err, data){
        if(err){console.log(err);} else {
          // res.json(data);
          res.send(data);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, data){
        if (err){console.log(err);} else {
          res.send(data);
        }
      });
    },
    post: function (req, res) {
      var keys = [];
      keys.push(req.body['username']);

      models.users.post( keys , function(err, data){
          if(err){console.log(err);}
          //maybe refactor to errorcheck;
          // res.json(data);
          res.send(data);
        });
    }
  }
};

