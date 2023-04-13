// <import styles
import styles from './button.module.scss';
// import styles>

// <types
interface ButtonProps {
    label : string,
    size ?: 'small' | 'large' | 'with100'
}
// types>

/**
 * @description custom button
 */
function Button(props : ButtonProps) {

    const { label, size } = props;

    /**
     * @description set size of custom button
     * @returns button module style
     */
    function buttonSize() {
        if (size) {
            switch (size) {
                case 'small':
                    return styles.small
                case 'large':
                    return styles.large
                case 'large':
                    return styles.with100
                default:
                    break;
            };
        } else {
            return '';
        }
    };


  return (
    <button className={`${styles.button} ${buttonSize()}`}>
        { label }
    </button>
  );

};

export default Button;