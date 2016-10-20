import React from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        }
        
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();
        if(this.isValid()) { // otherwise we have server-side validation           
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state).then(
                (res) => this.context.router.push('/')                
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
        const { identifier, password, errors, isLoading } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                    field="identifier"
                    label="Usersname / Email"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                />
                <TextFieldGroup 
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                />
                <button disabled={isLoading}>Login</button>
            </form>
        );
    }
};

LoginForm.propTypes = {
    login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default LoginForm;