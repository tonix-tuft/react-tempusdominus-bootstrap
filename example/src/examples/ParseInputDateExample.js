import React, { useState } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";
import moment from "moment";

export default function ParseInputDateExample({ noHr = false }) {
  const [date, setDate] = useState("yesterday");

  function parseRelativeDate(relativeDate) {
    switch (relativeDate) {
      case "today":
        return moment();
      case "yesterday":
        return moment().subtract(1, "day");
      default:
        return moment().subtract(
          Number(relativeDate.replace("days ago", "").trim()),
          "days"
        );
    }
  }

  function parseInputDate(inputDate) {
    const relativeDatePattern = /today|yesterday|[0-9]+\s+(days ago)/;
    let resultDate;

    if (moment.isMoment(inputDate) || inputDate instanceof Date) {
      resultDate = moment(inputDate);
    } else {
      const relativeDate = inputDate.match(relativeDatePattern);
      let parseDate = null;

      if (relativeDate !== null) {
        parseDate = parseRelativeDate(inputDate.match(relativeDatePattern)[0]);
      } else {
        parseDate = moment();
      }

      resultDate = moment(parseDate, "YYYY-MM-DD");
    }

    return resultDate;
  }

  return (
    <>
      <div>
        <h2 id="parse-input-date">
          <a className={styles.fragmentLink} href="#parse-input-date">
            Parse Input Date
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker parseInputDate={parseInputDate} date={date} />
          <button className="btn btn-primary" onClick={() => setDate("today")}>
            Set to today
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setDate("yesterday")}
          >
            Set to yesterday
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setDate("3 days ago")}
          >
            Set to 3 days ago
          </button>
        </div>
        <PrismCode language="jsx" lineHighlight="1-3, 6, 8-20, 22-42, 46-61">
          {`import React, { useState } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import moment from "moment";

export default () => {
  const [date, setDate] = useState("yesterday");

  function parseRelativeDate(relativeDate) {
    switch (relativeDate) {
      case "today":
        return moment();
      case "yesterday":
        return moment().subtract(1, "day");
      default:
        return moment().subtract(
          Number(relativeDate.replace("days ago", "").trim()),
          "days"
        );
    }
  }

  function parseInputDate(inputDate) {
    const relativeDatePattern = /today|yesterday|[0-9]+\\s+(days ago)/;
    let resultDate;

    if (moment.isMoment(inputDate) || inputDate instanceof Date) {
      resultDate = moment(inputDate);
    } else {
      const relativeDate = inputDate.match(relativeDatePattern);
      let parseDate = null;

      if (relativeDate !== null) {
        parseDate = parseRelativeDate(inputDate.match(relativeDatePattern)[0]);
      } else {
        parseDate = moment();
      }

      resultDate = moment(parseDate, "YYYY-MM-DD");
    }

    return resultDate;
  }

  return (
    <>
      <DateTimePicker parseInputDate={parseInputDate} date={date} />
      <button className="btn btn-primary" onClick={() => setDate("today")}>
        Set to today
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setDate("yesterday")}
      >
        Set to yesterday
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setDate("3 days ago")}
      >
        Set to 3 days ago
      </button>
    </>
  );
}`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
