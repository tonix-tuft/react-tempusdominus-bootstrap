import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function PromptTimeOnDateChangeExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="prompt-time-on-date-change">
          <a className={styles.fragmentLink} href="#prompt-time-on-date-change">
            Prompt Time On Date Change
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            promptTimeOnDateChange
            promptTimeOnDateChangeTransitionDelay={300}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5-8">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    promptTimeOnDateChange
    promptTimeOnDateChangeTransitionDelay={300}
  />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
