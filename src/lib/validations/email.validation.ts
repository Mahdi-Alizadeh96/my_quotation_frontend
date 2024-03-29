// <types
interface ValidationResult {
    type : 'email',
    keyName : string,
    value : null | string
}
// types>

/**
 * @description check email format
 * @param value input value
 * @returns validationResult
 */
export default function emailValidation(value : string, keyName : string) {

    const emailRegex : RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const checkReg = emailRegex.test(value);

    let validationResult : ValidationResult = {
        type : 'email',
        keyName,
        value : null
    };

    if (checkReg) validationResult.value = value;

    return validationResult;
  
};