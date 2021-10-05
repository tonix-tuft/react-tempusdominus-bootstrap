import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function ToolbarPlacementExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="toolbar-placement">
          <a className={styles.fragmentLink} href="#toolbar-placement">
            Toolbar Placement
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker toolbarPlacement="default" />
        </div>
        <div className={styles.picker}>
          <DateTimePicker toolbarPlacement="bottom" />
        </div>
        <div className={styles.picker}>
          <DateTimePicker toolbarPlacement="top" />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 6-8">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <>
    <DateTimePicker toolbarPlacement="default" />
    <DateTimePicker toolbarPlacement="bottom" />
    <DateTimePicker toolbarPlacement="top" />
  </>
);`}
        </PrismCode>
        Back to <a href="#examples">Examples</a>.
      </div>
      {noHr || <hr />}
    </>
  );
}
