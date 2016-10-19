import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateInput = function(data) {
    let errors = {};
    if (Validator.isEmpty(data.identifier)) {
        errors.identifier = 'Enter a Title';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Enter a Password';
    }
    return { 
        errors,
        isValid: isEmpty(errors)
    };
}
    
export default validateInput;    