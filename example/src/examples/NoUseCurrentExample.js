import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function NoUseCurrentExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="no-use-current">
          <a className={styles.fragmentLink} href="#no-use-current">
            No Use Current
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker useCurrent={false} />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker useCurrent={false} />
);`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
