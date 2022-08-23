import React, { useState } from 'react';
import styles from './AddGuestForm.module.scss';
import Input from "../../../../common/Input/Input";
import Button, { ButtonTypes } from "../../../../common/Button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const inputs = [
    { label: 'Förnamn', property: 'firstName' },
    { label: 'Efternamn', property: 'lastName' },
    { label: 'Matpreferenser', property: 'foodPreferences' },
    { label: 'Deltar fredag 15/9', property: 'attendsFriday' },
];

const AddGuestForm = ({ onCreateGuest }) => {
    const [guest, setGuest] = useState({});

    const setGuestProperty = (property, value) => {
        console.log("HEEERE", value)
        setGuest({
            ...guest,
            [property]: value,
        })
    };

    console.log(guest);

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
                <div className={styles.attendingDate} onClick={(e) => setGuestProperty('attendingFullWeekend', e.target.value)}>
                    <input
                        type="radio"
                        name="attendingFullWeekend"
                        value="sat-sun"
                        checked={guest?.attendingDates === "sat-sun"}
                    />
                    <span>Lördag - söndag (16/8 - 17/8) </span>
                </div>
                <div className={styles.attendingDate} onClick={(e) => setGuestProperty('attendingFullWeekend', e.target.value)}>
                    <input
                        type="radio"
                        value="fri-sun"
                        checked={guest?.attendingDates === "fri-sun"}
                        name="attendingFullWeekend"
                    />
                    <span>Fredag - söndag (15/8 - 17/8) </span>
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