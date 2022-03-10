'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormLayout = require('../../lib/Layout/FormLayout/FormLayout.js');
var InputErrorIcon = require('../../lib/Layout/InputErrorIcon.js');
var IconChevronDown = require('../Icon/icons/IconChevronDown/IconChevronDown2.js');
var IconChevronUp = require('../Icon/icons/IconChevronUp/IconChevronUp2.js');
var InputIconContainer = require('../../lib/Layout/InputIconContainer.js');
var InputNumber_module = require('./InputNumber.module.css.js');
var Space = require('../Space/Space2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function InputNumber(_ref) {
  let {
    addedInputClasses,
    autoComplete,
    autofocus,
    className,
    defaultValue,
    descriptionText,
    disabled,
    error,
    icon,
    id,
    inputRef,
    label,
    afterLabel,
    beforeLabel,
    labelOptional,
    layout,
    name,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    placeholder,
    value,
    step,
    style,
    size = 'medium',
    min,
    max,
    borderless = false
  } = _ref;
  const inputClasses = [InputNumber_module["default"]['sbui-inputnumber']];
  const iconUpClasses = [InputNumber_module["default"]['sbui-inputnumber-button'], InputNumber_module["default"]['sbui-inputnumber-button-up']];
  const inputRefCurrent = inputRef ? inputRef : /*#__PURE__*/React__default["default"].createRef();
  const iconDownClasses = [InputNumber_module["default"]['sbui-inputnumber-button'], InputNumber_module["default"]['sbui-inputnumber-button-down']];
  const iconNavClasses = [InputNumber_module["default"]['sbui-inputnumber-nav']];
  if (error) inputClasses.push(InputNumber_module["default"]['sbui-inputnumber--error']);
  if (icon) inputClasses.push(InputNumber_module["default"]['sbui-inputnumber--with-icon']);

  if (size) {
    inputClasses.push(InputNumber_module["default"][`sbui-inputnumber--${size}`]);
    iconNavClasses.push(InputNumber_module["default"][`sbui-inputnumber-nav--${size}`]);
  }

  if (borderless) inputClasses.push(InputNumber_module["default"]['sbui-inputnumber--borderless']);

  const onClickChevronUp = () => {
    var _a, _b;

    (_a = inputRefCurrent.current) === null || _a === void 0 ? void 0 : _a.stepUp();

    if (onChange) {
      (_b = inputRefCurrent.current) === null || _b === void 0 ? void 0 : _b.dispatchEvent(new InputEvent('change', {
        view: window,
        bubbles: true,
        cancelable: false
      }));
    }
  };

  const onClickChevronDown = () => {
    var _a, _b;

    (_a = inputRefCurrent.current) === null || _a === void 0 ? void 0 : _a.stepDown();

    if (onChange) {
      (_b = inputRefCurrent.current) === null || _b === void 0 ? void 0 : _b.dispatchEvent(new InputEvent('change', {
        view: window,
        bubbles: true,
        cancelable: false
      }));
    }
  };

  return jsxRuntime.jsx("div", Object.assign({
    className: className
  }, {
    children: jsxRuntime.jsx(FormLayout.FormLayout, Object.assign({
      label: label,
      afterLabel: afterLabel,
      beforeLabel: beforeLabel,
      labelOptional: labelOptional,
      layout: layout,
      id: id,
      error: error,
      descriptionText: descriptionText,
      style: style,
      size: size
    }, {
      children: jsxRuntime.jsxs("div", Object.assign({
        className: InputNumber_module["default"]['sbui-inputnumber-container']
      }, {
        children: [jsxRuntime.jsx("input", {
          autoComplete: autoComplete,
          autoFocus: autofocus,
          defaultValue: defaultValue,
          disabled: disabled,
          id: id,
          name: name,
          onChange: onChange ? event => onChange(event) : undefined,
          onFocus: onFocus ? event => onFocus(event) : undefined,
          onBlur: onBlur ? event => onBlur(event) : undefined,
          onKeyDown: onKeyDown ? event => onKeyDown(event) : undefined,
          placeholder: placeholder,
          ref: inputRefCurrent,
          type: 'number',
          value: value,
          step: step,
          className: inputClasses.join(' ') + addedInputClasses,
          min: min,
          max: max
        }, void 0), jsxRuntime.jsxs("div", Object.assign({
          className: iconNavClasses.join(' ')
        }, {
          children: [jsxRuntime.jsx(IconChevronUp["default"], {
            className: iconUpClasses.join(' '),
            onClick: onClickChevronUp,
            onMouseDown: e => {
              e.preventDefault();
            }
          }, void 0), jsxRuntime.jsx(IconChevronDown["default"], {
            className: iconDownClasses.join(' '),
            onClick: onClickChevronDown,
            onMouseDown: e => {
              e.preventDefault();
            }
          }, void 0)]
        }), void 0), icon && jsxRuntime.jsx(InputIconContainer["default"], {
          icon: icon
        }, void 0), error ? jsxRuntime.jsx(Space["default"], Object.assign({
          className: InputNumber_module["default"]['sbui-inputnumber-actions-container'],
          size: 1
        }, {
          children: error && jsxRuntime.jsx(InputErrorIcon["default"], {
            size: size
          }, void 0)
        }), void 0) : null]
      }), void 0)
    }), void 0)
  }), void 0);
}

exports["default"] = InputNumber;
