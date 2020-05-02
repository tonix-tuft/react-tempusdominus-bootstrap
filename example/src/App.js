import React from "react";
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
  return (
    <div className={styles.App}>
      <h1>react-tempusdominus-bootstrap</h1>
      <hr />
      <div className={styles.components}>
        <div>
          <h2>Locale</h2>
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
          <DateTimePicker />
          <DateTimePicker useCurrent={false} />
        </div>
      </div>
    </div>
  );
}
