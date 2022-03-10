'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Link_module = require('./Link.module.css.js');

function Link(_ref) {
  let {
    children,
    target = '_blank',
    href,
    className,
    onClick,
    style
  } = _ref;
  let classes = [Link_module["default"]['sbui-typography'], Link_module["default"]['sbui-typography-link']];

  if (className) {
    classes.push(className);
  }

  return jsxRuntime.jsx("a", Object.assign({
    onClick: onClick,
    className: classes.join(' '),
    href: href,
    target: target,
    rel: "noopener noreferrer",
    style: style
  }, {
    children: children
  }), void 0);
}

exports["default"] = Link;
