import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function WidgetPositioningExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="widget-positioning-example">
          <a className={styles.fragmentLink} href="#widget-positioning-example">
            Widget Positioning Example
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            widgetPositioning={{
              horizontal: "left",
              vertical: "top",
            }}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            widgetPositioning={{
              horizontal: "left",
              vertical: "bottom",
            }}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            widgetPositioning={{
              horizontal: "right",
              vertical: "top",
            }}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            widgetPositioning={{
              horizontal: "right",
              vertical: "bottom",
            }}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            widgetPositioning={{
              horizontal: "left",
              vertical: "auto",
            }}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 6-35">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <>
    <DateTimePicker
      widgetPositioning={{
        horizontal: "left",
        vertical: "top",
      }}
    />
    <DateTimePicker
      widgetPositioning={{
        horizontal: "left",
        vertical: "bottom",
      }}
    />
    <DateTimePicker
      widgetPositioning={{
        horizontal: "right",
        vertical: "top",
      }}
    />
    <DateTimePicker
      widgetPositioning={{
        horizontal: "right",
        vertical: "bottom",
      }}
    />
    <DateTimePicker
      widgetPositioning={{
        horizontal: "left",
        vertical: "auto",
      }}
    />
  </>
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
