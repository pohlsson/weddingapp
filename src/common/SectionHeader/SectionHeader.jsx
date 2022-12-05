import React from 'react';
import styles from './SectionHeader.module.scss';
import lido from '../../images/lido.jpg';

const SectionHeader = ({text, pageRef}) =>{
    return (
        <div className={styles.header} ref={pageRef}>
            <h2 className={styles.caption}>{text}</h2>
        </div>
    )
};

export default SectionHeader;