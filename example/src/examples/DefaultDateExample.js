import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function DefaultDateExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="default-date">
          <a className={styles.fragmentLink} href="#default-date">
            Default Date
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker defaultDate="2020-05-26" />
        </div>
        <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker defaultDate="2020-05-26" />;`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
