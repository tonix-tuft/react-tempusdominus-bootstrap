import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function MultidateExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="multidate">
          <a className={styles.fragmentLink} href="#multidate">
            Multidate
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker allowMultidate />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker allowMultidate />;`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
