'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Loading_module = require('./Loading.module.css.js');
var IconLoader = require('../Icon/icons/IconLoader/IconLoader2.js');

function Loading(_ref) {
  let {
    children,
    active
  } = _ref;
  let classNames = [Loading_module["default"]['sbui-loading']];

  if (active) {
    classNames.push(Loading_module["default"]['sbui-loading--active']);
  }

  return jsxRuntime.jsxs("div", Object.assign({
    className: classNames.join(' ')
  }, {
    children: [jsxRuntime.jsx("div", Object.assign({
      className: Loading_module["default"]['sbui-loading-content']
    }, {
      children: children
    }), void 0), active && jsxRuntime.jsx(IconLoader["default"], {
      size: "xlarge",
      className: Loading_module["default"]['sbui-loading-spinner']
    }, void 0)]
  }), void 0);
}

exports["default"] = Loading;
