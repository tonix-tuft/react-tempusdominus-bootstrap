import React from "react";
import { MonthPicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function MonthPickerExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="month-picker">
          <a className={styles.fragmentLink} href="#month-picker">
            Month Picker
          </a>
        </h2>
        <div className={styles.picker}>
          <MonthPicker />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { MonthPicker } from "react-tempusdominus-bootstrap";

export default () =>
  <MonthPicker />;`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
