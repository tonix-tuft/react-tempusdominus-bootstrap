import React from "react";
import { InlineDateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function InlineDateTimePickerSideBySideExample({
  noHr = false,
}) {
  return (
    <>
      <div>
        <h2 id="inline-date-time-picker-side-by-side">
          <a
            className={styles.fragmentLink}
            href="#inline-date-time-picker-side-by-side"
          >
            Inline Date Time Picker Side By Side
          </a>
        </h2>
        <div className={styles.inlinePicker}>
          <InlineDateTimePicker sideBySide />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { InlineDateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <InlineDateTimePicker sideBySide />;`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
