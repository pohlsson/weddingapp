import { BrowserRouter } from "react-router-dom";
import styles from './Home.module.scss'
import React, { useRef } from 'react';
import RSVPContainer from "./RSVP/RSVPContainer";
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import Header from "./Header/Header";
import OurStory from "./OurStory/OurStory";
import Information from "./Information/Information";
import { Route, Routes } from "react-router";
import Admin from "./Admin/Admin";
import { useAuthenticator } from "@aws-amplify/ui-react";

export function Home() {
    const { user } = useAuthenticator();
    const scrollPosition = useScrollPosition();
    const rsvpRef = useRef();
    const informationRef = useRef();
    const ourStoryRef = useRef();
    const userIsAdmin = (user.attributes.email === 'patrolsson@gmail.com') || (user.attributes.email === 'oholsson88@gmail.com');

    const Content = () => (
        <div className={styles.content}>
            <RSVPContainer pageRef={rsvpRef}/>
            <Information pageRef={informationRef}/>
            <OurStory pageRef={ourStoryRef} />
        </div>
    );

    console.log(user);

    return (
        <main className={styles.container} style={{top: scrollPosition}}>
            <BrowserRouter>
                <Header rsvpRef={rsvpRef} ourStoryRef={ourStoryRef} informationRef={informationRef}/>
                {/*<Navigation rsvpRef={rsvpRef} ourStoryRef={ourStoryRef} informationRef={informationRef} />*/}
                <Routes>
                    <Route path="/" element={<Content />} />
                    { userIsAdmin && <Route path="/admin" element={<Admin/>}/>}
                </Routes>
            </BrowserRouter>
        </main>
    );
}
