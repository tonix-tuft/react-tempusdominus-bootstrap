import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function KeepOpenExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="keep-open">
          <a className={styles.fragmentLink} href="#keep-open">
            Keep Open
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker format="L" keepOpen />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker format="L" keepOpen />
);`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
