import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function ViewModeExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="view-mode">
          <a className={styles.fragmentLink} href="#view-mode">
            View Mode
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker viewMode="decades" />
        </div>
        <div className={styles.picker}>
          <DateTimePicker viewMode="years" />
        </div>
        <div className={styles.picker}>
          <DateTimePicker viewMode="months" />
        </div>
        <div className={styles.picker}>
          <DateTimePicker viewMode="days" />
        </div>
        <div className={styles.picker}>
          <DateTimePicker viewMode="times" />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5-11">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <>
    <DateTimePicker viewMode="decades" />
    <DateTimePicker viewMode="years" />
    <DateTimePicker viewMode="months" />
    <DateTimePicker viewMode="days" />
    <DateTimePicker viewMode="times" />
  </>
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
