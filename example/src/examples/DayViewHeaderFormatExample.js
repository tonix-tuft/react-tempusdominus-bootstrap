import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function DayViewHeaderFormatExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="day-view-header-format">
          <a className={styles.fragmentLink} href="#day-view-header-format">
            Day View Header Format Example
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker dayViewHeaderFormat="MMM/YY" />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker dayViewHeaderFormat="MMM YY" />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
