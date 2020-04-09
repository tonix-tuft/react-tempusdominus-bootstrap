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

/**
 * @type {Object}
 */
const yesIconProps = {
  "data-target-input": "nearest",
};

const propsWithId = id => ({ id });

const objIdentity = () => ({});

const yesIconFactory = {
  divProps: id => ({
    ...yesIconProps,
    ...propsWithId(id),
  }),
  inputProps: objIdentity,
  inputGroupAppend: id => iconClassName => (
    <div
      className="input-group-append"
      data-target={`#${id}`}
      data-toggle="datetimepicker"
    >
      <div className="input-group-text">
        <i className={`fa ${iconClassName}`} />
      </div>
    </div>
  ),
  divClassName: "input-group",
};

const noIconFactory = {
  divProps: objIdentity,
  inputProps: propsWithId,
  inputGroupAppend: () => () => false,
  divClassName: false,
};

export { yesIconFactory, noIconFactory };
