/* eslint-disable no-console */
import React from "react";
import styles from "./App.module.scss";
import moment from "moment";
import Logo from "./Logo";
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
import KeepOpenExample from "./examples/KeepOpenExample";
import KeyBindsExample from "./examples/KeyBindsExample";
import MaxMinDateExample from "./examples/MaxMinDateExample";
import ParseInputDateExample from "./examples/ParseInputDateExample";
import SteppingExample from "./examples/SteppingExample";
import TimeZoneExample from "./examples/TimeZoneExample";
import ToolbarPlacementExample from "./examples/ToolbarPlacementExample";
import TooltipsExample from "./examples/TooltipsExample";
import NoUseCurrentExample from "./examples/NoUseCurrentExample";
import UseStrictExample from "./examples/UseStrictExample";
import ViewDateExample from "./examples/ViewDateExample";
import ViewModeExample from "./examples/ViewModeExample";
import WidgetPositioningExample from "./examples/WidgetPositioningExample";
import ProgrammaticAPIExample from "./examples/ProgrammaticAPIExample";
import FeatherIconsExample from "./examples/FeatherIconsExample";
import PromptTimeOnDateChangeExample from "./examples/PromptTimeOnDateChangeExample";
import InlineDatePickerExample from "./examples/InlineDatePickerExample";
import InlineMonthPickerExample from "./examples/InlineMonthPickerExample";
import InlineTimePickerExample from "./examples/InlineTimePickerExample";

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.heading}>
        <h1>react-tempusdominus-bootstrap</h1>
        <div className={styles.goodies}>
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

      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.logoText}>
          <strong>Cogito, ergo sum</strong>
        </div>
      </div>

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
      <div>
        <h2 id="examples">
          <a className={styles.fragmentLink} href="#examples">
            Examples
          </a>
        </h2>
        <ul>
          <li>
            <a href="#birthday-picker">Birthday Picker</a>
          </li>
          <li>
            <a href="#buttons">Buttons</a>
          </li>
          <li>
            <a href="#calendar-weeks">Calendar Weeks</a>
          </li>
          <li>
            <a href="#controlled-date">Controlled Date</a>
          </li>
          <li>
            <a href="#custom-icons">Custom Icons</a>
          </li>
          <li>
            <a href="#custom-multidate-separator">Custom Multidate Separator</a>
          </li>
          <li>
            <a href="#date-picker">Date Picker</a>
          </li>
          <li>
            <a href="#day-view-header-format">Day View Header Format</a>
          </li>
          <li>
            <a href="#debug-mode">Debug Mode</a>
          </li>
          <li>
            <a href="#default-date">Default Date</a>
          </li>
          <li>
            <a href="#disabled-dates">Disabled Dates</a>
          </li>
          <li>
            <a href="#disabled-days-of-week">Disabled Days Of Week</a>
          </li>
          <li>
            <a href="#disabled-hours">Disabled Hours</a>
          </li>
          <li>
            <a href="#disabled-times-intervals">Disabled Time Intervals</a>
          </li>
          <li>
            <a href="#enabled-dates">Enabled Dates</a>
          </li>
          <li>
            <a href="#enabled-hours">Enabled Hours</a>
          </li>
          <li>
            <a href="#event-listeners">Event Listeners</a>
          </li>
          <li>
            <a href="#extra-formats">Extra Formats</a>
          </li>
          <li>
            <a href="#feather-icons">Feather Icons</a>
          </li>
          <li>
            <a href="#i18n">i18n</a>
          </li>
          <li>
            <a href="#inline-date-picker">Inline Date Picker</a>
          </li>
          <li>
            <a href="#inline-date-time-picker">Inline Date Time Picker</a>
          </li>
          <li>
            <a href="#inline-date-time-picker-side-by-side">
              Inline Date Time Picker Side By Side
            </a>
          </li>
          <li>
            <a href="#inline-month-picker">Inline Month Picker</a>
          </li>
          <li>
            <a href="#inline-time-picker">Inline Time Picker</a>
          </li>
          <li>
            <a href="#keep-invalid">Keep Invalid</a>
          </li>
          <li>
            <a href="#keep-open">Keep Open</a>
          </li>
          <li>
            <a href="#key-binds">Key Binds</a>
          </li>
          <li>
            <a href="#linked-pickers">Linked Pickers</a>
          </li>
          <li>
            <a href="#max-min-date">Max/Min Date</a>
          </li>
          <li>
            <a href="#month-picker">Month Picker</a>
          </li>
          <li>
            <a href="#multidate">Multidate</a>
          </li>
          <li>
            <a href="#no-collapse">No Collapse</a>
          </li>
          <li>
            <a href="#no-focus-on-show">No Focus On Show</a>
          </li>
          <li>
            <a href="#no-icon">No Icon</a>
          </li>
          <li>
            <a href="#no-use-current">No Use Current</a>
          </li>
          <li>
            <a href="#parse-input-date">Parse Input Date</a>
          </li>
          <li>
            <a href="#programmatic-api">Programmatic API</a>
          </li>
          <li>
            <a href="#prompt-time-on-date-change">Prompt Time On Date Change</a>
          </li>
          <li>
            <a href="#read-only">Read-Only</a>
          </li>
          <li>
            <a href="#side-by-side">Side By Side</a>
          </li>
          <li>
            <a href="#stepping">Stepping</a>
          </li>
          <li>
            <a href="#time-picker">Time Picker</a>
          </li>
          <li>
            <a href="#time-zone">Time Zone</a>
          </li>
          <li>
            <a href="#toolbar-placement">Toolbar Placement</a>
          </li>
          <li>
            <a href="#tooltips">Tooltips</a>
          </li>
          <li>
            <a href="#use-strict">Use Strict</a>
          </li>
          <li>
            <a href="#view-date">View Date</a>
          </li>
          <li>
            <a href="#view-mode">View Mode</a>
          </li>
          <li>
            <a href="#widget-positioning-example">Widget Positioning Example</a>
          </li>
          <li>
            <a href="#with-seconds">With Seconds</a>
          </li>
        </ul>
      </div>
      <hr />

      <div className={styles.examples}>
        <BirthdayPickerExample />
        <ButtonsExample />
        <CalendarWeeksExample />
        <ControlledDateExample />
        <CustomIconsExample />
        <CustomMultidateSeparatorExample />
        <DatePickerExample />
        <DayViewHeaderFormatExample />
        <DebugExample />
        <DefaultDateExample />
        <DisabledDatesExample />
        <DisabledDaysOfWeekExample />
        <DisabledHoursExample />
        <DisabledTimeIntervalsExample />
        <EnabledDatesExample />
        <EnabledHoursExample />
        <EventListenersExample />
        <ExtraFormatsExample />
        <FeatherIconsExample />
        <I18nExample />
        <InlineDatePickerExample />
        <InlineDateTimePickerExample />
        <InlineDateTimePickerSideBySideExample />
        <InlineMonthPickerExample />
        <InlineTimePickerExample />
        <KeepInvalidExample />
        <KeepOpenExample />
        <KeyBindsExample />
        <LinkedPickersExample />
        <MaxMinDateExample />
        <MonthPickerExample />
        <MultidateExample />
        <NoCollapseExample />
        <NoFocusOnShowExample />
        <NoIconExample />
        <NoUseCurrentExample />
        <ParseInputDateExample />
        <ProgrammaticAPIExample />
        <PromptTimeOnDateChangeExample />
        <ReadOnlyExample />
        <SideBySideExample />
        <SteppingExample />
        <TimePickerExample />
        <TimeZoneExample />
        <ToolbarPlacementExample />
        <TooltipsExample />
        <UseStrictExample />
        <ViewDateExample />
        <ViewModeExample />
        <WidgetPositioningExample />
        <WithSecondsExample noHr />
      </div>
      <footer>
        <small className={styles.copyright}>
          Copyright © {moment().format("YYYY")} Anton Bagdatyev (Tonix)
        </small>
      </footer>
    </div>
  );
}
