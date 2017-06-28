import { isEmpty, isNil } from 'lodash';


export function isEmail(email) {
    var regularExpression = /\S+@\S+\.\S+/;
    return regularExpression.test(email);
}

export function isInvalid(string) {
    if (isEmpty(string) || isNil(string)) {
        return true;
    }
    return false;
}
