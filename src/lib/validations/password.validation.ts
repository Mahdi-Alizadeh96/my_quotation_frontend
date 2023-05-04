// <types
interface ValidationResult {
    type : 'password',
    keyName : string
    value : null | string
}
// types>

/**
 * @description check password format
 * @param value input value
 * @returns validationResult
 */
export default function passwordValidation(value : string,  keyName : string) {

    const passwordRegex : RegExp = /^.{6,}$/;

    const checkReg = passwordRegex.test(value);

    let validationResult : ValidationResult = {
        type : 'password',
        keyName,
        value : null
    };

    if (checkReg) validationResult.value = value;

    return validationResult;
  
};