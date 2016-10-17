import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as userApi from '../../api/user-api';
import store from '../../store';

const ProfileContainer = React.createClass({
    
    componentDidMount: function() {
        userApi.getUser(this.props.params.userId)
    },

    render() {         
        return (
            <Profile user={this.props.user} />
        )
    }        
});

const mapStateToProps = function(store) {
    return {
        user: store.profileState.user
    };
};

export default connect(mapStateToProps)(ProfileContainer);