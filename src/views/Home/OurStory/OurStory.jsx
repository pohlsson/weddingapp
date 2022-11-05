import React, { useState } from 'react';
import styles from './OurStory.module.scss';
import { useSelector } from "react-redux";
import strings from "../../../localization/strings";
import vasaparken from '../../../images/vasaparken.jpg';
import StoryCard from "./StoryCard/StoryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const storyImages = [
    vasaparken,
    vasaparken,
    vasaparken,
    vasaparken,
];

const MAX_LEFT = 40;
const MIN_LEFT = -980;


const OurStory = () => {
    const [left, setLeft] = useState(40);
    const [selectedCardId, setSelectedCardId] = useState(0);
    const language = useSelector(state => state.language);
    const { ourStory } = strings[language];

    const selectedCard = ourStory?.story?.[selectedCardId];

    const scrollLeft = () => {
        setLeft(oldLeft => oldLeft + 340);
        if (selectedCardId > 0) {
            setSelectedCardId(oldCard => oldCard - 1);
        }
    };

    const scrollRight = () => {
        setLeft(oldLeft => oldLeft - 340);
        if (selectedCardId < ourStory.story.length - 1) {
            setSelectedCardId(oldCard => oldCard + 1);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.caption}>{ourStory.header}</h2>
            </div>
            <div className={styles.stripe}>
                <button
                    className={styles.leftButton}
                    onClick={scrollLeft}
                    disabled={left >= MAX_LEFT}
                >
                    <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
                </button>
                <div className={styles.content} style={{left}}>
                    {ourStory.story.map((story, i) => (
                            <StoryCard {...story} isSelected={selectedCardId === i} image={storyImages[i]} onClick={() => setSelectedCardId(i)} />
                        )
                    )}
                </div>
                <button className={styles.rightButton} onClick={scrollRight} disabled={left <= MIN_LEFT}><FontAwesomeIcon icon={faChevronRight} className={styles.icon} /></button>
            </div>
            <div className={styles.text}>
                <span>{selectedCard.text}</span>
            </div>
        </div>
    )
};

export default OurStory;