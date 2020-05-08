import React, { useRef } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function LinkedPickersExample({ noHr = false }) {
  const linkedPicker1Ref = useRef();
  const linkedPicker2Ref = useRef();
  return (
    <>
      <div>
        <h2 id="linked-pickers">
          <a className={styles.fragmentLink} href="#linked-pickers">
            Linked Pickers
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            pickerRef={linkedPicker1Ref}
            onChange={e => {
              linkedPicker2Ref.current.datetimepicker("minDate", e.date);
            }}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            useCurrent={false}
            pickerRef={linkedPicker2Ref}
            onChange={e => {
              linkedPicker1Ref.current.datetimepicker("maxDate", e.date);
            }}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5, 6, 9-21">
          {`import React, { useRef } from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => {
  const linkedPicker1Ref = useRef();
  const linkedPicker2Ref = useRef();
  return (
    <>
      <DateTimePicker
        pickerRef={linkedPicker1Ref}
        onChange={e => {
          linkedPicker2Ref.current.datetimepicker("minDate", e.date);
        }}
      />
      <DateTimePicker
        useCurrent={false}
        pickerRef={linkedPicker2Ref}
        onChange={e => {
          linkedPicker1Ref.current.datetimepicker("maxDate", e.date);
        }}
      />
    </>
  );
};`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
