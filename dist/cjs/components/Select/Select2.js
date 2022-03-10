'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var FormLayout = require('../../lib/Layout/FormLayout/FormLayout.js');
var InputErrorIcon = require('../../lib/Layout/InputErrorIcon.js');
var InputIconContainer = require('../../lib/Layout/InputIconContainer.js');
var Select_module = require('./Select.module.css.js');

function Select(_a) {
  var {
    autoComplete,
    autofocus,
    children,
    className,
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
    onFocus,
    onBlur,
    placeholder,
    required,
    value,
    style,
    size = 'medium',
    borderless = false
  } = _a,
      props = _tslib.__rest(_a, ["autoComplete", "autofocus", "children", "className", "descriptionText", "disabled", "error", "icon", "id", "inputRef", "label", "afterLabel", "beforeLabel", "labelOptional", "layout", "name", "onChange", "onFocus", "onBlur", "placeholder", "required", "value", "style", "size", "borderless"]);

  let selectClasses = [Select_module["default"]['sbui-select']];
  if (error) selectClasses.push(Select_module["default"]['sbui-select--error']);
  if (icon) selectClasses.push(Select_module["default"]['sbui-select--with-icon']);
  if (size) selectClasses.push(Select_module["default"][`sbui-select--${size}`]);
  if (borderless) selectClasses.push(Select_module["default"][`sbui-select--borderless`]);
  return jsxRuntime.jsx(FormLayout.FormLayout, Object.assign({
    label: label,
    afterLabel: afterLabel,
    beforeLabel: beforeLabel,
    labelOptional: labelOptional,
    layout: layout,
    id: id,
    error: error,
    descriptionText: descriptionText,
    className: className,
    style: style,
    size: size
  }, {
    children: jsxRuntime.jsxs("div", Object.assign({
      className: Select_module["default"]['sbui-select-container']
    }, {
      children: [jsxRuntime.jsx("select", Object.assign({
        id: id,
        name: name,
        autoComplete: autoComplete,
        autoFocus: autofocus,
        className: selectClasses.join(' '),
        onChange: onChange ? event => onChange(event) : undefined,
        onFocus: onFocus ? event => onFocus(event) : undefined,
        onBlur: onBlur ? event => onBlur(event) : undefined,
        ref: inputRef,
        value: value,
        disabled: disabled,
        required: required,
        placeholder: placeholder
      }, props, {
        children: children
      }), void 0), icon && jsxRuntime.jsx(InputIconContainer["default"], {
        icon: icon
      }, void 0), error && jsxRuntime.jsx("div", Object.assign({
        className: "sbui-select-actions-container"
      }, {
        children: error && jsxRuntime.jsx(InputErrorIcon["default"], {
          size: size
        }, void 0)
      }), void 0), jsxRuntime.jsx("span", Object.assign({
        className: Select_module["default"]['sbui-select-chevron-container']
      }, {
        children: jsxRuntime.jsx("svg", Object.assign({
          className: Select_module["default"]['sbui-select-chevron'],
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true"
        }, {
          children: jsxRuntime.jsx("path", {
            fillRule: "evenodd",
            d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
            clipRule: "evenodd"
          }, void 0)
        }), void 0)
      }), void 0)]
    }), void 0)
  }), void 0);
}

function Option(_ref) {
  let {
    value,
    children,
    selected
  } = _ref;
  return jsxRuntime.jsx("option", Object.assign({
    value: value,
    selected: selected
  }, {
    children: children
  }), void 0);
}
function OptGroup(_ref2) {
  let {
    label,
    children
  } = _ref2;
  return jsxRuntime.jsx("optgroup", Object.assign({
    label: label
  }, {
    children: children
  }), void 0);
}
Select.Option = Option;
Select.OptGroup = OptGroup;

exports.OptGroup = OptGroup;
exports.Option = Option;
exports["default"] = Select;
