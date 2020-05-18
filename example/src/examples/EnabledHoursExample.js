import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function EnabledHoursExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="enabled-hours">
          <a className={styles.fragmentLink} href="#enabled-hours">
            Enabled Hours
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker enabledHours={[0, 1, 2, 3, 4, 5, 6, 18]} />
        </div>
        <div className={styles.picker}>
          <DateTimePicker enabledHours={[1, 3, 7, 13, 15, 19]} locale="it" />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 6-7">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <>
    <DateTimePicker enabledHours={[0, 1, 2, 3, 4, 5, 6, 18]} />
    <DateTimePicker enabledHours={[1, 3, 7, 13, 15, 19]} locale="it" />
  </>
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
