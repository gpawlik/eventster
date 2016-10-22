import React from 'react';
import moment from 'moment';

class Profile extends React.Component {    
    render () {
        const { username, email, createdAt } = this.props.user;
        const timeCreated = moment(createdAt).fromNow();        
        return (
            <div className="UserProfile">
                <h3>User Profile</h3>
                <div className="content-wrapper">
                    <span className="profile-thumbnail"></span>
                    <p>
                        <span className="profile-label">Name</span> 
                        {username}
                    </p>
                    <p>
                        <span className="profile-label">Email</span> 
                        {email}
                    </p>
                    <p>
                        <span className="profile-label">Created</span> 
                        {timeCreated}
                    </p>                   
                </div>
            </div>
        )        
    }
};

Profile.propTypes = {
    user: React.PropTypes.object.isRequired
}

export default Profile;