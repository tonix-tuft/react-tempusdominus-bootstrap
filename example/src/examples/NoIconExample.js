import React, { useState } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";
import moment from "moment";

export default function NoIconExample({ noHr = false }) {
  const [noIcon, setNoIcon] = useState(false);
  return (
    <>
      <div>
        <h2 id="no-icon">
          <a className={styles.fragmentLink} href="#no-icon">
            No Icon
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker noIcon />
        </div>
        <div className={styles.picker}>
          <DateTimePicker noIcon={noIcon} />
        </div>
        <div className={styles.picker}>
          <DateTimePicker noIcon={noIcon} format="L LTS" date={moment()} />
          <button
            className={`${styles.exampleBtn} btn btn-primary`}
            onClick={() => setNoIcon(noIcon => !noIcon)}
          >
            Toggle no icon
          </button>
        </div>
        <PrismCode language="jsx" lineHighlight="1-3, 6, 9-17">
          {`import React, { useState } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import moment from "moment";

export default () => {
  const [noIcon, setNoIcon] = useState(false);
  return (
    <>
      <DateTimePicker noIcon />
      <DateTimePicker noIcon={noIcon} />
      <DateTimePicker noIcon={noIcon} format="L LTS" date={moment()} />
      <button
        className="btn btn-primary"
        onClick={() => setNoIcon(noIcon => !noIcon)}
      >
        Toggle no icon
      </button>
    <>
  );
};`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
