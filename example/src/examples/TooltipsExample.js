import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function TooltipsExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="tooltips">
          <a className={styles.fragmentLink} href="#tooltips">
            Tooltips
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            buttons={{
              showToday: true,
              showClear: true,
              showClose: true,
            }}
            tooltips={{
              today: "Select today",
              clear: "Clear selected date",
              close: "Close picker",
              selectMonth: "Select month",
              prevMonth: "Previous month",
              nextMonth: "Next month",
              selectYear: "Select year",
              prevYear: "Previous year",
              nextYear: "Next year",
              selectDecade: "Select decade",
              prevDecade: "Previous decade",
              nextDecade: "Next decade",
              prevCentury: "Previous century",
              nextCentury: "Next century",
              incrementHour: "Increment hour",
              pickHour: "Pick hour",
              decrementHour: "Decrement hour",
              incrementMinute: "Increment minute",
              pickMinute: "Pick minute",
              decrementMinute: "Decrement minute",
              incrementSecond: "Increment second",
              pickSecond: "Pick second",
              decrementSecond: "Decrement second",
            }}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5-36">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    buttons={{
      showToday: true,
      showClear: true,
      showClose: true,
    }}
    tooltips={{
      today: "Select today",
      clear: "Clear selected date",
      close: "Close picker",
      selectMonth: "Select month",
      prevMonth: "Previous month",
      nextMonth: "Next month",
      selectYear: "Select year",
      prevYear: "Previous year",
      nextYear: "Next year",
      selectDecade: "Select decade",
      prevDecade: "Previous decade",
      nextDecade: "Next decade",
      prevCentury: "Previous century",
      nextCentury: "Next century",
      incrementHour: "Increment hour",
      pickHour: "Pick hour",
      decrementHour: "Decrement hour",
      incrementMinute: "Increment minute",
      pickMinute: "Pick minute",
      decrementMinute: "Decrement minute",
      incrementSecond: "Increment second",
      pickSecond: "Pick second",
      decrementSecond: "Decrement second",
    }}
  />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
