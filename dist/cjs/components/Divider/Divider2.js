'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Divider_module = require('./Divider.module.css.js');

function Divider(_ref) {
  let {
    children,
    className,
    light = false,
    orientation = 'center',
    style,
    type = 'horizontal'
  } = _ref;
  let classes = [type === 'horizontal' ? Divider_module["default"]['sbui-divider'] : Divider_module["default"]['sbui-divider-vertical']];
  if (light) classes.push(Divider_module["default"]['sbui-divider--light']);

  if (children) {
    classes.push(Divider_module["default"][`sbui-divider--${orientation}`]);
  } else if (!children && type === 'horizontal') {
    classes.push(Divider_module["default"][`sbui-divider--no-text`]);
  }

  if (className) classes.push(className);
  return jsxRuntime.jsx("div", Object.assign({
    className: classes.join(' '),
    role: "seperator",
    style: style
  }, {
    children: children && jsxRuntime.jsx("span", Object.assign({
      className: Divider_module["default"]['sbui-divider__content']
    }, {
      children: children
    }), void 0)
  }), void 0);
}

exports["default"] = Divider;
