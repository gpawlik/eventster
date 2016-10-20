import React from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/signup';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false
        }
        
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }   
    
    onSubmit(e) {
        e.preventDefault();
        if(this.isValid()) {            
            this.setState({ errors: {}, isLoading: true });
            this.props.userSignupRequest(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'User succesfully created!'
                    });
                    this.context.router.push('/') // why is better than browserHistory.push() ?
                }            
            ).catch(
                (err) => {this.setState({ errors: err.response.data, isLoading: false })}
            );
        }
    } 
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }   
    
    isValid() {
        const { errors, isValid } = validateInput(this.state); 
        if(!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }  
    
    render() {
        // deconstruct variables from state
        const { username, email, password, passwordConfirmation, errors, isLoading } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                    field="username"
                    label="Username"
                    value={username}
                    error={errors.username}
                    onChange={this.onChange}
                />
                <TextFieldGroup 
                    field="email"
                    label="Email"
                    value={email}
                    error={errors.email}
                    onChange={this.onChange}
                    type="email"
                />
                <TextFieldGroup 
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                />
                <TextFieldGroup 
                    field="passwordConfirmation"
                    label="Re-enter Password"
                    value={passwordConfirmation}
                    error={errors.passwordConfirmation}
                    onChange={this.onChange}
                    type="password"
                />
                <button disabled={isLoading}>Login</button>
            </form>
        );
    }
};

LoginForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default LoginForm;