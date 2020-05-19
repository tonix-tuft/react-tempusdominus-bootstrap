import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";
import moment from "moment";

export default function MaxMinDateExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="max-min-date">
          <a className={styles.fragmentLink} href="#max-min-date">
            Max/Min Date
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            minDate={moment().subtract(3, "days").format("YYYY-MM-DD")}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            maxDate={`${moment().add(4, "days").format("YYYY-MM-DD")} 23:59:39`}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            minDate={moment().subtract(3, "days").format("YYYY-MM-DD")}
            maxDate={`${moment().add(4, "days").format("YYYY-MM-DD")} 23:59:39`}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2-3, 7-12">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import moment from "moment";

export default () => (
  <>
    <DateTimePicker minDate={moment().subtract(3, "days")} />
    <DateTimePicker maxDate={moment().add(4, "days")} />
    <DateTimePicker
      minDate={moment().subtract(3, "days")}
      maxDate={moment().add(4, "days")}
    />
  </>
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
