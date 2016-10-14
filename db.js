var mongoose = require('mongoose');

// Lets connect to our database using the DB server URL.
var db = mongoose.connect('mongodb://localhost:27017/eventster');

// The name provided to the model will be pluralized internally 
// and the collection with that plural name will be created in mongodb. 
var User = mongoose.model('User', {name: String, roles: Array, age: Number});

// Create
/*var user1 = new User({name: 'eventster other admin', age: 43, roles: ['admin', 'moderator', 'user']});
user1.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});*/

User.findOne({name: /admin/}, function (err, userObj) {
  if (err) {
    console.log(err);
  } else if (userObj) {
    console.log('Found:', userObj);

    //For demo purposes lets update the user on condition.
    if (userObj.age != 30) {
      //Some demo manipulation
      userObj.age += 30;

      //Lets save it
      userObj.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Updated', userObj);
        }
      });
    }
  } else {
    console.log('User not found!');
  }
});

db.disconnect();