import React from "react";
import { InlineTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function InlineTimePickerExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="inline-time-picker">
          <a className={styles.fragmentLink} href="#inline-time-picker">
            Inline Time Picker
          </a>
        </h2>
        <div className={styles.picker}>
          <InlineTimePicker />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { InlineTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <InlineTimePicker />;`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
