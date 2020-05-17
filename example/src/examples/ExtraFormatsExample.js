import React, { useState } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function ExtraFormatsExample({ noHr = false }) {
  const [date, setDate] = useState("16.05.2020");
  return (
    <>
      <div>
        <h2 id="extra-formats">
          <a className={styles.fragmentLink} href="#extra-formats">
            Extra Formats
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            format="DD.MM.YYYY"
            extraFormats={["DD.MM.YYYY", "DD.MM.YY"]}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            format="DD.MM.YYYY"
            extraFormats={["DD.MM.YYYY", "DD.MM.YY"]}
            date={date}
            onChange={e => setDate(e.date.format("DD.MM.YY"))}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="1-2, 5, 8-17">
          {`import React, { useState } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => {
  const [date, setDate] = useState("16.05.2020");
  return (
    <>
      <DateTimePicker
        format="DD.MM.YYYY"
        extraFormats={["DD.MM.YYYY", "DD.MM.YY"]}
      />
      <DateTimePicker
        format="DD.MM.YYYY"
        extraFormats={["DD.MM.YYYY", "DD.MM.YY"]}
        date={date}
        onChange={e => setDate(e.date.format("DD.MM.YY"))}
      />
    </>
  );
};`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
