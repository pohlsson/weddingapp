import { Route, Routes, BrowserRouter } from "react-router-dom";
import styles from './Home.module.scss'
import React from 'react';
import RSVPContainer from "./RSVP/RSVPContainer";
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import Header from "./Header/Header";
import OurStory from "./OurStory/OurStory";

export function Home() {
    const scrollPosition = useScrollPosition();

    return (
        <main className={styles.container} style={{top: scrollPosition}}>
            <BrowserRouter>
                <Header />
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<div>TEST</div>}/>
                        <Route path="/rsvp" element={<RSVPContainer/>}/>
                        <Route path="/our-story" element={<OurStory />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </main>
    );
}
