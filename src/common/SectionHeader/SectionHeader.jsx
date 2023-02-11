import React from 'react';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({title, text, pageRef}) =>{
    return (
        <div className={styles.header} ref={pageRef}>
            <h2 className={styles.caption}>{title}</h2>
            {text && <span className={styles.text}>{text}</span>}
        </div>
    )
};

export default SectionHeader;