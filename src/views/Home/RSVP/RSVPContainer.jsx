import React, { useEffect, useState } from 'react';
import { listGuests } from "../../../graphql/queries";
import { API, graphqlOperation } from "@aws-amplify/api";
import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from './RSVP.module.scss';
import GuestList from "./GuestList/GuestList";
import Button, { ButtonTypes } from "../../../common/Button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const RSVPContainer = () => {
    const [addedGuests, setAddedGuests] = useState([]);
    const { user } = useAuthenticator();

    const fetchGuests = async () => {
        try {
            const guestData = await API.graphql(graphqlOperation(listGuests));
            const guestList = guestData.data.listGuests.items;
            setAddedGuests(guestList.filter(g => g.signedUpBy === user.username));
        } catch (error) {
            console.log('error on fetching guests', error);
        }
    };

    useEffect(() => {
        fetchGuests();
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Anmäl gäster</h2>
            <GuestList guests={addedGuests} />
            <Button icon={faPlus} className={styles.addGuestButton} type={ButtonTypes.SECONDARY}>
                Lägg till gäst
            </Button>
        </div>
    )
};

export default RSVPContainer;