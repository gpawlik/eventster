import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUser } from '../../actions/userActions';
import store from '../../store';

class ProfileContainer extends React.Component {
    
    componentDidMount() {        
        this.fetchUserData(this.props.params.userId);
    }
    
    componentWillReceiveProps(newProps) {
        if(newProps.params.userId !== this.props.params.userId) {
            this.fetchUserData(newProps.params.userId);
        }        
    }
    
    fetchUserData(userId) {
        this.props.getUser(userId);
    }

    render() {         
        return (
            <Profile user={this.props.user} />
        )
    }        
};

const mapStateToProps = function(store) {
    return {
        user: store.profileState.user
    };
};

export default connect(mapStateToProps, { getUser })(ProfileContainer);