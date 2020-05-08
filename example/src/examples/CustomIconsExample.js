import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function CustomIconsExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="custom-icons">
          <a className={styles.fragmentLink} href="#custom-icons">
            Custom Icons
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            iconClassName="fa-birthday-cake"
            icons={{
              date: "fa fa-birthday-cake",
              time: "fa fa-hourglass-half",
              up: "fa fa-chevron-circle-up",
              down: "fa fa-chevron-circle-down",
            }}
          />
        </div>
        <PrismCode codeClassName="language-jsx" lineHighlight="2, 5-13">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    iconClassName="fa-birthday-cake"
    icons={{
      date: "fa fa-birthday-cake",
      time: "fa fa-hourglass-half",
      up: "fa fa-chevron-circle-up",
      down: "fa fa-chevron-circle-down",
    }}
  />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
