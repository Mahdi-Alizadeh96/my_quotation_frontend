// <import types
import { MouseEventHandler, ReactNode } from 'react';
// import types>

// <import styles
import styles from './button.module.scss';
// import styles>

// <types
interface ButtonProps {
    label ?: string,
    size ?: 'small' | 'large' | 'with100',
    onClick ?: MouseEventHandler<HTMLButtonElement>,
    active ?: boolean,
    children ?: ReactNode
}
// types>

/**
 * @description custom button
 */
function Button(props : ButtonProps) {

    const { label, size = '', active, onClick, children } = props;

    /**
     * @description set disable mode to button
     * @returns disable style or remove it
     */
    function activeButton() : string {

        if (active !== undefined) { // check if active props passed to component

            if (active === false) {

                return styles.disable;

            } else {

                return '';

            };


        } else {

            return '';

        };

    };

  return (
    <button className={`${styles.button} ${styles[size]} ${activeButton()}`} disabled={!active} onClick={onClick}>
        { children || label }
    </button>
  );

};

export default Button;