import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function NoIconExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="no-icon">
          <a className={styles.fragmentLink} href="#no-icon">
            No Icon
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker noIcon />
        </div>
        <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker noIcon />;`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
