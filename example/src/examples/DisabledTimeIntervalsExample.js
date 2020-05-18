import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";
import moment from "moment";

export default function DisabledTimeIntervalsExample({ noHr = false }) {
  return (
    <>
      <div>
        <h2 id="disabled-times-intervals">
          <a className={styles.fragmentLink} href="#disabled-times-intervals">
            Disabled Time Intervals
          </a>
        </h2>
        <div className={styles.picker}>
          <DateTimePicker
            disabledTimeIntervals={[
              [moment({ h: 0 }), moment({ h: 8 })],
              [moment({ h: 18 }), moment({ h: 24 })],
            ]}
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            disabledTimeIntervals={[
              [moment({ h: 0 }), moment({ h: 8 })],
              [moment({ h: 18 }), moment({ h: 24 })],
            ]}
            locale="pl"
          />
        </div>
        <div className={styles.picker}>
          <DateTimePicker
            disabledTimeIntervals={[
              [
                moment(
                  `${moment()
                    .subtract(1, "days")
                    .format("YYYY-MM-DD")} 23:59:59`
                ),
                moment({ h: 8 }),
              ],
              [moment({ h: 18 }), moment({ h: 24 })],
            ]}
            format="YYYY-MM-DD HH:mm:ss"
            locale="de"
          />
        </div>
        <PrismCode language="jsx" lineHighlight="2-3, 7-34">
          {`import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import moment from "moment";

export default () => (
  <>
    <DateTimePicker
      disabledTimeIntervals={[
        [moment({ h: 0 }), moment({ h: 8 })],
        [moment({ h: 18 }), moment({ h: 24 })],
      ]}
    />
    <DateTimePicker
      disabledTimeIntervals={[
        [moment({ h: 0 }), moment({ h: 8 })],
        [moment({ h: 18 }), moment({ h: 24 })],
      ]}
      locale="pl"
    />
    <DateTimePicker
      disabledTimeIntervals={[
        [
          moment(
            \`\${moment()
              .subtract(1, "days")
              .format("YYYY-MM-DD")} 23:59:59\`
          ),
          moment({ h: 8 }),
        ],
        [moment({ h: 18 }), moment({ h: 24 })],
      ]}
      format="YYYY-MM-DD HH:mm:ss"
      locale="de"
    />
  </>
);`}
        </PrismCode>
      </div>
      {noHr || <hr />}
    </>
  );
}
