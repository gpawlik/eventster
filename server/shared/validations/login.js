//import validator from 'validator';
var validator = require('validator');
import isEmpty from 'lodash/isEmpty';

const validateInput = function(data) {
    let errors = {};
    if (validator.isEmpty(data.identifier)) {
        errors.identifier = 'Enter a Title';
    }
    if (validator.isEmpty(data.password)) {
        errors.password = 'Enter a Password';
    }
    return { 
        errors,
        isValid: isEmpty(errors)
    };
}
    
export default validateInput;    