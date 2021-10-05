import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function ButtonsExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="buttons">
          <a className={styles.fragmentLink} href="#buttons">
            Buttons
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            buttons={{
              showToday: true,
              showClear: true,
              showClose: true,
            }}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5-11">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    buttons={{
      showToday: true,
      showClear: true,
      showClose: true,
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
