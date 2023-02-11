import React from 'react';
import styles from './StoryCard.module.scss';
import { Badge } from "../../../../common/Badge/Badge";
import classNames from "classnames";

const StoryCard = ({title, text, image, isSelected}) => {
    return (
        <div className={classNames(styles.container, isSelected && styles.selected)}>
            <div className={styles.title}>
                <Badge text={title} />
            </div>
            {!isSelected && (
                <>
                    <div className={styles.overlay}/>
                    <div className={styles.text}>{text}</div>
                </>
            )}
            <img src={image?.file?.url} className={classNames(styles.image, isSelected && styles.selected)} />
        </div>
    );
};

export default StoryCard;