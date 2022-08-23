import React from 'react';
import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from './Header.module.scss';
import Button from "../../../common/Button/Button";

const Header = () => {
    const { signOut } = useAuthenticator();
    return (
        <div className={styles.container}>
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
        </div>
    )
};

export default Header;