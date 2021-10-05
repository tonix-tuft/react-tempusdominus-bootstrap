import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function WithSecondsExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="with-seconds">
          <a className={styles.fragmentLink} href="#with-seconds">
            With Seconds
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker format="L LTS" />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker format="L LTS" />;`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
