import React from 'react';
import { Link } from 'react-router';

export default function() {          
    return (
        <nav className="MainNav">
            <ul>
                <li><Link to="/">Users</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
};