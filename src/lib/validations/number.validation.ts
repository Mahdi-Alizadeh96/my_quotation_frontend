// <types
interface ValidationResult {
    type : 'number',
    keyName : string,
    value : null | string
}
// types>

/**
 * @description check number format
 * @param value input value
 * @returns validationResult
 */
export default function numberValidation(value : string, keyName : string) {

    const numberRegex : RegExp = /^[0-9]{4}$/;

    const checkReg = numberRegex.test(value);

    let validationResult : ValidationResult = {
        type : 'number',
        keyName,
        value : null
    };

    if (checkReg) validationResult.value = value;

    return validationResult;
  
};