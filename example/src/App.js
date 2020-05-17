/* eslint-disable no-console */
import React from "react";
import styles from "./App.module.scss";
import moment from "moment";
import I18nExample from "./examples/I18nExample";
import Installation from "./info/Installation";
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
import Usage from "./info/Usage";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import ButtonsExample from "./examples/ButtonsExample";
import CalendarWeeksExample from "./examples/CalendarWeeksExample";
import NoCollapseExample from "./examples/NoCollapseExample";
import ControlledDateExample from "./examples/ControlledDateExample";
import DayViewHeaderFormatExample from "./examples/DayViewHeaderFormatExample";
import DebugExample from "./examples/DebugExample";
import DisabledHoursExample from "./examples/DisabledHoursExample";
import DisabledTimeIntervalsExample from "./examples/DisabledTimeIntervalsExample";
import EnabledDatesExample from "./examples/EnabledDatesExample";
import EnabledHoursExample from "./examples/EnabledHoursExample";
import ExtraFormatsExample from "./examples/ExtraFormatsExample";
import NoFocusOnShowExample from "./examples/NoFocusOnShowExample";
import ReadOnlyExample from "./examples/ReadOnlyExample";
import KeepInvalidExample from "./examples/KeepInvalidExample";
import BirthdayPickerExample from "./examples/BirthdayPickerExample";

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

      <em>
        A React wrapper for the Tempus Dominus Bootstrap plugin for date and
        time pickers.
      </em>

      <div className={styles.pickerContainer}>
        <div className={styles.picker}>
          <DateTimePicker />
        </div>
      </div>

      <div className={styles.info}>
        <Installation />
        <Usage />
        <div>
          Below you can find further examples. You can find the documentation of
          the API on the{" "}
          <a href="https://github.com/tonix-tuft/react-tempusdominus-bootstrap">
            GitHub repository page
          </a>
          .
        </div>
      </div>
      <hr />
      <div className={styles.examples}>
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
        <BirthdayPickerExample />
        <EventListenersExample />
        <CalendarWeeksExample />
        <NoCollapseExample />
        <ControlledDateExample />
        <DayViewHeaderFormatExample />
        <DebugExample />
        <DisabledHoursExample />
        <DisabledTimeIntervalsExample />
        <EnabledDatesExample />
        <EnabledHoursExample />
        <ExtraFormatsExample />
        <NoFocusOnShowExample />
        <ReadOnlyExample />
        <KeepInvalidExample />
        <ButtonsExample noHr />
      </div>
      <footer>
        <small className={styles.copyright}>
          Copyright © {moment().format("YYYY")} Anton Bagdatyev (Tonix)
        </small>
      </footer>
    </div>
  );
}
