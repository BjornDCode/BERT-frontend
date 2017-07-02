import { isEmpty } from 'lodash';
import { isInvalid } from './common';
import { REQUIRED } from './errors';


function validateInput(data) {

    let errors = {};

    if (isInvalid(data.title)) {
        errors.title = [REQUIRED];
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}

export default validateInput;
