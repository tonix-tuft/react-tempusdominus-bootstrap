import React from "react";
import { InlineMonthPicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function InlineMonthPickerExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="inline-month-picker">
          <a className={styles.fragmentLink} href="#inline-month-picker">
            Inline Month Picker
          </a>
        </h2>
        <div className={styles.picker}>
          <InlineMonthPicker />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { InlineMonthPicker } from "react-tempusdominus-bootstrap";

export default () =>
  <InlineMonthPicker />;`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
