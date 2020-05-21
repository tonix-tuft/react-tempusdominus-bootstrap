import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function FeatherIconsExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="feather-icons">
          <a className={styles.fragmentLink} href="#feather-icons">
            Feather Icons
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            icons={{
              type: "feather",
            }}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            icons={{
              type: "feather",
            }}
            buttons={{
              showToday: true,
              showClear: true,
              showClose: true,
            }}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5-9">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    icons={{
      type: "feather",
    }}
  />
  <DateTimePicker
    icons={{
      type: "feather",
    }}
    buttons={{
      showToday: true,
      showClear: true,
      showClose: true,
    }}
  />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
