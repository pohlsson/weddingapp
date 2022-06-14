import React, { useState } from 'react';
import styles from './Guests.module.scss';
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faHamburger, faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import Input from "../../../../common/Input/Input";

const GuestList = ({ guests }) => {
    const [newGuestData, setNewGuestData] = useState({});

    return (
        <div className={styles.container}>
            {guests.map(({id, firstName, lastName, foodPreferences}) => (
                <div key={id} className={styles.guest}>
                    <div className={styles.header}>
                        <div className={styles.guestIconWrapper}>
                            <FontAwesomeIcon color="#fff" icon={faUserCircle} />
                        </div>
                        <span className={styles.firstName}>{firstName}</span>
                        <span className={styles.lastName}>{lastName}</span>
                    </div>
                    <div className={classNames(styles.content)}>
                        <div className={styles.row}>
                            <FontAwesomeIcon icon={faHamburger} className={styles.icon} />
                            <span className={styles.lastName}>{foodPreferences ? foodPreferences : 'Inget specifierat'}</span>
                        </div>
                        <div className={styles.row}>
                            <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
                            <span className={styles.lastName}>Fredag, Lördag, Söndag</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};


export default GuestList;