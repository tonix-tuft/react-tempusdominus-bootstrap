import React from "react";
import { InlineDatePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function InlineDatePickerExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="inline-date-picker">
          <a className={styles.fragmentLink} href="#inline-date-picker">
            Inline Date Picker
          </a>
        </h2>
        <div className={styles.picker}>
          <InlineDatePicker />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { InlineDatePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <InlineDatePicker />;`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
