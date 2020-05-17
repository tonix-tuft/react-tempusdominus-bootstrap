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

import React, { useEffect, useMemo, useRef } from "react";
import { classNames } from "react-js-utl/utils";
import {
  useUniqueKey,
  useFactory,
  useIsUpdate,
  useCumulativeShallowDiff,
  useUnmountEffect,
  usePrevious,
  useCallbackRef,
  useMountEffect,
  useExtend,
  useShallowEqualMemo,
} from "react-js-utl/hooks";
import { useLocale } from "react-moment-hooks";
import { updateFactory, initFactory } from "../factories/initUpdateFactory";
import { noIconFactory, yesIconFactory } from "../factories/iconFactory";
import "bootstrap";
import "tempusdominus-bootstrap";
import styles from "../styles.scss";
import destroy from "../helpers/destroy";
import { yesInlineFactory, noInlineFactory } from "../factories/inlineFactory";
import {
  turnOffEventListeners,
  turnOnEventListeners,
} from "../helpers/eventListeners";
import getPicker from "../helpers/getPicker";

const DateTimePicker = function DateTimePicker({
  className = void 0,
  autocomplete = "off",
  iconClassName = "fa-calendar",
  noIcon = false,
  pickerRef = void 0,
  showOnInputFocus = true,
  readOnly = false,
  showPickerIfReadOnly = false,
  onHide = () => {},
  onShow = () => {},
  onChange = () => {},
  onError = () => {},
  onUpdate = () => {},
  ...options
} = {}) {
  const { inline } = options;
  const id = useUniqueKey(noIcon);
  const prevId = usePrevious(id);
  const widgetParentId = useUniqueKey();
  const isControlledComponent = Object.prototype.hasOwnProperty.call(
    options,
    "date"
  );
  const isControlledComponentRef = useRef();
  isControlledComponentRef.current = isControlledComponent;
  const optionsInvariantsMemo = useShallowEqualMemo({
    allowInputToggle: showOnInputFocus,
    updateOnlyThroughDateOption: isControlledComponent,
    readonly: readOnly,
    ignoreReadonly: showPickerIfReadOnly,
  });
  options = useExtend(
    () => ({
      widgetParent: `#${widgetParentId}`,
    }),
    [options, optionsInvariantsMemo]
  );

  const onHideRef = useCallbackRef(onHide);
  const onShowRef = useCallbackRef(onShow);
  const onChangeRef = useCallbackRef((e, ...args) => {
    if (
      isControlledComponentRef.current &&
      (e.isDateUpdateThroughDateOptionFromClientCode || e.isInit)
    ) {
      return;
    }
    onChange(e, ...args);
  });
  const onErrorRef = useCallbackRef(onError);
  const onUpdateRef = useCallbackRef(onUpdate);

  options = useCumulativeShallowDiff(options);

  const isUpdate = useIsUpdate();
  const initUpdateFactory = useFactory(
    () => [[isUpdate, updateFactory], initFactory],
    [isUpdate]
  );

  const iconFactory = useFactory(
    () => [[noIcon, noIconFactory], yesIconFactory],
    [noIcon]
  );

  const inlineFactory = useFactory(
    () => [[inline, yesInlineFactory], noInlineFactory],
    [inline]
  );

  const { locale } = options;
  useLocale(locale, {
    callback: momentLocale => {
      if (isUpdate) {
        initUpdateFactory.setLocale(momentLocale);
      } else {
        initUpdateFactory.setOptions(id)({ ...options, locale: momentLocale });
      }
    },
  });

  useEffect(() => {
    isUpdate && initUpdateFactory.setOptions(id)(options);
  }, [isUpdate, initUpdateFactory, id, options]);

  useEffect(() => {
    pickerRef && (pickerRef.current = getPicker(id));
  }, [pickerRef, id]);

  useMountEffect(() => {
    turnOnEventListeners(id, [
      ["onHide", onHideRef.current],
      ["onShow", onShowRef.current],
      ["onChange", onChangeRef.current],
      ["onError", onErrorRef.current],
      ["onUpdate", onUpdateRef.current],
    ]);
  });

  useMemo(() => isUpdate && prevId !== id && destroy(id), [
    isUpdate,
    prevId,
    id,
  ]);
  useUnmountEffect(() => {
    turnOffEventListeners(id);
    destroy(id);
  });

  return (
    <div className={classNames(styles.dateTimePicker, className)}>
      {inlineFactory.div({
        id,
        iconFactory,
        autocomplete,
        iconClassName,
        readOnly,
      })}
      <div id={widgetParentId} />
    </div>
  );
};
DateTimePicker.displayName = "DateTimePicker";
export default DateTimePicker;
