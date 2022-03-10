'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var OverlayContext = require('../../lib/Overlay/OverlayContext.js');
var Typography = require('../Typography/Typography2.js');
var Menu_module = require('./Menu.module.css.js');
var Space = require('../Space/Space2.js');

function Menu(_ref) {
  let {
    children,
    className,
    style
  } = _ref;
  return jsxRuntime.jsx("div", Object.assign({
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
    className: className,
    style: style
  }, {
    children: children
  }), void 0);
}

function Item(_ref2) {
  let {
    children,
    icon,
    active,
    rounded,
    onClick,
    doNotCloseOverlay = false,
    showActiveBar = false,
    style
  } = _ref2;
  let classes = [Menu_module["default"]['sbui-menu__item']];
  if (active) classes.push(Menu_module["default"]['sbui-menu__item--active']);
  if (active && showActiveBar) classes.push(Menu_module["default"]['sbui-menu__item--active--bar']);
  if (rounded) classes.push(Menu_module["default"]['sbui-menu__item--rounded']);
  const itemOnClick = onClick;
  return (// DropdownContext allows for MenuItem to
    // close parent dropdown onClick
    jsxRuntime.jsx(OverlayContext.DropdownContext.Consumer, {
      children: _ref3 => {
        let {
          onClick
        } = _ref3;

        function handleClick(e) {
          if (!doNotCloseOverlay) onClick(e);
          if (itemOnClick) itemOnClick(e);
        }

        return jsxRuntime.jsx("div", Object.assign({
          className: classes.join(' '),
          role: "menuitem",
          onClick: handleClick,
          style: style
        }, {
          children: jsxRuntime.jsx(Typography["default"].Text, {
            children: jsxRuntime.jsxs(Space["default"], {
              children: [icon && icon, jsxRuntime.jsx("span", Object.assign({
                className: Menu_module["default"]['sbui-menu__content']
              }, {
                children: children
              }), void 0)]
            }, void 0)
          }, void 0)
        }), void 0);
      }
    }, void 0)
  );
}
function Group(_ref4) {
  let {
    children,
    icon,
    title
  } = _ref4;
  return jsxRuntime.jsxs("div", Object.assign({
    className: Menu_module["default"]['sbui-menu__group']
  }, {
    children: [jsxRuntime.jsxs(Space["default"], {
      children: [icon && icon, jsxRuntime.jsx(Typography["default"].Text, Object.assign({
        type: "secondary"
      }, {
        children: title
      }), void 0)]
    }, void 0), children]
  }), void 0);
}
function Misc(_ref5) {
  let {
    children
  } = _ref5;
  return jsxRuntime.jsx("div", Object.assign({
    className: Menu_module["default"]['sbui-menu__misc']
  }, {
    children: jsxRuntime.jsx(Typography["default"].Text, {
      children: jsxRuntime.jsx("span", Object.assign({
        className: Menu_module["default"]['sbui-menu__content']
      }, {
        children: children
      }), void 0)
    }, void 0)
  }), void 0);
}
Menu.Item = Item;
Menu.Group = Group;
Menu.Misc = Misc;

exports.Group = Group;
exports.Item = Item;
exports.Misc = Misc;
exports["default"] = Menu;
