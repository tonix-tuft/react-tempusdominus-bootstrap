import React from "react";
import { InlineDateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function InlineDateTimePickerExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="inline-date-time-picker">
          <a className={styles.fragmentLink} href="#inline-date-time-picker">
            Inline Date Time Picker
          </a>
        </h2>
        <div className={styles.picker}>
          <InlineDateTimePicker />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { InlineDateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <InlineDateTimePicker />;`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
