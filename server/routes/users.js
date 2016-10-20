import express from 'express';
import User from './../models/user';
import signupValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

// Validate if the username or email already exist
function validateInput(data, otherValidations) {
        
    let { errors } = otherValidations(data);
    
    return User.findOne({ $or: [{ username: data.username }, { email: data.email }] })
        .then(user => {            
            if (user) {
                if (data.username === user.username) {
                    errors.username = 'Username already exists';
                }
                if (data.email === user.email) {
                    errors.email = 'Email already exists';
                }                
            }
            return {
                errors,
                isValid: isEmpty(errors)
            }
        });
}

// Create a user
router.post('/', function(req, res) {				
		
    validateInput(req.body, signupValidations).then(({ errors, isValid }) => {        
        if (isValid) {
            const { username, email, password } = req.body;   
            const password_hash = bcrypt.hashSync(password, 10);     
            const newUser = new User({
                username: username,
                email: email,
                password: password_hash,  
                createdAt: Date.now()                
            });
            
            newUser.save()
                .then(user => res.json({ message: 'User created!', user: user }))
                .catch(err => res.status(500).json({ error: err }));	        
        }
        else {
            res.status(400).json(errors);
        }        
    });   
        	
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