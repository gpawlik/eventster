import express from 'express';
import Event from '../models/event';
import authenticate from '../middleware/authenticate';
import validateInput from '../shared/validations/event';

let router = express.Router();

// Create an event
router.post('/', authenticate, function(req, res) {				
		
    const { errors, isValid } = validateInput(req.body);
            
    if (isValid) {
        const { title, headline, description, eventDate } = req.body;      
        const newEvent = new Event({
            title: title,
            headline: headline,
            description: description, 
            eventDate: eventDate, 
            createdAt: Date.now()                
        });
        
        newEvent.save()
            .then(event => res.status(201).json({ message: 'Event created!', event: event }))
            .catch(err => res.status(500).json({ error: err }));	        
    }
    else {
        res.status(400).json(errors);
    }          
        	
});

router.get('/', (req, res) => {    
    Event.find().limit(20).sort({ createdAt: 1 }).exec(function(err, events) {
        if (err) res.send(err);            
        res.json(events);
    });
});

router.get('/:eventId', function(req, res) {
    Event.findById(req.params.eventId, function(err, event) {
        if (err) res.send(err);
        res.json(event);
    });
});

router.delete('/:eventId', authenticate, function(req, res) {
    Event.remove({
        _id: req.params.eventId
    }, function(err, event) {
        if (err) res.send(err);
        res.json({ message: 'Successfully deleted' });
    });
});

export default router;