import React, { useRef, useCallback } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";
import moment from "moment";

export default function ProgrammaticAPIExample({ noHr = false }) {
  const pickerRef = useRef();
  const multiDatePickerRef = useRef();

  const callback = useCallback(() => {
    pickerRef.current.datetimepicker("date", new Date());
  }, []);

  const multiDateCallback = useCallback(() => {
    multiDatePickerRef.current.datetimepicker("setMultiDate", [
      new Date(),
      moment().add(1, "days"),
      moment().add(3, "days"),
    ]);
  }, []);

  return (
    <>
      <div>
        <h2 id="programmatic-api">
          <a className={styles.fragmentLink} href="#programmatic-api">
            Programmatic API
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker pickerRef={pickerRef} callback={callback} />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            pickerRef={multiDatePickerRef}
            allowMultidate
            callback={multiDateCallback}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="1-3, 6-7, 9-11, 13-19, 23-28">
          {`import React, { useRef, useCallback } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import moment from "moment";

export default () => {
  const pickerRef = useRef();
  const multiDatePickerRef = useRef();

  const callback = useCallback(() => {
    pickerRef.current.datetimepicker("date", new Date());
  }, []);

  const multiDateCallback = useCallback(() => {
    multiDatePickerRef.current.datetimepicker("setMultiDate", [
      new Date(),
      moment().add(1, "days"),
      moment().add(3, "days"),
    ]);
  }, []);

  return (
    <>
      <DateTimePicker pickerRef={pickerRef} callback={callback} />
      <DateTimePicker
        pickerRef={multiDatePickerRef}
        allowMultidate
        callback={multiDateCallback}
      />
    </>
  );
};`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
