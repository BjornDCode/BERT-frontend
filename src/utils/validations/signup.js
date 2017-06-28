import { isEmpty, isEqual } from 'lodash';
import { isEmail, isInvalid } from './common';

function validateInput(data) {

    let errors = {};

    if (isInvalid(data.username)) {
        errors.username = ['This field is required'];
    }
    if (isInvalid(data.email)) {
        errors.email = ['This field is required'];
    }
    if (!isEmail(data.email)) {
        errors.email = ['Email is invalid'];
    }
    if (isInvalid(data.password)) {
        errors.password = ['This field is required'];
    }
    if (isInvalid(data.password_confirmation)) {
        errors.password_confirmation = ['This field is required'];
    }
    if (!isEqual(data.password, data.password_confirmation)) {
        errors.password_confirmation = ['Passwords must match'];
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}

export default validateInput;
