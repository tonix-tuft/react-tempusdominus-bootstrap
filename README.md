# react-tempusdominus-bootstrap

A React wrapper for the Tempus Dominus Bootstrap plugin for date and time pickers.

[![NPM](https://img.shields.io/npm/v/react-tempusdominus-bootstrap.svg)](https://www.npmjs.com/package/react-tempusdominus-bootstrap)

<p align="center">
  <img src="https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/react-tempusdominus-bootstrap.gif" />
</p>

## Features

| Features                             |     |
| ------------------------------------ | --- |
| ES6-Compliant                        | ✅  |
| Based On Bootstrap 4                 | ✅  |
| Date Time Picker                     | ✅  |
| i18n                                 | ✅  |
| Time Picker                          | ✅  |
| Date Picker                          | ✅  |
| Month Picker                         | ✅  |
| No Icon                              | ✅  |
| Default Date                         | ✅  |
| Multidate                            | ✅  |
| Custom Multidate Separator           | ✅  |
| Side By Side                         | ✅  |
| With Seconds                         | ✅  |
| Inline Date Time Picker              | ✅  |
| Inline Date Time Picker Side By Side | ✅  |
| Disabled Dates                       | ✅  |
| Disabled Days Of Week                | ✅  |
| Linked Pickers                       | ✅  |
| Custom Icons                         | ✅  |
| Event Listeners                      | ✅  |

## Installation

```bash
npm install --save react-tempusdominus-bootstrap
```

Install peer dependencies:

```bash
npm install --save react react-dom font-awesome moment-utl
```

## Usage

Import the required styles in your JS entry point file:

```js
// Your index.js file.

// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/scss/bootstrap.scss"; // Or the one above.
import "font-awesome/css/font-awesome.css";
// import "tempusdominus-bootstrap/build/css/tempusdominus-bootstrap.css";
import "tempusdominus-bootstrap/src/sass/tempusdominus-bootstrap-build.scss"; // Or the one above.

// ...
```

Or in you Sass/SCSS main file:

```scss
// Your index.scss file.

@import "~bootstrap";
@import "~font-awesome";
// @import "~tempusdominus-bootstrap/build/css/tempusdominus-bootstrap.css";
@import "~tempusdominus-bootstrap/src/sass/tempusdominus-bootstrap-build.scss"; // Or the one above.

// ...
```

Then import and use the provided picker components in your JS code:

```jsx
import React from "react";
import {
  DateTimePicker,
  DatePicker,
  TimePicker,
  MonthPicker,
  InlineDateTimePicker,
} from "react-tempusdominus-bootstrap";

export default () => (
  <>
    <DateTimePicker />
    <DatePicker />
    <TimePicker />
    <MonthPicker />
    <InlineDateTimePicker />
  </>
);
```

## Demo

Check out the [demo](https://tonix-tuft.github.io/react-tempusdominus-bootstrap) for examples. You can find the documentation of the API below in this repo.

## API

- [DateTimePicker](#datetimepicker)
- [DatePicker](#datepicker)
- [TimePicker](#timepicker)
- [MonthPicker](#monthpicker)
- [InlineDateTimePicker](#inlinedatetimepicker)

### DateTimePicker

The `DateTimePicker` component is the main fully featured component which allows a user to select a date and a time.

<p align="center">
  <img src="https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/react-tempusdominus-bootstrap.gif" />
</p>

```jsx
import React from "react";
import { DateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <>
    <DateTimePicker />
  </>
);
```

| Props                 | Type | Default | Description |
| --------------------- | ---- | ------- | ----------- |
| allowInputToggle      |      |         |             |
| allowMultidate        |      |         |             |
| autocomplete          |      |         |             |
| buttons               |      |         |             |
| calendarWeeks         |      |         |             |
| className             |      |         |             |
| collapse              |      |         |             |
| date                  |      |         |             |
| dayViewHeaderFormat   |      |         |             |
| daysOfWeekDisabled    |      |         |             |
| debug                 |      |         |             |
| defaultDate           |      |         |             |
| disabledDates         |      |         |             |
| disabledHours         |      |         |             |
| disabledTimeIntervals |      |         |             |
| enabledDates          |      |         |             |
| enabledHours          |      |         |             |
| extraFormats          |      |         |             |
| focusOnShow           |      |         |             |
| format                |      |         |             |
| iconClassName         |      |         |             |
| icons                 |      |         |             |
| ignoreReadonly        |      |         |             |
| inline                |      |         |             |
| keepInvalid           |      |         |             |
| keepOpen              |      |         |             |
| keyBinds              |      |         |             |
| locale                |      |         |             |
| maxDate               |      |         |             |
| minDate               |      |         |             |
| multidateSeparator    |      |         |             |
| noIcon                |      |         |             |
| onChange              |      |         |             |
| onError               |      |         |             |
| onHide                |      |         |             |
| onShow                |      |         |             |
| onUpdate              |      |         |             |
| parseInputDate        |      |         |             |
| pickerRef             |      |         |             |
| sideBySide            |      |         |             |
| stepping              |      |         |             |
| timeZone              |      |         |             |
| toolbarPlacement      |      |         |             |
| tooltips              |      |         |             |
| useCurrent            |      |         |             |
| useStrict             |      |         |             |
| viewDate              |      |         |             |
| viewMode              |      |         |             |
| widgetParent          |      |         |             |
| widgetPositioning     |      |         |             |

### DatePicker

The `DatePicker` component renders a [DateTimePicker](#datetimepicker) component under the hood (composition), but is tweaked to only show a date picker.

<p align="center">
  <img src="https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/react-tempusdominus-bootstrap-datepicker.gif" />
</p>

```jsx
import React from "react";
import { DatePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <>
    <DatePicker />
  </>
);
```

All the `props` of [DateTimePicker](#datetimepicker) theoretically apply to this component as well.

### TimePicker

The `TimePicker` component renders a [DateTimePicker](#datetimepicker) component under the hood (composition), but is tweaked to only show a time picker.

<p align="center">
  <img src="https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/react-tempusdominus-bootstrap-timepicker.gif" />
</p>

```jsx
import React from "react";
import { TimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <>
    <TimePicker />
  </>
);
```

All the `props` of [DateTimePicker](#datetimepicker) theoretically apply to this component as well.

### MonthPicker

The `MonthPicker` component renders a [DateTimePicker](#datetimepicker) component under the hood (composition), but is tweaked to only show a month picker.

<p align="center">
  <img src="https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/react-tempusdominus-bootstrap-monthpicker.gif" />
</p>

```jsx
import React from "react";
import { MonthPicker } from "react-tempusdominus-bootstrap";

export default () => (
  <>
    <MonthPicker />
  </>
);
```

All the `props` of [DateTimePicker](#datetimepicker) theoretically apply to this component as well.

### InlineDateTimePicker

The `InlineDateTimePicker` component renders a [DateTimePicker](#datetimepicker) component under the hood (composition) with the `inline` prop set to `true`.

<p align="center">
  <img src="https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/react-tempusdominus-bootstrap-inlinedatetimepicker.gif" />
</p>

```jsx
import React from "react";
import { InlineDateTimePicker } from "react-tempusdominus-bootstrap";

export default () => (
  <>
    <InlineDateTimePicker />
  </>
);
```

All the `props` of [DateTimePicker](#datetimepicker) theoretically apply to this component as well.

## Browser Support

| ![Chrome](https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/chrome-logo-48x48.png) | ![Firefox](https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/firefox-logo-48x48.png) | ![Safari](https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/safari-logo-48x48.png) | ![Opera](https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/opera-logo-48x48.png) | ![Edge](https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/edge-logo-48x48.png) | ![IE 11](https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/repo/img/ie11-logo-flat-color-48x48.png) |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ✓ Latest                                                                                                                    | ✓ Latest                                                                                                                      | ✓ Latest                                                                                                                    | ✓ Latest                                                                                                                  | ✓ Latest                                                                                                                | IE 11                                                                                                                               |

### IE 11

If you want to support IE 11, make sure you import the required polyfills to make it work.

If you are using [CRA (create-react-app)](https://github.com/facebook/create-react-app) you can achieve this by tweaking your `browserslist` field in you `package.json` in order to add support for `IE 11` during development with the `ie > 10` query:

```js
{
  ...
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version",
      "ie > 10"
    ]
  }
}
```

Then you have to install the `react-app-polyfill` package:

```bash
npm install --save react-app-polyfill
```

And include the required polyfills in your `index.js` JS entry point file:

```js
// Your index.js file.

// These must be the first lines in src/index.js
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

// ...
```

If you restart your app and it still doesn't work on IE 11, make sure you have manually deleted the `babel-loader` cache as well with the following CLI command:

```bash
rm -rf node_modules/.cache/babel-loader/
```

Then restart you app again.

## Contributing

## License

MIT © [Anton Bagdatyev (Tonix)](https://github.com/tonix-tuft)
