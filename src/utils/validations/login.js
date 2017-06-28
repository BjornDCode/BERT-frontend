import { isEmpty } from 'lodash';
import { isEmail, isInvalid } from './common';
import { REQUIRED, INVALID_EMAIL } from './errors';

function validateInput(data) {

    let errors = {};

    if (isInvalid(data.email)) {
        errors.email = [REQUIRED];
    }
    if (!isEmail(data.email)) {
        errors.email = [INVALID_EMAIL];
    }
    if (isInvalid(data.password)){
        errors.password = [REQUIRED];
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}

export default validateInput;
