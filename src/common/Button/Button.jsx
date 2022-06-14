import React from 'react';
import classNames from "classnames";
import styles from './Button.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonTypes = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
};

const Button = ({ onClick, type = ButtonTypes.PRIMARY, icon, className, children }) => {
    return (
        <button onClick={onClick} className={classNames(styles.button, styles[type], className)}>
            {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
            {children}
        </button>
    )
};

export default Button;