import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import main from './routes/main';
import auth from './routes/auth';
import users from './routes/users';
import events from './routes/events';

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000; 
const db_address = "localhost:27017/eventster";

// Log requests to the console
app.use(morgan('dev')); 

// Webpack middleware
const compiler = webpack(webpackConfig);
if (!isProduction) {	
	app.use(webpackMiddleware(compiler, {
		hot: true,
		publicPath: webpackConfig.output.publicPath,
		noInfo: true // eliminate noise from webpack
	}));
	app.use(webpackHotMiddleware(compiler));	
}

// Configure body parser - Let us pull POST content from HTTP request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB connection
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

// REGISTER ROUTES 
app.use('/api', main);
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/events', events);

// Serve static files from public directory
app.use(express.static('public'));

// Handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
// All the rest of the routing is a React concern.
app.get('*', function (req, res, next){
	console.log('Request: [GET]', req.originalUrl);
	const filename = path.join(__dirname, './../public/index.html');
	if (isProduction) {
		res.sendFile(filename);
	}
	else {
		compiler.outputFileSystem.readFile(filename, function(err, result){
			if (err) {
				return next(err);
			}
			res.set('content-type','text/html');
			res.send(result);
			res.end();
		});		
	}
})

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);