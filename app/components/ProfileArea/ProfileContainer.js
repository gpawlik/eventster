import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import Preloader from '../../common/Preloader';
import { getUser } from '../../actions/userActions';
import store from '../../store';

class ProfileContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    } 
    
    componentDidMount() {        
        this.fetchUserData(this.props.params.userId);
    }
    
    componentWillReceiveProps(newProps) {
        if(newProps.params.userId !== this.props.params.userId) {
            this.setState({ isLoading: true });
            this.fetchUserData(newProps.params.userId);
        }        
    }
    
    fetchUserData(userId) {
        this.props.getUser(userId).then(res => {
            this.setState({ isLoading: false });
        });
    }

    render() {         
        return (
            <div>
                {this.state.isLoading && <Preloader />}
                <Profile user={this.props.user} />
            </div>            
        )
    }        
};

const mapStateToProps = function(store) {
    return {
        user: store.profileState.user
    };
};

export default connect(mapStateToProps, { getUser })(ProfileContainer);