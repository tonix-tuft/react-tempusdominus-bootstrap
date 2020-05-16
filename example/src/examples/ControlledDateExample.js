import React, { useState } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";
import moment from "moment";

export default function ControlledDateExample({ noHr = false }) {
  const [, setDummyState] = useState({});
  const [date, setDate] = useState(() => moment());
  return (
    <>
      <div>
        <h2 id="controlled-date">
          <a className={styles.fragmentLink} href="#controlled-date">
            Controlled Date
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker date={moment()} />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            date={moment()}
            format="YYYY-MM-DD HH:mm:ss"
            onChange={() => setDummyState({})}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker date={date} onChange={e => setDate(e.date)} />
        </div>
        <PrismCode language="jsx" lineHighlight="1-2, 6-7, 10-16">
          {`import React, { useState } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import moment from "moment";

export default () => {
  const [, setDummyState] = useState({});
  const [date, setDate] = useState(() => moment());
  return (
    <>
      <DateTimePicker date={moment()} />
      <DateTimePicker
        date={moment()}
        format="YYYY-MM-DD HH:mm:ss"
        onChange={() => setDummyState({})}
      />
      <DateTimePicker date={date} onChange={e => setDate(e.date)} />
    </>
  );
};`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
