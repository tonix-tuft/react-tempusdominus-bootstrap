import React, { useRef, useEffect } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function ProgrammaticAPIExample({ noHr = false }) {
  const pickerRef = useRef();

  useEffect(() => {
    pickerRef.current.datetimepicker("date", new Date());
  });

  return (
    <>
      <div>
        <h2 id="programmatic-api">
          <a className={styles.fragmentLink} href="#programmatic-api">
            Programmatic API
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker pickerRef={pickerRef} />
        </div>
        <PrismCode language="jsx" lineHighlight="1-2, 5, 7-9, 12">
          {`import React, { useRef, useEffect } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => {
  const pickerRef = useRef();

  useEffect(() => {
    pickerRef.current.datetimepicker("date", new Date());
  });

  return (
    <DateTimePicker pickerRef={pickerRef} />
  );
};`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
