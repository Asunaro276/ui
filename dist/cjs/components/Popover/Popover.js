'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index_module = require('../../node_modules/@radix-ui/react-popover/dist/index.module.js');
var Popover_module = require('./Popover.module.css.js');
var IconX = require('../Icon/icons/IconX/IconX2.js');

function Popover(_ref) {
  let {
    align = 'center',
    ariaLabel,
    arrow = false,
    children,
    className,
    defaultOpen = false,
    modal,
    onOpenChange,
    open,
    overlay,
    portalled,
    showClose,
    side = 'bottom',
    sideOffset = 6,
    style
  } = _ref;
  let classes = [Popover_module["default"]['sbui-popover__content']];

  if (className) {
    classes.push(className);
  }

  return jsxRuntime.jsxs(index_module.Root, Object.assign({
    defaultOpen: defaultOpen,
    modal: modal,
    onOpenChange: onOpenChange,
    open: open
  }, {
    children: [jsxRuntime.jsx(index_module.Trigger, Object.assign({
      className: Popover_module["default"]['sbui-popover__trigger'],
      "aria-label": ariaLabel
    }, {
      children: children
    }), void 0), jsxRuntime.jsxs(index_module.Content, Object.assign({
      sideOffset: sideOffset,
      side: side,
      align: align,
      className: classes.join(' '),
      style: style,
      portalled: portalled
    }, {
      children: [arrow && jsxRuntime.jsx(index_module.Arrow, {
        className: Popover_module["default"]['sbui-popover__arrow'],
        offset: 10
      }, void 0), overlay, showClose && jsxRuntime.jsx(index_module.Close, Object.assign({
        className: Popover_module["default"]['sbui-popover__close']
      }, {
        children: jsxRuntime.jsx(IconX["default"], {
          size: 16
        }, void 0)
      }), void 0)]
    }), void 0)]
  }), void 0);
}

exports["default"] = Popover;
