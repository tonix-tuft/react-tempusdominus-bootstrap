/* eslint-disable no-console */
import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function EventListenersExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="event-listeners">
          <a className={styles.fragmentLink} href="#event-listeners">
            Event Listeners
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            onHide={e => console.log("onHide", e.date, e)}
            onShow={e => console.log("onShow", e)}
            onChange={e => console.log("onChange", e.date, e.oldDate, e)}
            onError={e => console.log("onError", e.date, e.oldDate, e)}
            onUpdate={e => {
              console.log(
                "onUpdate",
                e.change,
                e.viewDate,
                e.viewDate.format("YYYY-MM-DD HH:mm:ss"),
                e
              );
            }}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5-19">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    onHide={e => console.log("onHide", e.date, e)}
    onShow={e => console.log("onShow", e)}
    onChange={e => console.log("onChange", e.date, e.oldDate, e)}
    onError={e => console.log("onError", e.date, e.oldDate, e)}
    onUpdate={e => {
      console.log(
        "onUpdate",
        e.change,
        e.viewDate,
        e.viewDate.format("YYYY-MM-DD HH:mm:ss"),
        e
      );
    }}
  />
);`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
