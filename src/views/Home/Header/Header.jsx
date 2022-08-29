import React, { useRef, useState } from 'react';
import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from './Header.module.scss';
import Button from "../../../common/Button/Button";
import { BrowserView, MobileView } from 'react-device-detect';
import { Turn as Hamburger } from 'hamburger-react'
import classNames from "classnames";
import { useClickedOutside } from "../../../utils/hooks/useClickedOutside";

const Header = () => {
    const { signOut } = useAuthenticator();
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    const hamburgerRef = useRef();

    useClickedOutside(hamburgerRef, () =>setHamburgerIsOpen(false));

    return (
        <div className={styles.container}>
            <BrowserView>
                <header className={styles.header}>
                    <nav className={styles.navigation}>
                        <div className={styles.link}>
                            RSVP
                        </div>
                        <div className={styles.link}>
                            Vår historia
                        </div>
                    </nav>
                    <Button onClick={signOut}>Logga ut</Button>
                </header>
            </BrowserView>
            <MobileView>
                <Hamburger toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} color="#e7e3e2"/>
                <nav className={classNames(styles.hamburgerMenu, hamburgerIsOpen && styles.show)} ref={hamburgerRef}>
                    <div className={styles.item}>RSVP</div>
                    <div className={styles.item}>Vår historia</div>
                    <div className={styles.item} onClick={signOut}>Logga ut</div>
                </nav>
            </MobileView>
        </div>
    )
};

export default Header;