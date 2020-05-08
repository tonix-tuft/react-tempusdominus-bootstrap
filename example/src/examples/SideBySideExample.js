import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function SideBySideExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="side-by-side">
          <a className={styles.fragmentLink} href="#side-by-side">
            Side By Side
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker sideBySide />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker sideBySide />;`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
