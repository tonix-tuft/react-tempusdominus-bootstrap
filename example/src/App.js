/* eslint-disable no-console */
import React from "react";
import styles from "./App.module.scss";
import moment from "moment";
import I18nExample from "./examples/I18nExample";
import Installation from "./Installation";
import TimePickerExample from "./examples/TimePickerExample";
import DatePickerExample from "./examples/DatePickerExample";
import MonthPickerExample from "./examples/MonthPickerExample";
import NoIconExample from "./examples/NoIconExample";
import DefaultDateExample from "./examples/DefaultDateExample";
import MultidateExample from "./examples/MultidateExample";
import CustomMultidateSeparatorExample from "./examples/CustomMultidateSeparatorExample";
import SideBySideExample from "./examples/SideBySideExample";
import WithSecondsExample from "./examples/WithSecondsExample";
import InlineDateTimePickerExample from "./examples/InlineDateTimePickerExample";
import InlineDateTimePickerSideBySideExample from "./examples/InlineDateTimePickerSideBySideExample";
import DisabledDatesExample from "./examples/DisabledDatesExample";
import DisabledDaysOfWeekExample from "./examples/DisabledDaysOfWeekExample";
import LinkedPickersExample from "./examples/LinkedPickersExample";
import CustomIconsExample from "./examples/CustomIconsExample";
import EventListenersExample from "./examples/EventListenersExample";

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.heading}>
        <h1>react-tempusdominus-bootstrap</h1>
        <div>
          <a
            className={styles.GitHub}
            href="https://github.com/tonix-tuft/react-tempusdominus-bootstrap"
          >
            <i className="fa fa-github" />
          </a>
          <a href="https://www.npmjs.com/package/react-tempusdominus-bootstrap">
            <div className={styles.npm} />
          </a>
        </div>
      </div>
      <hr />
      <Installation />
      <div className={styles.components}>
        <I18nExample />
        <TimePickerExample />
        <DatePickerExample />
        <MonthPickerExample />
        <NoIconExample />
        <DefaultDateExample />
        <MultidateExample />
        <CustomMultidateSeparatorExample />
        <SideBySideExample />
        <WithSecondsExample />
        <InlineDateTimePickerExample />
        <InlineDateTimePickerSideBySideExample />
        <DisabledDatesExample />
        <DisabledDaysOfWeekExample />
        <LinkedPickersExample />
        <CustomIconsExample />
        <EventListenersExample noHr />
      </div>
      <footer>
        <small className={styles.copyright}>
          Copyright © {moment().format("YYYY")} Anton Bagdatyev (Tonix)
        </small>
      </footer>
    </div>
  );
}
