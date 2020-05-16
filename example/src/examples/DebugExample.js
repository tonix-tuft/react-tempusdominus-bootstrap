import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function DebugExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="debug-mode">
          <a className={styles.fragmentLink} href="#debug-mode">
            Debug Mode
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker debug />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker debug />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
