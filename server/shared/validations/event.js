import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateInput = function(data) {
    let errors = {};
    if (Validator.isEmpty(data.title)) {
        errors.title = 'Enter a title';
    }
    if (Validator.isEmpty(data.headline)) {
        errors.headline = 'Enter a headline';
    }
    if (Validator.isEmpty(data.description)) {
        errors.description = 'Enter a description';
    }
    if (Validator.isEmpty(data.eventDate)) {
        errors.eventDate = 'Enter an event date';
    }
    if (Validator.isDate(data.eventDate)) {
        errors.eventDate = 'Enter a valid date';
    }
    return { 
        errors,
        isValid: isEmpty(errors)
    };
}
    
export default validateInput;    