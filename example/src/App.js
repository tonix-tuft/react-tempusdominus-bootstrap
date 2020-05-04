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
          <h2>i18n</h2>
          <DateTimePicker locale="ru" />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker locale="ru" />;`}
          </PrismCode>
        </div>
        <div>
          <h2>Time Only</h2>
          <TimePicker />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { TimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <TimePicker />;`}
          </PrismCode>
        </div>
        <div>
          <h2>Date Only</h2>
          <DatePicker />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DatePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DatePicker />;`}
          </PrismCode>
        </div>
        <div>
          <h2>Month Picker</h2>
          <MonthPicker />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { MonthPicker } from "react-tempusdominus-bootstrap";

export default () =>
  <MonthPicker />;`}
          </PrismCode>
        </div>
        <div>
          <h2>No Icon</h2>
          <DateTimePicker noIcon />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker noIcon />;`}
          </PrismCode>
        </div>
        <div>
          <h2>Default Date</h2>
          <DateTimePicker defaultDate="2020-05-26" />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker defaultDate="2020-05-26" />;`}
          </PrismCode>
        </div>
        <div>
          <h2>Multidate</h2>
          <DateTimePicker allowMultidate />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker allowMultidate />;`}
          </PrismCode>
        </div>
        <div>
          <h2>Custom Multidate Separator</h2>
          <DatePicker allowMultidate multidateSeparator=" · " />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DatePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DatePicker allowMultidate multidateSeparator=" · " />;`}
          </PrismCode>
        </div>
        <div>
          <h2>Side By Side</h2>
          <DateTimePicker sideBySide />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker sideBySide />;`}
          </PrismCode>
        </div>
        <div>
          <h2>With Seconds</h2>
          <DateTimePicker format="YYYY-MM-DD HH:mm:ss" />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker format="YYYY-MM-DD HH:mm:ss" />;`}
          </PrismCode>
        </div>
        <div>
          <h2>Inline Date Time Picker</h2>
          <InlineDateTimePicker />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { InlineDateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <InlineDateTimePicker />;`}
          </PrismCode>
        </div>
        <div>
          <h2>Inline Date Time Picker Side By Side</h2>
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
        <div>
          <h2>Disabled Dates</h2>
          <DateTimePicker
            disabledDates={[
              moment("2020-05-07"),
              new Date(2020, 5 - 1, 21),
              "2020-05-22 00:53",
            ]}
          />
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
        <div>
          <h2>Disabled Days Of Week</h2>
          <DateTimePicker daysOfWeekDisabled={[0, 6]} />
          <PrismCode codeClassName="language-jsx" lineHighlight="2, 5">
            {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () =>
  <DateTimePicker daysOfWeekDisabled={[0, 6]} />;`}
          </PrismCode>
        </div>
        <div>
          <h2>Linked Pickers</h2>
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
        <div>
          <h2>Custom Icons</h2>
          <DateTimePicker
            iconClassName="fa-birthday-cake"
            icons={{
              date: "fa fa-birthday-cake",
              time: "fa fa-hourglass-half",
              up: "fa fa-chevron-circle-up",
              down: "fa fa-chevron-circle-down",
            }}
          />
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
        <div>
          <h2>Event Listeners</h2>
          <DateTimePicker
            onHide={e => console.log("onHide", e)}
            onShow={e => console.log("onShow", e)}
            onChange={e => console.log("onChange", e)}
            onError={e => console.log("onError", e)}
            onUpdate={e => console.log("onUpdate", e)}
          />
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
