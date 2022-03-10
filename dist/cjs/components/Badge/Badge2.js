'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Badge_module = require('./Badge.module.css.js');

function Badge(_ref) {
  let {
    color,
    children,
    size,
    dot
  } = _ref;
  let classes = [Badge_module["default"]['sbui-badge']];

  if (color) {
    classes.push(Badge_module["default"][`sbui-badge--${color}`]);
  }

  if (size === 'large') {
    classes.push(Badge_module["default"]['sbui-badge--large']);
  }

  return jsxRuntime.jsxs("span", Object.assign({
    className: classes.join(' ')
  }, {
    children: [dot && jsxRuntime.jsx("svg", Object.assign({
      className: `${Badge_module["default"][`sbui-badge-dot`]} ${Badge_module["default"][`sbui-badge--${color}`]}`,
      fill: "currentColor",
      viewBox: "0 0 8 8"
    }, {
      children: jsxRuntime.jsx("circle", {
        cx: "4",
        cy: "4",
        r: "3"
      }, void 0)
    }), void 0), children]
  }), void 0);
}

exports["default"] = Badge;
