import express from 'express';
import authenticate from '../middleware/authenticate';

let router = express.Router();

router.post('/', authenticate, (req, res) => { // it's just chain of functions    
    res.status(201).json({ user: req.currentUser}); // currentUser passed from the middleware
});

export default router;