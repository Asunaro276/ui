'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Title_module = require('./Title.module.css.js');

function Title(_ref) {
  let {
    className,
    level = 1,
    children,
    style
  } = _ref;
  let classes = [Title_module["default"]['sbui-typography-title']];

  if (className) {
    classes.push(className);
  }

  const CustomTag = `h${level}`;
  return jsxRuntime.jsx(CustomTag, Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
}

exports["default"] = Title;
