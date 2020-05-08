import React from "react";
import { DatePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function DatePickerExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="date-picker">
          <a className={styles.fragmentLink} href="#date-picker">
            Date Picker
          </a>
        </h2>
        <div className={styles.picker}>
          <DatePicker />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DatePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DatePicker />;`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
