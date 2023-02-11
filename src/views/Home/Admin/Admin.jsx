import React, { useEffect, useState } from 'react';
import styles from './Admin.module.scss';
import { API, graphqlOperation } from "@aws-amplify/api";
import { listGuests } from "../../../graphql/queries";
import Button from "../../../common/Button/Button";

const GuestRow = ({guest}) => {

    return (
        <div className={styles.guestRow}>
            <span>{guest.firstName}</span>
            <span>{guest.lastName}</span>
            <a href={`MailTo: ${guest.addedBy} `}>{guest.addedBy}</a>
            <span>{guest.attendingDates}</span>
            <span>{guest.foodPreferences}</span>
        </div>
    )
};

const Admin = () => {
    const [addedGuests, setAddedGuests] = useState([]);
    console.log(addedGuests);

    const fetchGuests = async () => {
        try {
            const guestData = await API.graphql(graphqlOperation(listGuests));
            const guestList = guestData.data.listGuests.items;
            setAddedGuests(guestList);
        } catch (error) {
            console.log('error on fetching guests', error);
        }
    };

    useEffect(() => {
        fetchGuests();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Förnamn</span>
                <span>Efternamn</span>
                <span>Anmäld av</span>
                <span>Datum</span>
                <span>Matpreferenser</span>
            </div>
            <div className={styles.guestList}>
                {addedGuests.map((guest) => <GuestRow guest={guest} key={guest.firstName} />)}
            </div>

            <div className={styles.mailAll}>
                <Button title="Mail guests">
                    <a className={styles.mailText} href={`MailTo:${addedGuests.map(({addedBy}) => addedBy).join(';')}`}>Maila gäster</a>
                </Button>
            </div>
        </div>
    )
};

export default Admin;