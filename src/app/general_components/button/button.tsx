// <import types
import { MouseEventHandler } from 'react';
// import types>

// <import styles
import styles from './button.module.scss';
// import styles>

// <types
interface ButtonProps {
    label : string,
    size ?: 'small' | 'large' | 'with100',
    onClick ?: MouseEventHandler<HTMLButtonElement>,
    active ?: boolean
}
// types>

/**
 * @description custom button
 */
function Button(props : ButtonProps) {

    const { label, size, active, onClick } = props;

    /**
     * @description set size of custom button
     * @returns button module style
     */
    function buttonSize() : string {

        if (size) {

            switch (size) {
                case 'small':
                    return styles.small
                case 'large':
                    return styles.large
                case 'large':
                    return styles.with100
                default:
                    return '';
            };

        } else {

            return '';

        };

    };

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
    <button className={`${styles.button} ${buttonSize()} ${activeButton()}`} disabled={!active} onClick={onClick}>
        { label }
    </button>
  );

};

export default Button;