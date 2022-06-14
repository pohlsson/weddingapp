import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from './Home.module.scss'
import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createGuest, deleteGuest } from "../../graphql/mutations";
import RSVPContainer from "./RSVP/RSVPContainer";
import useScrollPosition from "../../utils/hooks/useScrollPosition";


export function Home() {
    const { signOut, user } = useAuthenticator();
    const scrollPosition = useScrollPosition();

    const createNewGuest = async () => {
        const guest = {
            firstName: "Nisse",
            lastName: "Randomsson Testson ",
            signedUpBy: 'admin',
            foodPreferences: '',
            attendingFriday: true,
            attendingSaturday: true,
            attendingSunday: true,
        };

        await API.graphql(graphqlOperation(createGuest, { input: guest }));
    };

    const deleteNewGuest = async () => {
        const guest = {
            firstName: "Nisse",
            lastName: "Randomsson Testson ",
            signedUpBy: 'admin',
            foodPreferences: '',
            attendingFriday: true,
            attendingSaturday: true,
            attendingSunday: true,
        };

        await API.graphql(graphqlOperation(deleteGuest, { input: guest }));
    };


    return (
        <main className={styles.container} style={{top: scrollPosition}}>
            <header className={styles.header}>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
                <button onClick={createNewGuest}>Create</button>
                <button onClick={deleteNewGuest}>Delete</button>
            </header>
            <div className={styles.content}>

            <RSVPContainer />
            </div>
        </main>
    );
}
