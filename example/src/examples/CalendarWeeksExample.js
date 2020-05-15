import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function CalendarWeeksExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="calendar-weeks">
          <a className={styles.fragmentLink} href="#calendar-weeks">
            Calendar Weeks
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker calendarWeeks />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker calendarWeeks />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
