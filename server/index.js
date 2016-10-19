import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';
import User from './models/user';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

const app = express();

//import auth from './server/routes/auth';

// configure app
app.use(morgan('dev')); // log requests to the console

app.use(webpackMiddleware(webpack(webpackConfig)));

// configure body parser - Let us pull POST content from HTTP request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Specify port
const port = process.env.PORT || 3000; 

// Connect to the DB
const db_address = "localhost:27017/eventster";

mongoose.connection.on("open", function(ref) {
  return console.log("Connected to mongo server!");
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
  return console.log(err.message);
});

try {
  mongoose.connect("mongodb://" + db_address);
  const db = mongoose.connection;
  console.log("Started connection on " + ("mongodb://" + db_address) + ", waiting for it to open...");
} catch (err) {
  console.log(("Setting up failed to connect to " + db_address), err.message);
}

// Create our router
const router = express.Router();

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
		
		const user = new User();		// create a new instance of the User model
		user.name = req.body.name;  // set the users name (comes from the request)
		user.createdAt = Date.now();

		user.save(function(err, user) {
			if (err) res.send(err);			
			res.json({ message: 'User created!', user: user });
		});		
	})

	// Get all the users 
    // accessed at GET http://localhost:3000/api/users
	.get(function(req, res) {
		User.find().limit(20).sort({ createdAt: 1 }).exec(function(err, users) {
			if (err) res.send(err);            
			res.json(users);
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
			user.save(function(err, user) {
				if (err) res.send(err);	
				console.log(user);			
				res.json({ message: 'User updated!', user: user });
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
//app.use('/api/auth', auth);
// Serve static files from public directory
app.use(express.static('public'));

// Handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
// All the rest of the routing is a React concern.
app.get('*', function (request, response){
	console.log('Request: [GET]', request.originalUrl);
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);