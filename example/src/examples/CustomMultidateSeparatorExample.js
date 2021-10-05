import React from "react";
import { DatePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function CustomMultidateSeparatorExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="custom-multidate-separator">
          <a className={styles.fragmentLink} href="#custom-multidate-separator">
            Custom Multidate Separator
          </a>
        </h2>
        <div className={styles.picker}>
          <DatePicker allowMultidate multidateSeparator=" · " />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5">
          {`import React from "react";
import { DatePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DatePicker allowMultidate multidateSeparator=" · " />;`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
