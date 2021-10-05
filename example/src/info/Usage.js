import React from "react";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default () => {
  return (
    <div className={styles.installation}>
      <h2 id="usage">
        <a className={styles.fragmentLink} href="#usage">
          Usage
        </a>
      </h2>
      <div>Import the required styles in your JS entry point file:</div>
      <PrismCode
        className="prism-code-setup prism-code-below-text"
        language="js"
      >
        {`// Your index.js file.

// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/scss/bootstrap.scss"; // Or the one above.
import "font-awesome/css/font-awesome.css";
// import "tempusdominus-bootstrap/build/css/tempusdominus-bootstrap.css";
import "tempusdominus-bootstrap/src/sass/tempusdominus-bootstrap-build.scss"; // Or the one above.

// ...`}
      </PrismCode>
      <div>Or in you Sass/SCSS main file:</div>
      <PrismCode
        className="prism-code-setup prism-code-below-text"
        language="scss"
      >
        {`// Your index.scss file.

@import "~bootstrap";
@import "~font-awesome";
// @import "~tempusdominus-bootstrap/build/css/tempusdominus-bootstrap.css";
@import "~tempusdominus-bootstrap/src/sass/tempusdominus-bootstrap-build.scss"; // Or the one above.

// ...`}
      </PrismCode>
      <div>
        Then import and use the provided picker components in your JS code:
      </div>
      <PrismCode
        className="prism-code-setup prism-code-below-text"
        language="jsx"
      >
        {`import React from "react";
import {
  DateTimePicker,
  DatePicker,
  TimePicker,
  MonthPicker,
  InlineDateTimePicker,
  InlineDatePicker,
  InlineTimePicker,
  InlineMonthPicker,
} from "react-tempusdominus-bootstrap";

export default () => (
  <>
    <DateTimePicker />
    <DatePicker />
    <TimePicker />
    <MonthPicker />
    <InlineDateTimePicker />
    <InlineDatePicker />
    <InlineTimePicker />
    <InlineMonthPicker />
  </>
);`}
      </PrismCode>
    </div>
  );
};
