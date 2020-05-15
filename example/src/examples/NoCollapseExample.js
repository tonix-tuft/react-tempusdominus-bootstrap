import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function NoCollapseExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="no-collapse">
          <a className={styles.fragmentLink} href="#no-collapse">
            No Collapse
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker collapse={false} />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker collapse={false} />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
