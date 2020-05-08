import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function I18nExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="i18n">
          <a className={styles.fragmentLink} href="#i18n">
            i18n
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker locale="ru" />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker locale="ru" />;`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
