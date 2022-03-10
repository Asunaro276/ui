'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var InputErrorIcon_module = require('./InputErrorIcon.module.css.js');
var IconAlertCircle = require('../../components/Icon/icons/IconAlertCircle/IconAlertCircle2.js');

function InputErrorIcon(_ref) {
  let {
    style,
    size
  } = _ref;
  return jsxRuntime.jsx("div", Object.assign({
    className: InputErrorIcon_module["default"]['sbui-input-error-icon'],
    style: style
  }, {
    children: jsxRuntime.jsx(IconAlertCircle["default"], {
      size: size,
      strokeWidth: 2,
      stroke: '#f56565',
      className: ""
    }, void 0)
  }), void 0);
}

exports["default"] = InputErrorIcon;
