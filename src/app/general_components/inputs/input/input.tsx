// <import types
import { ChangeEvent } from 'react';
// import types>

// <import styles
import styles from './input.module.scss';
// import styles>

// <types
interface InputProps {
    type : "text" | "password" | "email",
    validation : Function
}
// types>

/**
 * @description custom input
 */
function Input(props : InputProps) {

    const { type, validation } = props;

    /**
     * @description send input's value to validation functions based by it's type
     * @param event input event
     * @returns validation functions result
     */
    function handleValidation(event : ChangeEvent<HTMLInputElement>) {

        const value = event.target.value;

        switch (type) {

            case 'email':

                return validation(emailValidation(value));

            case 'password':

                return validation(passwordValidation(value));

            default:

                break;

        };

    };

    interface InputEvent {
        type : string
        value : string | null
    };

    let validationResult : InputEvent = { // final result
        type : '',
        value : null
    };

    /**
     * @description check email format
     * @param value input value
     * @returns validationResult
     */
    function emailValidation(value : string) {

        const emailRegex : RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const checkReg = emailRegex.test(value);

        if (!checkReg) {

            validationResult = {
                value : null,
                type : 'email'
            };

        } else {

            validationResult = {
                value,
                type : 'email'
            };

        };

        return validationResult;
        
    };

    /**
     * @description check password format
     * @param value input value
     * @returns validationResult
     */
    function passwordValidation(value : string) {

        const passwordRegex : RegExp = /^.{6,}$/;

        const checkReg = passwordRegex.test(value);

        if (!checkReg) {

            validationResult = {
                value : null,
                type : 'password'
            };

        } else {

            validationResult = {
                value,
                type : 'password'
            };
    
        };

        return validationResult;
        
    };

    return (
        <input type={type} onChange={handleValidation} className={styles.input} placeholder={`Enter your ${type}`}/>
    );

};

export default Input;