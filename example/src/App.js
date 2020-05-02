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
        </div>
        <div>
          <h2>Time Only</h2>
          <TimePicker />
        </div>
        <div>
          <h2>Date Only</h2>
          <DatePicker locale="de" />
        </div>
        <div>
          <h2>Month Picker</h2>
          <MonthPicker />
        </div>
        <div>
          <h2>No Icon</h2>
          <DateTimePicker noIcon />
        </div>
        <div>
          <h2>Default Date</h2>
          <DateTimePicker defaultDate="2020-05-26" />
        </div>
        <div>
          <h2>Multidate</h2>
          <DateTimePicker allowMultidate />
        </div>
        <div>
          <h2>Custom Multidate Separator</h2>
          <DatePicker allowMultidate multidateSeparator=" · " />
        </div>
        <div>
          <h2>Inline Date Time Picker</h2>
          <InlineDateTimePicker />
        </div>
        <div>
          <h2>Inline Date Time Picker Side By Side</h2>
          <div className={styles.inlinePicker}>
            <InlineDateTimePicker sideBySide />
          </div>
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
        </div>
        <div>
          <h2>Disabled Days Of Week</h2>
          <DateTimePicker daysOfWeekDisabled={[0, 6]} />
        </div>
        <div>
          <h2>Linked Pickers</h2>
          <DateTimePicker
            pickerRef={linkedPicker1Ref}
            onChange={e => {
              linkedPicker2Ref.current &&
                linkedPicker2Ref.current.datetimepicker("minDate", e.date);
            }}
          />
          <DateTimePicker
            useCurrent={false}
            pickerRef={linkedPicker2Ref}
            onChange={e => {
              linkedPicker1Ref.current &&
                linkedPicker1Ref.current.datetimepicker("maxDate", e.date);
            }}
          />
        </div>
        <div>
          <h2>Custom Icons</h2>
          <DateTimePicker
            iconClassName="fa-birthday-cake"
            icons={{
              time: "fa fa-hourglass-half",
              date: "fa fa-birthday-cake",
              up: "fa fa-chevron-circle-up",
              down: "fa fa-chevron-circle-down",
            }}
          />
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
        </div>
      </div>
    </div>
  );
}
