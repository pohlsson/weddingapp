import React from 'react';
import styles from './Information.module.scss';
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
import { useSelector } from "react-redux";
import strings from "../../../localization/strings";
import {
    faHouse,
    faBaby,
    faLocation,
    faShirt,
    faChampagneGlasses,
    faGift,
    faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InformationBox from "./InformationBox/InformationBox";

const Information = ({pageRef}) => {
    const language = useSelector(state => state.language);
    const { information } = strings[language];
    return (
        <div className={styles.container} ref={pageRef}>
            <div className={styles.headerWrapper}>
                <SectionHeader pageRef={pageRef} text={information.header}/>
            </div>
            <div className={styles.content}>
                <InformationBox icon={faLocation} title={information.location.title} text={information.location.text} />
                <InformationBox icon={faHouse} title={information.staying.title} text={information.staying.text} />
                <InformationBox icon={faBaby} title={information.children.title} text={information.children.text} />
                <InformationBox icon={faGift} title={information.gifts.title} text={information.gifts.text} />
                <InformationBox icon={faShirt} title={information.clothes.title} text={information.clothes.text} />
                <InformationBox icon={faChampagneGlasses} title={information.toastMaster.title} text={information.toastMaster.text}>
                    <div className={styles.toastMasterImageWrapper}>
                        <div className={styles.info}>
                            <span className={styles.phoneNr}>Jonas Olsson</span>
                            <a className={styles.phoneNr} href="tel:+46737730046">+46737730046</a>
                            <a className={styles.phoneNr} href="MailTo:oholsson88@gmail.com">oholsson88@gmail.com</a>
                        </div>
                        <div className={styles.toastMasterImage} />
                    </div>
                </InformationBox>

            </div>
        </div>
    );
};

export default Information;

