'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Text_module = require('./Text.module.css.js');

function Text(_ref) {
  let {
    className,
    children,
    style,
    type,
    disabled,
    mark,
    code,
    keyboard,
    underline,
    strikethrough,
    strong,
    small
  } = _ref;
  let classes = [Text_module["default"]['sbui-typography-text']];

  if (className) {
    classes.push(className);
  }

  if (type) {
    classes.push(Text_module["default"][`sbui-typography-text-${type}`]);
  }

  if (disabled) {
    classes.push(Text_module["default"][`sbui-typography-text-disabled`]);
  }

  if (underline) {
    classes.push(Text_module["default"][`sbui-typography-text-underline`]);
  }

  if (strikethrough) {
    classes.push(Text_module["default"][`sbui-typography-text-strikethrough`]);
  }

  if (small) {
    classes.push(Text_module["default"]['sbui-typography-text-small']);
  }

  if (code) return jsxRuntime.jsx("code", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
  if (mark) return jsxRuntime.jsx("mark", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
  if (keyboard) return jsxRuntime.jsx("kbd", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
  if (strong) return jsxRuntime.jsx("strong", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
  return jsxRuntime.jsx("span", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
}

exports["default"] = Text;
