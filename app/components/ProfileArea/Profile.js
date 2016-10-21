import React from 'react';
import moment from 'moment';

class Profile extends React.Component {    
    render () {
        const { username, email, createdAt } = this.props.user;
        const timeCreated = moment(createdAt).fromNow();        
        return (
            <div className="UserProfile">
                <h3>User Profile</h3>
                <p>Name: {username}</p>
                <p>Email: {email}</p>
                <p>Created: {timeCreated}</p>
            </div>
        )        
    }
};

Profile.propTypes = {
    user: React.PropTypes.object.isRequired
}

export default Profile;