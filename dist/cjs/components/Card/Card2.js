'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../Typography/Typography2.js');
var Card_module = require('./Card.module.css.js');

function Card(_ref) {
  let {
    children,
    className,
    cover,
    hoverable,
    style,
    title,
    titleExtra
  } = _ref;
  let classes = [Card_module["default"]['sbui-card']];
  if (hoverable) classes.push(Card_module["default"]['sbui-card--hoverable']);
  if (className) classes.push(className);
  return jsxRuntime.jsxs("div", Object.assign({
    className: classes.join(' '),
    style: style
  }, {
    children: [title && jsxRuntime.jsxs("div", Object.assign({
      className: Card_module["default"]['sbui-card-head']
    }, {
      children: [jsxRuntime.jsx(Typography["default"].Text, Object.assign({
        style: {
          margin: 0
        }
      }, {
        children: title
      }), void 0), jsxRuntime.jsx(Typography["default"].Link, Object.assign({
        style: {
          margin: 0
        }
      }, {
        children: titleExtra
      }), void 0)]
    }), void 0), cover, jsxRuntime.jsx("div", Object.assign({
      className: Card_module["default"]['sbui-card-content']
    }, {
      children: children
    }), void 0)]
  }), void 0);
}

function Meta(_ref2) {
  let {
    title,
    description,
    style,
    className
  } = _ref2;
  return jsxRuntime.jsxs("div", Object.assign({
    style: style,
    className: className
  }, {
    children: [jsxRuntime.jsx(Typography["default"].Title, Object.assign({
      style: {
        margin: '0'
      },
      level: 5
    }, {
      children: title
    }), void 0), jsxRuntime.jsx("div", {
      children: jsxRuntime.jsx(Typography["default"].Text, Object.assign({
        type: "secondary"
      }, {
        children: description
      }), void 0)
    }, void 0)]
  }), void 0);
}

Card.Meta = Meta;

exports["default"] = Card;
