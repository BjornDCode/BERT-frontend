import { isEmpty, isEqual } from 'lodash';
import { isEmail, isInvalid } from './common';
import { REQUIRED, INVALID_EMAIL, PASSWORD_MATCH } from './errors';

function validateInput(data) {

    let errors = {};

    if (isInvalid(data.username)) {
        errors.username = [REQUIRED];
    }
    if (isInvalid(data.email)) {
        errors.email = [REQUIRED];
    }
    if (!isEmail(data.email)) {
        errors.email = [INVALID_EMAIL];
    }
    if (isInvalid(data.password)) {
        errors.password = [REQUIRED];
    }
    if (isInvalid(data.password_confirmation)) {
        errors.password_confirmation = [REQUIRED];
    }
    if (!isEqual(data.password, data.password_confirmation)) {
        errors.password_confirmation = [PASSWORD_MATCH];
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}

export default validateInput;
