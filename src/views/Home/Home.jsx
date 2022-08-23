import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from './Home.module.scss'
import React from 'react';
import RSVPContainer from "./RSVP/RSVPContainer";
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import Header from "./Header/Header";


export function Home() {
    const scrollPosition = useScrollPosition();

    return (
        <main className={styles.container} style={{top: scrollPosition}}>
            <Header />
            <div className={styles.content}>
                <RSVPContainer />
            </div>
        </main>
    );
}
