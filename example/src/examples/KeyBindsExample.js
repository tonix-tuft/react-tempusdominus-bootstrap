/* eslint-disable no-console */
import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

export default function KeyBindsExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="key-binds">
          <a className={styles.fragmentLink} href="#key-binds">
            Key Binds
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            keyBinds={{
              up: function () {
                console.log("Up arrow");
                if (!this.widget) {
                  return false;
                }
                const d = this._dates[0] || this.getMoment();
                if (this.widget.find(".datepicker").is(":visible")) {
                  this.date(d.clone().subtract(7, "d"));
                } else {
                  this.date(d.clone().add(this.stepping(), "m"));
                }
                return true;
              },
            }}
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2, 5-21">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <DateTimePicker
    keyBinds={{
      up: function () {
        console.log("Up arrow");
        if (!this.widget) {
          return false;
        }
        const d = this._dates[0] || this.getMoment();
        if (this.widget.find(".datepicker").is(":visible")) {
          this.date(d.clone().subtract(7, "d"));
        } else {
          this.date(d.clone().add(this.stepping(), "m"));
        }
        return true;
      },
    }}
  />
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
