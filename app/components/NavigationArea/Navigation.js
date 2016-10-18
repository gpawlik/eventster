import React from 'react';
import { Link } from 'react-router';

export default function() {          
    return (
        <nav className="MainNav">
            <ul>
                <li><Link to="/">Events</Link></li>
                <li><Link to="/users">Users</Link></li>                                
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
};