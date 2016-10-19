import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/LoginActions';


class Login extends React.Component {
    render() {
        const { login } = this.props;
        return(
            <div>
                <h3>Login Area</h3>
                <LoginForm login={login} />
            </div>
        );
    }
};

Login.propTypes = {
    login: React.PropTypes.func.isRequired
}

export default connect(
    null, // simple mapStateToProps
    { login } // shorthand for mapActionsToProps
)(Login);