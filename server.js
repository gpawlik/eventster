// BASE SETUP
// =============================================================================
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var User       = require('./app/models/user');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser - Let us pull POST content from HTTP request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Specify port
var port = process.env.PORT || 3000; 

// Connect to the DB
var db_address = "localhost:27017/eventster";

mongoose.connection.on("open", function(ref) {
  return console.log("Connected to mongo server!");
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
  return console.log(err.message);
});

try {
  mongoose.connect("mongodb://" + db_address);
  db = mongoose.connection;
  console.log("Started connection on " + ("mongodb://" + db_address) + ", waiting for it to open...");
} catch (err) {
  console.log(("Setting up failed to connect to " + db_address), err.message);
}

// Create our router
var router = express.Router();

// Middleware to use for all requests
router.use(function(req, res, next) {
	console.log('Something is happening.');
	next();
});

// Test route to make sure everything is working 
// accessed at GET http://localhost:3000/api
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// Define routes
router.route('/users')

	// Create a user 
    // accessed at POST http://localhost:3000/users
	.post(function(req, res) {
		
		var user = new User();		// create a new instance of the User model
		user.name = req.body.name;  // set the users name (comes from the request)

		user.save(function(err) {
			if (err) res.send(err);
			res.json({ message: 'User created!' });
		});		
	})

	// Get all the users 
    // accessed at GET http://localhost:3000/api/users
	.get(function(req, res) {
		User.find(function(err, users) {
			if (err) res.send(err);
            var userList = users.map((item) => item.name);
			res.json(userList);
		});
	});

router.route('/users/:user_id')

	// Get the user with that id
	.get(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {
			if (err) res.send(err);
			res.json(user);
		});
	})

	// Update the user with this id
	.put(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {
			if (err) res.send(err);            
			user.name = req.body.name;
			user.save(function(err) {
				if (err) res.send(err);
				res.json({ message: 'User updated!' });
			});
		});
	})

	// Delete the user with this id
	.delete(function(req, res) {
		User.remove({
			_id: req.params.user_id
		}, function(err, user) {
			if (err) res.send(err);
			res.json({ message: 'Successfully deleted' });
		});
	});


// REGISTER OUR ROUTES 
app.use('/api', router);
// Serve static files from public directory
app.use(express.static('public'));

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);