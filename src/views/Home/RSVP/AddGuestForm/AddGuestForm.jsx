import React, { useState } from 'react';
import styles from './AddGuestForm.module.scss';
import Input from "../../../../common/Input/Input";
import Button, { ButtonTypes } from "../../../../common/Button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddGuestForm = ({ onCreateGuest }) => {
    const [guest, setGuest] = useState({});

    const setGuestProperty = (property, value) => {
        setGuest({
            ...guest,
            [property]: value,
        })
    };

    return (
        <div className={styles.container}>
            {<div className={styles.inputRow}>
                <span>Förnamn</span>
                <Input onChange={e => setGuestProperty('firstName', e.target.value)}/>
            </div>}
            <div className={styles.inputRow}>
                <span>Efternamn</span>
                <Input onChange={e => setGuestProperty('lastName', e.target.value)}/>
            </div>
            <div className={styles.inputRow}>
                <span>Matpreferenser</span>
                <Input onChange={e => setGuestProperty('foodPreferences', e.target.value)}/>
            </div>
            <div
                className={styles.inputRow}
            >
                <span>Deltagande</span>
                <div className={styles.attendingDate} onClick={(e) => setGuestProperty('attendingDates', e.target.value)}>
                    <input
                        type="radio"
                        value="fri-sun"
                        name="attendingDates"
                    />
                    <span>Fredag - söndag (15/8 - 17/8) </span>
                </div>
                <div className={styles.attendingDate} onClick={(e) => setGuestProperty('attendingDates', e.target.value)}>
                    <input
                        type="radio"
                        name="attendingDates"
                        value="sat-sun"
                    />
                    <span>Lördag - söndag (16/8 - 17/8) </span>
                </div>
            </div>
            <div className={styles.inputRow}>
                <span>Övrigt</span>
                <Input onChange={e => setGuestProperty('notes', e.target.value)}/>
            </div>
            <div className={styles.footer}>
                <Button
                    onClick={() => onCreateGuest(guest)}
                    icon={faPlus}
                    type={ButtonTypes.SECONDARY}
                >
                    Lägg till gäst
                </Button>
            </div>
        </div>
    )

};

export default AddGuestForm;