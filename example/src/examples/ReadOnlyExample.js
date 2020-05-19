import React, { useState } from "react";
import {
  DateTimePicker,
  InlineDateTimePicker,
} from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";
import moment from "moment";

export default function ReadOnlyExample({ noHr = false }) {
  const [readOnly, setReadOnly] = useState(true);
  return (
    <>
      <div>
        <h2 id="read-only">
          <a className={styles.fragmentLink} href="#read-only">
            Read-Only
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker date={moment()} readOnly />
        </div>
        <div className={styles.picker}>
          <DateTimePicker date={moment()} readOnly showPickerIfReadOnly />
        </div>
        <div className={styles.picker}>
          <DateTimePicker readOnly={readOnly} showPickerIfReadOnly />
        </div>
        <div className={styles.picker}>
          <InlineDateTimePicker readOnly={readOnly} />
          <button
            className="btn btn-primary"
            onClick={() => setReadOnly(readOnly => !readOnly)}
          >
            {readOnly ? "Unset read-only" : "Set read-only"}
          </button>
        </div>
        <PrismCode language="jsx" lineHighlight="1-3, 6, 9-18">
          {`import React, { useState } from "react";
import { DateTimePicker, InlineDateTimePicker } from "react-tempusdominus-bootstrap";
import moment from "moment";

export default () => {
  const [readOnly, setReadOnly] = useState(true);
  return (
    <>
      <DateTimePicker date={moment()} readOnly />
      <DateTimePicker date={moment()} readOnly showPickerIfReadOnly />
      <DateTimePicker readOnly={readOnly} showPickerIfReadOnly />
      <InlineDateTimePicker readOnly={readOnly} />
      <button
        className="btn btn-primary"
        onClick={() => setReadOnly(readOnly => !readOnly)}
      >
        {readOnly ? "Unset read-only" : "Set read-only"}
      </button>
    </>
  );
};`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
