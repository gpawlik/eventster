import express from 'express';
import User from './../models/user';
import validateInput from '../shared/validations/signup';

let router = express.Router();

// Create a user
router.post('/', function(req, res) {				
		
    const { errors, isValid } = validateInput(req.body);
    
    if (isValid) {
        // Create a new instance of the User model
        const user = new User();
        user.username = req.body.username;
        user.email = req.body.email; 
        user.password = req.body.password;  
        user.createdAt = Date.now();

        user.save(function(err, user) {
            if (err) res.send(err);			
            res.json({ message: 'User created!', user: user });
        });	        
    }
    else {
        res.status(400).json(errors);
    }
        	
});

// Get all the users
router.get('/', function(req, res) {
    User.find().limit(20).sort({ createdAt: 1 }).exec(function(err, users) {
        if (err) res.send(err);            
        res.json(users);
    });
});

// Get the user with a specific id
router.get('/:user_id', function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if (err) res.send(err);
        res.json(user);
    });
});

// Update the user with the specific id
router.put('/:user_id', function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if (err) res.send(err);     			      
        user.name = req.body.name;
        user.save(function(err, user) {
            if (err) res.send(err);	
            console.log(user);			
            res.json({ message: 'User updated!', user: user });
        });
    });
});

// Delete the user with the specific id
router.delete('/:user_id', function(req, res) {
    User.remove({
        _id: req.params.user_id
    }, function(err, user) {
        if (err) res.send(err);
        res.json({ message: 'Successfully deleted' });
    });
});

export default router;