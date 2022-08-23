import React from 'react';
import styles from './GuestList.module.scss';
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faHamburger, faRemove, faUserCircle, faInfo } from '@fortawesome/free-solid-svg-icons'
import Button from "../../../../common/Button/Button";

const GuestList = ({ guests, onRemoveGuest }) => {
    return (
        <div className={styles.container}>
            {guests.map(({id, firstName, lastName, foodPreferences, notes}) => (
                <div key={id} className={styles.guest}>
                    <div className={styles.header}>
                        <div className={styles.guestIconWrapper}>
                            <FontAwesomeIcon color="#fff" icon={faUserCircle} />
                        </div>
                        <div className={styles.name}>
                            {`${firstName} ${lastName}`}
                        </div>
                        <Button onClick={() => onRemoveGuest(id)} className={styles.removeButton}>
                            <FontAwesomeIcon color="#6a615f" icon={faRemove} />
                        </Button>
                    </div>
                    <div className={classNames(styles.content)}>
                        <div className={styles.row}>
                            <FontAwesomeIcon icon={faHamburger} className={styles.icon} />
                            <span>{foodPreferences ? foodPreferences : 'Inget specifierat'}</span>
                        </div>
                        <div className={styles.row}>
                            <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
                            <span>Fredag, Lördag, Söndag</span>
                        </div>
                        {notes && (
                            <div className={styles.row}>
                                <FontAwesomeIcon icon={faInfo} className={styles.icon} />
                                <span>{notes}</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
};


export default GuestList;