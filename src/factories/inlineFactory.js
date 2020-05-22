/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

import React from "react";
import { classNames } from "react-js-utl/utils";
import styles from "../styles.scss";

const noInlineFactory = {
  div: ({
    id,
    iconFactory,
    autocomplete,
    iconClassName,
    readOnly,
    iconTypeFactory,
    iconContainerId,
  }) => {
    return (
      <div
        className={classNames(
          styles.dateTimePickerInputGroup,
          iconFactory.divClassName,
          "date"
        )}
        {...iconFactory.divProps(id)}
      >
        <input
          key={`${id}_3`}
          type="text"
          className="form-control datetimepicker-input"
          data-toggle="datetimepicker"
          data-target={`#${id}`}
          autoComplete={autocomplete}
          readOnly={readOnly ? true : void 0}
          {...iconFactory.inputProps(id)}
        />
        {iconFactory.inputGroupAppend(id)({
          iconClassName,
          iconTypeFactory,
          iconContainerId,
        })}
      </div>
    );
  },
};

const yesInlineFactory = {
  div: ({ id }) => {
    return <div id={id} />;
  },
};

export { yesInlineFactory, noInlineFactory };
