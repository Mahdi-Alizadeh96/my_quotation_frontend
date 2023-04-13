// <import styles
import styles from './input.module.scss';
// import styles>

// <types
interface InputProps {
    type : "text" | "password" | "email"
}
// types>

/**
 * @description custom input
 */
function Input(props : InputProps) {

    const {type} = props

    return (
        <input type={type} className={styles.input}/>
    );

};

export default Input;