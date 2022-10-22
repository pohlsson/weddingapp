import React, { useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from './Header.module.scss';
import Button from "../../../common/Button/Button";
import { BrowserView, MobileView } from 'react-device-detect';
import { Turn as Hamburger } from 'hamburger-react'
import classNames from "classnames";
import { useClickedOutside } from "../../../utils/hooks/useClickedOutside";
import strings from '../../../localization/strings';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { setLanguage } from "../../../actions/uiActions";

const Header = () => {
    const { signOut } = useAuthenticator();
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    const hamburgerRef = useRef();
    const dispatch = useDispatch();
    const language = useSelector(state => state.language);
    const location = useLocation();

    console.log(location.pathname);

    useClickedOutside(hamburgerRef, () =>setHamburgerIsOpen(false));

    const changeLanguage = () => {
        const newLanguage = language === 'swedish' ? 'english': 'swedish';
        dispatch(setLanguage(newLanguage));
    };

    const { header } = strings[language];

    return (
        <div className={styles.container}>
            <BrowserView>
                <header className={styles.header}>
                    <nav className={styles.navigation}>
                        <div className={classNames(styles.link, location.pathname === '/rsvp'&& styles.selected)}>
                            <Link to="/rsvp">{header.rsvp}</Link>
                        </div>
                        <div className={classNames(styles.link, location.pathname === '/our-story'&& styles.selected)}>
                            <Link to="/our-story">{header.ourStory}</Link>
                        </div>
                    </nav>

                    <div className={styles.buttons}>
                        <Button className={styles.language} onClick={changeLanguage}>
                            <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
                            <span>{language === 'swedish' ? 'Svenska' : 'English'}</span>
                        </Button>
                        <Button onClick={signOut}>{header.logOut}</Button>
                    </div>
                </header>
            </BrowserView>
            <MobileView>
                <Hamburger toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} color="#e7e3e2"/>
                <nav className={classNames(styles.hamburgerMenu, hamburgerIsOpen && styles.show)} ref={hamburgerRef}>
                    <div className={classNames(styles.item, styles.link)}>
                        <Link to="/rsvp">{header.rsvp}</Link>
                    </div>
                    <div className={classNames(styles.item, styles.link)}>
                        <Link to="/our-story">{header.ourStory}</Link>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.item} onClick={changeLanguage}>
                        <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
                        <span>{language === 'swedish' ? 'Byt språk' : 'Change language'}</span>
                    </div>
                    <div className={styles.item} onClick={signOut}>
                        <FontAwesomeIcon icon={faRightFromBracket} className={styles.icon} />
                        <span>{header.logOut}</span>
                    </div>

                </nav>
            </MobileView>
        </div>
    )
};

export default Header;