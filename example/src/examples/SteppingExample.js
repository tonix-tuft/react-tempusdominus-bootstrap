import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function SteppingExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="stepping">
          <a className={styles.fragmentLink} href="#stepping">
            Stepping
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker stepping={4} />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker stepping={4} />
);`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
