import { BrowserRouter } from "react-router-dom";
import styles from './Home.module.scss'
import React, { useRef } from 'react';
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import Header from "./Header/Header";
import OurStory from "./OurStory/OurStory";
import Information from "./Information/Information";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useSelector } from "react-redux";
import strings from "../../localization/strings";

export function Home() {
    const scrollPosition = useScrollPosition();
    const rsvpRef = useRef();
    const informationRef = useRef();
    const ourStoryRef = useRef();
    const language = useSelector(state => state.language);
    const { header } = strings[language];

    return (
        <main className={styles.container} style={{top: scrollPosition}}>
            <BrowserRouter>
                <Header rsvpRef={rsvpRef} ourStoryRef={ourStoryRef} informationRef={informationRef}/>
                <div className={styles.content}>
                    <Information pageRef={informationRef}/>
                    <OurStory pageRef={ourStoryRef} />
                </div>
            </BrowserRouter>
        </main>
    );
}
