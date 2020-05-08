# react-tempusdominus-bootstrap

A React wrapper for the Tempus Dominus Bootstrap plugin for date and time pickers.

[![NPM](https://img.shields.io/npm/v/react-tempusdominus-bootstrap.svg)](https://www.npmjs.com/package/react-tempusdominus-bootstrap)

<p align="center">
  <img src="https://raw.githubusercontent.com/tonix-tuft/react-tempusdominus-bootstrap/master/example/img/react-tempusdominus-bootstrap.gif" />
</p>

## Features

|                                      |     |
| ------------------------------------ | --- |
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
| Disabled Days of the Week            | ✅  |
| Linked Pickers                       | ✅  |
| Custom Icons                         | ✅  |
| Event Listeners                      | ✅  |

## Installation

```bash
npm install --save react-tempusdominus-bootstrap
```

Install peer dependencies:

```bash
npm i --save react react-dom font-awesome moment-utl
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

Check out the [demo](https://tonix-tuft.github.io/react-tempusdominus-bootstrap) for examples. You can find the documentation below in this repo.

## License

MIT © [Anton Bagdatyev (Tonix)](https://github.com/tonix-tuft)
