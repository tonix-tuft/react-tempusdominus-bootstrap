/* eslint-disable no-console */
import React, { useRef } from "react";
import {
  DateTimePicker,
  TimePicker,
  DatePicker,
  MonthPicker,
  InlineDateTimePicker,
} from "react-tempusdominus-bootstrap";
import styles from "./App.module.scss";
import moment from "moment";
import PrismCode from "./code/PrismCode";

export default function App() {
  const linkedPicker1Ref = useRef();
  const linkedPicker2Ref = useRef();
  return (
    <div className={styles.App}>
      <h1>react-tempusdominus-bootstrap</h1>
      <hr />
      <div className={styles.components}>
        <div>
          <h2 id="i18n">
            <a href="#i18n">i18n</a>
          </h2>
          <div className={styles.picker}>
            <DateTimePicker locale="ru" />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker locale="ru" />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="time-picker">
            <a href="#time-picker">Time Picker</a>
          </h2>
          <div className={styles.picker}>
            <TimePicker />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { TimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <TimePicker />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="date-picker">
            <a href="#date-picker">Date Picker</a>
          </h2>
          <div className={styles.picker}>
            <DatePicker />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DatePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DatePicker />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="month-picker">
            <a href="#month-picker">Month Picker</a>
          </h2>
          <div className={styles.picker}>
            <MonthPicker />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { MonthPicker } from "react-tempusdominus-bootstrap";

export default () =>
  <MonthPicker />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="no-icon">
            <a href="#no-icon">No Icon</a>
          </h2>
          <div className={styles.picker}>
            <DateTimePicker noIcon />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker noIcon />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="default-date">
            <a href="#default-date">Default Date</a>
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
        <hr />

        <div>
          <h2 id="multidate">
            <a href="#multidate">Multidate</a>
          </h2>
          <div className={styles.picker}>
            <DateTimePicker allowMultidate />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker allowMultidate />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="custom-multidate-separator">
            <a href="#custom-multidate-separator">Custom Multidate Separator</a>
          </h2>
          <div className={styles.picker}>
            <DatePicker allowMultidate multidateSeparator=" · " />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DatePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DatePicker allowMultidate multidateSeparator=" · " />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="side-by-side">
            <a href="#side-by-side">Side By Side</a>
          </h2>
          <div className={styles.picker}>
            <DateTimePicker sideBySide />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker sideBySide />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="with-seconds">
            <a href="#with-seconds">With Seconds</a>
          </h2>
          <div className={styles.picker}>
            <DateTimePicker format="YYYY-MM-DD HH:mm:ss" />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker format="YYYY-MM-DD HH:mm:ss" />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="inline-date-time-picker">
            <a href="#inline-date-time-picker">Inline Date Time Picker</a>
          </h2>
          <div className={styles.picker}>
            <InlineDateTimePicker />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { InlineDateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <InlineDateTimePicker />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="inline-date-time-picker-side-by-side">
            <a href="#inline-date-time-picker-side-by-side">
              Inline Date Time Picker Side By Side
            </a>
          </h2>
          <div className={styles.inlinePicker}>
            <InlineDateTimePicker sideBySide />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { InlineDateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <InlineDateTimePicker sideBySide />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="disabled-dates">
            <a href="#disabled-dates">Disabled Dates</a>
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
        <hr />

        <div>
          <h2 id="disabled-days-of-week">
            <a href="#disabled-days-of-week">Disabled Days Of Week</a>
          </h2>
          <div className={styles.picker}>
            <DateTimePicker daysOfWeekDisabled={[0, 6]} />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker daysOfWeekDisabled={[0, 6]} />;`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="linked-pickers">
            <a href="#linked-pickers">Linked Pickers</a>
          </h2>
          <div className={styles.picker}>
            <DateTimePicker
              pickerRef={linkedPicker1Ref}
              onChange={e => {
                linkedPicker2Ref.current.datetimepicker("minDate", e.date);
              }}
            />
          </div>
          <div className={styles.picker}>
            <DateTimePicker
              useCurrent={false}
              pickerRef={linkedPicker2Ref}
              onChange={e => {
                linkedPicker1Ref.current.datetimepicker("maxDate", e.date);
              }}
            />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5, 6, 9-21">
            {`import React, { useRef } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => {
  const linkedPicker1Ref = useRef();
  const linkedPicker2Ref = useRef();
  return (
    <>
      <DateTimePicker
        pickerRef={linkedPicker1Ref}
        onChange={e => {
          linkedPicker2Ref.current.datetimepicker("minDate", e.date);
        }}
      />
      <DateTimePicker
        useCurrent={false}
        pickerRef={linkedPicker2Ref}
        onChange={e => {
          linkedPicker1Ref.current.datetimepicker("maxDate", e.date);
        }}
      />
    </>
  );
};`}
          </PrismCode>
        </div>
        <hr />

        <div>
          <h2 id="custom-icons">
            <a href="#custom-icons">Custom Icons</a>
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
        <hr />

        <div>
          <h2 id="event-listeners">
            <a href="#event-listeners">Event Listeners</a>
          </h2>
          <div className={styles.picker}>
            <DateTimePicker
              onHide={e => console.log("onHide", e)}
              onShow={e => console.log("onShow", e)}
              onChange={e => console.log("onChange", e)}
              onError={e => console.log("onError", e)}
              onUpdate={e => console.log("onUpdate", e)}
            />
          </div>
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5-11">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    onHide={e => console.log("onHide", e)}
    onShow={e => console.log("onShow", e)}
    onChange={e => console.log("onChange", e)}
    onError={e => console.log("onError", e)}
    onUpdate={e => console.log("onUpdate", e)}
  />
);`}
          </PrismCode>
        </div>
      </div>
    </div>
  );
}
