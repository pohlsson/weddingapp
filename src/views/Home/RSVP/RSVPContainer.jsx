import React, { useEffect, useState } from 'react';
import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from './RSVP.module.scss';
import GuestList from "./GuestList/GuestList";
import { API, graphqlOperation } from 'aws-amplify';
import { listGuests } from "../../../graphql/queries";
import { createGuest, deleteGuest } from "../../../graphql/mutations";
import AddGuestForm from "./AddGuestForm/AddGuestForm";

const RSVPContainer = () => {
    const [addedGuests, setAddedGuests] = useState([]);
    const { user } = useAuthenticator();

    const fetchGuests = async () => {
        try {
            const guestData = await API.graphql(graphqlOperation(listGuests));
            console.log(guestData);
            const guestList = guestData.data.listGuests.items;
            setAddedGuests(guestList.filter(g => g.addedBy === user.username));
        } catch (error) {
            console.log('error on fetching guests', error);
        }
    };

    const createNewGuest = async (guest) => {
        const newGuest = {
            ...guest,
            addedBy: user.username,
        };
        await API.graphql(graphqlOperation(createGuest, { input: newGuest }));
        await fetchGuests();
    };

    const removeGuest = async (id) => {
        await API.graphql(graphqlOperation(deleteGuest, { input: {id} }));
        await fetchGuests();
    };

    useEffect(() => {
        fetchGuests();
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.caption}>Anmäl gäster</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.addGuest}>
                    <AddGuestForm onCreateGuest={createNewGuest} />
                </div>
                <div className={styles.guestList}>
                    <GuestList guests={addedGuests} onRemoveGuest={removeGuest} />
                </div>
            </div>
        </div>
    )
};

export default RSVPContainer;