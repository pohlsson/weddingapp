import React, { useEffect, useState } from 'react';
import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from './RSVPContainer.module.scss';
import GuestList from "./GuestList/GuestList";
import { API, graphqlOperation } from 'aws-amplify';
import { listGuests } from "../../../graphql/queries";
import { createGuest, deleteGuest } from "../../../graphql/mutations";
import AddGuestForm from "./AddGuestForm/AddGuestForm";
import strings from "../../../localization/strings";
import { useSelector } from "react-redux";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";

const RSVPContainer = ({pageRef}) => {
    const [addedGuests, setAddedGuests] = useState([]);
    const { user } = useAuthenticator();
    const language = useSelector(state => state.language);
    const { addGuests } = strings[language];

    const fetchGuests = async () => {
        try {
            const guestData = await API.graphql(graphqlOperation(listGuests));
            console.log(guestData);
            const guestList = guestData.data.listGuests.items;
            setAddedGuests(guestList.filter(g => g.addedBy === user.attributes.email));
        } catch (error) {
            console.log('error on fetching guests', error);
        }
    };

    const createNewGuest = async (guest) => {
        const newGuest = {
            ...guest,
            addedBy: user.attributes.email,
        };

        console.log("NEW GUEST", newGuest);
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
            <SectionHeader pageRef={pageRef} text={addGuests.header} />
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