import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function BirthdayPickerExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="birthday-picker">
          <a className={styles.fragmentLink} href="#birthday-picker">
            Birthday Picker
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            viewMode="years"
            format="L"
            iconClassName="fa-birthday-cake"
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5-9">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    viewMode="years"
    format="L"
    iconClassName="fa-birthday-cake"
  />
);`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
