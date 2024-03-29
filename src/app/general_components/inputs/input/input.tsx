// <import types
import { ChangeEvent } from 'react';
// import types>

// <import styles
import styles from './input.module.scss';
// import styles>

// <validation
import validations from '@/lib/validations';
// validation>

// <types
interface InputProps {
    name : string
    type : "text" | "password" | "email" | "number",
    validation : Function,
    keyName : string,
    placeholder : string
}
// types>

/**
 * @description custom input
 */
function Input(props : InputProps) {

    const { type, name, validation, placeholder, keyName } = props;

    /**
     * @description send input's value to validation functions based by it's type
     * @param event input event
     * @returns validation functions result
     */
    function handleValidation(event : ChangeEvent<HTMLInputElement>) {

        const value = event.target.value;

        switch (type) {

            case 'email':

                return validation(validations.emailValidation(value, keyName));

            case 'password':

                return validation(validations.passwordValidation(value, keyName));

            case 'number':

                return validation(validations.numberValidation(value ,keyName));

            default:

            return validation({
                type : keyName || name || type,
                value
            });

        };

    };

    return (
        <input name={name} type={type} onChange={handleValidation} className={styles.input} placeholder={placeholder}/>
    );

};

export default Input;