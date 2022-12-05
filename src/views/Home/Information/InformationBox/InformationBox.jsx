import React, { useState } from 'react';
import styles from "./InformationBox.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const InformationBox = ({icon, title, text, children}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className={styles.informationBox}>
            <div className={styles.header} onClick={() => setIsExpanded(old => !old)}>
                <FontAwesomeIcon icon={icon} className={styles.icon} />
                <span className={styles.title}>{title}</span>
                <FontAwesomeIcon icon={faChevronUp} className={classNames(styles.icon, isExpanded && styles.rotated)} />
            </div>
            <div className={classNames(styles.content, isExpanded && styles.expanded)}>
                <div className={styles.textWrapper}>
                    <span className={styles.text}>{text}</span>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default InformationBox;