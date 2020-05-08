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
            onHide={e => console.log("onHide", e)}
            onShow={e => console.log("onShow", e)}
            onChange={e => console.log("onChange", e)}
            onError={e => console.log("onError", e)}
            onUpdate={e => console.log("onUpdate", e)}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5-11">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    onHide={e => console.log("onHide", e)}
    onShow={e => console.log("onShow", e)}
    onChange={e => console.log("onChange", e)}
    onError={e => console.log("onError", e)}
    onUpdate={e => console.log("onUpdate", e)}
  />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
