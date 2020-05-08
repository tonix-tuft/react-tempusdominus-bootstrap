import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function DisabledDaysOfWeekExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="disabled-days-of-week">
          <a className={styles.fragmentLink} href="#disabled-days-of-week">
            Disabled Days Of Week
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker daysOfWeekDisabled={[0, 6]} />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker daysOfWeekDisabled={[0, 6]} />;`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
