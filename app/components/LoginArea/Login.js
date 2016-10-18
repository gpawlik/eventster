import React from 'react';
import LoginForm from './LoginForm';

const Login = React.createClass({
    render() {
        return(
            <div>
                <h3>Login Area</h3>
                <LoginForm />
            </div>
        );
    }
});

export default Login;