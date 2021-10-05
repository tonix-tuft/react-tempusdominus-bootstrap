import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function NoFocusOnShowExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="no-focus-on-show">
          <a className={styles.fragmentLink} href="#no-focus-on-show">
            No Focus On Show
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker focusOnShow={false} />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker focusOnShow={false} />
);`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
