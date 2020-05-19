import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function TimeZoneExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="time-zone">
          <a className={styles.fragmentLink} href="#time-zone">
            Time Zone
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            timeZone="America/Los_Angeles"
            date="2014-06-01 12:00"
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5-8">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    timeZone="America/Los_Angeles"
    date="2014-06-01 12:00"
  />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
