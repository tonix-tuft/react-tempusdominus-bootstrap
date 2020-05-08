import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";
import moment from "moment";

export default function DisabledDatesExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="disabled-dates">
          <a className={styles.fragmentLink} href="#disabled-dates">
            Disabled Dates
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            disabledDates={[
              moment("2020-05-07"),
              new Date(2020, 5 - 1, 21),
              "2020-05-22 00:53",
            ]}
          />
        </div>
        <PrismCode codeClassName="language-jsx" lineHighlight="2, 6-12">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import moment from "moment";

export default () => (
  <DateTimePicker
    disabledDates={[
      moment("2020-05-07"),
      new Date(2020, 5 - 1, 21),
      "2020-05-22 00:53",
    ]}
  />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
