import React from 'react';
import classNames from "classnames";
import strings from "../../../localization/strings";
import { useSelector } from "react-redux";
import styles from './Navigation.module.scss';
import { BrowserView } from 'react-device-detect';

const Navigation = ({rsvpRef, ourStoryRef, informationRef}) => {
    const language = useSelector(state => state.language);
    const { header } = strings[language];

    const scrollToRef = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    };

    return (
        <BrowserView>
            <nav className={styles.navigation}>
                <div className={classNames(styles.link)}>
                    <a onClick={() => scrollToRef(rsvpRef)}>{header.rsvp}</a>
                </div>
                <div className={classNames(styles.link)}>
                    <a onClick={() => scrollToRef(informationRef)}>{header.information}</a>
                </div>
                <div className={classNames(styles.link)}>
                    <a onClick={() => scrollToRef(ourStoryRef)}>{header.ourStory}</a>
                </div>
            </nav>
        </BrowserView>
    )
};

export default Navigation;