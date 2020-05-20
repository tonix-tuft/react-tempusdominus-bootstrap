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
  useCumulativeShallowDiff,
  useUnmountEffect,
  usePrevious,
  useCallbackRef,
  useExtend,
  useShallowEqualMemo,
  useIsUpdate,
} from "react-js-utl/hooks";
import { useLocale } from "react-moment-hooks";
import { updateFactory, initFactory } from "../factories/initUpdateFactory";
import { noIconFactory, yesIconFactory } from "../factories/iconFactory";
import "bootstrap";
import "tempusdominus-bootstrap";
import "moment-timezone";
import styles from "../styles.scss";
import destroy from "../helpers/destroy";
import { yesInlineFactory, noInlineFactory } from "../factories/inlineFactory";
import {
  turnOnEventListeners,
  turnOffEventListeners,
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
  const { inline, locale } = options;
  const isFirstRenderEver = !useIsUpdate();
  const id = useUniqueKey(noIcon);
  const prevId = usePrevious(id);
  const prevLocale = usePrevious(locale);
  const isNewInit = typeof prevId === "undefined" || id !== prevId;
  const localeDidChange = locale !== prevLocale;
  const widgetParentId = useUniqueKey();
  const momentLocaleRef = useRef();
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
      useCurrent:
        typeof options.useCurrent !== "undefined"
          ? options.useCurrent
          : typeof options.viewDate === "undefined" ||
            options.viewDate === false,
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

  const allOptions = options;
  options = useCumulativeShallowDiff(options);
  if (isNewInit) {
    options = allOptions;
  }

  const initUpdateFactory = useFactory(
    () => [[isNewInit, initFactory], updateFactory],
    [isNewInit]
  );

  const iconFactory = useFactory(
    () => [[noIcon, noIconFactory], yesIconFactory],
    [noIcon]
  );

  const inlineFactory = useFactory(
    () => [[inline, yesInlineFactory], noInlineFactory],
    [inline]
  );

  useLocale(locale, {
    callback: momentLocale => {
      momentLocaleRef.current = momentLocale;
      if (!isNewInit) {
        initUpdateFactory.setLocale(momentLocaleRef.current);
      } else {
        initUpdateFactory.setOptions(id)({
          ...options,
          locale: momentLocaleRef.current,
        });
      }
    },
  });

  useEffect(() => {
    if (!isNewInit) {
      initUpdateFactory.setOptions(id)(options);
    } else if (!isFirstRenderEver && !localeDidChange) {
      // Only if the locale didn't change, init the picker
      // (otherwise it will be initialized once the locale gets loaded, cause it changed).
      initUpdateFactory.setOptions(id)(options);
    }
  }, [
    isNewInit,
    isFirstRenderEver,
    localeDidChange,
    initUpdateFactory,
    id,
    options,
  ]);

  useEffect(() => {
    pickerRef && (pickerRef.current = getPicker(id));
  }, [id, pickerRef]);

  useEffect(() => {
    turnOnEventListeners(id, [
      ["onHide", onHideRef.current],
      ["onShow", onShowRef.current],
      ["onChange", onChangeRef.current],
      ["onError", onErrorRef.current],
      ["onUpdate", onUpdateRef.current],
    ]);
  }, [id, onHideRef, onShowRef, onChangeRef, onErrorRef, onUpdateRef]);

  useMemo(() => {
    if (isNewInit && typeof prevId !== "undefined") {
      turnOffEventListeners(prevId);
      destroy(prevId);
    }
  }, [isNewInit, prevId]);

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
