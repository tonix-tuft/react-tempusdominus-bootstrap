import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";
import moment from "moment";

export default function ViewDateExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="view-date">
          <a className={styles.fragmentLink} href="#view-date">
            View Date
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker viewDate={moment("1994-08-01")} />
        </div>
        <PrismCode language="jsx" lineHighlight="2-3, 6">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import moment from "moment";

export default () => (
  <DateTimePicker viewDate={moment("1994-08-01")} />
);`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
