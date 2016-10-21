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
            isLoading: false,
            invalid: false
        }
        
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.checkUserExists = this.checkUserExists.bind(this);
    }   
    
    checkUserExists(e) {
        const field = e.target.name;
        const val = e.target.value;
        if (val !== '') {
            this.props.isUserExists(val).then(res => {
                let errors = this.state.errors;
                let invalid;
                if (res.data.user) {
                    errors[field] = 'There is user with such ' + field;
                    invalid = true;
                } else {
                    errors[field] = '';
                    invalid = false;
                }
                this.setState({ errors, invalid });
            });
        }
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
                    this.context.router.push('/login') // why is better than browserHistory.push() ?
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
        const { username, email, password, passwordConfirmation, errors, isLoading, invalid } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                    field="username"
                    label="Username"
                    value={username}
                    error={errors.username}
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                />
                <TextFieldGroup 
                    field="email"
                    label="Email"
                    value={email}
                    error={errors.email}
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
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
                <button disabled={isLoading || invalid}>Login</button>
            </form>
        );
    }
};

LoginForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
    isUserExists: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default LoginForm;