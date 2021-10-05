/* eslint-disable no-console */
import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function UseStrictExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="use-strict">
          <a className={styles.fragmentLink} href="#use-strict">
            Use Strict
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            date="24/12/2019 09:15:00"
            format="DD MM YYYY hh:mm:ss"
            onError={e => console.log("useStrict set to false", e)}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            date="24/12/2019 09:15:00"
            format="DD MM YYYY hh:mm:ss"
            onError={e => console.log("useStrict set to true", e)}
            useStrict
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5-15">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    date="24/12/2019 09:15:00"
    format="DD MM YYYY hh:mm:ss"
    onError={e => console.log("useStrict set to false", e)}
  />
  <DateTimePicker
    date="24/12/2019 09:15:00"
    format="DD MM YYYY hh:mm:ss"
    onError={e => console.log("useStrict set to true", e)}
    useStrict
  />
);`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
