import React, { useState } from "react";
import styles from "./AddGuestForm.module.scss";
import Input from "../../../../common/Input/Input";
import Button, { ButtonTypes } from "../../../../common/Button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import strings from "../../../../localization/strings";
import ReactSelect from "react-select";
import classNames from "classnames";

const AddGuestForm = ({ onCreateGuest }) => {
  const [guest, setGuest] = useState({});
  const language = useSelector((state) => state.language);
  const { addGuests } = strings[language];

  const dropdownStyle = {
    option: (provided, state) => ({
      ...provided,
      color: "#6a615f",
      backgroundColor: state.isSelected ? "#d3cac8" : "#fff",
      borderColor: "d3cac8",
      cursor: "pointer",
    }),
    valueContainer: () => ({
      display: "flex",
      flex: "1",
      alignItems: "center",
      paddingLeft: "6px",
    }),
    control: (provided, state) => ({
      display: "flex",
      backgroundColor: "#fff",
      opacity: state.isDisabled ? 0.4 : 1,
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      pointerEvents: "all !important",
      border: state.menuIsOpen ? "1px solid #6a615f" : "1px solid #d3cac8",
      borderRadius: "4px",
      height: "34px",
    }),
  };

  const setGuestProperty = (property, value) => {
    setGuest({
      ...guest,
      [property]: value,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.inputRow}>
            <span className={styles.label}>{addGuests.firstName}</span>
            <Input
              onChange={(e) => setGuestProperty("firstName", e.target.value)}
            />
          </div>
          <div className={styles.inputRow}>
            <span className={styles.label}>{addGuests.lastName}</span>
            <Input
              onChange={(e) => setGuestProperty("lastName", e.target.value)}
            />
          </div>
          <div className={styles.inputRow}>
            <span className={styles.label}>{addGuests.foodPreferences}</span>
            <Input
              onChange={(e) =>
                setGuestProperty("foodPreferences", e.target.value)
              }
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.inputRow}>
            <span className={styles.label}>{addGuests.other}</span>
            <Input
              onChange={(e) => setGuestProperty("notes", e.target.value)}
            />
          </div>
          <div className={styles.inputRow}>
            <span className={styles.label}>{addGuests.attendingDates}</span>
            <ReactSelect
              className={styles.select}
              isSearchable={false}
              styles={dropdownStyle}
              placeholder={""}
              onChange={({ value }) =>
                setGuestProperty("attendingDates", value)
              }
              options={[
                { label: addGuests.fridayToSunday, value: "fri-sun" },
                { label: addGuests.saturdayToSunday, value: "sat-sun" },
              ]}
            />
          </div>
          {/* <div className={styles.inputRow}>
                        <span className={classNames(styles.label, !(guest?.attendingDates === 'fri-sun' || guest?.attendingDates === 'fri-sun-takes-buss') && styles.disabled)}>{addGuests.takesBuss}</span>
                        <ReactSelect
                            isSearchable={false}
                            isDisabled={!(guest?.attendingDates === 'fri-sun' || guest?.attendingDates === 'fri-sun-takes-buss')}
                            styles={dropdownStyle}
                            placeholder={''}
                            onChange={({value}) => setGuestProperty('attendingDates', value)}
                            options={[
                                {label: addGuests.yes, value: "fri-sun-takes-buss"},
                                {label: addGuests.no, value: "fri-sun"}
                            ]}
                        />
                    </div> */}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => onCreateGuest(guest)}
          icon={faPlus}
          type={ButtonTypes.SECONDARY}
        >
          {addGuests.addGuest}
        </Button>
      </div>
    </>
  );
};

export default AddGuestForm;
