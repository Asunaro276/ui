'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var InputIconContainer_module = require('./InputIconContainer.module.css.js');

function InputIconContainer(_ref) {
  let {
    icon
  } = _ref;
  return jsxRuntime.jsx("div", Object.assign({
    className: InputIconContainer_module["default"]['sbui-input-icon-container']
  }, {
    children: icon
  }), void 0);
}

exports["default"] = InputIconContainer;
