import express from 'express';
import Event from '../models/event';
import authenticate from '../middleware/authenticate';

let router = express.Router();

router.post('/', authenticate, (req, res) => { // it's just chain of functions    
    res.status(201).json({ user: req.currentUser}); // currentUser passed from the middleware
});

router.get('/', (req, res) => {    
    Event.find().limit(20).sort({ createdAt: 1 }).exec(function(err, events) {
        if (err) res.send(err);            
        res.json(events);
    });
});

export default router;