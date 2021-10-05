import React from "react";
import { TimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function TimePickerExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="time-picker">
          <a className={styles.fragmentLink} href="#time-picker">
            Time Picker
          </a>
        </h2>
        <div className={styles.picker}>
          <TimePicker />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { TimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <TimePicker />;`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
