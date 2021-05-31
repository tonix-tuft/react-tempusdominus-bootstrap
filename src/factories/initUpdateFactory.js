/*
 * Copyright (c) 2021 Anton Bagdatyev (Tonix)
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

import $ from "jquery";
import getPicker from "../helpers/getPicker";

const updateFactory = {
  setOptions: id => options => {
    options = { ...options };
    // On update, locale is updated differently,
    // because it may not have been loaded yet.
    // The "useLocale" hook will take care of setting the locale.
    delete options.locale;
    const $picker = getPicker(id);
    Object.keys(options).map(key => $picker.datetimepicker(key, options[key]));
  },
  setLocale: id => locale => getPicker(id).datetimepicker("locale", locale),
};

const initFactory = {
  setOptions: id => options =>
    $(`#${id}`).datetimepicker({
      ...options,
    }),
  setLocale: () => () => void 0, // Nothing to do here when mounting.
};

export { updateFactory, initFactory };
