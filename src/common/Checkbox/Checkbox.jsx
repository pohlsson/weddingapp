import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './Checkbox.module.scss';

const Checkbox = ({label}) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <button className={styles.checkboxWrapper} onClick={() => setIsChecked(old => !old)}>
            <div className={styles.checkbox}>
                {isChecked && <FontAwesomeIcon icon={faCheck} className={styles.icon} />}
            </div>
            {label && <span>{label}</span>}
        </button>
    )
};

export default Checkbox;