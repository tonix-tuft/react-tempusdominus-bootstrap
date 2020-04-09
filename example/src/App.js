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
      <div className={styles.components}>
        <DateTimePicker locale="ru" />
        <TimePicker />
        <DatePicker locale="de" />
        <MonthPicker />
        <DateTimePicker noIcon />
        <DateTimePicker defaultDate="2020-05-26" />
        <DateTimePicker allowMultidate />
        <DatePicker allowMultidate multidateSeparator=" · " />
        <InlineDateTimePicker />
        <div className={styles.inlinePicker}>
          <InlineDateTimePicker sideBySide />
        </div>
        <DateTimePicker
          defaultDate="2020-05-01"
          disabledDates={[
            moment("2020-05-07"),
            new Date(2020, 5 - 1, 21),
            "2020-05-22 00:53",
          ]}
        />
        <DateTimePicker daysOfWeekDisabled={[0, 6]} />
      </div>
    </div>
  );
}
