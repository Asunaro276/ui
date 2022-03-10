'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormLayout = require('../../lib/Layout/FormLayout/FormLayout.js');
var InputErrorIcon = require('../../lib/Layout/InputErrorIcon.js');
var InputIconContainer = require('../../lib/Layout/InputIconContainer.js');
var Input_module = require('./Input.module.css.js');
var IconCopy = require('../Icon/icons/IconCopy/IconCopy2.js');
var Space = require('../Space/Space2.js');
var Button = require('../Button/Button2.js');
var Typography = require('../Typography/Typography2.js');

function Input(_a) {
  var {
    autoComplete,
    autoFocus,
    className,
    copy,
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
    type,
    value,
    style,
    reveal = false,
    actions,
    size = 'medium',
    borderless = false
  } = _a,
      props = _tslib.__rest(_a, ["autoComplete", "autoFocus", "className", "copy", "defaultValue", "descriptionText", "disabled", "error", "icon", "id", "inputRef", "label", "afterLabel", "beforeLabel", "labelOptional", "layout", "name", "onChange", "onBlur", "onFocus", "onKeyDown", "placeholder", "type", "value", "style", "reveal", "actions", "size", "borderless"]);

  const [copyLabel, setCopyLabel] = React.useState('Copy');
  const [hidden, setHidden] = React.useState(true); // if `type` is not assigned, default to text input

  if (!type) {
    type = 'text';
  }

  let inputClasses = [Input_module["default"]['sbui-input']];
  if (error) inputClasses.push(Input_module["default"]['sbui-input--error']);
  if (icon) inputClasses.push(Input_module["default"]['sbui-input--with-icon']);
  if (size) inputClasses.push(Input_module["default"][`sbui-input--${size}`]);
  if (borderless) inputClasses.push(Input_module["default"]['sbui-input--borderless']);

  function onCopy(value) {
    navigator.clipboard.writeText(value).then(function () {
      /* clipboard successfully set */
      setCopyLabel('Copied');
      setTimeout(function () {
        setCopyLabel('Copy');
      }, 3000);
    }, function () {
      /* clipboard write failed */
      setCopyLabel('Failed to copy');
    });
  }

  function onReveal() {
    setHidden(false);
  }

  const hiddenPlaceholder = '**** **** **** ****';
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
        className: Input_module["default"]['sbui-input-container']
      }, {
        children: [jsxRuntime.jsx("input", Object.assign({
          autoComplete: autoComplete,
          autoFocus: autoFocus,
          defaultValue: defaultValue,
          disabled: disabled,
          id: id,
          name: name,
          onChange: onChange ? event => onChange(event) : undefined,
          onFocus: onFocus ? event => onFocus(event) : undefined,
          onBlur: onBlur ? event => onBlur(event) : undefined,
          onKeyDown: onKeyDown ? event => onKeyDown(event) : undefined,
          placeholder: placeholder,
          ref: inputRef,
          type: type,
          value: reveal && hidden ? hiddenPlaceholder : value,
          className: inputClasses.join(' ')
        }, props), void 0), icon && jsxRuntime.jsx(InputIconContainer["default"], {
          icon: icon
        }, void 0), copy || error || actions ? jsxRuntime.jsxs(Space["default"], Object.assign({
          className: Input_module["default"]['sbui-input-actions-container'],
          size: 1
        }, {
          children: [error && jsxRuntime.jsx(InputErrorIcon["default"], {
            size: size
          }, void 0), copy && !(reveal && hidden) ? jsxRuntime.jsx(Button["default"], Object.assign({
            size: "tiny",
            type: "default",
            onClick: () => onCopy(value),
            icon: jsxRuntime.jsx(IconCopy["default"], {}, void 0)
          }, {
            children: copyLabel
          }), void 0) : null, reveal && hidden ? jsxRuntime.jsx(Button["default"], Object.assign({
            size: "tiny",
            type: "default",
            onClick: onReveal
          }, {
            children: "Reveal"
          }), void 0) : null, actions && actions]
        }), void 0) : null]
      }), void 0)
    }), void 0)
  }), void 0);
}

function TextArea(_ref) {
  let {
    autoComplete,
    autofocus,
    className,
    descriptionText,
    disabled,
    error,
    icon,
    id,
    label,
    afterLabel,
    beforeLabel,
    labelOptional,
    layout,
    name,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    placeholder,
    value,
    style,
    rows = 4,
    limit,
    size,
    borderless = false
  } = _ref;
  const [charLength, setCharLength] = React.useState(0);
  let classes = [Input_module["default"]['sbui-input']];
  if (error) classes.push(Input_module["default"]['sbui-input--error']);
  if (icon) classes.push(Input_module["default"]['sbui-input--with-icon']);
  if (size) classes.push(Input_module["default"][`sbui-input--${size}`]);
  if (borderless) classes.push(Input_module["default"]['sbui-input--borderless']);

  function onInputChange(e) {
    setCharLength(e.target.value.length);

    if (onChange) {
      onChange(e);
    }
  }

  return jsxRuntime.jsxs(FormLayout.FormLayout, Object.assign({
    className: className,
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
    children: [jsxRuntime.jsx("textarea", Object.assign({
      autoComplete: autoComplete ? 'on' : 'off',
      autoFocus: autofocus,
      disabled: disabled,
      id: id,
      name: name,
      rows: rows,
      cols: 100,
      placeholder: placeholder,
      onChange: onInputChange,
      onFocus: onFocus ? event => onFocus(event) : undefined,
      onBlur: onBlur ? event => onBlur(event) : undefined,
      onKeyDown: onKeyDown ? event => onKeyDown(event) : undefined,
      value: value,
      className: classes.join(' '),
      maxLength: limit
    }, {
      children: value
    }), void 0), limit && jsxRuntime.jsxs(Typography["default"].Text, Object.assign({
      type: "secondary",
      style: {
        marginTop: '0.5rem',
        display: 'block'
      }
    }, {
      children: [charLength, "/", limit]
    }), void 0)]
  }), void 0);
}

Input.TextArea = TextArea;

exports["default"] = Input;
