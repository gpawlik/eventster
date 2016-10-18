import React from 'react';
import moment from 'moment';
//import UserForm from './UserForm';

const Profile = React.createClass({    
    render () {
        const timeCreated = moment(this.props.user.createdAt).fromNow();
        return (
            <div className="UserProfile">
                <h3>User Profile</h3>
                <p>Name: {this.props.user.name}</p>
                <p>Created: {timeCreated}</p>
            </div>
        )        
    }
});

export default Profile;