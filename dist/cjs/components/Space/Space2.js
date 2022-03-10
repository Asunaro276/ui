'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Space_module = require('./Space.module.css.js');

function Space(_ref) {
  let {
    direction,
    size = 2,
    className,
    block,
    style,
    minus,
    children
  } = _ref;
  const classes = [];
  classes.push(direction === 'vertical' ? 'sbui-space-col' : 'sbui-space-row');
  classes.push(Space_module["default"]['sbui-' + (minus ? 'minus-' : '') + 'space-' + (direction === 'vertical' ? 'y' : 'x') + '-' + size]);

  if (block) {
    classes.push(Space_module["default"]['sbui-space--block']);
  }

  if (className) {
    classes.push(className);
  }

  return jsxRuntime.jsx("div", Object.assign({
    className: classes.join(' '),
    style: style
  }, {
    children: children
  }), void 0);
}

exports["default"] = Space;
