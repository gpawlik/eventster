import React from 'react';

export default function (props) {
    return (
        <div className="UserProfile">
            <h3>User Profile</h3>
            <p>Name: {props.user.name}</p>
            <p>Created: {props.user.createdAt}</p>
        </div>
    )
}