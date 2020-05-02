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

import getPicker from "./getPicker";

/**
 * @type {Object}
 */
const eventsMap = {
  onHide: "hide.datetimepicker",
  onShow: "show.datetimepicker",
  onChange: "change.datetimepicker",
  onError: "error.datetimepicker",
  onUpdate: "update.datetimepicker",
};

export function turnOnEventListeners(id, eventListenersTuples) {
  const $picker = getPicker(id);
  for (const [eventListenerName, eventListener] of eventListenersTuples) {
    const event = eventsMap[eventListenerName];
    $picker.on(event, eventListener);
  }
}

export function turnOffEventListeners(id) {
  const $picker = getPicker(id);
  Object.keys(eventsMap).map(eventListenerName =>
    $picker.off(eventsMap[eventListenerName])
  );
}
