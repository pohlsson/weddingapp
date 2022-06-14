import React from 'react';
import styles from './Input.module.scss';

const Input = ({ onChange }) => {

    return (
        <input type="text" onChange={onChange} className={styles.input} />
    )

};

export default Input;