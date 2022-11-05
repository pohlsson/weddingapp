import React, { useState } from 'react';
import styles from './AddGuestForm.module.scss';
import Input from "../../../../common/Input/Input";
import Button, { ButtonTypes } from "../../../../common/Button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import strings from "../../../../localization/strings";

const AddGuestForm = ({ onCreateGuest }) => {
    const [guest, setGuest] = useState({});
    const language = useSelector(state => state.language);
    const { addGuests } = strings[language];

    const setGuestProperty = (property, value) => {
        setGuest({
            ...guest,
            [property]: value,
        })
    };

    return (
        <div className={styles.container}>
            {<div className={styles.inputRow}>
                <span>{addGuests.firstName}</span>
                <Input onChange={e => setGuestProperty('firstName', e.target.value)}/>
            </div>}
            <div className={styles.inputRow}>
                <span>{addGuests.lastName}</span>
                <Input onChange={e => setGuestProperty('lastName', e.target.value)}/>
            </div>
            <div className={styles.inputRow}>
                <span>{addGuests.foodPreferences}</span>
                <Input onChange={e => setGuestProperty('foodPreferences', e.target.value)}/>
            </div>
            <div className={styles.inputRow}>
                <span>{addGuests.attendingDates}</span>
                <div className={styles.attendingDate} onClick={(e) => setGuestProperty('attendingDates', e.target.value)}>
                    <input
                        type="radio"
                        value="fri-sun"
                        name="attendingDates"
                    />
                    <span>{addGuests.fridayToSunday}</span>
                </div>
                <div className={styles.attendingDate} onClick={(e) => setGuestProperty('attendingDates', e.target.value)}>
                    <input
                        type="radio"
                        name="attendingDates"
                        value="sat-sun"
                    />
                    <span>{addGuests.saturdayToSunday}</span>
                </div>
            </div>
            <div className={styles.inputRow}>
                <span>{addGuests.other}</span>
                <Input onChange={e => setGuestProperty('notes', e.target.value)}/>
            </div>
            <div className={styles.footer}>
                <Button
                    onClick={() => onCreateGuest(guest)}
                    icon={faPlus}
                    type={ButtonTypes.SECONDARY}
                >
                    {addGuests.addGuest}
                </Button>
            </div>
        </div>
    )

};

export default AddGuestForm;